import { shiftThroughErrorCodes } from "@/lib/shiftThroughErrorCodes";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`Select * from leads
      ;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    const message = shiftThroughErrorCodes(error.code);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
