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
                                "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-sm border",
                                showFilters
                                    ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                            )}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                        </button>
                        <div className="text-sm text-slate-500 font-medium whitespace-nowrap">
                            <span className="font-bold text-slate-900">{filteredProducts.length}</span> Products
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
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Categories</h3>
                                    {activeCategory !== "all" && (
                                        <button
                                            onClick={() => setActiveCategory("all")}
                                            className="text-xs font-medium text-primary hover:underline"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={cn(
                                                "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border flex items-center gap-2",
                                                activeCategory === cat.id
                                                    ? "bg-primary text-white border-primary shadow-md shadow-primary/25 transform scale-105"
                                                    : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-sm"
                                            )}
                                        >
                                            {activeCategory === cat.id && <Check className="w-3.5 h-3.5" />}
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
                            <Search className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                        <p className="text-slate-500 max-w-md mx-auto mb-8">
                            We couldn't find any products matching "{searchQuery}". Try adjusting your search or filters.
                        </p>
                        <button
                            onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                            className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-semibold rounded-full hover:bg-slate-50 transition-colors"
                        >
                            Clear all filters
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
        </section>
    );
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 cursor-pointer flex flex-col h-full transition-all duration-300"
            onClick={onClick}
        >
            <div className="relative aspect-square overflow-hidden bg-slate-50">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/95 backdrop-blur text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <ZoomIn className="w-4 h-4" /> Quick View
                    </span>
                </div>

                {/* Badge */}
                {product.category === "New Arrival" && (
                    <div className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide">
                        NEW
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2 opacity-80">
                    {product.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                    {product.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
                    {product.description}
                </p>
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-accent transition-colors mt-auto pt-4 border-t border-slate-50">
                    View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
