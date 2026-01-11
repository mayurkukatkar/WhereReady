"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    children: React.ReactNode;
    icon?: boolean; // Whether to show the arrow icon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, icon, ...props }, ref) => {
        const variants = {
            primary: "bg-gradient-to-r from-brand-dark to-accent text-white hover:opacity-90 border border-transparent shadow-sm",
            secondary: "bg-white text-secondary-foreground hover:bg-neutral-50 border border-neutral-200 shadow-sm",
            outline: "bg-transparent text-primary border border-neutral-200 hover:border-brand-light/50 hover:text-brand-dark",
            ghost: "bg-transparent text-primary hover:bg-neutral-100 border border-transparent",
            link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
            icon: "h-10 w-10 p-0 flex items-center justify-center",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: variant === "link" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && (
                    <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
