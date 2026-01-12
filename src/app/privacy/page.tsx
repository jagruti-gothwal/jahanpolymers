import React from "react";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-neutral-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600 text-lg">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">

                        {/* Section 1 */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                At Jahan Polymers ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services. By using our website, you agree to the terms outlined in this policy.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-accent" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>Fill out a contact form or request a quote.</li>
                                <li>Subscribe to our newsletter or updates.</li>
                                <li>Communicate with us via email or phone.</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                The types of information we may collect include your name, email address, phone number, company name, and any specific project requirements you share with us.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "To provide and maintain our services",
                                    "To process your quotes and orders",
                                    "To communicate with you about updates",
                                    "To improve our website functionality",
                                    "To comply with legal obligations",
                                    "To prevent fraudulent activity"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-accent" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <section className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-600 mb-6">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-3 text-sm">
                                <p className="flex items-center gap-3 text-gray-700">
                                    <span className="font-semibold w-20">Email:</span>
                                    <a href="mailto:Jahanpolimars88@gmail.com" className="text-primary hover:underline">Jahanpolimars88@gmail.com</a>
                                </p>
                                <p className="flex items-center gap-3 text-gray-700">
                                    <span className="font-semibold w-20">Phone:</span>
                                    <a href="tel:+919876543210" className="text-gray-600 hover:text-primary transition-colors">+91 98765 43210</a>
                                </p>
                                <p className="flex items-start gap-3 text-gray-700">
                                    <span className="font-semibold w-20 shrink-0">Address:</span>
                                    <span>F-126-127, RIICO Industrial Area, Ext IInd, Jaipur, Rajasthan, 303007</span>
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
