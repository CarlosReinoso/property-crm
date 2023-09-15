import { handlePostgresError } from "@/lib/shiftThroughErrorCodes";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const houseName = searchParams.get("houseName");
  const dateViewed = searchParams.get("dateViewed");

  try {
    if (!houseName || !dateViewed) {
      return NextResponse.json("missing fields");
    }

    await sql`INSERT INTO Leads (Name, DateViewed) VALUES (${houseName}, ${dateViewed});`;
  } catch (error) {
    const message = handlePostgresError(error);
    return NextResponse.json({ message, error }, { status: 500 });
  }

  const leads = await sql`SELECT * FROM Leads;`;
  return NextResponse.json({ leads }, { status: 200 });
}
