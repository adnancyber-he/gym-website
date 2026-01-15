import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="section-padding relative overflow-hidden bg-black py-32">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 border-t border-r border-white/5" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl mb-8">
                            Take the first step <br />
                            to your <span className="text-primary italic">Legacy.</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
                            Don't wait for Monday. Don't wait for next month. Your journey starts the second you decide to show up. We're ready when you are.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="btn-primary group">
                                Begin Transformation
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            <button className="flex items-center gap-3 text-lg font-black uppercase tracking-widest hover:text-primary transition-colors py-4">
                                <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-none rotate-3 hover:rotate-0 transition-transform">
                                    <MessageCircle size={24} fill="currentColor" />
                                </div>
                                WhatsApp Expert
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square relative flex items-center justify-center">
                            <div className="w-full h-full border-2 border-primary/20 absolute rotate-6" />
                            <div className="w-full h-full border-2 border-white/10 absolute -rotate-3" />
                            <img
                                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
                                alt="Athlete training"
                                className="w-full h-[90%] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-surface p-8 border border-white/10 shadow-2xl">
                                <p className="text-4xl font-black text-primary">FREE TRIAL</p>
                                <p className="text-xs tracking-[0.3em] font-medium text-white/40">NO COMMITMENT REQUIRED</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
