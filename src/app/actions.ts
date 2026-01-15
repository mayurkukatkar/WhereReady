"use server";

export async function submitLead(formData: {
    name: string;
    email: string;
    whatsapp: string;
    interest: string;
}) {
    console.log("Server Action: Received lead submission", formData);

    try {
        // 1. Google Sheets Integration (Placeholder)
        await addToGoogleSheet(formData);

        // 2. CRM Integration (Placeholder)
        await addToCRM(formData);

        // 3. Send Confirmation Email (Placeholder)
        await sendConfirmationEmail(formData);

        return { success: true, message: "Lead submitted successfully" };
    } catch (error) {
        console.error("Server Action: Failed to submit lead", error);
        return { success: false, message: "Failed to submit lead" };
    }
}

async function addToGoogleSheet(data: any) {
    // TODO: Integrate Google Sheets API
    // e.g. using google-spreadsheet package
    console.log("Saving to Google Sheet...", data);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
}

async function addToCRM(data: any) {
    const crmUrl = process.env.CRM_API_URL;
    const crmKey = process.env.CRM_API_KEY;

    if (!crmUrl) {
        console.warn("CRM_API_URL is not defined. Skipping CRM integration.");
        return;
    }

    console.log("Sending lead to CRM:", crmUrl);

    try {
        const response = await fetch(crmUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${crmKey || ""}`, // Optional security
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`CRM API Error (${response.status}):`, errorText);
            // We do NOT throw here to avoid failing the user's form submission
            // just because the CRM is down/misconfigured.
        } else {
            const result = await response.json();
            console.log("CRM Response:", result);
        }
    } catch (error) {
        console.error("Network error sending to CRM:", error);
    }
}

async function sendConfirmationEmail(data: any) {
    // TODO: Integrate Email Service (Resend/Nodemailer)
    console.log("Sending confirmation email to:", data.email);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
}
