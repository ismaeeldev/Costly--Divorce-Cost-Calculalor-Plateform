import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// =========================
// GET → Fetch User Addons
// =========================
export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const addons = await prisma.addon.findMany({
            where: {
                userId: session.user.id,
                isActive: true,
            },
        });

        return NextResponse.json(addons);
    } catch (error) {
        console.error("GET ADDONS ERROR:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}

// =========================
// POST → Purchase Addon
// =========================
export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { type } = await req.json();

        if (!type) {
            return NextResponse.json({ error: "Addon type required" }, { status: 400 });
        }

        // Prevent duplicate purchase
        const existing = await prisma.addon.findFirst({
            where: {
                userId: session.user.id,
                type,
                isActive: true,
            },
        });

        if (existing) {
            return NextResponse.json({ message: "Already unlocked" });
        }

        const addon = await prisma.addon.create({
            data: {
                userId: session.user.id,
                type,
                isActive: true,
            },
        });

        return NextResponse.json(addon);
    } catch (error) {
        console.error("POST ADDON ERROR:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}