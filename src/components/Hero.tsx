"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <div className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-44">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 clip-path-slant hidden lg:block" />
            <div className="absolute -left-20 top-20 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-50" />
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-6 border border-blue-100">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Premium Polycarbonate Sheets - Est. 2023
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                            The Standard of <br />
                            <span className="text-primary">Clarity</span> & Strength <br />
                            <span className="text-accent">JP JumboLite ®</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Discover high-quality polycarbonate sheets made from 100% Virgin Material.
                            Engineered for durability, transparency, and architectural excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="/products" className="px-8 py-4 rounded-lg bg-primary text-white font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group">
                                Explore Our Range <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/contact" className="px-8 py-4 rounded-lg border-2 border-gray-200 text-gray-700 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center bg-white">
                                Contact Factory
                            </a>
                        </div>

                        <div className="flex gap-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> Virgin Material
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> High Impact
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> UV Stabilized
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent rounded-[2rem] transform rotate-3 opacity-5"></div>
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/products/b9ed1bfd327bc45bdfed0e795f195ffa.jpg"
                                alt="JP JumboLite Polycarbonate Roll"
                                fill
                                className="object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
                                <p className="text-primary font-bold text-lg">JP JumboLite®</p>
                                <p className="text-gray-500 text-sm">Best Class Quality</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-0.5 h-12 bg-gray-200 overflow-hidden">
                    <div className="w-full h-1/2 bg-primary animate-shimmer" />
                </div>
            </motion.div>
        </div>
    );
}
