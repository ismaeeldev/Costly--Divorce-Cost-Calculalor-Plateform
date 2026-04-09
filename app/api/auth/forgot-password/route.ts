import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendSetPasswordEmail } from "@/lib/email"; // Reusing the same template per plan

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Verify user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // We do NOT return a 404 error if user is not found to prevent Email Enumeration attacks.
    // Instead, we just act like we successfully sent the token if valid format.
    if (user) {
      // 2. Generate secure token
      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      // 3. Save to database
      await prisma.user.update({
        where: { id: user.id },
        data: {
          resetToken,
          resetTokenExpiry,
        },
      });

      // 4. Send the Email
      await sendSetPasswordEmail(user.email, resetToken);
    }

    return NextResponse.json({ success: true, message: "If that email exists, we have sent a reset link to it." }, { status: 200 });
  } catch (error) {
    console.error("Forgot Password Error: ", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
