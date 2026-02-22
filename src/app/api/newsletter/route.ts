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

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send a confirmation email to the subscriber
    await resend.emails.send({
      from: "Koovis AI <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Koovis AI Newsletter!",
      text: "Thank you for subscribing to the Koovis AI newsletter. You'll receive the latest updates on AI, our products, and industry insights.",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 500 }
    );
  }
}
