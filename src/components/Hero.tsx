"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Star } from "lucide-react";

export function Hero() {
    return (
        <div className="relative min-h-[90vh] flex flex-col justify-center items-center bg-slate-50 overflow-hidden pt-20">
            {/* Background Video with Light Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full "
                    poster="/project/factory.png" // Fallback image
                >
                    <source src="/products/jahanpoly.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-50/80 to-slate-50/95 opacity-80" />
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-primary font-bold text-sm mb-8 border border-blue-100 uppercase tracking-wider shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        India's Leading Polycarbonate Manufacturer
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                        Strength meets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Clarity</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
                        Premium quality <strong className="text-slate-900">JP JumboLite®</strong> Polycarbonate sheets. <br className="hidden md:block" />
                        Engineered with 100% Virgin Material for unmatched durability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a href="/products" className="px-8 py-3 rounded-full bg-primary text-white font-bold text-base hover:bg-blue-800 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group hover:-translate-y-1">
                            Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/contact" className="px-8 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-md hover:shadow-lg text-base">
                            Get a Quote
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Premium Stats Bar - Clean Light Style */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-xl shadow-slate-200/50">
                    <StatItem
                        icon={<Factory className="w-6 h-6 text-blue-500" />}
                        label="Manufacturing Unit"
                        value="Bagru, Jaipur"
                    />
                    <StatItem
                        icon={<ShieldCheck className="w-6 h-6 text-green-500" />}
                        label="Quality Promise"
                        value="100% Virgin Material"
                    />
                    <StatItem
                        icon={<Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />}
                        label="Client Satisfaction"
                        value="4.9/5 Rating"
                    />
                    <StatItem
                        icon={<CheckCircle2 className="w-6 h-6 text-accent" />}
                        label="Experience"
                        value="Since 2023"
                    />
                </div>
            </motion.div>
        </div>
    );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex flex-col items-center text-center p-2 group">
            <div className="mb-3 p-3 bg-slate-50 rounded-full border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div className="text-lg md:text-xl font-bold text-slate-900 mb-1">{value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{label}</div>
        </div>
    )
}
