"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, Clock, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
    // State management for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initial form data
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        project_type: "Industrial Roofing",
        message: ""
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle AJAX form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/Jahanpolimars88@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New Inquiry from Website!",
                    _template: "table"
                })
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setIsSubmitted(true);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
            {/* Header Section */}
            <section className="bg-white border-b border-slate-100 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-50 z-0">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute -left-20 bottom-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Let's Build Something <br /><span className="text-accent">Durable.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            Whether you need technical specifications, a quote for a bulk order, or just advice on the right sheet for your project — we're here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <ContactCard
                        icon={<Mail className="w-6 h-6 text-white" />}
                        title="Sales Inquiry"
                        detail="Jahanpolimars88@gmail.com"
                        subDetail="For quotes & product info"
                        color="bg-accent"
                    />
                    <ContactCard
                        icon={<MapPin className="w-6 h-6 text-white" />}
                        title="Corporate Office"
                        detail="Mansarovar, Jaipur"
                        subDetail="C-31, 6D Engineers Colony"
                        color="bg-blue-600"
                    />
                    <ContactCard
                        icon={<MapPin className="w-6 h-6 text-white" />}
                        title="Manufacturing Unit"
                        detail="Bagru, RIICO Area"
                        subDetail="F-126-127, RIICO Ind. Area"
                        color="bg-slate-800"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200 border border-slate-100"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                <p className="text-slate-500">Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => { setIsSubmitted(false); setFormData({ ...formData, message: "" }); }}
                                    className="inline-block mt-8 text-accent font-semibold hover:underline bg-transparent border-none cursor-pointer"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                                    <p className="text-slate-500">We typically respond within 24 hours.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border-slate-200 border focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                                                placeholder="Enter name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border-slate-200 border focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                                                placeholder="+91..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border-slate-200 border focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                                            placeholder="you@company.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Project Type</label>
                                        <select
                                            name="project_type"
                                            value={formData.project_type}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border-slate-200 border focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                                        >
                                            <option>Industrial Roofing</option>
                                            <option>Greenhouse / Agriculture</option>
                                            <option>Interior Design (Partitions/Cladding)</option>
                                            <option>Distributorship Inquiry</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border-slate-200 border focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    {error && <p className="text-red-500 text-sm">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                                        ) : (
                                            <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>

                    {/* Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Map */}
                        <div className="h-[400px] w-full bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative">
                            {/* Embed Google Map for Bagru Area */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.07729221596!2d75.5298889!3d26.8122222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c439a8c187280!2sBagru%2C%20Rajasthan%20303007!5e0!3m2!1sen!2sin!4v1709321234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                        {/* Detailed Addresses */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><MapPin className="w-4 h-4" /></span>
                                Location Details
                            </h4>
                            <div className="space-y-6">
                                <div className="pl-10 relative">
                                    <div className="absolute left-3 top-2 w-1.5 h-1.5 bg-accent rounded-full"></div>
                                    <h5 className="font-bold text-slate-800">Corporate Office</h5>
                                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                                        C-31, 6D Engineers Colony, New Sanganer Road,<br />
                                        Mansarovar, Jaipur, Rajasthan, 302020
                                    </p>
                                </div>
                                <div className="w-full h-px bg-slate-100 my-2"></div>
                                <div className="pl-10 relative">
                                    <div className="absolute left-3 top-2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                    <h5 className="font-bold text-slate-800">Factory / Works</h5>
                                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                                        F-126-127, RIICO Industrial Area Bagru,<br />
                                        Ext IInd, Bagru, Jaipur, Rajasthan, 303007
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ContactCard({ icon, title, detail, subDetail, color }: { icon: any, title: string, detail: string, subDetail: string, color: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-50 flex items-start gap-4 transition-all"
        >
            <div className={`p-4 rounded-xl ${color} shadow-lg shadow-${color}/20 shrink-0`}>
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                <p className="text-slate-800 font-medium mt-1">{detail}</p>
                <p className="text-slate-400 text-sm mt-0.5">{subDetail}</p>
            </div>
        </motion.div>
    );
}
