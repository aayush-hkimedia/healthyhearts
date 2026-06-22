import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { DOCTOR, NAV_LINKS, HOSPITAL_SERVICES } from '../../data/siteData';
import facebook from '../../assets/Icons/facebook.png';
import instagram from '../../assets/Icons/instagram.png';
import whatsapp from '../../assets/Icons/whatsapp.png';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const standardLinks = NAV_LINKS.filter(link => link.label !== 'Services' && link.label !== 'Resource');

    return (
        <footer className="bg-[#0b1b36] text-[#b3c2d1] pt-16 pb-8 font-sans tracking-wide">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 border-b border-[#1e3a5f]/60 pb-12 sm:pb-16">
                
                <div className="lg:col-span-3 space-y-5 sm:space-y-6">
                    <Link to="/" className="flex items-center gap-2 text-white font-bold text-[24px]">
                        <Heart className="text-[#0056b3]" size={26} />
                        <span>HealthyHearts</span>
                    </Link>
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#b3c2d1]/90 max-w-xs">
                        Conservative care for a healthier heart. Boutique cardiology practice serving Gurgaon and Delhi NCR.
                    </p>
                    <div className="space-y-4 pt-2">
                        <a
                            href="https://calendly.com/healthyheartsgurgaon/appointment?month=2026-06"
                            className="inline-flex items-center justify-center bg-[#0056b3] text-white px-6 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#004494] transition-all shadow-[0_4px_14px_0_rgba(0,86,179,0.39)] hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Book an Appointment
                        </a>
                        <div className="flex items-center gap-4 pt-1">
                            {[[facebook, "https://www.facebook.com/drmonikmehta/"], [instagram, "https://www.instagram.com/healthyheartsgurgaon/"], [whatsapp, "https://wa.me/919873214382"]].map(([icon, url], idx) => (
                                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity shrink-0">
                                    <img src={icon} alt="Social Icon" className="w-6 h-6 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 lg:pl-4">
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-5 sm:mb-6">
                        Hospital Services
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-4 text-[14px] sm:text-[15px]">
                        {HOSPITAL_SERVICES.map((service) => (
                            <li key={service.path}>
                                <Link to={service.path} className="hover:text-white transition-colors block py-0.5 sm:truncate">
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-5 sm:mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px]">
                        {standardLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="hover:text-white transition-colors block py-0.5">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-5 sm:mb-6">
                        Contact Us
                    </h4>
                    <ul className="space-y-4 text-[14px] sm:text-[15px]">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-[#0056b3] shrink-0" />
                            <a href={`tel:${DOCTOR.phone}`} className="hover:text-white transition-colors truncate">
                                {DOCTOR.phone}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-[#0056b3] shrink-0" />
                            <a href={`mailto:${DOCTOR.email}`} className="hover:text-white transition-colors break-all">
                                {DOCTOR.email}
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-[#0056b3] mt-1 shrink-0" />
                            <span className="leading-relaxed text-[#b3c2d1]/90 text-[14px] sm:text-[15px]">
                                c/o Apollo Clinic DLF Phase-1, Gurgaon, Haryana – 122002
                            </span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] sm:text-[14px] gap-4 text-center md:text-left text-[#b3c2d1]/80">
                <p>© {year} Healthy Hearts Gurgaon. All rights reserved.</p>
                <div className="flex gap-6 sm:gap-8">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;