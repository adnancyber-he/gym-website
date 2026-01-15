import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, Globe } from "lucide-react";

const Contact = () => {
    return (
        <main className="pt-24 min-h-screen">
            <section className="section-padding bg-black relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none">
                    <span className="text-[500px] font-black absolute top-0 left-0 leading-none select-none">JOIN</span>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 inline-block italic">No More Excuses</span>
                        <h1 className="text-6xl md:text-8xl mb-8">Get in <span className="text-primary">Touch.</span></h1>
                        <p className="text-white/60 text-lg font-medium leading-relaxed">
                            Have questions about our programs, trainers, or memberships? Our elite team is ready to help you navigate your fitness journey.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-surface-light p-10 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-2 h-full bg-primary translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</p>
                                            <p className="text-xl font-black">+1 (555) 012-3456</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</p>
                                            <p className="text-xl font-black">hello@ironfit.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Visit Us</p>
                                            <p className="text-xl font-black">123 Power St, NY</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Hours</p>
                                            <p className="text-xl font-black italic">Open 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-[#25D366] text-white py-6 flex items-center justify-center gap-4 font-black uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform">
                                <MessageCircle size={28} fill="currentColor" />
                                WhatsApp Support
                            </button>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form className="bg-surface-light p-10 md:p-16 border border-white/5 space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-black text-white/40">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-black/50 border border-white/10 px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-black text-white/40">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-black/50 border border-white/10 px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-black text-white/40">Subject</label>
                                    <select className="w-full bg-black/50 border border-white/10 px-6 py-4 outline-none focus:border-primary transition-colors text-white appearance-none">
                                        <option>Membership Inquiry</option>
                                        <option>Personal Training</option>
                                        <option>Free Trial Request</option>
                                        <option>General Question</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-black text-white/40">Your Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your goals..."
                                        className="w-full bg-black/50 border border-white/10 px-6 py-4 outline-none focus:border-primary transition-colors text-white resize-none"
                                    />
                                </div>

                                <button className="btn-primary w-full md:w-auto px-16">
                                    Send Message
                                    <Send className="ml-3" size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[500px] w-full bg-surface-light border-y border-white/10 relative">
                <div className="absolute inset-0 grayscale opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop"
                        className="w-full h-full object-cover"
                        alt="Global Map"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div className="bg-black/80 backdrop-blur-md p-12 border border-primary/20 max-w-xl">
                        <Globe className="text-primary mx-auto mb-6" size={48} />
                        <h3 className="text-3xl mb-4 uppercase">Find Your IronFit</h3>
                        <p className="text-white/60 mb-8 italic">IronFit has 12 locations across New York. Use our member app to find the one closest to you.</p>
                        <button className="btn-secondary">Open Location Finder</button>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default Contact;
