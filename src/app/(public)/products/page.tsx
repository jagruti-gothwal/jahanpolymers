import React from "react";
import { ProductShowcase } from "@/components/ProductShowcase";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { ProductsPageHero } from "@/components/ProductsPageHero";

export const metadata: Metadata = {
    title: "Our Product Collection | Polycarbonate Sheets & Rolls",
    description: "Explore our extensive range of Polycarbonate Compact Sheets, Diamond Textured Sheets, Embossed Sheets, and Roofing Solutions. 100% Virgin Material.",
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
            {/* Hero Section */}
            <ProductsPageHero />

            {/* Technical Specifications */}
            <section className="bg-white py-16 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
                        <p className="text-slate-600 max-w-4xl mx-auto text-lg mb-4">
                            JUMBOLITE Polycarbonate Sheets are indeed a popular choice for industrial structural roofing due to their excellent properties like: High Light Transmission, Durability, Lightweight, Thermal Insulation, UV Stabilization, and Design Flexibility.
                        </p>
                        <p className="text-slate-500 text-sm">Standard dimensions and thickness options for our Jumbolite Solid Sheets & Rolls.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Compact Table */}
                        <div className="overflow-hidden border border-orange-200 rounded-lg">
                            <h3 className="text-center font-bold text-lg bg-white py-2 uppercase tracking-wide">Compact</h3>
                            <table className="w-full text-sm text-center">
                                <thead className="text-white uppercase bg-accent">
                                    <tr>
                                        <th className="px-2 py-3 border-r border-orange-400/30 text-xs">Thickness</th>
                                        <th className="px-2 py-3 border-r border-orange-400/30 text-xs">Length of<br />Roll/Sheet</th>
                                        <th className="px-2 py-3 text-xs">Width of<br />Roll/Sheet</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-orange-100 text-slate-700 font-medium">
                                    {[
                                        ["1 MM", "100 FT", "4 FT"],
                                        ["1.2 MM", "100 FT", "3 - 5 FT"],
                                        ["1.5 MM", "100 FT", "3 - 8 FT"],
                                        ["1.8 MM", "100 FT", "3 - 8 FT"],
                                        ["2 MM", "100 FT", "3 - 8 FT"],
                                        ["2.5 MM", "100 FT", "3 - 8 FT"],
                                        ["2.8 MM", "100 FT", "3 - 8 FT"],
                                        ["1.8-11.8MM", "8-10 FT", "4 / 6 FT"],
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-orange-50/50">
                                            <td className="px-2 py-2 border-r border-orange-100">{row[0]}</td>
                                            <td className="px-2 py-2 border-r border-orange-100">{row[1]}</td>
                                            <td className="px-2 py-2">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Diamond Table */}
                        <div className="overflow-hidden border border-orange-200 rounded-lg h-fit">
                            <h3 className="text-center font-bold text-lg bg-white py-2 uppercase tracking-wide">Diamond</h3>
                            <table className="w-full text-sm text-center">
                                <thead className="text-white uppercase bg-accent">
                                    <tr>
                                        <th className="px-2 py-3 border-r border-orange-400/30 text-xs">Thickness</th>
                                        <th className="px-2 py-3 border-r border-orange-400/30 text-xs">Length of<br />Roll/Sheet</th>
                                        <th className="px-2 py-3 text-xs">Width of<br />Roll/Sheet</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-orange-100 text-slate-700 font-medium">
                                    {[
                                        ["1.5 MM", "100 FT", "3 - 8 FT"],
                                        ["1.8 MM", "100 FT", "3 - 8 FT"],
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-orange-50/50">
                                            <td className="px-2 py-2 border-r border-orange-100">{row[0]}</td>
                                            <td className="px-2 py-2 border-r border-orange-100">{row[1]}</td>
                                            <td className="px-2 py-2">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Embossed Table */}
                        <div className="overflow-hidden border border-orange-200 rounded-lg h-fit">
                            <h3 className="text-center font-bold text-lg bg-white py-2 uppercase tracking-wide">Embossed</h3>
                            <table className="w-full text-sm text-center">
                                <thead className="text-white uppercase bg-accent">
                                    <tr>
                                        <th className="px-2 py-3 border-r border-orange-400/30 text-xs">Thickness</th>
                                        <th className="px-2 py-3 border-r border-orange-400/30 text-xs">Length of<br />Roll/Sheet</th>
                                        <th className="px-2 py-3 text-xs">Width of<br />Roll/Sheet</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-orange-100 text-slate-700 font-medium">
                                    {[
                                        ["1.25 MM", "100 FT", "3 - 8 FT"],
                                        ["1.5 MM", "100 FT", "3 - 8 FT"],
                                        ["1.8 MM", "100 FT", "3 - 8 FT"],
                                        ["2.0 MM", "100 FT", "3 - 8 FT"],
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-orange-50/50">
                                            <td className="px-2 py-2 border-r border-orange-100">{row[0]}</td>
                                            <td className="px-2 py-2 border-r border-orange-100">{row[1]}</td>
                                            <td className="px-2 py-2">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Product Showcase */}
            <ProductShowcase products={products} />
        </div>
    );
}
