"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Maximize } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Solid Compact Sheets",
        image: "/products/WhatsApp Image 2026-01-16 at 5.02.53 PM (2).jpeg",
        desc: "High-impact transparent and coloured compact sheets.",
        link: "/products"
    },
    {
        title: "Diamond & Textured",
        image: "/products/WhatsApp Image 2026-01-16 at 5.02.53 PM.jpeg",
        desc: "Decorative diamond and prismatic textures for light diffusion.",
        link: "/products"
    },
    {
        title: "Embossed & Roofing",
        image: "/products/WhatsApp Image 2026-01-16 at 5.02.54 PM.jpeg",
        desc: "Durable embossed sheets and roofing profiles for industrial use.",
        link: "/products"
    }
];

export function ProductsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Products</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Engineered for Excellence</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive range of high-performance thermoplastic sheets tailored for durability and aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                                <p className="text-gray-600 mb-6">{cat.desc}</p>
                                <Link href={cat.link} className="inline-flex items-center text-accent font-semibold hover:text-orange-600">
                                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
