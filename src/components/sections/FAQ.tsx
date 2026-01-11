"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "I'm not 'tech-savvy'. Will I be able to run this?",
        answer: "That is exactly why you need custom software. We build it to match your brain and your workflow, not a generic complex template. If you can use a smartphone, you can run the systems we build.",
    },
    {
        question: "Will switching to a new system disrupt my business?",
        answer: "No. We build your new 'digital engine' alongside your current one. We test it thoroughly, and only switch over when it's perfect. Zero downtime, zero chaos.",
    },
    {
        question: "Why custom software? Monthly subscriptions seem cheaper.",
        answer: "Think of it as Renting vs. Buying. Subscriptions fees go up forever and you don't own anything. Custom software is an asset you own that pays for itself by eliminating manual labor costs forever.",
    },
    {
        question: "What if my business grows or changes?",
        answer: "You aren't locked in. Because we build on a flexible custom foundation, we can add new features (like a new service line or product) instantly. Your software grows with you.",
    },
    {
        question: "How fast will I see results?",
        answer: "We focus on 'Speed to Value'. We identify your biggest bottleneck (e.g. invoicing) and automate that in the first 2 weeks, so you feel the relief immediately while we build the rest.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
                        Common Questions
                    </h2>
                    <p className="text-neutral-600">
                        Everything you need to know about working with us.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-neutral-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
                            >
                                <span className="font-medium text-foreground pr-8">{faq.question}</span>
                                <Plus
                                    className={cn(
                                        "w-5 h-5 text-neutral-400 transition-transform duration-200",
                                        openIndex === index ? "rotate-45" : "rotate-0"
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="p-5 pt-0 text-neutral-600 text-sm leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
