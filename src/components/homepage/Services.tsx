import React from 'react';
import { Link } from 'react-router-dom';
import {
    Stethoscope,
    HeartPulse,
    Activity,
    Monitor,
    Shield,
    Zap,
    CircleDot,
    Syringe,
    ScanLine,
    Cpu,
    ShieldAlert,
    Layers,
    Heart,
    Waves,
    ArrowRight
} from 'lucide-react';
import { CLINIC_SERVICE, SERVICES } from '../../data/siteData';

const ICONS: Record<string, React.ReactNode> = {
    stethoscope: <Stethoscope size={24} strokeWidth={1.5} />,
    'heart-pulse': <HeartPulse size={24} strokeWidth={1.5} />,
    activity: <Activity size={24} strokeWidth={1.5} />,
    monitor: <Monitor size={24} strokeWidth={1.5} />,
    shield: <Shield size={24} strokeWidth={1.5} />,
    zap: <Zap size={24} strokeWidth={1.5} />,
    'circle-dot': <CircleDot size={24} strokeWidth={1.5} />,
    syringe: <Syringe size={24} strokeWidth={1.5} />,
    'scan-line': <ScanLine size={24} strokeWidth={1.5} />,
    cpu: <Cpu size={24} strokeWidth={1.5} />,
    'shield-alert': <ShieldAlert size={24} strokeWidth={1.5} />,
    layers: <Layers size={24} strokeWidth={1.5} />,
    heart: <Heart size={24} strokeWidth={1.5} />,
    waves: <Waves size={24} strokeWidth={1.5} />,
};

const Services: React.FC = () => {
    return (
        <section className="bg-[#F8FAFC] py-24 font-sans" id="services">
            
            {/* CLINIC SERVICES */}
            <div className="max-w-7xl mx-auto px-6 pb-20 border-b border-gray-200">
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] bg-[#0056b3]/10 px-4 py-1.5 rounded-full font-bold text-[12px] uppercase tracking-[0.15em] mb-4">
                        In-House Care
                    </span>
                    <h2 className="text-[36px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight relative pb-5">
                        Clinic Services
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#0056b3] rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CLINIC_SERVICE.map((svc, i) => (
                        <Link
                            key={i}
                            to={`/services/${svc.slug}`}
                            className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start relative overflow-hidden cursor-pointer"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0056b3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                            <div className="w-14 h-14 bg-[#F0F6FF] text-[#0056b3] rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0056b3] group-hover:text-white group-hover:scale-110">
                                {ICONS[svc.icon]}
                            </div>
                            
                            <h3 className="text-[20px] font-bold text-[#0b1b36] mb-3 group-hover:text-[#0056b3] transition-colors duration-300">
                                {svc.title}
                            </h3>
                            
                            <p className="text-[15px] text-[#575A5F] leading-[1.6] mb-8 flex-grow">
                                {svc.description}
                            </p>
                            
                            <div className="mt-auto flex items-center text-[14.5px] font-bold text-[#0056b3] transition-colors">
                                Learn more 
                                <span className="ml-2 w-8 h-8 rounded-full bg-[#F0F6FF] flex items-center justify-center group-hover:bg-[#0056b3] group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
                                    <ArrowRight size={16} strokeWidth={2.5} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* HOSPITAL SERVICES */}
            <div className="max-w-7xl mx-auto px-6 pt-20">
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] bg-[#0056b3]/10 px-4 py-1.5 rounded-full font-bold text-[12px] uppercase tracking-[0.15em] mb-4">
                        Advanced Procedures
                    </span>
                    <h2 className="text-[36px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight relative pb-5">
                        Hospital Services
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#0056b3] rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((svc, i) => (
                        <Link
                            key={i}
                            to={`/services/${svc.slug}`} 
                            className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0056b3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                            <div className="w-14 h-14 bg-[#F0F6FF] text-[#0056b3] rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0056b3] group-hover:text-white group-hover:scale-110">
                                {ICONS[svc.icon]}
                            </div>
                            
                            <h3 className="text-[20px] font-bold text-[#0b1b36] mb-3 group-hover:text-[#0056b3] transition-colors duration-300">
                                {svc.title}
                            </h3>
                            
                            <p className="text-[15px] text-[#575A5F] leading-[1.6] mb-8 flex-grow">
                                {svc.description}
                            </p>
                            
                            <div className="mt-auto flex items-center text-[14.5px] font-bold text-[#0056b3] transition-colors">
                                Learn more 
                                <span className="ml-2 w-8 h-8 rounded-full bg-[#F0F6FF] flex items-center justify-center group-hover:bg-[#0056b3] group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
                                    <ArrowRight size={16} strokeWidth={2.5} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Services;