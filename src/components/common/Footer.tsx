import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { DOCTOR, NAV_LINKS, SERVICES } from '../../data/siteData';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0b1b36] text-[#b3c2d1] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
               
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white font-bold text-[22px]"
                    >
                        <Heart className="text-[#0056b3]" size={24} />
                        HealthyHearts
                    </Link>
                    <p className="text-[14px] leading-relaxed max-w-[250px]">
                        Conservative care for a healthier heart. Boutique
                        cardiology practice serving Gurgaon and Delhi NCR.
                    </p>
                    <a
                        href={`tel:${DOCTOR.phone}`}
                        className="inline-block bg-[#0056b3] text-white px-6 py-2.5 rounded font-semibold text-[14px] hover:bg-[#004494] transition-colors"
                    >
                        Book an Appointment
                    </a>
                </div>

                <div>
                    <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
                        Our Services
                    </h4>
                    <ul className="space-y-3 text-[14px]">
                        {SERVICES.slice(0, 5).map((service, index) => (
                            <li key={index}>
                                <Link
                                    to="/services"
                                    className="hover:text-white transition-colors"
                                >
                                    {service.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-[14px]">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
                        Contact Us
                    </h4>
                    <ul className="space-y-4 text-[14px]">
                        <li className="flex items-center gap-3">
                            <Phone size={16} className="text-[#0056b3]" />
                            <a
                                href={`tel:${DOCTOR.phone}`}
                                className="hover:text-white"
                            >
                                {DOCTOR.phone}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-[#0056b3]" />
                            <a
                                href={`mailto:${DOCTOR.email}`}
                                className="hover:text-white"
                            >
                                {DOCTOR.email}
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={16} className="text-[#0056b3] mt-1" />
                            <span>
                                c/o Apollo Clinic DLF Phase-1, Gurgaon,
                                Haryana – 122002
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#1e3a5f] flex flex-col md:flex-row justify-between items-center text-[12px] gap-4">
                <p>© {year} Healthy Hearts Gurgaon. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/privacy" className="hover:text-white">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:text-white">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
