"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useConsultation } from "@/context/ConsultationContext";
import { submitLead } from "@/app/actions";

type ViewState = "SELECTION" | "FORM" | "SUCCESS";

export function ConsultationModal() {
    const { isOpen, closeModal } = useConsultation();
    const [view, setView] = useState<ViewState>("SELECTION");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        interest: "Website Development",
    });

    const resetModal = () => {
        setView("SELECTION");
        setFormData({
            name: "",
            email: "",
            whatsapp: "",
            interest: "Website Development",
        });
        setIsSubmitting(false);
    };

    const handleClose = () => {
        closeModal();
        // Delay reset to allow exit animation to finish
        setTimeout(resetModal, 300);
    };

    const handleInternational = () => {
        window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com", "_blank");
        handleClose();
    };

    const handleDomestic = () => {
        setView("FORM");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await submitLead(formData);

            if (result.success) {
                console.log("Form Submitted:", formData);
                setView("SUCCESS");
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error("Submission failed", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatsappMessage = `Hi, I'm ${formData.name}. I'm interested in ${formData.interest}. My contact is ${formData.whatsapp}.`;
    const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919270201883"}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {view === "SELECTION" && "Choose Your Location"}
                                    {view === "FORM" && "Get Your Free Consultation"}
                                    {view === "SUCCESS" && "Request Received!"}
                                </h2>
                                <button
                                    onClick={handleClose}
                                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {view === "SELECTION" && (
                                    <div className="flex flex-col gap-4">
                                        <p className="text-gray-600 mb-2">
                                            Please select your location to proceed with the best consultation option for you.
                                        </p>
                                        <button
                                            onClick={handleDomestic}
                                            className="flex items-center justify-between p-4 border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group text-left"
                                        >
                                            <div>
                                                <h3 className="font-semibold text-gray-900 group-hover:text-primary">Indian Client</h3>
                                                <p className="text-sm text-gray-500">For businesses based in India</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                        </button>

                                        <button
                                            onClick={handleInternational}
                                            className="flex items-center justify-between p-4 border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group text-left"
                                        >
                                            <div>
                                                <h3 className="font-semibold text-gray-900 group-hover:text-primary">International Client</h3>
                                                <p className="text-sm text-gray-500">For businesses outside India</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                        </button>
                                    </div>
                                )}

                                {view === "FORM" && (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                            <input
                                                required
                                                type="tel"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                                            <select
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                            >
                                                <option>Website Development</option>
                                                <option>Custom Software</option>
                                                <option>Business Automation</option>
                                                <option>Mobile App Development</option>
                                                <option>Digital Marketing</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
                                            {isSubmitting ? "Submitting..." : "Submit Request"}
                                        </Button>
                                    </form>
                                )}

                                {view === "SUCCESS" && (
                                    <div className="text-center py-4">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
                                        <p className="text-gray-600 mb-8">
                                            We will connect with you shortly. An email confirmation has also been sent to you.
                                        </p>

                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
