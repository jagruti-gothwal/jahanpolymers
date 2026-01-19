"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Globe, CheckCircle, Factory, ShieldCheck, Leaf } from "lucide-react";
import { IndustriesServed } from "@/components/IndustriesServed";
import { JahanVisitingCard } from "@/components/JahanVisitingCard";


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/project/factory.png"
                        alt="Jahan Polymers Factory"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/20 text-sm font-semibold mb-6 tracking-wide uppercase">
                            Since 2023
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Pioneering Polymer <br /> Excellence
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
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

                            {/* Company Fact Sheet */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-800 mb-4 text-lg border-b pb-2 border-slate-200">Company Highlights</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex flex-col sm:flex-row sm:justify-between text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                        <span className="font-semibold text-slate-800">Legal Status:</span>
                                        <span>Private Limited Company</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                        <span className="font-semibold text-slate-800">CIN:</span>
                                        <span className="font-mono text-xs md:text-sm">U25205RJ2023PTC085885</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                        <span className="font-semibold text-slate-800">Established:</span>
                                        <span>Jan 16, 2023</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between text-slate-600 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                        <span className="font-semibold text-slate-800">Directors:</span>
                                        <span className="text-right">Roshan Kumar Chhajer,<br />Yash Choudhary, Vijeta Choudhary</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-2">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary">₹5-25 Cr</span>
                                    <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Annual Turnover</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary">Jaipur</span>
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
            <div className="py-12 bg-white flex justify-center items-center flex-col">
                <div className="text-center mb-2">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase">Connect With Us</span>
                    <h2 className="text-3xl font-bold text-slate-900 mt-2">Digital Business Card</h2>
                    <p className="text-slate-500 mt-2">Hover to interact with our card</p>
                </div>
                <JahanVisitingCard />
            </div>

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
                            desc="Located in Bagru (Jaipur), our facility utilizes the latest extrusion machinery for consistent thickness and quality control."
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
