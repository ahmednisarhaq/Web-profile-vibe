import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_EMAILS = new Set([
  "ahmed.nisar@ey.com",
  "ahmed.nisar@pk.ey.com",
  "ahmed.nisar@nixorcollege.edu.pk",
]);

export async function POST(request: Request) {
  let email = "";

  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ error: "Enter a valid authorized email address." }, { status: 400 });
  }

  if (!ALLOWED_EMAILS.has(email)) {
    return NextResponse.json({ error: "This email address is not authorized to access the résumé." }, { status: 403 });
  }

  try {
    const resumePath = path.join(process.cwd(), "private", "Ahmed-Nisar-CV.pdf");
    const resume = await readFile(resumePath);

    return new Response(resume, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Ahmed-Nisar-CV.pdf"',
        "Cache-Control": "private, no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "The résumé is temporarily unavailable." }, { status: 500 });
  }
}
