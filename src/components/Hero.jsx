import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bg from "../assets/bg.png"

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const stats = [
        { value: "10+", label: "Years Experience" },
        { value: "5k+", label: "Active Members" },
        { value: "50+", label: "Elite Trainers" },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 pb-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bg}
                    alt="Athlete focusing"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* High-visibility background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-[50%]"
                >
                    {/* Rescaled Headline to fit screen better */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-condensed text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] leading-[0.85] flex flex-col mb-8 tracking-tighter uppercase italic"
                    >
                        <span>TRANSFORM</span>
                        <span className="text-primary">BODY.</span>
                        <span>TRANSFORM</span>
                        <span className="text-white">LIFE</span>
                    </motion.h1>

                    {/* Motivational Paragraph */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-white/70 mb-10 max-w-md leading-relaxed font-medium"
                    >
                        Stop settling for average. Our elite facility and results-driven culture are engineered to push your boundaries and forge a legacy that lasts.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 mb-14"
                    >
                        <button className="bg-primary hover:bg-primary-dark text-white font-black uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                            JOIN NOW
                        </button>
                        <button className="border-2 border-white hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300 transform hover:scale-105 active:scale-95">
                            FREE TRIAL
                        </button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-12 md:gap-16 items-start"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-black text-white mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white/40 leading-tight">
                                    {stat.label.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative side element */}
            <div className="hidden lg:block absolute right-12 bottom-12 z-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex items-center gap-4 rotate-90 origin-right translate-y-full"
                >
                    <div className="w-24 h-px bg-white/20" />
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">
                        EST. MMXXIV • IRONFIT GLOBAL
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
