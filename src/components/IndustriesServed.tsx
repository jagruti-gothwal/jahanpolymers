import React from "react";
import { Building2, Tractor, Wrench, Home, Sun, Briefcase } from "lucide-react";

export function IndustriesServed() {
    const industries = [
        {
            icon: <Building2 className="w-8 h-8 text-blue-500" />,
            title: "Construction & Infrastructure",
            description: "Roofing for stadiums, railway stations, airports, and commercial complexes requiring natural light and durability."
        },
        {
            icon: <Tractor className="w-8 h-8 text-green-500" />,
            title: "Agriculture & Greenhouses",
            description: "UV-protected sheets for greenhouse cladding, maximizing light transmission for optimal plant growth."
        },
        {
            icon: <Wrench className="w-8 h-8 text-orange-500" />,
            title: "Industrial Roofing",
            description: "Heavy-duty skylights and north-light glazing for warehouses, factories, and industrial sheds."
        },
        {
            icon: <Home className="w-8 h-8 text-purple-500" />,
            title: "Residential Applications",
            description: "Pergolas, carports, patio covers, and balcony awnings that enhance home aesthetics."
        },
        {
            icon: <Sun className="w-8 h-8 text-yellow-500" />,
            title: "Signage & Display",
            description: "High-impact sheets for illuminated signage, advertising boards, and LED displays."
        },
        {
            icon: <Briefcase className="w-8 h-8 text-slate-500" />,
            title: "Security & Safety",
            description: "Shatterproof glazing for banks, schools, and public buildings providing superior protection."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm">Versatile Applications</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Industries We Serve</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Our premium polycarbonate solutions are trusted across diverse sectors for their versatility, strength, and visual appeal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <div key={index} className="group p-8 bg-slate-50 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                            <div className="mb-6 p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow w-fit">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
