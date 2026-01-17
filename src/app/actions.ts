"use server";

import { Resend } from "resend";


// const resend = new Resend(process.env.RESEND_API_KEY); // Moved inside function


export async function submitLead(formData: {
    name: string;
    email: string;
    whatsapp: string;
    interest: string;
}) {
    console.log("Server Action: Received lead submission", formData);


    try {
        // Send Notification Email to Business Owner
        await sendNotificationEmail(formData);

        return { success: true, message: "Lead submitted successfully" };
    } catch (error) {
        console.error("Server Action: Failed to submit lead", error);
        return { success: false, message: "Failed to submit lead" };
    }
}

async function sendNotificationEmail(data: any) {
    if (!process.env.RESEND_API_KEY) {
        console.warn("Missing RESEND_API_KEY. Skipping email.");
        return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";

    try {
        const { data: emailData, error } = await resend.emails.send({
            from: "WhereReady Leads <onboarding@resend.dev>", // Default Resend sender for testing
            to: [contactEmail],
            subject: `New Lead: ${data.name} - ${data.interest}`,
            html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
        <p><strong>Interest:</strong> ${data.interest}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            throw error;
        }

        console.log("Email sent successfully:", emailData);
    } catch (error) {
        console.error("Failed to send email:", error);
        // We throw so the main handler knows it failed, though we might not want to fail the user request if just email fails.
        // For now, let's treat email failure as a critical error for this action.
    }
}

