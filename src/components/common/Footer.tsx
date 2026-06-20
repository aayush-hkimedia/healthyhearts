import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { 
    DOCTOR, 
    NAV_LINKS,  
    HOSPITAL_SERVICES, 
} from '../../data/siteData';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    const standardLinks = NAV_LINKS.filter(
        link => link.label !== 'Services' && link.label !== 'Resource'
    );

    return (
        <footer className="bg-[#0b1b36] text-[#b3c2d1] pt-12 pb-2 font-sans tracking-wide">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-16 gap-y-16 pb-20">
               
                <div className="lg:col-span-3 space-y-6">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white font-bold text-[24px]"
                    >
                        <Heart className="text-[#0056b3]" size={26} />
                        HealthyHearts
                    </Link>
                    <p className="text-[15px] leading-relaxed text-[#b3c2d1]/90 max-w-[280px]">
                        Conservative care for a healthier heart. Boutique
                        cardiology practice serving Gurgaon and Delhi NCR.
                    </p>
                    <a
                        href={`https://calendly.com/healthyheartsgurgaon/appointment?month=2026-06`}
                        className="inline-block bg-[#0056b3] text-white px-7 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#004494] transition-all mt-2 shadow-[0_4px_14px_0_rgba(0,86,179,0.39)] hover:-translate-y-0.5"
                    >
                        Book an Appointment
                    </a>
                </div>

                <div className="lg:col-span-4 lg:pl-4">
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-7">
                        Hospital Services
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                        {HOSPITAL_SERVICES.map((service) => (
                            <li key={service.path}>
                                <Link
                                    to={service.path}
                                    className="hover:text-white transition-colors block whitespace-nowrap py-0.5"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2 lg:pl-4">
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-7">
                        Quick Links
                    </h4>
                    <ul className="space-y-4 text-[15px]">
                        {standardLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="hover:text-white transition-colors block py-0.5"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-7">
                        Contact Us
                    </h4>
                    <ul className="space-y-5 text-[15px]">
                        <li className="flex items-center gap-3.5">
                            <Phone size={18} className="text-[#0056b3] shrink-0" />
                            <a
                                href={`tel:${DOCTOR.phone}`}
                                className="hover:text-white transition-colors"
                            >
                                {DOCTOR.phone}
                            </a>
                        </li>
                        <li className="flex items-center gap-3.5">
                            <Mail size={18} className="text-[#0056b3] shrink-0" />
                            <a
                                href={`mailto:${DOCTOR.email}`}
                                className="hover:text-white transition-colors break-all"
                            >
                                {DOCTOR.email}
                            </a>
                        </li>
                        <li className="flex items-start gap-3.5">
                            <MapPin size={18} className="text-[#0056b3] mt-1 shrink-0" />
                            <span className="leading-relaxed text-[#b3c2d1]/90">
                                c/o Apollo Clinic DLF Phase-1, Gurgaon,
                                Haryana – 122002
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 pt-10 border-t border-[#1e3a5f]/60 flex flex-col md:flex-row justify-between items-center text-[14px] gap-6 text-[#b3c2d1]/80">
                <p>© {year} Healthy Hearts Gurgaon. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link to="/privacy" className="hover:text-white transition-colors">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:text-white transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;