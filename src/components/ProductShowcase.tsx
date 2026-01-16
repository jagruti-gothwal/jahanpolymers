"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Filter, X, ZoomIn, ArrowRight, SlidersHorizontal, Check } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const categories = [
    { id: "all", label: "All Products" },
    { id: "new", label: "New Arrivals" },
    { id: "compact", label: "Solid & Compact" },
    { id: "textured", label: "Textured & Diamond" },
    { id: "embossed", label: "Embossed" },
    { id: "roofing", label: "Roofing & Industrial" },
    { id: "coloured", label: "Coloured Sheets" },
];

export function ProductShowcase({ products }: { products: Product[] }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [showFilters, setShowFilters] = useState(true);

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Search Filter
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());

            if (!matchesSearch) return false;

            // Category Filter
            if (activeCategory === "all") return true;
            if (activeCategory === "new") return product.category === "New Arrival";
            if (activeCategory === "compact") return ["Compact", "General Purpose"].includes(product.category) && !product.title.toLowerCase().includes("diamond") && !product.title.toLowerCase().includes("embossed") && !product.title.toLowerCase().includes("prismatic");
            if (activeCategory === "textured") return ["Textured", "Security & Glazing", "Design"].includes(product.category) || product.title.toLowerCase().includes("diamond") || product.title.toLowerCase().includes("prismatic");
            if (activeCategory === "embossed") return product.category === "Embossed" || product.title.toLowerCase().includes("embossed");
            if (activeCategory === "roofing") return ["Roofing", "Industrial"].includes(product.category);
            if (activeCategory === "coloured") return product.category === "Coloured Sheets";

            return false;
        });
    }, [products, activeCategory, searchQuery]);

    return (
        <section className="py-12 bg-slate-50 min-h-screen" id="showcase">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Controls */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">

                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-md group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-full leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm hover:shadow-md"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Filter Toggle & Count */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm",
                                showFilters
                                    ? "bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-2"
                                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                            )}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                        </button>
                        <div className="text-sm text-slate-500 font-medium whitespace-nowrap bg-white px-4 py-2.5 rounded-full border border-slate-100 shadow-sm">
                            <span className="font-bold text-slate-900">{filteredProducts.length}</span> results found
                        </div>
                    </div>
                </div>


                {/* Categories - Expandable */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                            animate={{ height: "auto", opacity: 1, marginBottom: 40 }}
                            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Filter by Category</h3>
                                    {activeCategory !== "all" && (
                                        <button
                                            onClick={() => setActiveCategory("all")}
                                            className="text-xs font-medium text-primary hover:text-primary/70 transition-colors"
                                        >
                                            Clear Filters
                                        </button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={cn(
                                                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                                                activeCategory === cat.id
                                                    ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                                                    : "bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:text-slate-900"
                                            )}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => setSelectedProduct(product)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-32">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                            <Search className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">No products found</h3>
                        <p className="text-slate-500 max-w-sm mx-auto mb-8 text-sm">
                            We couldn't find matches for "{searchQuery}". Try a broader term.
                        </p>
                        <button
                            onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                )}
            </AnimatePresence>
        </section >
    );
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 cursor-pointer flex flex-col h-full transition-all duration-300"
            onClick={onClick}
        >
            <div className="relative aspect-square overflow-hidden bg-slate-50/50 m-2 rounded-2xl">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <ZoomIn className="w-3 h-3" /> Quick View
                    </div>
                </div>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.category === "New Arrival" && (
                        <div className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide w-fit">
                            NEW
                        </div>
                    )}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-relaxed group-hover:text-primary transition-colors">
                    {product.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">View Specs</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors shadow-sm backdrop-blur-sm"
                >
                    <X className="w-6 h-6 text-slate-900" />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-1/2 bg-slate-50 relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-100">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-4"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wide">
                        {product.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{product.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        {product.description}
                    </p>

                    <div className="mt-auto space-y-6">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3">Key Features:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                                    <Check className="w-4 h-4 text-green-500" /> High Durability
                                </li>
                                <li className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                                    <Check className="w-4 h-4 text-green-500" /> UV Protected
                                </li>
                                <li className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                                    <Check className="w-4 h-4 text-green-500" /> Lightweight
                                </li>
                                <li className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                                    <Check className="w-4 h-4 text-green-500" /> Easy Installation
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <a
                                href="/contact"
                                className="block w-full py-4 bg-primary hover:bg-primary/90 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                            >
                                Enquire About This Product
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
