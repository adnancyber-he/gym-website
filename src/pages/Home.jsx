import { motion } from "framer-motion";
import { Dumbbell, Shield, Zap, Target, Users, Layout, Award } from "lucide-react";
import Hero from "../components/Hero";
import ProgramCard from "../components/ProgramCard";
import CTA from "../components/CTA";

const Home = () => {
    const programs = [
        {
            title: "Weight Training",
            description: "Build raw strength and dense muscle with our world-class heavy lifting facility and coaching.",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
            icon: Dumbbell,
        },
        {
            title: "Fat Loss",
            description: "High-intensity metabolic conditioning designed to torch calories and reveal lean muscle definition.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
            icon: Zap,
        },
        {
            title: "CrossFit",
            description: "The ultimate test of fitness. Functional movements performed at high intensity for maximum versatility.",
            image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop",
            icon: Target,
        },
    ];

    return (
        <main>
            <Hero />

            {/* Features Text Section */}
            <section className="section-padding bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 inline-block">Our Foundation</span>
                            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
                                Not Just a Gym. <br />
                                <span className="text-white/40">An Elite Culture.</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-xl font-medium">
                                We believe that fitness is the foundation of a successful life. Our facility is designed for those who don't settle for average. From our hand-picked equipment to our results-driven programs, everything here is built to push you further.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                                        <Shield className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-sm uppercase tracking-wider mb-1">Secure & Private</h4>
                                        <p className="text-xs text-white/40">State-of-the-art facility access Control.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                                        <Users className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-sm uppercase tracking-wider mb-1">Strong Community</h4>
                                        <p className="text-xs text-white/40">Train alongside the most driven people.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video bg-surface-light border border-white/10 relative overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                    alt="Gym Floor"
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                                        <Award size={32} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating Stat */}
                            <div className="absolute -bottom-10 -right-10 bg-primary p-10 hidden md:block">
                                <p className="text-5xl font-black mb-1">98%</p>
                                <p className="text-xs uppercase tracking-[0.2em] font-bold">Success Rate</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Flagship Programs */}
            <section className="section-padding bg-surface-light overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 inline-block">Programs</span>
                            <h2 className="text-5xl md:text-7xl">Training <br /> <span className="text-white/40 italic">Disciplines.</span></h2>
                        </div>
                        <p className="text-white/60 max-w-sm mb-4 font-medium italic">
                            "Diversity in training is the key to longevity and peak performance. We've mastered the science of sweat."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, idx) => (
                            <ProgramCard key={idx} {...program} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default Home;
