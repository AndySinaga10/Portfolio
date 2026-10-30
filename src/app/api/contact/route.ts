import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email address, and message." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    // Option 1: Web3Forms (Easiest free solution for Gmail forwarding)
    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          message,
          from_name: `${name} (Portfolio Contact)`,
          subject: `Portfolio Message from ${name} (${email})`,
          replyto: email,
        }),
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string } = {};

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("Non-JSON response from Web3Forms:", responseText.slice(0, 300));
        return NextResponse.json(
          { error: "Unexpected response from mail service. Please try again." },
          { status: 502 }
        );
      }

      if (data.success) {
        return NextResponse.json({
          success: true,
          message: "Message sent successfully!",
        });
      } else {
        console.error("Web3Forms error response:", data);
        return NextResponse.json(
          { error: data.message || "Failed to deliver message via Web3Forms." },
          { status: 500 }
        );
      }
    }

    // Option 2: Resend API (Alternative if RESEND_API_KEY is configured)
    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: "andysinagaa@gmail.com",
          reply_to: email,
          subject: `Portfolio Message from ${name}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
              <h2 style="color: #482439;">New Message from Portfolio Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Message:</strong></p>
              <blockquote style="background: #f7f7f9; border-left: 4px solid #482439; padding: 12px 16px; margin: 0; white-space: pre-wrap;">${message}</blockquote>
            </div>
          `,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: "Message sent successfully via Resend!",
        });
      } else {
        console.error("Resend error response:", data);
        return NextResponse.json(
          { error: data.message || "Failed to deliver message via Resend." },
          { status: 500 }
        );
      }
    }

    // If neither key is configured
    return NextResponse.json(
      {
        error:
          "Email service not configured. Please add WEB3FORMS_ACCESS_KEY in .env.local to enable sending directly to andysinagaa@gmail.com.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}

