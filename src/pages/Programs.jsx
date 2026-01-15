import { motion } from "framer-motion";
import { Dumbbell, Zap, Target, Users, Layout, Award, Heart, Infinity } from "lucide-react";
import logo from "../assets/logo.png";
import ProgramCard from "../components/ProgramCard";
import CTA from "../components/CTA";

const Programs = () => {
    const allPrograms = [
        {
            title: "Weight Training",
            description: "Focus on compound movements and progressive overload to build maximum strength and muscle mass.",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
            icon: Dumbbell,
        },
        {
            title: "Fat Loss / HIIT",
            description: "Torch body fat with high-intensity interval training designed to spike your metabolism for 48 hours.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
            icon: Zap,
        },
        {
            title: "CrossFit",
            description: "Join our daily WODs that combine weightlifting, gymnastics, and endurance for total athletic capacity.",
            image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop",
            icon: Target,
        },
        {
            title: "Personal Training",
            description: "1-on-1 coaching with customized nutrition and training plans tailored specifically to your genetic profile.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
            icon: Users,
        },
        {
            title: "Yoga & Mobility",
            description: "Increase flexibility, range of motion, and mental focus to improve recovery and prevent injury.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
            icon: Heart,
        },
        {
            title: "Functional Training",
            description: "Train for the way your body was designed to move. Improve stability, core strength, and daily performance.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
            icon: Infinity,
        },
    ];

    return (
        <main className="pt-24">
            {/* Header Section */}
            <section className="section-padding bg-black border-b border-white/5 overflow-hidden text-center lg:text-left">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:max-w-2xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 inline-block italic">Engineered for Performance</span>
                        <h1 className="text-6xl md:text-8xl mb-8">
                            Choose Your <br />
                            <span className="text-primary italic">Battle.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                            We don't believe in one-size-fits-all. Every goal requires a specific strategy. Explore our specialized training disciplines and find where you belong.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/20 flex items-center justify-center animate-spin-slow">
                            <div className="absolute inset-0 flex items-center justify-center -rotate-12">
                                <span className="text-white/5 text-[200px] font-black italic">IRON</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={logo} alt="IronFit Logo" className="w-24 h-24 object-contain opacity-20" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="section-padding bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {allPrograms.map((program, idx) => (
                            <ProgramCard key={idx} {...program} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison or Quote Section */}
            <section className="py-24 bg-surface-light overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-5xl italic font-black uppercase mb-12"
                    >
                        "The hardest part isn't the workout. <br className="hidden md:block" />
                        <span className="text-primary">It's deciding to Start."</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-6xl font-black mb-2">100+</span>
                            <span className="text-xs tracking-[0.3em] font-medium text-white/40">WEEKLY CLASSES</span>
                        </div>
                        <div className="w-px h-16 bg-white/10 hidden md:block" />
                        <div className="flex flex-col items-center">
                            <span className="text-6xl font-black mb-2">3k+</span>
                            <span className="text-xs tracking-[0.3em] font-medium text-white/40">SQ FT GYM FLOOR</span>
                        </div>
                        <div className="w-px h-16 bg-white/10 hidden md:block" />
                        <div className="flex flex-col items-center">
                            <span className="text-6xl font-black mb-2">12</span>
                            <span className="text-xs tracking-[0.3em] font-medium text-white/40">ELITE COACHING STAFF</span>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default Programs;
