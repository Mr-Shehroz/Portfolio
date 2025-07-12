import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    try {
        // Set up your SMTP transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // or your preferred service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_RECEIVER, // your receiving email
            subject: `New Contact Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, error: "Email failed to send" }, { status: 500 });
    }
}
