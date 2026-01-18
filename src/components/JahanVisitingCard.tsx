"use client";
import React from "react";
import { Phone, Mail, MapPin, Globe, QrCode } from "lucide-react";
import Image from "next/image";

export function JahanVisitingCard() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-10">
            {/* Card Container with Perspective */}
            <div className="group h-64 w-[28rem] [perspective:1000px] cursor-pointer">

                {/* Flipping Inner Container */}
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* ==================== FRONT SIDE (Contact Details) ==================== */}
                    <div className="absolute inset-0 h-full w-full rounded-2xl shadow-xl [backface-visibility:hidden]">
                        {/* Background */}
                        <div className="absolute inset-0 bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                            {/* Abstract Poly/Texture Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-90"></div>
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/2 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                        </div>

                        {/* Front Content (Layout based on reference) */}
                        <div className="relative h-full w-full p-8 z-10 flex flex-col justify-between text-white">

                            <div className="flex justify-between items-start">
                                {/* Name & Title (Left Top) */}
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight uppercase">Roshan Kumar Chhajer</h2>
                                    <p className="text-xs text-accent font-bold tracking-[0.2em] mt-1 uppercase">Director</p>
                                </div>
                                {/* Small Brand Mark (Right Top) */}
                                <div className="opacity-50">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">JP</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mt-4">
                                {/* QR Code (Left Bottom) */}
                                <div className="flex flex-col gap-2">
                                    <div className="bg-white p-1 rounded-lg w-fit h-fit shadow-md">
                                        <Image
                                            src="/contact_qr.png"
                                            alt="Scan QR Code"
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <span className="text-[9px] text-slate-400 uppercase tracking-wider">Scan to Save</span>
                                </div>

                                {/* Contact List (Right Bottom) */}
                                <div className="flex flex-col gap-2.5 text-right items-end">
                                    <div className="flex items-center gap-3 justify-end text-sm text-slate-300">
                                        <span>+91 99292 88822</span>
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <Phone className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 justify-end text-sm text-slate-300">
                                        <span>jahanpolimars88@gmail.com</span>
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <Mail className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 justify-end text-sm text-slate-300">
                                        <span>Jaipur, Rajasthan</span>
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <MapPin className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 justify-end text-xs text-accent mt-1">
                                        <a href="https://jahanpolymers.com" className="hover:underline tracking-wide uppercase font-semibold">www.jahanpolymers.com</a>
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <Globe className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================== BACK SIDE (Logo) ==================== */}
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-white shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-slate-200 flex flex-col items-center justify-center relative">

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03]"
                            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        {/* Logo Image */}
                        <div className="relative w-40 h-40 mb-4">
                            <Image
                                src="/logo.jpg"
                                alt="Jahan Polymers Logo"
                                fill
                                className="object-contain" // Use contain to show full logo
                            />
                        </div>

                        <div className="text-center z-10">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Jahan Polymers</h2>
                            <p className="text-sm text-slate-500 font-medium tracking-[0.2em] uppercase mt-2">Private Limited</p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                    </div>

                </div>
            </div>

            <p className="text-slate-400 text-sm animate-pulse font-medium">Hover to view Brand Logo</p>
        </div>
    );
}
