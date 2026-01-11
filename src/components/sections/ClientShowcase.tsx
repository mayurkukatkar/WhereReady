"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Store, CalendarClock, Rocket, ArrowRight } from "lucide-react";

const verticals = [
    {
        icon: CalendarClock,
        title: "Service Businesses",
        audience: "Agencies, Consultants, Salons",
        problem: "Stuck in Scheduling Hell?",
        solution: "We build automated booking systems so your calendar fills itself.",
        color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
        icon: Store,
        title: "Retail & Local",
        audience: "Shops, Restaurants, E-com",
        problem: "Buried in Inventory?",
        solution: "We create digital storefronts that sync with your real inventory.",
        color: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
        icon: Rocket,
        title: "Founders & Startups",
        audience: "Solo Entrepreneurs",
        problem: "Great Idea, No Dev Team?",
        solution: "We build your MVP in weeks, not months. Launch fast.",
        color: "bg-purple-50 text-purple-600 border-purple-100",
    },
];

export function ClientShowcase() {
    return (
        <section className="py-24 bg-white border-b border-neutral-100 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-neutral-100/50 -z-10" />

            <Container>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-neutral-500 font-bold tracking-wide uppercase text-sm mb-2 block">
                        Who Is This For?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        We Build Digital Freedom For...
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {verticals.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group relative bg-white p-8 rounded-3xl border border-neutral-150 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color} border`}>
                                <item.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                            <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-6">{item.audience}</div>

                            <div className="space-y-3">
                                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-sm font-medium text-neutral-600">
                                    <span className="text-red-500 mr-2">Problem:</span>
                                    {item.problem}
                                </div>
                                <div className="p-3 bg-white rounded-xl text-sm leading-relaxed text-neutral-600">
                                    <span className="text-green-600 font-bold mr-1">Fix:</span>
                                    {item.solution}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
