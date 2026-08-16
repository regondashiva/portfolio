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

        const targetEmail = process.env.CONTACT_EMAIL || "regondashiva65@gmail.com";
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Resend API key is missing. Please check .env.local" },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: targetEmail,
            subject: `Portfolio Message from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e5e4; border-radius: 16px; background-color: #fafaf9;">
                    <h2 style="color: #1c1917; border-bottom: 2px solid #78716c; padding-bottom: 12px; margin-top: 0; font-size: 20px;">New Portfolio Contact Inquiry</h2>
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #78716c; width: 120px; font-size: 13px;">Sender Name:</td>
                            <td style="padding: 8px 0; color: #1c1917; font-weight: 600; font-size: 14px;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #78716c; font-size: 13px;">Email Address:</td>
                            <td style="padding: 8px 0; color: #1c1917; font-size: 14px;">
                                <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 500;">${email}</a>
                            </td>
                        </tr>
                    </table>
                    <div style="background-color: #ffffff; padding: 18px; border-radius: 12px; border: 1px solid #e7e5e4; margin-top: 12px;">
                        <p style="margin: 0 0 8px 0; font-weight: bold; color: #78716c; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Message:</p>
                        <p style="margin: 0; color: #292524; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
                    </div>
                    <div style="margin-top: 20px; padding: 12px; background-color: #f5f5f4; border-radius: 8px; font-size: 12px; color: #57534e; text-align: center;">
                        Click <strong>Reply</strong> in your email client to respond directly to <strong>${email}</strong>.
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend delivery error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            provider: "resend",
            message: "Email delivered to your inbox successfully!",
            data,
        });

    } catch (err: unknown) {
        console.error("Server contact route exception:", err);
        const errMsg = err instanceof Error ? err.message : "Internal server error";
        return NextResponse.json(
            { error: errMsg },
            { status: 500 }
        );
    }
}
