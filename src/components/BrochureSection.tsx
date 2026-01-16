"use client";
import React from "react";
import { Download, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function BrochureSection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text/Quote Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Quote className="w-12 h-12 text-accent mb-6 opacity-80" />
                        <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-6 italic font-serif">
                            &quot;Quality is not an act, it is a habit. At Jahan Polymers, we don&apos;t just manufacture sheets; we engineer trust and clarity for generations to come.&quot;
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-accent rounded-full" />
                            <p className="font-bold text-lg tracking-wider uppercase text-slate-400">Jahan Polymers Management</p>
                        </div>
                    </motion.div>

                    {/* Download Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Download Our Catalog</h3>
                        <p className="text-slate-300 mb-8 max-w-md">
                            Get detailed specifications, color options, and technical data for our complete range of JP JumboLite® Polycarbonate Sheets.
                        </p>
                        <a
                            href="/products/Brochure.pdf"
                            download="Jahan_Polymers_Brochure.pdf"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                Download Brochure
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <p className="mt-4 text-xs text-slate-500">PDF Format • 3.5 MB</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
