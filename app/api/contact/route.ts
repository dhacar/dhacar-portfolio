import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_TO_EMAIL || "ibnudhacar1@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown) {
  return String(value ?? "").trim().slice(0, 3000);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = sanitize(payload.name);
    const email = sanitize(payload.email);
    const project = sanitize(payload.project || "Portfolio inquiry");
    const message = sanitize(payload.message);

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProject = escapeHtml(project);
    const safeMessage = escapeHtml(message);

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Add RESEND_API_KEY to enable contact form delivery.",
          mailto: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            `Portfolio inquiry from ${name}`
          )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\nMessage:\n${message}`
          )}`
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Dhacar Portfolio <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project: ${project}`,
          "",
          "Message:",
          message
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
            <h2>New portfolio inquiry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Project:</strong> ${safeProject}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage.replace(/\n/g, "<br />")}</p>
          </div>
        `
      })
    });

    if (!response.ok) {
      const details = await response.text();
      return NextResponse.json(
        { error: "Email service rejected the message.", details },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending the message." },
      { status: 500 }
    );
  }
}
