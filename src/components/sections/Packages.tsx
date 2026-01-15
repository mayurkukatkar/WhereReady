"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

const plans = [
    {
        name: "Digital Presence",
        subtitle: "GET FOUND",
        description: "Perfect for new businesses establishing their brand.",
        price: "Starts at ₹25k",
        features: [
            "Professional Website (5 Pages)",
            "Mobile Responsive Design",
            "Basic SEO Setup",
            "Google Maps Integration",
            "Contact Form & WhatsApp Link",
        ],
        highlight: false,
    },
    {
        name: "Custom Systems",
        subtitle: "GET ORGANIZED",
        description: "Replace chaos with clarity. Your business logic in code.",
        price: "Custom Quote",
        features: [
            "Central Operations Dashboard",
            "Lead & Client Management (CRM)",
            "Inventory / Staff Tracking",
            "Automated Digital Reports",
            "Secure Cloud Database",
            "Admin & Staff Roles",
        ],
        highlight: true,
    },
    {
        name: "Growth Automation",
        subtitle: "GET FREEDOM",
        description: "Full digital transformation. Let the machine do the work.",
        price: "Custom Quote",
        features: [
            "Everything in Custom Systems",
            "AI Chatbots & Agents",
            "Marketing Workflows",
            "Automated Invoicing & Payments",
            "Self-Booking Systems",
            "Priority Support SLA",
        ],
        highlight: false,
    },
];

export function Packages() {
    const { openModal } = useConsultation();
    return (
        <section className="py-24 bg-neutral-50" id="services">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        Simple, Transparent Plans
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Choose the growth path that matches your current stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${plan.highlight
                                ? "bg-white border-accent/20 shadow-2xl scale-110 z-10"
                                : "bg-white/50 border-neutral-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-lg">
                                    <Sparkles className="w-3 h-3 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase block mb-2">{plan.subtitle}</span>
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                                    {plan.description}
                                </p>
                                <div className="text-xl font-semibold text-accent">
                                    {plan.price}
                                </div>
                            </div>

                            <div className="flex-grow mb-8 bg-neutral-50/50 p-4 rounded-xl border border-neutral-100/50">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start text-sm text-neutral-600">
                                            <Check className="w-5 h-5 text-accent mr-3 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                className="w-full"
                                size="lg"
                                variant={plan.highlight ? "primary" : "outline"}
                                onClick={openModal}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
