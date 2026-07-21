import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required fields." },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            // If RESEND_API_KEY is not defined in env, log it on server, and return detailed notice
            console.warn("RESEND_API_KEY environment variable is not defined.");
            return NextResponse.json(
                {
                    success: false,
                    warning: "API Key Missing",
                    message: "The Resend API key is missing. Please set the RESEND_API_KEY environment variable.",
                },
                { status: 200 }
            );
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "regondashiva2414@gmail.com",
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px; border-radius: 12px; background-color: #fafafa;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 100px;">Sender Name:</td>
              <td style="padding: 8px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">E-mail:</td>
              <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 10px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569;">Message:</p>
            <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 25px; font-style: italic;">
            Received from portfolio website visitor.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend service error details:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err: unknown) {
        console.error("Server contact route exception:", err);
        const errMsg = err instanceof Error ? err.message : "Internal server error";
        return NextResponse.json(
            { error: errMsg },
            { status: 500 }
        );
    }
}
