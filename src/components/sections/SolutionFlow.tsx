"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Globe, LayoutDashboard, Cog, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
    {
        icon: Globe,
        step: "01",
        title: "Digital Presence",
        subtitle: "Stop Being Invisible",
        description: "We build a professional website that puts your business on the map. Customers trust what they can see.",
        visual: <WebsiteVisual />
    },
    {
        icon: LayoutDashboard,
        step: "02",
        title: "Custom Software",
        subtitle: "Stop The Chaos",
        description: "Replace messy spreadsheets with custom dashboards. Manage leads, inventory, and staff in one place.",
        visual: <DashboardVisual />
    },
    {
        icon: Cog,
        step: "03",
        title: "Business Automation",
        subtitle: "Get Your Freedom Back",
        description: "We automate the busywork. Invoices send themselves. Appointments book themselves. You just grow.",
        visual: <AutomationVisual />
    },
];

export function SolutionFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-24 bg-white relative" ref={containerRef}>
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-20 z-10 relative">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">The Solution</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        Your Path to <span className="text-accent">Freedom</span>
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Three steps to turn a manual business into a self-driving machine.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line Container */}
                    <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-100 -translate-x-1/2 md:translate-x-[-1px]">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-accent"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {steps.map((item, index) => (
                            <TimelineStep key={item.step} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function TimelineStep({ item, index }: { item: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 md:gap-12",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Visual Side */}
            <div className={cn(
                "flex-1 w-full pl-16 md:pl-0",
                isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
            )}>
                {item.visual}
            </div>

            {/* Center Icon Marker */}
            <div className="absolute left-[2rem] md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-neutral-50 shadow-lg z-10 text-accent font-bold text-sm">
                {item.step}
            </div>

            {/* Text Side */}
            <div className={cn(
                "flex-1 w-full pl-16 md:pl-0",
                isEven ? "md:pl-12 text-left" : "md:pr-12 md:text-right text-left"
            )}>
                <span className="text-accent font-bold uppercase tracking-wider text-xs mb-2 block">{item.subtitle}</span>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

// --- Visual Components ---

function WebsiteVisual() {
    return (
        <div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl group">
            {/* Browser Bar */}
            <div className="h-6 bg-neutral-800 flex items-center px-4 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            {/* Content Content */}
            <div className="p-6">
                <div className="w-3/4 h-24 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-lg mb-4 animate-pulse" />
                <div className="flex gap-4">
                    <div className="w-1/3 h-32 bg-neutral-800 rounded-lg" />
                    <div className="w-1/3 h-32 bg-neutral-800 rounded-lg" />
                    <div className="w-1/3 h-32 bg-neutral-800 rounded-lg" />
                </div>
            </div>
            {/* Floating 'Live' Badge */}
            <div className="absolute top-10 right-4 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                ONLINE
            </div>
        </div>
    );
}

function DashboardVisual() {
    return (
        <div className="relative aspect-video bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-xl p-4">
            <div className="flex gap-4 h-full">
                {/* Sidebar */}
                <div className="w-16 h-full bg-neutral-50 rounded-lg hidden sm:block border border-neutral-100" />
                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div className="flex-1 h-20 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">24 <span className="text-xs ml-1 font-normal text-blue-400">Leads</span></div>
                        <div className="flex-1 h-20 bg-purple-50 rounded-lg border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">$4k <span className="text-xs ml-1 font-normal text-purple-400">Rev</span></div>
                    </div>
                    <div className="flex-1 bg-neutral-50 rounded-lg border border-neutral-100 p-2 space-y-2">
                        <div className="h-8 bg-white rounded border border-neutral-200 w-full" />
                        <div className="h-8 bg-white rounded border border-neutral-200 w-full" />
                        <div className="h-8 bg-white rounded border border-neutral-200 w-full" />
                    </div>
                </div>
            </div>
            {/* Chaos Removed Badge */}
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Clean Data
            </div>
        </div>
    );
}

function AutomationVisual() {
    return (
        <div className="relative aspect-video bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 shadow-inner flex items-center justify-center">
            {/* Connecting Nodes */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex items-center gap-2">
                {/* Trigger */}
                <div className="p-3 bg-white border border-neutral-200 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">New Lead</span>
                    </div>
                </div>
                {/* Arrow */}
                <div className="w-8 h-0.5 bg-neutral-300 relative">
                    <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-neutral-300 rotate-45" />
                </div>
                {/* Action */}
                <div className="p-3 bg-white border border-neutral-200 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">Email</span>
                    </div>
                </div>
                {/* Arrow */}
                <div className="w-8 h-0.5 bg-neutral-300 relative">
                    <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-neutral-300 rotate-45" />
                </div>
                {/* Result */}
                <div className="p-3 bg-white border border-neutral-200 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                </div>
            </div>

            {/* Automation Badge */}
            <motion.div
                className="absolute top-4 left-4 bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                RUNNING...
            </motion.div>
        </div>
    );
}
