import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 });
    }

    // 1. Verify token exists and is valid
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(), // must be greater than now
        },
      },
    });

    if (!user) {
      // Intentionally vague to hide context natively
      return NextResponse.json({ error: "Invalid or expired token. Please request a new link." }, { status: 400 });
    }

    // 2. Hash new password safely
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Update user and sever the token ties
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return NextResponse.json({ success: true, message: "Password updated successfully" }, { status: 200 });

  } catch (error) {
    console.error("Reset Password Error: ", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
