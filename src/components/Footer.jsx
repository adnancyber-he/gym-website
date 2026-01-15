import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface-light border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="IronFit Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="text-2xl font-display font-black tracking-tighter uppercase italic">
                            Iron<span className="text-primary">Fit</span>
                        </span>
                    </Link>
                    <p className="text-white/60 leading-relaxed font-medium">
                        Join the movement. We're more than just a gym — we're a high-performance community dedicated to pushing limits and redefining what's possible.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl mb-6">Explore</h4>
                    <ul className="space-y-4">
                        {["About Us", "Our Programs", "Meet Trainers", "Membership Plans", "Contact"].map((link) => (
                            <li key={link}>
                                <Link
                                    to={`/${link.toLowerCase().split(" ")[0]}`}
                                    className="text-white/60 hover:text-primary transition-colors inline-block"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl mb-6">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 group">
                            <MapPin className="text-primary mt-1" size={20} />
                            <span className="text-white/60 group-hover:text-white transition-colors">
                                123 Power Street, Fitness District, NY 10001
                            </span>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <Phone className="text-primary" size={20} />
                            <span className="text-white/60 group-hover:text-white transition-colors">
                                +1 (555) 012-3456
                            </span>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <Mail className="text-primary" size={20} />
                            <span className="text-white/60 group-hover:text-white transition-colors">
                                hello@ironfit-gym.com
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-xl mb-6">Opening Hours</h4>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center text-white/60">
                            <span className="flex items-center gap-2"><Clock size={16} /> Mon - Fri:</span>
                            <span className="font-bold text-white">05:00 - 23:00</span>
                        </li>
                        <li className="flex justify-between items-center text-white/60">
                            <span className="flex items-center gap-2"><Clock size={16} /> Sat - Sun:</span>
                            <span className="font-bold text-white">07:00 - 21:00</span>
                        </li>
                        <li className="mt-6">
                            <div className="p-4 border border-primary/20 bg-primary/5 rounded-none text-sm italic">
                                "The only bad workout is the one that didn't happen."
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                <p>© {currentYear} IronFit Gym. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
