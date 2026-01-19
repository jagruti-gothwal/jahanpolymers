"use client";
import React, { useState } from "react";
import { X, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        product_interest: "Polycarbonate Sheet",
        quantity: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send request. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]">
                            {/* Header */}
                            <div className="bg-primary px-6 py-4 flex justify-between items-center text-white shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-24 h-8 bg-white/90 rounded px-2 flex items-center justify-center">
                                        <Image
                                            src="/logo.jpg"
                                            alt="Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h2 className="text-xl font-bold">Request a Quote</h2>
                                </div>
                                <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                {isSubmitted ? (
                                    <div className="text-center py-10 flex flex-col items-center justify-center h-full">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                                        >
                                            <CheckCircle className="w-10 h-10 text-green-600" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                                        <p className="text-slate-500 mb-8">
                                            Thanks for your interest. Our sales team will send you a custom quote shortly.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-slate-700">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-slate-700">Company (Optional)</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                                                    placeholder="Business name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-slate-700">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                                                    placeholder="you@email.com"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-slate-700">Phone</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                                                    placeholder="+91..."
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-slate-700">Product Interest</label>
                                                <select
                                                    name="product_interest"
                                                    value={formData.product_interest}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                                                >
                                                    <option>Polycarbonate Sheet</option>
                                                    <option>Roofing Solutions</option>
                                                    <option>Embossed/Textured</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-slate-700">Est. Quantity</label>
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    value={formData.quantity}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                                                    placeholder="e.g. 50 sheets"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-slate-700">Message / Requirements</label>
                                            <textarea
                                                name="message"
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-accent outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm resize-none"
                                                placeholder="Any specific sizes, colors, or project details..."
                                            ></textarea>
                                        </div>

                                        {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent text-white font-bold py-3.5 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2 shadow-lg shadow-orange-500/20"
                                        >
                                            {isSubmitting ? (
                                                <>Sending Quote... <Loader2 className="w-4 h-4 animate-spin" /></>
                                            ) : (
                                                <>Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
