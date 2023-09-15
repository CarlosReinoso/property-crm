import { handlePostgresError } from "@/lib/shiftThroughErrorCodes";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Leads ( Name varchar(255), date_viewed DATE );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    const message = handlePostgresError(error);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
