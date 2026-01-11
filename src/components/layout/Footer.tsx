import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-100 py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo.png"
                                alt="WhereReady Logo"
                                width={150}
                                height={40}
                                className="h-8 w-auto object-contain opacity-90"
                            />
                        </Link>
                        <p className="text-sm text-neutral-500 max-w-xs mb-6">
                            Helping startups and businesses build technology that drives growth.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-neutral-900">Services</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="#services" className="hover:text-accent">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-accent">Custom Software</Link></li>
                            <li><Link href="#services" className="hover:text-accent">Business Automation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-neutral-900">Company</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="#" className="hover:text-accent">About Us</Link></li>
                            <li><Link href="#" className="hover:text-accent">Work</Link></li>
                            <li><Link href="#" className="hover:text-accent">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-neutral-900">Contact</h4>
                        <ul className="space-y-3 text-sm text-neutral-600">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-accent" />
                                <a href="mailto:info@whereready.com" className="hover:text-accent">info@whereready.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-accent" />
                                <a href="tel:+919970601883" className="hover:text-accent">+91 99706 01883</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-500">
                        © {new Date().getFullYear()} WhereReady. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/company/whereready" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/whereready_/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/WhereReady" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors" aria-label="X (Twitter)">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
