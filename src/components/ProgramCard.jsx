import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProgramCard = ({ title, description, image, icon: Icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="group relative h-[500px] overflow-hidden bg-surface-light border border-white/5 cursor-pointer"
        >
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img src={image} alt={title} className="w-full h-full object-cover grayscale brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-3xl mb-3">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {description}
                    </p>
                </div>

                <div className="flex justify-between items-center overflow-hidden">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-primary transition-colors duration-300">
                        Learn More
                    </span>
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>

            {/* Red Border Overlay on Hover */}
            <div className="absolute inset-0 border-2 border-primary scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default ProgramCard;
