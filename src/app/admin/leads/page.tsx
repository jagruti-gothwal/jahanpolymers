
"use client";
import React, { useState, useEffect } from "react";
import { Lock, Mail, Phone, Calendar, Search, LogOut, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    project_type: string;
    message: string;
    company?: string;
    quantity?: string;
    createdAt: string;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [leads, setLeads] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${password}`,
                },
            });
            const data = await res.json();

            if (data.success) {
                setIsAuthenticated(true);
                setLeads(data.data);
            } else {
                setError("Invalid Password");
            }
        } catch (err) {
            setError("Failed to connect to server");
        } finally {
            setLoading(false);
        }
    };

    const filteredLeads = leads.filter(lead =>
        lead.name?.toLowerCase().includes(search.toLowerCase()) ||
        lead.email?.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone?.includes(search) ||
        lead.company?.toLowerCase().includes(search.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-800">Admin Login</h1>
                        <p className="text-slate-500">Please enter your password to view leads.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                                placeholder="Password"
                                autoFocus
                            />
                        </div>
                        {error && (
                            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Access Dashboard"}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 box-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">A</div>
                        <h1 className="font-bold text-slate-800 text-lg">Leads Dashboard</h1>
                        <span className="px-2 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-500">{leads.length} Total</span>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="text-sm font-medium text-slate-500 hover:text-red-500 flex items-center gap-2 transition-colors"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search */}
                <div className="mb-8">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, email, phone or company..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-accent outline-none"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="grid grid-cols-1 gap-4">
                    <AnimatePresence>
                        {filteredLeads.map((lead) => (
                            <motion.div
                                key={lead._id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                            <h3 className="font-bold text-lg text-slate-900">{lead.name}</h3>
                                            {lead.company && (
                                                <span className="text-sm text-slate-500 font-medium"> @ {lead.company}</span>
                                            )}
                                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 text-xs rounded-full font-medium">
                                                {lead.project_type || 'General'}
                                            </span>
                                            {lead.quantity && (
                                                <span className="px-2 py-0.5 bg-purple-50 text-purple-600 border border-purple-100 text-xs rounded-full font-medium">
                                                    Qty: {lead.quantity}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm leading-relaxed mb-4">
                                            {lead.message}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1.5 hover:text-accent transition-colors">
                                                <Mail className="w-4 h-4" /> {lead.email}
                                            </span>
                                            {lead.phone && (
                                                <span className="flex items-center gap-1.5 hover:text-accent transition-colors">
                                                    <Phone className="w-4 h-4" /> {lead.phone}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 md:text-right shrink-0">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString()}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredLeads.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-slate-900 font-medium text-lg">No leads found</h3>
                            <p className="text-slate-500">Try adjusting your search or wait for new inquiries.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
