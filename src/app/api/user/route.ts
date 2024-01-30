import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";

export async function GET() {
  return NextResponse.json({ success: "testing" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, nim, password } = body;

    const existingUserByNim = await db.user.findUnique({
      where: { nim: nim },
    });

    if (existingUserByNim) {
      return NextResponse.json(
        { nim: null, message: "NIM already Exists" },
        { status: 409 }
      );
    }

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { email: null, message: "Email already Exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        nim,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        email: rest,
        message: "Mahasiswa Berhasil Didaftarkan",
      },
      { status: 201 }
    );
  } catch (error) {}
}
