"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useConsultation } from "@/context/ConsultationContext";

export function Hero() {
    const { openModal } = useConsultation();
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden isolate">
            {/* Background Video - z-0 (Base layer of the section) */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100" // Increased opacity to 100% to ensure it's working
                    poster="/video-poster.jpg"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay for readability - z-0 (On top of video) */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white/70" />
            {/* Simple white overlay at 70% opacity */}

            <Container className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-neutral-100/80 border border-neutral-200 text-xs font-semibold text-neutral-600 mb-6 backdrop-blur-sm">
                        Website & Custom Software Development
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-[1.1]">
                        Digital Solutions for <br className="hidden md:block" />
                        <span className="text-gradient">
                            Growing Businesses
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Websites • Custom Software • Business Automation
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" variant="primary" icon onClick={openModal}>
                            Get Free Consultation
                        </Button>

                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
