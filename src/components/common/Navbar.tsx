import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    ChevronDown,
    Heart,
    Stethoscope,
    Activity,
    Zap,
    Search,
} from 'lucide-react';
import {
    NAV_LINKS,
    RESOURCES_DATA,
    HOSPITAL_SERVICES,
    CLINIC_SERVICE,
} from '../../data/siteData';
import whatsapp from '../../assets/Icons/whatsapp.png';

const CLINIC_ICONS: Record<string, React.ReactNode> = {
    Consultation: <Stethoscope size={20} />,
    ECG: <Activity size={20} />,
    'Pacemaker Testing & Followup': <Zap size={20} />,
};

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
        null,
    );
    const { pathname } = useLocation();
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMobileOpen(false);
        setSearchQuery('');
        setIsSearchFocused(false);
        setExpandedMobileMenu(null);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredClinic = CLINIC_SERVICE.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const filteredHospital = HOSPITAL_SERVICES.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const SearchResults = () => {
        if (!searchQuery) return null;

        if (filteredClinic.length === 0 && filteredHospital.length === 0) {
            return (
                <div className="p-4 text-[14px] text-[#575A5F] text-center">
                    No services found.
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-4 p-4">
                {filteredClinic.length > 0 && (
                    <div>
                        <h4 className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest mb-2 px-2">
                            Clinic Services
                        </h4>
                        <ul className="flex flex-col">
                            {filteredClinic.map((item) => (
                                <li key={item.slug}>
                                    <Link
                                        to={`/services/${item.slug}`}
                                        className="flex items-center gap-2 px-2 py-2 text-[14px] text-[#575A5F] hover:text-[#0056b3] hover:bg-[#F0F6FF] rounded-lg transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {filteredHospital.length > 0 && (
                    <div>
                        <h4 className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest mb-2 px-2">
                            Hospital Services
                        </h4>
                        <ul className="flex flex-col">
                            {filteredHospital.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="block px-2 py-2 text-[14px] text-[#575A5F] hover:text-[#0056b3] hover:bg-[#F0F6FF] rounded-lg transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    const toggleMobileMenu = (menuName: string) => {
        setExpandedMobileMenu(
            expandedMobileMenu === menuName ? null : menuName,
        );
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]'
                    : 'bg-[#FFFFFF]'
            }`}
        >
            <nav className="flex justify-between items-center px-4 md:px-6 max-w-[1400px] mx-auto h-[76px]">
                <Link
                    to="/"
                    className="flex items-center gap-1.5 sm:gap-2 text-[#0b1b36] font-bold text-[22px] sm:text-[22px] hover:opacity-80 transition-opacity"
                >
                    <Heart
                        className="text-[#0056b3]"
                        size={26}
                        strokeWidth={2.5}
                    />
                    <span>HealthyHearts</span>
                </Link>

                <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
                    <ul className="flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-[#575A5F] h-full">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.path;
                            const hasDropdown =
                                link.label === 'Services' ||
                                link.label === 'Resource';

                            return (
                                <li
                                    key={link.path}
                                    className="relative group h-full flex items-center"
                                >
                                    {hasDropdown ? (
                                        <span className="flex items-center gap-1 py-1 cursor-default group-hover:text-[#0056b3] transition-colors duration-300">
                                            {link.label}
                                            <ChevronDown
                                                size={16}
                                                className="mt-[2px] transition-transform duration-300 group-hover:rotate-180"
                                            />
                                        </span>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`flex items-center gap-1 py-1 transition-all duration-300 ${isActive ? 'text-[#0056b3] font-semibold' : 'group-hover:text-[#0056b3]'}`}
                                        >
                                            {link.label}
                                        </Link>
                                    )}

                                    {!hasDropdown && (
                                        <span
                                            className={`absolute bottom-[24px] left-0 h-[2px] bg-[#0056b3] rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                        />
                                    )}

                                    {hasDropdown && (
                                        <div className="absolute top-[60px] left-[-20px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 pt-4 z-50">
                                            <div
                                                className={`bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,86,179,0.2)] border border-gray-100 p-8 flex ${link.label === 'Services' ? 'w-[560px] gap-10' : 'w-[220px] flex-col'}`}
                                            >
                                                {link.label === 'Services' ? (
                                                    <>
                                                        <div className="flex-1">
                                                            <h3 className="font-bold text-[#0056b3] mb-4 text-[12px] uppercase tracking-widest">
                                                                Clinic
                                                            </h3>
                                                            <ul className="flex flex-col gap-3">
                                                                {CLINIC_SERVICE.map(
                                                                    (item) => (
                                                                        <li
                                                                            key={
                                                                                item.slug
                                                                            }
                                                                        >
                                                                            <Link
                                                                                to={`/services/${item.slug}`}
                                                                                className="text-sm flex items-center gap-2 hover:text-[#0056b3] transition-all"
                                                                            >
                                                                                {
                                                                                    CLINIC_ICONS[
                                                                                        item
                                                                                            .title
                                                                                    ]
                                                                                }{' '}
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="flex-1 border-l border-gray-100 pl-8">
                                                            <h3 className="font-bold text-[#0056b3] mb-4 text-[12px] uppercase tracking-widest">
                                                                Hospital
                                                            </h3>
                                                            <ul className="flex flex-col gap-3">
                                                                {HOSPITAL_SERVICES.map(
                                                                    (item) => (
                                                                        <li
                                                                            key={
                                                                                item.path
                                                                            }
                                                                        >
                                                                            <Link
                                                                                to={
                                                                                    item.path
                                                                                }
                                                                                className="text-sm hover:text-[#0056b3] transition-all block"
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <ul className="flex flex-col gap-3">
                                                        {RESOURCES_DATA.map(
                                                            (item) => (
                                                                <li
                                                                    key={
                                                                        item.path
                                                                    }
                                                                >
                                                                    <Link
                                                                        to={
                                                                            item.path
                                                                        }
                                                                        className="text-sm hover:text-[#0056b3] transition-all block"
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="relative" ref={searchRef}>
                        <div className="relative flex items-center">
                            <Search
                                size={16}
                                className={`absolute left-3.5 transition-colors ${isSearchFocused ? 'text-[#0056b3]' : 'text-[#575A5F]'}`}
                            />
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                className="w-[180px] xl:w-[220px] pl-10 pr-4 py-2 bg-[#F0F6FF]/50 border border-gray-200 hover:border-[#0056b3]/50 rounded-xl text-[14px] text-[#0b1b36] focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] focus:bg-white transition-all placeholder:text-[#575A5F]/70"
                            />
                        </div>

                        {searchQuery && isSearchFocused && (
                            <div className="absolute top-[calc(100%+12px)] right-0 w-[320px] bg-white rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2">
                                <SearchResults />
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="https://wa.me/919873214382"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 h-[42px] rounded-full bg-[#F0F6FF] hover:bg-[#E5EFFF] text-[#0056b3] font-semibold text-[14px] transition-all duration-300 group whitespace-nowrap"
                    >
                        <img
                            src={whatsapp}
                            alt="WhatsApp"
                            className="w-[20px] h-[20px] object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <span>+91 98732 14382</span>
                    </a>
                </div>

                <div className="lg:hidden flex items-center gap-2 sm:gap-3">
                    <a
                        href="https://wa.me/919873214382"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#F0F6FF] hover:bg-[#E5EFFF] text-[#0056b3] font-semibold text-[14px] transition-colors whitespace-nowrap"
                    >
                        <img
                            src={whatsapp}
                            alt="WhatsApp"
                            className="w-[18px] h-[18px] object-contain"
                        />
                        <span className="hidden sm:inline">
                            +91 98732 14382
                        </span>
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-[#0b1b36] p-1 rounded hover:bg-gray-100 transition-colors"
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {mobileOpen && (
                <div className="lg:hidden absolute w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-4 max-h-[calc(100vh-76px)] overflow-y-auto">
                    <div className="relative mb-2">
                        <Search
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#575A5F]"
                        />
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-[#F0F6FF]/50 border border-gray-200 rounded-lg text-[14px] text-[#0b1b36] focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] transition-all"
                        />
                    </div>

                    {searchQuery ? (
                        <div className="bg-[#FCFDFF] rounded-xl border border-gray-100 mb-2">
                            <SearchResults />
                        </div>
                    ) : (
                        <>
                            {NAV_LINKS.map((link) => {
                                const hasDropdown =
                                    link.label === 'Services' ||
                                    link.label === 'Resource';

                                if (hasDropdown) {
                                    const isExpanded =
                                        expandedMobileMenu === link.label;
                                    return (
                                        <div
                                            key={link.path}
                                            className="flex flex-col"
                                        >
                                            <button
                                                onClick={() =>
                                                    toggleMobileMenu(link.label)
                                                }
                                                className="flex items-center justify-between text-[16px] font-medium text-[#575A5F] hover:text-[#0056b3] py-2 text-left"
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform duration-300 ${
                                                        isExpanded
                                                            ? 'rotate-180'
                                                            : ''
                                                    }`}
                                                />
                                            </button>
                                            {isExpanded && (
                                                <div className="pl-4 pb-2 flex flex-col gap-3 border-l-2 border-[#F0F6FF] ml-2 mt-2">
                                                    {link.label ===
                                                        'Services' && (
                                                        <>
                                                            <h4 className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest mt-1 mb-1">
                                                                Clinic
                                                            </h4>
                                                            {CLINIC_SERVICE.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.slug
                                                                        }
                                                                        to={`/services/${item.slug}`}
                                                                        className="text-[14px] text-[#575A5F] py-1 hover:text-[#0056b3]"
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </Link>
                                                                ),
                                                            )}
                                                            <h4 className="text-[11px] font-bold text-[#0056b3] uppercase tracking-widest mt-4 mb-1">
                                                                Hospital
                                                            </h4>
                                                            {HOSPITAL_SERVICES.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.path
                                                                        }
                                                                        to={
                                                                            item.path
                                                                        }
                                                                        className="text-[14px] text-[#575A5F] py-1 hover:text-[#0056b3]"
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Link>
                                                                ),
                                                            )}
                                                        </>
                                                    )}
                                                    {link.label ===
                                                        'Resource' && (
                                                        <>
                                                            {RESOURCES_DATA.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.path
                                                                        }
                                                                        to={
                                                                            item.path
                                                                        }
                                                                        className="text-[14px] text-[#575A5F] py-1 hover:text-[#0056b3]"
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Link>
                                                                ),
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="text-[16px] font-medium text-[#575A5F] hover:text-[#0056b3] py-2"
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </>
                    )}

                    <div className="flex flex-col gap-3 mt-4 border-t border-gray-100 pt-6">
                        <a
                            href="https://wa.me/919873214382"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2.5 py-3 px-6 rounded-lg bg-[#F0F6FF] text-[#0056b3] text-center font-semibold transition-colors hover:bg-[#E5EFFF]"
                        >
                            <img
                                src={whatsapp}
                                alt="WhatsApp"
                                className="w-[20px] h-[20px] object-contain"
                            />
                            +91 98732 14382
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
