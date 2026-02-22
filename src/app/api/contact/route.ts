import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the site administrator." },
        { status: 503 }
      );
    }

    const { name, email, company, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      budget ? `Budget Range: ${budget}` : null,
      "",
      "Project Details:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: "Koovis AI <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "hello@koovis.ai"],
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      replyTo: email,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
