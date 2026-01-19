import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { ArrowRight, MapPin, Star, Quote, ShieldCheck, Award, TrendingUp, Users, Clock, CheckSquare } from 'lucide-react';

// Define metadata for specific files if we know them, otherwise use generic placeholders
const projectMetadata: Record<string, { title: string; description: string; location: string; category: string }> = {
    "2mm Jumbolite Polycarbonate Roofing Sheet.webp": {
        title: "Industrial Warehouse Roofing",
        description: "Installation of high-durability 2mm Polycarbonate sheets for a large-scale logistics park, ensuring natural light and weather protection.",
        location: "Jaipur, Rajasthan",
        category: "Industrial"
    },
    "f07b99897b1663208fb296b681eccb54.jpg": {
        title: "High-Yield Greenhouse",
        description: "Advanced UV-protected cladding maximizing uniform light transmission for optimal crop growth in a hydroponic facility.",
        location: "Nashik, Maharashtra",
        category: "Agricultural"
    },
    "f87dcd58dc41e18d74a18bc4be0c5c02.jpg": {
        title: "Commercial Skylight System",
        description: "Architectural diamond-textured sheets providing aesthetic appeal and diffused lighting for a shopping complex atrium.",
        location: "Gurgaon, Haryana",
        category: "Commercial"
    },

};

const reviews = [
    {
        name: "Rajesh Khandelwal",
        role: "Industrial Contractor",
        image: null,
        rating: 5,
        text: "We have been sourcing PC sheets from Jahan Polymers for over a year now. The quality of their 'JumboLite' sheets is unmatched in the market. The transparency remains intact even after harsh summers. Highly recommended!"
    },
    {
        name: "Amit Patel",
        role: "Greenhouse Owner",
        image: null,
        rating: 5,
        text: "Excellent UV protection. I used their multiwall sheets for my exotic flower greenhouse. The durability is fantastic, and the support from Mr. Narendra was very helpful in choosing the right thickness."
    },
    {
        name: "Suresh Sharma",
        role: "Architect",
        image: null,
        rating: 4,
        text: "Great variety of textures. The Diamond sheets added a premium look to my latest mall project. Delivery was on time to the site in Delhi. Good professional team."
    }
];

export const metadata = {
    title: "Our Completed Projects & Reviews | Jahan Polymers",
    description: "Browse our portfolio of Polycarbonate sheet installations and see what our satisfied clients have to say.",
};

export default function ProjectsPage() {
    const projectsDir = path.join(process.cwd(), 'public/project');
    let projectFiles: string[] = [];

    try {
        projectFiles = fs.readdirSync(projectsDir).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
    } catch (error) {
        console.error("Error reading project directory:", error);
    }

    return (
        <div className="min-h-screen bg-neutral-50 pt-20">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/project/factory.png"
                        alt="Factory Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/20 text-sm font-semibold mb-6 tracking-wide uppercase">
                        Excellence in Execution
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Projects</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        From massive industrial roofs to delicate greenhouse cladding, see how <span className="text-white font-semibold">JumboLite</span> sheets are transforming spaces across India.
                    </p>
                </div>
            </section>

            {/* Trust Stats Bar */}
            <section className="bg-white border-b border-slate-200 relative z-20 -mt-8 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-xl">
                <div className="px-6 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <Clock className="w-5 h-5 text-accent" />
                                <span className="text-2xl font-bold text-slate-900">2023</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Established</p>
                        </div>
                        <div className="text-center pl-8">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <CheckSquare className="w-5 h-5 text-accent" />
                                <span className="text-2xl font-bold text-slate-900">150+</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Projects Done</p>
                        </div>
                        <div className="text-center pl-8">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <Users className="w-5 h-5 text-accent" />
                                <span className="text-2xl font-bold text-slate-900">100+</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Happy Clients</p>
                        </div>
                        <div className="text-center pl-8">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <TrendingUp className="w-5 h-5 text-accent" />
                                <span className="text-2xl font-bold text-slate-900">10L+</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Sq. Ft. Installed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Featured Installations</h2>
                        <p className="text-slate-500 mt-2">A glimpse into our portfolio of success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectFiles.map((file, index) => {
                            const meta = projectMetadata[file] || {
                                title: `Installation Project #${index + 1}`,
                                description: "Premium Polycarbonate sheet installation ensuring durability, weather resistance, and superior light transmission.",
                                location: "Client Site, India",
                                category: "General"
                            };

                            return (
                                <div key={file} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                                    <div className="relative h-72 overflow-hidden bg-slate-200">
                                        <span className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {meta.category}
                                        </span>
                                        <Image
                                            src={`/project/${file}`}
                                            alt={meta.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest mb-3">
                                            <MapPin className="w-3 h-3" /> {meta.location}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{meta.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                                            {meta.description}
                                        </p>
                                        <div className="border-t border-slate-100 pt-4 mt-auto">
                                            <span className="text-slate-400 text-xs font-medium flex items-center gap-2">
                                                <ShieldCheck className="w-4 h-4 text-green-500" /> Verified Project
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {projectFiles.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <p className="text-slate-500">No project images found in gallery.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">How We Execute</h2>
                        <p className="text-slate-400 mt-2">A systematic approach to ensuring project success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10 shadow-[0_0_20px_rgba(255,107,0,0.4)]">1</div>
                            <h3 className="text-xl font-bold text-center mb-2">Consultation</h3>
                            <p className="text-center text-slate-400 text-sm">Understanding your structural & aesthetic needs.</p>
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10 border border-slate-700">2</div>
                            <h3 className="text-xl font-bold text-center mb-2">Material Selection</h3>
                            <p className="text-center text-slate-400 text-sm">Choosing the right thickness, color, and coating.</p>
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10 border border-slate-700">3</div>
                            <h3 className="text-xl font-bold text-center mb-2">Manufacturing</h3>
                            <p className="text-center text-slate-400 text-sm">Precision extrusion with 100% virgin Bayer/Sabic material.</p>
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10">4</div>
                            <h3 className="text-xl font-bold text-center mb-2">Delivery</h3>
                            <p className="text-center text-slate-400 text-sm">Safe packaging and timely dispatch to your site.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Reviews Section (Google Reviews Style) */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">What Our Clients Say</h2>
                        <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
                            Trusted by architects, contractors, and business owners across the nation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative hover:shadow-lg transition-shadow">
                                <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-200" />
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="https://www.google.com/search?q=Jahan+Polymers+Private+Limited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                            Read more reviews on Google <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white border-t border-slate-200 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Have a Project in Mind?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Contact our expert team for consultation and find the perfect polycarbonate solution for your needs.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-accent rounded-full hover:bg-orange-600 shadow-lg hover:shadow-accent/40">
                        Get a Free Quote
                    </a>
                </div>
            </section>
        </div>
    );
}
