"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, MessageCircle } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        requirements: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Send data to our internal Nodemailer API route
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
                setFormData({ firstName: "", lastName: "", email: "", phone: "", requirements: "" });
            } else {
                setError("Something went wrong. Please try again or contact us directly.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                    <div className="p-10 lg:p-14 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
                            <p className="text-blue-100 text-lg mb-10">
                                Get a free quote within 24 hours. Our team is ready to assist you with technical specs and bulk pricing.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Factory Address</h3>
                                        <p className="text-blue-200">F-126-127, RIICO Industrial Area Bagru, Ext IInd, Bagru, Jaipur, Rajasthan - 303007</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Sales Inquiry</h3>
                                        <p className="text-blue-200">Narendra (Sales Manager)</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-accent mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <p className="text-blue-200">jahanpolimars88@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-sm text-blue-200">Sales Office Hours: Mon - Sat, 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>


                    <div className="p-10 lg:p-14">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-500 mb-8">Thank you for your inquiry. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-accent font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="+91 9999999999"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                                    ) : (
                                        <>Send Message <Send className="w-4 h-4" /></>
                                    )}
                                </button>

                                <div className="relative flex py-2 items-center">
                                    <div className="flex-grow border-t border-gray-200"></div>
                                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or</span>
                                    <div className="flex-grow border-t border-gray-200"></div>
                                </div>

                                <a
                                    href="https://wa.me/919929288822?text=Hi%20Jahan%20Polymers,%20I%20am%20interested%20in%20your%20products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                                >
                                    Chat on WhatsApp <MessageCircle className="w-5 h-5" />
                                </a>
                            </form>
                        )}
                    </div>

                </div>

            </div>

            <div className="mt-8 flex justify-center">
                <a
                    href="https://www.google.com/maps/dir//Jahan+Polymers+Private+Limited,+F-126-127,+RIICO+Industrial+Area+Bagru,+Ext+IInd,+Bagru,+Jaipur,+Rajasthan+303007/@26.8098333,75.5663946,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                    <MapPin className="w-5 h-5" /> View Factory Location on Google Maps
                </a>
            </div>
        </section >
    );
}
