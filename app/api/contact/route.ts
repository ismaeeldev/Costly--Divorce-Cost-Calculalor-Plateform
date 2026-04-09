import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { name, email, query } = await req.json();

    if (!name || !email || !query) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    // Prepare HTML for the admin email
    const html = `
<div style="font-family: Inter, sans-serif; background:#f4f4f4; padding:40px; color:#111111;">
  <div style="max-width:600px; margin:auto; background:#ffffff; padding:40px; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
    <h2 style="margin-bottom:24px; font-weight:900; tracking-tight;">New Support Inquiry</h2>
    
    <div style="margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #eeeeee;">
      <p style="margin:0 0 10px 0; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:0.1em; color:#888888;">From</p>
      <p style="margin:0; font-weight:bold; font-size:16px;">${name} (${email})</p>
    </div>

    <div style="margin-bottom:30px;">
      <p style="margin:0 0 10px 0; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:0.1em; color:#888888;">Message</p>
      <p style="margin:0; font-size:15px; line-height:1.6;">${query}</p>
    </div>

    <div style="padding-top:20px; border-top:1px solid #eeeeee; text-align:center;">
      <p style="font-size:10px; color:#aaaaaa; font-weight:900; text-transform:uppercase;">Costly Platform Outreach</p>
    </div>
  </div>
</div>
    `;

    // Send to the admin defined in SMTP_FROM
    await sendEmail({
      to: process.env.SMTP_FROM || "",
      subject: `[Support] ${name} has a query`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
