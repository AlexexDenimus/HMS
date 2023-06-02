import { NextResponse } from "next/server";
import { createUser } from "../../../../prisma/user";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await createUser(email, password);

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
