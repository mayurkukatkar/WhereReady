"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Problems() {
    return (
        <section className="py-24 bg-neutral-50 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Content - The Stack Metaphor */}
                    <div className="flex-1 w-full max-w-md relative flex justify-center order-2 lg:order-1">
                        {/* Background Aura */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-red-50 blur-3xl rounded-full -z-10" />

                        <div className="relative w-72 h-96">
                            {/* The Wobbly Stack */}
                            <StackItem text="Unpaid Invoices" color="bg-white" rotate={-4} y={0} z={5} />
                            <StackItem text="Lost Leads" color="bg-red-50" rotate={3} y={-40} z={4} />
                            <StackItem text="Staff Scheduling" color="bg-white" rotate={-2} y={-80} z={3} />
                            <StackItem text="Inventory Mess" color="bg-white" rotate={5} y={-120} z={2} />
                            <StackItem text="1,240 Unread Emails" color="bg-red-100" rotate={-6} y={-160} z={1} />

                            {/* Warning Label */}
                            <motion.div
                                className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-xl rotate-12 text-sm whitespace-nowrap"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                Overloaded!
                            </motion.div>
                        </div>
                    </div>

                    {/* Text Content - The Narrative */}
                    <div className="flex-1 text-center lg:text-left z-10 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-red-500 font-bold tracking-wide uppercase text-sm mb-4 block">
                                The Manual Trap
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
                                Stuck Managing, <br className="hidden lg:block" />
                                <span className="opacity-40">Not Growing?</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                You started your business to build something great, not to drown in paperwork.
                                <br /><br />
                                <strong className="text-neutral-900">The Problem:</strong> Your business runs on your time. If you stop working, the business stops moving.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

function StackItem({ text, color, rotate, y, z }: { text: string; color: string; rotate: number; y: number; z: number }) {
    return (
        <motion.div
            className={`absolute left-0 right-0 h-24 rounded-xl border border-neutral-200 shadow-xl flex items-center justify-center p-4 ${color}`}
            style={{ y, zIndex: z, rotate }}
            initial={{ y: -500, opacity: 0, rotate: 0 }}
            whileInView={{ y: y, opacity: 1, rotate: rotate }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: (5 - z) * 0.15 // Drop from bottom up visual effect
            }}
            animate={{
                rotate: [rotate, rotate - 1, rotate + 1, rotate],
            }}
            // @ts-ignore
            transition={{
                rotate: { repeat: Infinity, duration: 4 + Math.random(), ease: "easeInOut", delay: 1 + Math.random() }
            }}
        >
            <span className="font-semibold text-neutral-700 text-lg">{text}</span>
        </motion.div>
    );
}
