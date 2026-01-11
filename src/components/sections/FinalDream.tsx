"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalDream() {
    return (
        <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl opacity-30 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl opacity-30 pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                        Ready to Break the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                            Manual Trap?
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        The choice is simple: Stay stuck in the chaos, or build the system that <span className="text-white font-medium">frees you</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" variant="primary" className="min-w-[200px] text-lg hover:scale-105 transition-transform shadow-xl shadow-accent/20">
                            Get Your Free Strategy Call
                        </Button>
                        <Button size="lg" variant="outline" className="min-w-[200px] text-lg text-white border-neutral-700 hover:bg-white/5 hover:border-white transition-colors">
                            See Our Work
                        </Button>
                    </div>

                    <p className="mt-8 text-sm text-neutral-500">
                        No commitment. Just a clear plan for your growth.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
