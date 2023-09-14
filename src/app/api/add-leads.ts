import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const houseName = searchParams.get('houseName');
  const dateViewed = searchParams.get('dateViewed');
 
  try {
    if (!houseName || !dateViewed) throw new Error('name and date viewed required');
    await sql`INSERT INTO Leads (Name, DateViewed) VALUES (${houseName}, ${dateViewed});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Leads;`;
  return NextResponse.json({ pets }, { status: 200 });
}