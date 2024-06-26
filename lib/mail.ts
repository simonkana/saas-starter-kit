import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const appUrl = process.env.APP_URL || "http://localhost:3000";

export const sendVerificationEmail = async (email: string, token: string) => {
    const verifyLink = `${appUrl}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: `${process.env.MAIL_SENDER_NAME} <${process.env.MAIL_SENDER_EMAIL}>`,
        to: email,
        subject: "Verify your email",
        html: `<p>Click <a href="${verifyLink}">here</a> to verify your email.</p>`
    });
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${appUrl}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: `${process.env.MAIL_SENDER_NAME} <${process.env.MAIL_SENDER_EMAIL}>`,
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
    });
}