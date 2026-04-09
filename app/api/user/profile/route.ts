import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name, currentPassword, newPassword } = await req.json();

    // 1. Update Name
    if (name && !currentPassword) {
      const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: { name },
      });
      return NextResponse.json({ message: "Name updated successfully", user: { name: updatedUser.name } });
    }

    // 2. Update Password
    if (currentPassword && newPassword) {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });

      if (!user || !user.password) {
        return new NextResponse("User not found", { status: 404 });
      }

      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
      if (!isPasswordValid) {
        return new NextResponse("Invalid current password", { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { id: session.user.id },
        data: { password: hashedPassword },
      });

      return NextResponse.json({ message: "Password updated successfully" });
    }

    return new NextResponse("Invalid request", { status: 400 });

  } catch (error: any) {
    console.error("PROFILE_UPDATE_ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}
