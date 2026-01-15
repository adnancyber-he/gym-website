import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const TrainerCard = ({ name, role, image, experience, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="group relative"
        >
            <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4 justify-center items-center backdrop-blur-md bg-black/40 py-4 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center">
                <h4 className="text-2xl mb-1 group-hover:text-primary transition-colors duration-300">{name}</h4>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
                    <p className="text-xs uppercase tracking-[0.2em] font-black text-white/50">{role}</p>
                    <span className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
                </div>
                <p className="text-sm italic text-white/40">{experience} Experience</p>
            </div>
        </motion.div>
    );
};

export default TrainerCard;
