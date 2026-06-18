import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, Stethoscope, Activity, Zap } from 'lucide-react';
import { NAV_LINKS, DOCTOR, RESOURCES, HOSPITAL_SERVICES, CLINIC_SERVICES } from '../../data/siteData';

// Map icons to the specific clinic service titles
const CLINIC_ICONS: Record<string, React.ReactNode> = {
    'Consultation': <Stethoscope size={20} />,
    'ECG': <Activity size={20} />,
    'Pacemaker Testing & Followup': <Zap size={20} />,
};

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]' : 'bg-[#FFFFFF]'
            }`}
        >
            <nav className="flex justify-between items-center px-6 md:px-4 max-w-7xl mx-auto h-[76px]">
                <Link to="/" className="flex items-center gap-2 text-[#0b1b36] font-bold text-[22px] hover:opacity-80 transition-opacity">
                    <Heart className="text-[#0056b3]" size={26} strokeWidth={2.5} />
                    HealthyHearts
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#575A5F] h-full">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.path;
                        const hasDropdown = link.label === 'Services' || link.label === 'Resource';

                        return (
                            <li key={link.path} className="relative group h-full flex items-center">
                                <Link
                                    to={link.path}
                                    className={`flex items-center gap-1 py-1 transition-all duration-300 ${
                                        isActive ? 'text-[#0056b3] font-semibold' : 'group-hover:text-[#0056b3]'
                                    }`}
                                >
                                    {link.label}
                                    {hasDropdown && <ChevronDown size={16} className="mt-[2px] transition-transform duration-300 group-hover:rotate-180" />}
                                </Link>

                                <span className={`absolute bottom-[24px] left-0 h-[2px] bg-[#0056b3] rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />

                                {hasDropdown && (
                                    <div className="absolute top-[60px] left-[-20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 pt-4 z-50">
                                        <div className={`bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,86,179,0.2)] border border-gray-100 p-8 flex ${link.label === 'Services' ? 'w-[560px] gap-10' : 'w-[220px] flex-col'}`}>
                                            {link.label === 'Services' ? (
                                                <>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-[#0056b3] mb-4 text-[12px] uppercase tracking-widest">Clinic</h3>
                                                        <ul className="flex flex-col gap-3">
                                                            {CLINIC_SERVICES.map((item) => (
                                                                <li key={item}>
                                                                    <Link to="#" className="text-sm flex items-center gap-2 hover:text-[#0056b3] transition-all">
                                                                        {CLINIC_ICONS[item]} {item}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex-1 border-l border-gray-100 pl-8">
                                                        <h3 className="font-bold text-[#0056b3] mb-4 text-[12px] uppercase tracking-widest">Hospital</h3>
                                                        <ul className="flex flex-col gap-3">
                                                            {HOSPITAL_SERVICES.map((item) => (
                                                                <li key={item}><Link to="#" className="text-sm hover:text-[#0056b3] transition-all block">{item}</Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </>
                                            ) : (
                                                <ul className="flex flex-col gap-3">
                                                    {RESOURCES.map((item) => (
                                                        <li key={item}><Link to="#" className="text-sm hover:text-[#0056b3] transition-all block">{item}</Link></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden md:block">
                    <a href={`tel:${DOCTOR?.phone || '9873214382'}`} className="bg-[#0A2540] hover:bg-[#0056b3] text-white py-2.5 px-6 rounded text-[14px] font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 block">
                        Book Appointment
                    </a>
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#0b1b36] p-2 rounded-md hover:bg-gray-100 transition-colors">
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;