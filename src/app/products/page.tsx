"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Full list of images from public/products used for the catalogue
const products = [
    {
        id: "new-arrival-1",
        title: "Premium Polycarbonate Sheet (Type 1)",
        category: "New Arrival",
        description: "High-quality polymer sheet featuring excellent durability and clarity.",
        image: "/products/1.jpeg",
    },
    {
        id: "new-arrival-2",
        title: "Premium Polycarbonate Sheet (Type 2)",
        category: "New Arrival",
        description: "Advanced polycarbonate solution for industrial and commercial applications.",
        image: "/products/2.jpeg",
    },
    {
        id: "new-arrival-3",
        title: "Premium Polycarbonate Sheet (Type 3)",
        category: "New Arrival",
        description: "Robust and weather-resistant sheet designed for longevity.",
        image: "/products/3.jpeg",
    },
    {
        id: "new-arrival-4",
        title: "Premium Polycarbonate Sheet (Type 4)",
        category: "New Arrival",
        description: "Crystal clear finish with high impact resistance.",
        image: "/products/4.jpeg",
    },
    {
        id: "new-arrival-5",
        title: "Premium Polycarbonate Sheet (Type 5)",
        category: "New Arrival",
        description: "Versatile sheet ideal for roofing, glazing, and partitions.",
        image: "/products/5.jpeg",
    },
    {
        id: "new-arrival-6",
        title: "Premium Polycarbonate Sheet (Type 6)",
        category: "New Arrival",
        description: "Heavy-duty polycarbonate panel for superior protection.",
        image: "/products/6.jpeg",
    },
    {
        id: "new-arrival-7",
        title: "Featured Display Sheet",
        category: "New Arrival",
        description: "Showcase quality sheet for optimal visual presentations.",
        image: "/products/7.webp",
    },
    {
        id: "jumbolite-2mm-roofing",
        title: "2mm Jumbolite Roofing Sheet",
        category: "Roofing",
        description: "Premium 2mm polycarbonate roofing sheet for industrial and residential use.",
        image: "/products/2mm Jumbolite Polycarbonate Roofing Sheet.webp",
    },
    {
        id: "jumbolite-2mm-roofing-sq",
        title: "2mm Jumbolite Roofing (Square)",
        category: "Roofing",
        description: "Square cut 2mm roofing sheet, versatile and durable.",
        image: "/products/2mm-jumbolite-polycarbonate-roofing-sheet-500x500.webp",
    },
    {
        id: "jumbolite-3mm-diamond",
        title: "Jumbolite 3mm Diamond Sheet",
        category: "Security & Glazing",
        description: "3mm transparent diamond texture for high impact strength and aesthetics.",
        image: "/products/Jumbolite 3mm Transparent Dimand Polycarbonate Sheet.webp",
    },
    {
        id: "jumbolite-3mm-diamond-var1",
        title: "Jumbolite 3mm Diamond Sheet (Var 1)",
        category: "Security & Glazing",
        description: "Variation of our premium 3mm diamond polycarbonate sheet.",
        image: "/products/Jumbolite 3mm Transparent Dimand Polycarbonate Sheet1.webp",
    },
    {
        id: "jumbolite-3mm-diamond-var2",
        title: "Jumbolite 3mm Diamond Sheet (Var 2)",
        category: "Security & Glazing",
        description: "Another view of the durable 3mm diamond transparent sheet.",
        image: "/products/Jumbolite 3mm Transparent Dimand Polycarbonate Sheet2.webp",
    },
    {
        id: "jumbolite-brown-diamond",
        title: "Jumbolite Brown Diamond Sheet",
        category: "Design",
        description: "Elegant brown tinted diamond sheet offering privacy and style.",
        image: "/products/Jumbolite Brown Polycarbonate Diamond Sheet.png",
    },
    {
        id: "jumbolite-green",
        title: "Jumbolite Green Sheet",
        category: "Design",
        description: "Green tinted polycarbonate sheet for nature-inspired architectural designs.",
        image: "/products/Jumbolite Green Polycarbonate Sheet.png",
    },
    {
        id: "poly-carbonate-sheet",
        title: "Standard Polycarbonate Sheet",
        category: "General Purpose",
        description: "High-quality standard polycarbonate sheet for multiple applications.",
        image: "/products/Poly Carbonate Sheet.webp",
    },
    {
        id: "blue-poly-500",
        title: "Blue Polycarbonate Sheet",
        category: "Coloured Sheets",
        description: "Vibrant blue sheet ideal for signage, partitions, and creative projects.",
        image: "/products/blue-polycarbonate-sheet-500x500.webp",
    },
    {
        id: "coloured-poly-500",
        title: "Multi-Coloured Sheets",
        category: "Coloured Sheets",
        description: "A range of coloured polycarbonate sheets to suit any design requirement.",
        image: "/products/coloured-polycarbonate-sheet-500x500.webp",
    },
    {
        id: "compact-poly-500",
        title: "Compact Polycarbonate Sheet",
        category: "Compact",
        description: "Solid, clear, and high-impact compact sheet for heavy-duty use.",
        image: "/products/compact-polycarbonate-sheet-500x500.webp",
    },
    {
        id: "diamond-poly-500",
        title: "Diamond Texture Sheet",
        category: "Textured",
        description: "Classic diamond pattern sheet for light diffusion and privacy.",
        image: "/products/diamond-polycarbonate-sheet-500x500.webp",
    },
    {
        id: "dimand-pc-500",
        title: "Prismatic PC Sheet",
        category: "Textured",
        description: "Prismatic texture ideal for lighting fixtures and skylights.",
        image: "/products/dimand-pc-sheet-500x500.webp",
    },
    {
        id: "embossed-pc-1",
        title: "Embossed Sheet (Clear)",
        category: "Embossed",
        description: "Clear embossed sheet providing excellent light transmission with privacy.",
        image: "/products/embossed-pc-sheet-500x500 (1).webp",
    },
    {
        id: "embossed-pc-0",
        title: "Embossed Sheet (Texture)",
        category: "Embossed",
        description: "High-quality embossed texture for decorative and functional applications.",
        image: "/products/embossed-pc-sheet-500x500.webp",
    },
    {
        id: "jumbolite-2mm-diamond-1",
        title: "2mm Diamond Sheet (Style A)",
        category: "Textured",
        description: "2mm thickness with a distinct diamond pattern.",
        image: "/products/jumbolite-2mm-polycarbonate-diamond-sheet-500x500 (1).webp",
    },
    {
        id: "jumbolite-2mm-diamond-2",
        title: "2mm Diamond Sheet (Style B)",
        category: "Textured",
        description: "Another variation of our popular 2mm diamond styled sheet.",
        image: "/products/jumbolite-2mm-polycarbonate-diamond-sheet-500x500 (2).webp",
    },
    {
        id: "jumbolite-2mm-diamond-3",
        title: "2mm Diamond Sheet (Style C)",
        category: "Textured",
        description: "Robust 2mm diamond sheet for versatile applications.",
        image: "/products/jumbolite-2mm-polycarbonate-diamond-sheet-500x500 (3).webp",
    },
    {
        id: "jumbolite-2mm-diamond-0",
        title: "2mm Diamond Sheet (Standard)",
        category: "Textured",
        description: "Standard 2mm diamond polycarbonate sheet.",
        image: "/products/jumbolite-2mm-polycarbonate-diamond-sheet-500x500.webp",
    },
    {
        id: "jumbolite-embossed-brown",
        title: "Embossed Brown Sheet",
        category: "Design",
        description: "Brown tinted sheet with an embossed finish for a premium look.",
        image: "/products/jumbolite-embossed-brown-sheet-1000x1000.webp",
    },
    {
        id: "poly-compact-500",
        title: "Polycarbonate Compact (Clear)",
        category: "Compact",
        description: "Crystal clear compact sheet, excellent replacement for glass.",
        image: "/products/polycarbonate-compact-sheet-500x500.webp",
    },
    {
        id: "poly-roofing-500",
        title: "Polycarbonate Roofing Panel",
        category: "Roofing",
        description: "Durable and lightweight roofing panel solution.",
        image: "/products/polycarbonate-roofing-sheet-500x500.webp",
    },
    {
        id: "poly-sheet-blue",
        title: "Blue Tinted Sheet",
        category: "Coloured Sheets",
        description: "Blue tinted polycarbonate sheet for aesthetic applications.",
        image: "/products/polycarbonate-sheet-blue-500x500.webp",
    },
    {
        id: "poly-sheet-roll",
        title: "Polycarbonate Roll",
        category: "Industrial",
        description: "Long continuous roll of polycarbonate for large seamless installations.",
        image: "/products/polycarbonate-sheet-roll-1000x1000.webp",
    }
];

