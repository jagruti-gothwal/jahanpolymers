import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Jahan<span className="text-accent">Polymers</span></h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading manufacturer of premium quality Polycarbonate sheets. Committed to excellence, durability, and innovation.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <SocialIcon href="https://www.facebook.com/people/Jahan-Polymers/61561305820022/#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialIcon href="https://www.instagram.com/jp_jumbolite" icon={<Instagram className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-accent transition-colors">Our Products</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary inline-block pb-2">Our Products</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/products" className="hover:text-accent transition-colors">Solid Compact Sheets</Link></li>
                            <li><Link href="/products" className="hover:text-accent transition-colors">Embossed Sheets</Link></li>
                            <li><Link href="/products" className="hover:text-accent transition-colors">Diamond Sheets</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary inline-block pb-2">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <div className="space-y-2">
                                    <div>
                                        <div className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Factory</div>
                                        <span>F-126-127, RIICO Industrial Area , Ext IInd, , Jaipur, Rajasthan, 303007</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>jahanpolimars88@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Jahan Polymers Pvt. Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>Site by J. Studio</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
            {icon}
        </a>
    );
}
