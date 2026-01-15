import { motion } from "framer-motion";
import TrainerCard from "../components/TrainerCard";
import CTA from "../components/CTA";

const Trainers = () => {
    const trainers = [
        {
            name: "Marcus Thorne",
            role: "Head Strength Coach",
            image: "https://images.unsplash.com/photo-1567013127542-490d1bfcb057?q=80&w=1974&auto=format&fit=crop",
            experience: "15 Years",
        },
        {
            name: "Sarah Jenkins",
            role: "Nutrition & Fat Loss",
            image: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=1974&auto=format&fit=crop",
            experience: "8 Years",
        },
        {
            name: "David 'Tank' Reed",
            role: "Bodybuilding Expert",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
            experience: "12 Years",
        },
        {
            name: "Elena Rodriguez",
            role: "HIIT & Mobility",
            image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop",
            experience: "6 Years",
        },
        {
            name: "James Chen",
            role: "CrossFit Level 3",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
            experience: "10 Years",
        },
        {
            name: "Mia Volkov",
            role: "Powerlifting Coach",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
            experience: "9 Years",
        },
    ];

    return (
        <main className="pt-24 min-h-screen">
            <section className="section-padding bg-black relative overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-white rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 inline-block">The Coaching Staff</span>
                        <h1 className="text-6xl md:text-8xl mb-8">
                            Masters of the <br /> <span className="text-primary italic">Craft.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-16">
                            Our trainers don't just tell you what to do — they've lived it. Hand-picked for their expertise, empathy, and intensity.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {trainers.map((trainer, idx) => (
                            <TrainerCard key={idx} {...trainer} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment Teaser */}
            <section className="section-padding bg-surface-light border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl mb-6 uppercase tracking-tighter">Think you have what it takes?</h2>
                    <p className="text-white/40 mb-8 font-medium">We're always looking for elite coaches to join our rebellion against mediocrity.</p>
                    <button className="btn-secondary">Apply to Join the Team</button>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default Trainers;
