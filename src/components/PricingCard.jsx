import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { cn } from "../utils/cn";

const PricingCard = ({ title, price, features, isPopular, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className={cn(
                "relative p-8 md:p-12 border transition-all duration-500 flex flex-col h-full",
                isPopular ? "bg-primary border-primary scale-105 z-10" : "bg-surface-light border-white/5 hover:border-white/20"
            )}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h4 className={cn("text-2xl mb-4", isPopular ? "text-white" : "text-white/60")}>{title}</h4>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">$</span>
                    <span className="text-7xl font-black tracking-tighter">{price}</span>
                    <span className={cn("text-sm uppercase tracking-widest font-bold", isPopular ? "text-white/80" : "text-white/40")}>/Month</span>
                </div>
            </div>

            <div className="flex-grow space-y-4 mb-12">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                        <div className={cn(
                            "mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                            isPopular ? "bg-white/20 text-white" : "bg-primary/20 text-primary"
                        )}>
                            <Check size={12} strokeWidth={4} />
                        </div>
                        <span className={cn("text-sm md:text-base", isPopular ? "text-white/90" : "text-white/60")}>
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            <button className={cn(
                "w-full py-4 text-sm font-black uppercase tracking-[0.2em] transition-all duration-300",
                isPopular
                    ? "bg-white text-black hover:bg-black hover:text-white"
                    : "bg-primary text-white hover:bg-primary-dark"
            )}>
                Select This Plan
            </button>

            {!isPopular && (
                <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-white/30 flex items-center justify-center gap-2">
                    <Info size={12} /> No hidden fees, cancel anytime.
                </p>
            )}
        </motion.div>
    );
};

export default PricingCard;
