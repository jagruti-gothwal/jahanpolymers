"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Sun, Eye, Zap, Layers, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    const features = [
        {
            title: "Unbreakable Strength",
            description: "Virtually unbreakable sheets made from 100% Virgin Material for maximum durability.",
            icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
            className: "md:col-span-2",
        },
        {
            title: "UV Protection",
            description: "Co-extruded UV layer blocks 99.9% harmful rays, preventing yellowing.",
            icon: <Sun className="w-8 h-8 text-yellow-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Crystal Clear",
            description: "Up to 92% light transmission, better than glass.",
            icon: <Eye className="w-8 h-8 text-blue-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Thermal Insulation",
            description: "Excellent thermal efficiency reducing energy costs.",
            icon: <Zap className="w-8 h-8 text-orange-400" />,
            className: "md:col-span-2",
        },
        {
            title: "Multi-layer Support",
            description: "Available in Multiwall, Solid, and Textured variants.",
            icon: <Layers className="w-8 h-8 text-purple-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Weather Resistant",
            description: "Withstands extreme temperatures and heavy rain.",
            icon: <Droplets className="w-8 h-8 text-cyan-400" />,
            className: "md:col-span-1",
        },
    ];

    return (
        <section id="features" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                        Why Choose Jahan Polymers?
                    </h2>
                    <p className="mt-4 text-neutral-400 text-lg">
                        Our sheets are engineered for performance and durability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                                "p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group",
                                feature.className
                            )}
                        >
                            <div className="mb-4 p-3 bg-neutral-800 w-fit rounded-lg group-hover:bg-neutral-700 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-neutral-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
