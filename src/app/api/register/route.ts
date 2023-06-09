import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user: { email: user.email },
    });
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
