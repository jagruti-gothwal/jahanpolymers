"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Products() {
    const products = [
        {
            title: "Polycarbonate Multiwall",
            category: "Roofing & Cladding",
            description: "Lightweight, high impact strength, and excellent thermal insulation. Perfect for skylights and greenhouses.",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Solid Compact Sheets",
            category: "Security & Glazing",
            description: "The transparency of glass with the strength of steel. Ideal for security glazing, shields, and noise barriers.",
            gradient: "from-purple-500 to-indigo-500",
        },
        {
            title: "Acrylic Sheets",
            category: "Design & Display",
            description: "Premium optical clarity and UV stability. Used for signage, displays, and modern furniture.",
            gradient: "from-teal-500 to-emerald-500",
        },
        {
            title: "Embossed & Textured",
            category: "Privacy & Aesthetics",
            description: "Unique textures for privacy and light diffusion. Stylish solutions for interior design.",
            gradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section id="products" className="py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Premium Products</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Discover our range of world-class polycarbonate and acrylic sheets designed for every application.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product }: { product: any }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-full rounded-xl bg-neutral-900 border border-neutral-800 p-8 group"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 rounded-xl shadow-lg bg-neutral-800 flex flex-col items-center justify-center p-6 text-center"
            >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${product.gradient} mb-6 blur-lg opacity-80`} />

                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                <span className="text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-4">{product.category}</span>

                <p className="text-neutral-300 text-sm leading-relaxed">
                    {product.description}
                </p>

                <button className="mt-6 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-sm border border-white/10">
                    View Details
                </button>
            </div>
        </motion.div>
    );
}
