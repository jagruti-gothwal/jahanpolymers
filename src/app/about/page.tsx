"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Globe, CheckCircle, Factory, ShieldCheck, Leaf } from "lucide-react";
import { IndustriesServed } from "@/components/IndustriesServed";


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <Image
                        src="/products/WhatsApp Image 2026-01-16 at 5.02.58 PM (1).jpeg"
                        alt="Jahan Polymers Factory Stock"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 border border-white/20">
                            Since 2023
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Pioneering Polymer <br /> Excellence
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed font-light">
                            Manufacturer of Premium Polycarbonate Sheets under the brand <strong className="text-white font-semibold">JP JumboLite</strong>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-slate-900">About Jahan Polymers</h2>
                            <div className="w-20 h-1.5 bg-accent rounded-full" />

                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    <strong>Jahan Polymers Pvt. Ltd.</strong> is a premier manufacturing company established in 2023, located in the industrial hub of <strong>Jaipur (Rajasthan)</strong>. We specialize in the production of high-quality Polycarbonate   sheets that cater to a diverse range of architectural, industrial, and agricultural needs.
                                </p>
                                <p>
                                    Operating under our flagship brand <strong>JP JumboLite</strong>, we are committed to setting new standards in the industry. Our facility is equipped with state-of-the-art extrusion technology, ensuring that every sheet we produce meets rigorous quality benchmarks.
                                </p>
                                <p className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-primary">
                                    <span className="text-primary font-bold text-lg">“</span>
                                    Our focus is simple: Delivering 100% Virgin Material products that stand the test of time, weather, and impact.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary">2023</span>
                                    <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Established</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary"></span>
                                    <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Factory Location</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <Image
                                src="/products/WhatsApp Image 2026-01-16 at 5.02.57 PM (1).jpeg"
                                alt="Clear Polycarbonate Sheet"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-accent/10 rounded-full text-accent">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">100% Virgin Material</h4>
                                        <p className="text-slate-500 text-sm">We use only the best raw materials (Bayer/Sabic) for superior clarity and strength.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Dark Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why JP JumboLite?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            We don't just manufacture sheets; we engineer durability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Factory className="w-10 h-10 text-blue-400" />}
                            title="Advanced Manufacturing"
                            desc="Located in , our facility utilizes the latest extrusion machinery for consistent thickness and quality control."
                        />
                        <FeatureCard
                            icon={<Leaf className="w-10 h-10 text-green-400" />}
                            title="Eco-Friendly & Safe"
                            desc="Our polycarbonate sheets are energy efficient, recyclable, and provide excellent thermal insulation."
                        />
                        <FeatureCard
                            icon={<Award className="w-10 h-10 text-yellow-400" />}
                            title="Premium Quality"
                            desc="Made from 100% Virgin Material, ensuring no yellowing over time and maximum impact resistance."
                        />
                    </div>
                </div>
            </section>

            {/* Industries Served Section */}
            <IndustriesServed />

            {/* Vision Quote */}
            <section className="py-24 bg-accent/5">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        "To become the global benchmark for high-performance polymer sheets, driving sustainable construction innovative design solutions."
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-12 bg-slate-300" />
                        <span className="text-slate-500 font-semibold tracking-wider text-sm uppercase">Our Vision</span>
                        <div className="h-px w-12 bg-slate-300" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors"
        >
            <div className="mb-6 p-4 bg-slate-700/50 rounded-xl w-fit">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
}