export default function ProductsPage() {
    // Categorize products
    const compactSheets = products.filter(p => matchCategory(p, ["Compact", "General Purpose", "Coloured Sheets", "New Arrival", "Special"]) && !isTextured(p));
    const diamondSheets = products.filter(p => matchCategory(p, ["Textured", "Security & Glazing", "Design"]) || p.title.toLowerCase().includes("diamond") || p.title.toLowerCase().includes("prismatic"));
    const embossedSheets = products.filter(p => p.category === "Embossed" || p.title.toLowerCase().includes("embossed"));
    const roofingSheets = products.filter(p => p.category === "Roofing" || p.category === "Industrial");

    // Helper to avoid duplicates (Diamond/Embossed might overlap with logic above, so we prioritize specific textures)
    // Clean up diamond/embossed from compact if they slipped in
    const cleanCompact = compactSheets.filter(p => !p.title.toLowerCase().includes("diamond") && !p.title.toLowerCase().includes("embossed") && !p.title.toLowerCase().includes("prismatic") && !p.title.toLowerCase().includes("roofing"));

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/products/polycarbonate-sheet-roll-1000x1000.webp"
                        alt="Products Hero"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Our Product Collection
                    </motion.h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                        Browse our extensive collection of premium polymer solutions, categorized for your convenience.
                    </p>
                </div>
            </section>

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

            {/* Product Sections */}
            <div className="space-y-20 py-20">
                <ProductCategorySection title="Solid & Compact Sheets" products={cleanCompact} />
                <ProductCategorySection title="Diamond & Textured Sheets" products={diamondSheets} />
                <ProductCategorySection title="Embossed Sheets" products={embossedSheets} />
                <ProductCategorySection title="Roofing & Industrial Rolls" products={roofingSheets} />
            </div>
        </div>
    );
}

function ProductCategorySection({ title, products }: { title: string, products: any[] }) {
    if (products.length === 0) return null;
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden bg-slate-100 border-b border-slate-50">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-grow flex flex-col">
                            <h3 className="text-md font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {product.title}
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                                {product.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-slate-50">
                                <span className="inline-block px-2.5 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded-full">
                                    {product.category}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// Helpers
function matchCategory(p: any, categories: string[]) {
    return categories.includes(p.category);
}

function isTextured(p: any) {
    const t = p.title.toLowerCase();
    return t.includes("diamond") || t.includes("embossed") || t.includes("prismatic");
}
