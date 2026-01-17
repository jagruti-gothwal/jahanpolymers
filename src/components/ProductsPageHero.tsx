"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProductsPageHero() {
    return (
        <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/project/factory.png"
                    alt="Products Hero"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
            </div>
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Our Product Collection
                </motion.h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Browse our extensive collection of premium polymer solutions, categorized for your convenience.
                </p>
            </div>
        </section>
    );
}
