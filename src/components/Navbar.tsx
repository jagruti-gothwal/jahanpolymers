"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { QuoteModal } from "@/components/QuoteModal";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Auto-open quote modal after 5 seconds
        const timer = setTimeout(() => {
            const hasSeenQuote = sessionStorage.getItem("hasSeenQuote");
            if (!hasSeenQuote) {
                setIsQuoteOpen(true);
                sessionStorage.setItem("hasSeenQuote", "true");
            }
        }, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 inset-x-0 z-50">
                {/* Top Bar */}
                <div className="bg-primary text-white py-2 hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
                        <div className="flex space-x-6">
                            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91 98765 43210</span>
                            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> Jahanpolimars88@gmail.com</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Jahan-Polymers/61561305820022/#" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/jp_jumbolite" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Nav */}
                <nav className={cn(
                    "bg-white transition-all duration-300 border-b border-gray-100",
                    scrolled ? "shadow-md py-1" : "py-2"
                )}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <div className="relative w-56 h-14 sm:w-72 sm:h-20 md:w-80 md:h-20 lg:w-96 lg:h-24">
                                        <Image
                                            src="/logo.jpg"
                                            alt="Jahan Polymers Logo"
                                            fill
                                            className="object-contain object-left"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden md:flex items-center space-x-8">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About Us</NavLink>
                                <NavLink href="/products">Products</NavLink>
                                <NavLink href="/projects">Projects</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                                <button
                                    onClick={() => setIsQuoteOpen(true)}
                                    className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Get a Quote
                                </button>
                            </div>

                            {/* Mobile Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-700 hover:text-primary focus:outline-none p-2"
                                >
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-inner"
                            >
                                <div className="px-4 pt-2 pb-6 space-y-2">
                                    <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                                    <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
                                    <MobileNavLink href="/products" onClick={() => setIsOpen(false)}>Products</MobileNavLink>
                                    <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
                                    <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                                    <button
                                        onClick={() => { setIsOpen(false); setIsQuoteOpen(true); }}
                                        className="block w-full text-center bg-accent text-white px-4 py-3 rounded-lg font-semibold mt-4"
                                    >
                                        Get Quote
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>

            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "font-medium transition-colors relative group py-2",
                isActive ? "text-accent font-bold" : "text-gray-600 hover:text-primary"
            )}
        >
            {children}
            <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full"
            )} />
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "block px-3 py-3 text-lg font-medium rounded-lg transition-colors",
                isActive ? "text-accent bg-orange-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
        >
            {children}
        </Link>
    );
}
