"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
    {
        id: 1,
        src: "/products/WhatsApp Image 2026-01-16 at 5.02.54 PM (1).jpeg",
        title: "Architectural Cladding",
        category: "Exterior Design",
    },
    {
        id: 2,
        src: "/products/WhatsApp Image 2026-01-16 at 5.02.55 PM (1).jpeg",
        title: "Greenhouse Glazing",
        category: "Agriculture",
    },
    {
        id: 3,
        src: "/products/WhatsApp Image 2026-01-16 at 5.02.55 PM (2).jpeg",
        title: "Interior Partitions",
        category: "Interior Design",
    },
    {
        id: 4,
        src: "/products/WhatsApp Image 2026-01-16 at 5.02.56 PM (1).jpeg",
        title: "Industrial Roofing",
        category: "Construction",
    },
    {
        id: 5,
        src: "/products/WhatsApp Image 2026-01-16 at 5.02.57 PM (1).jpeg",
        title: "Skylight Domes",
        category: "Natural Lighting",
    },
    {
        id: 6,
        src: "/products/WhatsApp Image 2026-01-16 at 5.02.58 PM (1).jpeg",
        title: "Security Glazing",
        category: "Safety & Security",
    },
];

export function GallerySection() {
    return (
        <section className="py-24 bg-neutral-50" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-accent font-bold tracking-wider uppercase text-sm"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mt-2"
                        >
                            Shaping the Future <br />of Construction
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <a href="/products" className="group flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors">
                            View All Products <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white h-[400px]"
                        >
                            {/* Image */}
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-accent text-sm font-bold tracking-wider uppercase mb-2 block">
                                        {item.category}
                                    </span>
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-2xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white border border-white/30">
                                            <Plus className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
