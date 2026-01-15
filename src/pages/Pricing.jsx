import { motion } from "framer-motion";
import PricingCard from "../components/PricingCard";
import CTA from "../components/CTA";

const Pricing = () => {
    const plans = [
        {
            title: "Beginner",
            price: "49",
            features: [
                "Access to Gym Floor (6am-10pm)",
                "Basic Locker Room Access",
                "Initial Fitness Assessment",
                "Free Water & Towel Service",
                "Mobile App Workout Tracking",
            ],
            isPopular: false,
        },
        {
            title: "Pro",
            price: "89",
            features: [
                "24/7 Unlimited Access",
                "All Group Fitness Classes",
                "Monthly 1-on-1 Progress Review",
                "Sauna & Recovery Room Access",
                "Private Locker & Laundry Service",
                "10% Discount on Supplements",
            ],
            isPopular: true,
        },
        {
            title: "Elite",
            price: "199",
            features: [
                "All Pro Plan Features",
                "4 Personal Training Sessions/Mo",
                "Custom Nutrition Coaching",
                "VIP Lounge & Juice Bar Access",
                "Family/Guest Pass (2 per month)",
                "Unlimited Body Composition Tech",
                "Early Access to Events",
            ],
            isPopular: false,
        },
    ];

    return (
        <main className="pt-24 min-h-screen">
            <section className="section-padding bg-black relative overflow-hidden text-center lg:text-left">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:max-w-2xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 inline-block">Membership Plans</span>
                        <h1 className="text-6xl md:text-8xl mb-8">
                            Invest in <br />
                            <span className="text-stroke italic text-white/10">Yourself.</span>
                        </h1>
                        <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl">
                            No long-term contracts. No hidden fees. Just pure focus on your progress. Choose the plan that fits your ambition.
                        </p>
                    </motion.div>

                    <div className="flex bg-surface-light p-2 mb-8 hidden sm:flex">
                        <button className="bg-primary text-white px-8 py-3 text-xs font-black uppercase tracking-widest">Monthly</button>
                        <button className="text-white/40 hover:text-white px-8 py-3 text-xs font-black uppercase tracking-widest transition-colors">Yearly (Save 20%)</button>
                    </div>
                </div>
            </section>

            <section className="pb-24 px-6 md:px-12 lg:px-24 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-12">
                        {plans.map((plan, idx) => (
                            <PricingCard key={idx} {...plan} delay={idx * 0.1} />
                        ))}
                    </div>

                    <div className="mt-24 p-12 bg-black border border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="text-center lg:text-left">
                            <h3 className="text-3xl mb-4">Training for a Team?</h3>
                            <p className="text-white/40">We offer special rates for corporate groups and sports teams of 5 or more.</p>
                        </div>
                        <button className="btn-secondary whitespace-nowrap">Enquire About Corporate</button>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default Pricing;
