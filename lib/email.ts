import nodemailer from "nodemailer";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

// Fallback utility for local development if no SMTP vars exist
const isLocalMode = !process.env.SMTP_HOST || process.env.NODE_ENV !== "production";

let transporter: nodemailer.Transporter | null = null;

if (process.env.SMTP_HOST) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      // Do not fail on invalid certs - common for some SMTP relays
      rejectUnauthorized: false,
    },
    // Serverless optimization: connection timeout
    connectionTimeout: 10000, 
    greetingTimeout: 10000,
  });
}

export async function sendEmail({ to, subject, html }: EmailPayload) {
  if (transporter) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject,
        html,
      });
      console.log(`Email sent successfully to ${to}`);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  } else if (isLocalMode) {
    console.log("\n=======================================================");
    console.log(`[LOCAL DEV MOCK] EMAIL INTERCEPTED`);
    console.log(`TO: ${to}`);
    console.log(`SUBJECT: ${subject}`);
    console.log(`Extracting Link for you to click manually:`);
    // Extract the reset link from the HTML using a simple regex mapping for ease of life
    const linkMatch = html.match(/href="([^"]+)"/);
    if (linkMatch && linkMatch[1]) {
      console.log(`🔗 CLICK HERE: ${linkMatch[1]}`);
    } else {
      console.log(`(Email sent successfully without standard href)`);
    }
    console.log("=======================================================\n");
  } else {
    console.error("Production email failed because no SMTP configuration exists.");
  }
}

export async function sendSetPasswordEmail(email: string, token: string) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const resetLink = `${appUrl}/reset-password?token=${token}`;

  const html = `
<div style="font-family: Inter, sans-serif; background:#111111; padding:40px; color:#ffffff;">
  <div style="max-width:500px; margin:auto; background:#ffffff; color:#111111; padding:30px; border-radius:12px;">
    
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="${appUrl}/costly-logo.png" alt="Costly Logo" style="height: 40px; width: auto;" />
    </div>
     
    <h2 style="margin-bottom:10px; text-align: center;">Set Your Password</h2>
    
    <p style="color:#444444; font-size:16px; text-align: center;">
      Your account has been successfully created. Please set your secure password below to access your dashboard.
    </p>

    <a href="${resetLink}" 
       style="display:block; margin:30px 0; background:#111111; color:#ffffff; padding:14px; text-align:center; border-radius:8px; text-decoration:none; font-weight:bold;">
       Set Password
    </a>

    <p style="font-size:12px; color:#777777; text-align: center;">
      This secure link expires in exactly 1 hour.
    </p>

  </div>
</div>
  `;

  await sendEmail({
    to: email,
    subject: "Set Your Password – Costly",
    html,
  });
}
