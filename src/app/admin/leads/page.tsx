
"use client";
import React, { useState, useEffect } from "react";
import {
    Lock, Mail, Phone, Calendar, Search, LogOut, Loader2, AlertCircle,
    CheckCircle2, Clock, XCircle, LayoutGrid, List, PhoneCall, MoreVertical,
    Columns, AlignJustify, ArrowRight, User
} from "lucide-react";
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
    status: 'New' | 'Contacted' | 'In Progress' | 'Closed';
    lastContactedAt?: string;
    createdAt: string;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [leads, setLeads] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'table' | 'kanban'>('grid');
    const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, closed: 0 });

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await fetchLeads(password);
            setIsAuthenticated(true);
        } catch (err) {
            setError("Invalid Password or Connection Failed");
        } finally {
            setLoading(false);
        }
    };

    const fetchLeads = async (pwd: string) => {
        const res = await fetch("/api/contact", {
            method: "GET",
            headers: { Authorization: `Bearer ${pwd}` },
        });
        const data = await res.json();

        if (data.success) {
            setLeads(data.data);
            updateStats(data.data);
        } else {
            throw new Error(data.message);
        }
    };

    const updateStats = (data: Contact[]) => {
        setStats({
            total: data.length,
            new: data.filter(l => l.status === 'New' || !l.status).length,
            contacted: data.filter(l => l.status === 'Contacted').length,
            closed: data.filter(l => l.status === 'Closed').length
        });
    };

    const updateStatus = async (id: string, newStatus: string) => {
        const updatedLeads = leads.map(l =>
            l._id === id ? { ...l, status: newStatus as any, lastContactedAt: newStatus === 'Contacted' ? new Date().toISOString() : l.lastContactedAt } : l
        );
        setLeads(updatedLeads);
        updateStats(updatedLeads);

        try {
            await fetch("/api/contact", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${password}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, status: newStatus })
            });
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const handleCall = (lead: Contact) => {
        window.location.href = `tel:${lead.phone}`;
        if (lead.status === 'New') {
            updateStatus(lead._id, 'Contacted');
        }
    };

    const filteredLeads = leads.filter(lead =>
        lead.name?.toLowerCase().includes(search.toLowerCase()) ||
        lead.email?.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone?.includes(search) ||
        lead.company?.toLowerCase().includes(search.toLowerCase())
    );

    const StatusBadge = ({ status }: { status: string }) => {
        const styles = {
            'New': 'bg-blue-100 text-blue-700 border-blue-200',
            'Contacted': 'bg-green-100 text-green-700 border-green-200',
            'In Progress': 'bg-orange-100 text-orange-700 border-orange-200',
            'Closed': 'bg-slate-100 text-slate-600 border-slate-200',
        };
        const icons = {
            'New': <Clock className="w-3 h-3" />,
            'Contacted': <CheckCircle2 className="w-3 h-3" />,
            'In Progress': <Loader2 className="w-3 h-3" />,
            'Closed': <XCircle className="w-3 h-3" />,
        };
        return (
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status as keyof typeof styles] || styles['New']}`}>
                {icons[status as keyof typeof icons]} {status || 'New'}
            </span>
        );
    };

    const [draggedLead, setDraggedLead] = useState<Contact | null>(null);

    const handleDragStart = (e: React.DragEvent, lead: Contact) => {
        setDraggedLead(lead);
        e.dataTransfer.effectAllowed = "move";
        // Create a transparent drag image or custom one if needed, 
        // strictly speaking standard browser drag image usually suffices for MVP
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault(); // Necessary to allow dropping
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e: React.DragEvent, status: string) => {
        e.preventDefault();
        if (draggedLead && draggedLead.status !== status) {
            updateStatus(draggedLead._id, status);
        }
        setDraggedLead(null);
    };

    const getColumnColor = (status: string) => {
        switch (status) {
            case 'New': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', header: 'bg-blue-100' };
            case 'Contacted': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', header: 'bg-green-100' };
            case 'In Progress': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', header: 'bg-orange-100' };
            case 'Closed': return { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', header: 'bg-slate-100' };
            default: return { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', header: 'bg-slate-100' };
        }
    };

    if (!isAuthenticated) {
        // ... (Keep existing login return)
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-900/20">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-800">Admin Portal</h1>
                        <p className="text-slate-500 mt-2">Enter your credentials to access the dashboard.</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                            placeholder="Enter Access Key"
                            autoFocus
                        />
                        {error && (
                            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </div>
                        )}
                        <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg shadow-slate-900/20 active:scale-[0.98]">
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access Dashboard"}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src="/logo.jpg" alt="Jumbolite" className="h-12 w-auto object-contain" />
                </a>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Live Updates
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors flex items-center gap-2"
                    >
                        <LogOut className="w-4 h-4" /> <span className="hidden sm:inline">Sign Out</span>
                    </button>
                </div>
            </nav>

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
                {/* Header & Stats */}
                <div className="mb-10 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                            <p className="text-slate-500 mt-1">Manage your leads and track progress.</p>
                        </div>
                        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm shrink-0">
                            {[
                                { id: 'grid', icon: LayoutGrid, label: 'Grid' },
                                { id: 'table', icon: AlignJustify, label: 'Table' },
                                { id: 'kanban', icon: Columns, label: 'Kanban' }
                            ].map((mode: any) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setViewMode(mode.id as any)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === mode.id ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
                                >
                                    <mode.icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{mode.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard label="Total Leads" value={stats.total} icon={User} color="text-slate-600" bg="bg-slate-100" />
                        <StatCard label="New Opportunities" value={stats.new} icon={Clock} color="text-blue-600" bg="bg-blue-100" />
                        <StatCard label="Contacted" value={stats.contacted} icon={PhoneCall} color="text-green-600" bg="bg-green-100" />
                        <StatCard label="Closed / Done" value={stats.closed} icon={CheckCircle2} color="text-indigo-600" bg="bg-indigo-100" />
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search leads by name, company, email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Content Views */}
                <AnimatePresence mode="wait">
                    {filteredLeads.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-6 h-6 text-slate-400" />
                            </div>
                            <h3 className="text-slate-900 font-bold text-lg">No leads found</h3>
                            <p className="text-slate-500">Try adjusting your search criteria.</p>
                        </div>
                    ) : (
                        <>
                            {viewMode === 'grid' && (
                                <motion.div
                                    key="grid"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                >
                                    {filteredLeads.map((lead) => (
                                        <div key={lead._id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                            {lead.status === 'New' && <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full m-4 animate-pulse" />}
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="font-bold text-slate-900 line-clamp-1">{lead.name}</h3>
                                                    <p className="text-sm text-slate-500 line-clamp-1">{lead.company || 'Individual'}</p>
                                                </div>
                                                <StatusBadge status={lead.status} />
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-3 mb-4 text-xs text-slate-600 leading-relaxed line-clamp-3 h-16">
                                                {lead.message}
                                            </div>
                                            <div className="space-y-2 mb-6">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Mail className="w-4 h-4 text-slate-400" />
                                                    <span className="truncate">{lead.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className="w-4 h-4 text-slate-400" />
                                                    <span className="truncate">{lead.project_type || 'General'} {lead.quantity ? `(${lead.quantity})` : ''}</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-auto">
                                                <button
                                                    onClick={() => handleCall(lead)}
                                                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors active:scale-95"
                                                >
                                                    <PhoneCall className="w-4 h-4" /> Call
                                                </button>
                                                <StatusDropdown currentStatus={lead.status} onUpdate={(s) => updateStatus(lead._id, s)} />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {viewMode === 'table' && (
                                <motion.div
                                    key="table"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                                >
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-slate-50 border-b border-slate-200">
                                                <tr>
                                                    <th className="px-6 py-4 font-semibold text-slate-700">Name & Company</th>
                                                    <th className="px-6 py-4 font-semibold text-slate-700">Contact Info</th>
                                                    <th className="px-6 py-4 font-semibold text-slate-700">Interest</th>
                                                    <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                                                    <th className="px-6 py-4 font-semibold text-slate-700">Date</th>
                                                    <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {filteredLeads.map((lead) => (
                                                    <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="font-semibold text-slate-900">{lead.name}</div>
                                                            <div className="text-slate-500 text-xs">{lead.company}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-slate-600">{lead.email}</div>
                                                            <div className="text-slate-500 text-xs">{lead.phone}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-slate-900 font-medium">{lead.project_type || 'General'}</div>
                                                            {lead.quantity && <div className="text-slate-500 text-xs">Qty: {lead.quantity}</div>}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <StatusBadge status={lead.status} />
                                                        </td>
                                                        <td className="px-6 py-4 text-slate-500 text-xs">
                                                            {new Date(lead.createdAt).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <div className="flex items-center justify-end gap-2">
                                                                <button
                                                                    onClick={() => handleCall(lead)}
                                                                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                                    title="Call"
                                                                >
                                                                    <PhoneCall className="w-4 h-4" />
                                                                </button>
                                                                <StatusDropdown currentStatus={lead.status} onUpdate={(s) => updateStatus(lead._id, s)} minimal />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}

                            {viewMode === 'kanban' && (
                                <motion.div
                                    key="kanban"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="flex gap-4 overflow-x-auto pb-6 h-[calc(100vh-250px)] w-full"
                                >
                                    {['New', 'Contacted', 'In Progress', 'Closed'].map((status) => {
                                        const colors = getColumnColor(status);
                                        return (
                                            <div
                                                key={status}
                                                className={`flex-1 min-w-[280px] rounded-2xl flex flex-col h-full border ${colors.border} ${colors.bg}`}
                                                onDragOver={handleDragOver}
                                                onDrop={(e) => handleDrop(e, status)}
                                            >
                                                <div className={`p-4 border-b ${colors.border} ${colors.header} rounded-t-2xl flex items-center justify-between sticky top-0 bg-opacity-95 backdrop-blur-sm z-10`}>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`w-2 h-2 rounded-full ${colors.text.replace('text', 'bg').replace('700', '500')}`}></span>
                                                        <h3 className={`font-bold ${colors.text}`}>{status}</h3>
                                                    </div>
                                                    <span className="bg-white/60 px-2 py-0.5 rounded-full text-xs font-bold text-slate-600 border border-slate-200/50">
                                                        {filteredLeads.filter(l => (l.status || 'New') === status).length}
                                                    </span>
                                                </div>

                                                <div className="p-4 space-y-3 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-slate-300/50 scrollbar-track-transparent">
                                                    {filteredLeads.filter(l => (l.status || 'New') === status).map((lead) => (
                                                        <motion.div
                                                            layoutId={lead._id}
                                                            key={lead._id}
                                                            draggable
                                                            onDragStart={(e) => handleDragStart(e as any, lead)}
                                                            className={`bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-all hover:scale-[1.02] relative group ${draggedLead?._id === lead._id ? 'opacity-50 dashed border-2 border-indigo-300' : ''}`}
                                                        >
                                                            <div className="font-bold text-slate-900 mb-0.5">{lead.name}</div>
                                                            {lead.company && <div className="text-xs text-slate-500 mb-3 flex items-center gap-1"><LayoutGrid className="w-3 h-3" /> {lead.company}</div>}

                                                            <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg mb-3 line-clamp-3 italic border border-slate-100">
                                                                "{lead.message}"
                                                            </div>

                                                            <div className="flex items-center justify-between gap-2 mt-auto">
                                                                <button
                                                                    onClick={() => handleCall(lead)}
                                                                    className="flex-1 bg-slate-900 text-white hover:bg-slate-800 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                                                                >
                                                                    <PhoneCall className="w-3 h-3" /> Call
                                                                </button>
                                                                <div className="text-[10px] text-slate-400 font-medium">
                                                                    {new Date(lead.createdAt).toLocaleDateString()}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

function StatCard({ label, value, icon: Icon, color, bg }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-md">
            <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <div>
                <p className="text-slate-500 text-sm font-medium">{label}</p>
                <div className="text-3xl font-bold text-slate-900 mt-0.5">{value}</div>
            </div>
        </div>
    );
}

function StatusDropdown({ currentStatus, onUpdate, minimal }: { currentStatus: string, onUpdate: (s: string) => void, minimal?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${minimal ? 'p-2 hover:bg-slate-100' : 'px-3 py-2.5 bg-white border border-slate-200 hover:border-slate-300'} rounded-lg transition-colors flex items-center justify-center`}
                title="Change Status"
            >
                <MoreVertical className="w-4 h-4 text-slate-500" />
            </button>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 bottom-full mb-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 z-20 overflow-hidden py-1 transform origin-bottom-right">
                        {['New', 'In Progress', 'Contacted', 'Closed'].map((status) => (
                            <button
                                key={status}
                                onClick={() => { onUpdate(status); setIsOpen(false); }}
                                className={`w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-between ${currentStatus === status ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600'}`}
                            >
                                {status}
                                {currentStatus === status && <CheckCircle2 className="w-3 h-3" />}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
