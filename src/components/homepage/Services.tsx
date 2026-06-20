import React from 'react';
import { Link } from 'react-router-dom';
import {
    Stethoscope, HeartPulse, Activity, Monitor, Shield, Zap,
    CircleDot, Syringe, ScanLine, Cpu, ShieldAlert, Layers, Heart, Waves
} from 'lucide-react';
import { CLINIC_SERVICE, SERVICES } from '../../data/siteData';

const ICONS: Record<string, React.ReactNode> = {
    stethoscope: <Stethoscope size={22} strokeWidth={1.5} />,
    'heart-pulse': <HeartPulse size={22} strokeWidth={1.5} />,
    activity: <Activity size={22} strokeWidth={1.5} />,
    monitor: <Monitor size={22} strokeWidth={1.5} />,
    shield: <Shield size={22} strokeWidth={1.5} />,
    zap: <Zap size={22} strokeWidth={1.5} />,
    'circle-dot': <CircleDot size={22} strokeWidth={1.5} />,
    syringe: <Syringe size={22} strokeWidth={1.5} />,
    'scan-line': <ScanLine size={22} strokeWidth={1.5} />,
    cpu: <Cpu size={22} strokeWidth={1.5} />,
    'shield-alert': <ShieldAlert size={22} strokeWidth={1.5} />,
    layers: <Layers size={22} strokeWidth={1.5} />,
    heart: <Heart size={22} strokeWidth={1.5} />,
    waves: <Waves size={22} strokeWidth={1.5} />,
};

const Services: React.FC = () => {
    return (
        <section 
            className="relative py-24 font-sans overflow-hidden bg-[#F7FAFD]" 
            id="services"
        >
            {/* Premium Gradient Background Layer */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#Eef3f7] rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E0E9F0] rounded-full blur-[120px] opacity-60 mix-blend-multiply" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3">
                        In-House Care
                    </span>
                    <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-4">
                        Clinic Services
                    </h2>
                    <div className="w-12 h-[2px] bg-[#0056b3]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CLINIC_SERVICE.map((svc, i) => (
                        <Link
                            key={i}
                            to={`/services/${svc.slug}`}
                            className="group flex flex-col bg-white border border-gray-200/60 rounded-xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0056b3]/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#F0F6FF] rounded-full flex items-center justify-center text-[#0056b3] mb-6">
                                {ICONS[svc.icon]}
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#0b1b36] mb-3">
                                {svc.title}
                            </h3>
                            <p className="text-[15px] text-[#575A5F] leading-[1.6] flex-grow">
                                {svc.description}
                            </p>
                            <div className="text-[#0056b3] text-[14px] font-semibold mt-8 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more &rarr;
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3">
                        Advanced Procedures
                    </span>
                    <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-4">
                        Hospital Services
                    </h2>
                    <div className="w-12 h-[2px] bg-[#0056b3]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((svc, i) => (
                        <Link
                            key={i}
                            to={`/services/${svc.slug}`}
                            className="group flex flex-col bg-white border border-gray-200/60 rounded-xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0056b3]/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#F0F6FF] rounded-full flex items-center justify-center text-[#0056b3] mb-6">
                                {ICONS[svc.icon]}
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#0b1b36] mb-3">
                                {svc.title}
                            </h3>
                            <p className="text-[15px] text-[#575A5F] leading-[1.6] flex-grow">
                                {svc.description}
                            </p>
                            <div className="text-[#0056b3] text-[14px] font-semibold mt-8 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more &rarr;
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;