"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function VisionSection() {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <div className="absolute -left-10 -top-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80"
                                alt="Factory Interior"
                                width={800}
                                height={600}
                                className="object-cover"
                            />
                        </div>
                        {/* Stat Box */}
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary hidden md:block">
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-primary">2023</p>
                                    <p className="text-gray-500 text-sm">Established</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-accent">100%</p>
                                    <p className="text-gray-500 text-sm">Virgin Material</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">About JP JumboLite</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Building a Sustainable Future with Advanced Polymers</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            At Jahan Polymers (Bagru, Jaipur), our vision is to lead the industry through innovation and integrity. We strive to provide eco-friendly, energy-efficient, and durable solutions that empower architects and builders.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Advanced Extrusion Technology",
                                "100% Virgin Raw Materials",
                                "Strict Quality Control",
                                "Dedicated Customer Support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="/about" className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                            Read Our Story
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
