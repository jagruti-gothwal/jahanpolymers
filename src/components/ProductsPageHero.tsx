"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProductsPageHero() {
    return (
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/products/WhatsApp Image 2026-01-16 at 5.02.53 PM (1).jpeg"
                    alt="Products Hero"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
            </div>
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                    Our Product Collection
                </motion.h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                    Browse our extensive collection of premium polymer solutions, categorized for your convenience.
                </p>
            </div>
        </section>
    );
}
