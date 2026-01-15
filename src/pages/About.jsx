import { motion } from "framer-motion";
import { Quote, Target, Heart, Zap } from "lucide-react";

const About = () => {
    return (
        <main className="pt-24 min-h-screen">
            {/* Page Header */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-black border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <span className="text-[300px] font-black absolute -top-20 -right-20 leading-none">IRON</span>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 inline-block">The Origin Story</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8">
                            Legacy is <br /> <span className="text-stroke">Built</span> Here.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding bg-surface">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-12">
                            <Quote className="text-primary mb-6" size={48} />
                            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                                It started with 4 walls, two benches, and a vision to be uncaged.
                            </h2>
                            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                                <p>
                                    IronFit Gym wasn't founded by corporate suits or investors looking for a quick buck. It was founded in 2014 by Marcus Thorne, a competitive lifter who was tired of "commercial gym culture."
                                </p>
                                <p>
                                    He wanted a place where the air smelled of chalk and hustle, not perfume and policy. A place where you could drop weights, scream your lungs out on a PR, and find a brotherhood that actually gave a damn about your progress.
                                </p>
                                <p>
                                    Today, we've grown into a 20,000 sq ft facility, but that "underground" heart still beats in everything we do. We don't care about your followers; we care about your fortitude.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                            <div>
                                <p className="text-3xl font-black text-primary mb-2">2014</p>
                                <p className="text-xs uppercase tracking-widest font-bold text-white/40">Founded In New York</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-primary mb-2">24/7</p>
                                <p className="text-xs uppercase tracking-widest font-bold text-white/40">Access For Members</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" className="w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" alt="Gym" />
                        <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" className="w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 mt-12" alt="Gym" />
                        <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1974&auto=format&fit=crop" className="w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 -mt-12" alt="Gym" />
                        <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop" className="w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" alt="Gym" />
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-surface-light">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl md:text-6xl mb-6">Our DNA</h2>
                        <p className="text-white/60">Success isn't just about the physical. It's about building a mindset that can withstand any storm.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Precision",
                                text: "Every program is backed by sports science. We don't guess; we calculate. Your results are a mathematical certainty if you follow the blueprint."
                            },
                            {
                                icon: Heart,
                                title: "Community",
                                text: "No one climbs the mountain alone. We foster an environment of radical support, where every PR is celebrated by the whole room."
                            },
                            {
                                icon: Zap,
                                title: "Intensity",
                                text: "Life is short. If you're going to do something, do it with everything you've got. We cultivate the grit required to push past perceived limits."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 border border-white/5 bg-black hover:border-primary/50 transition-colors group text-center"
                            >
                                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl mb-4 uppercase">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
