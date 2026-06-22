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
    const ServiceGrid = ({ title, subtitle, data }: { title: string; subtitle: string; data: any[] }) => (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24 last:mb-0">
            <div className="text-center mb-10 lg:mb-16 flex flex-col items-center">
                <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] mb-2.5 block">
                    {subtitle}
                </span>
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-3.5 tracking-tight">
                    {title}
                </h2>
                <div className="w-12 h-[2px] bg-[#0056b3]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {data.map((svc, i) => (
                    <Link
                        key={i}
                        to={`/services/${svc.slug}`}
                        className="group flex flex-col bg-white border border-gray-200/60 rounded-xl p-6 sm:p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0056b3]/20 transition-all duration-300"
                    >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#F0F6FF] rounded-full flex items-center justify-center text-[#0056b3] mb-5 sm:mb-6 shrink-0">
                            {ICONS[svc.icon]}
                        </div>
                        <h3 className="text-[17px] sm:text-[19px] font-semibold text-[#0b1b36] mb-2.5">
                            {svc.title}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] text-[#575A5F] leading-[1.55] flex-grow balance">
                            {svc.description}
                        </p>
                        <div className="text-[#0056b3] text-[13px] sm:text-[14px] font-semibold mt-6 sm:mt-8 flex items-center gap-1 group-hover:gap-2 transition-all">
                            <span>Learn more</span> <span>&rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <section className="relative py-14 sm:py-20 lg:py-24 font-sans overflow-hidden bg-[#F7FAFD]" id="services">
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#Eef3f7] rounded-full blur-[80px] sm:blur-[120px] opacity-60 mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#E0E9F0] rounded-full blur-[80px] sm:blur-[120px] opacity-60 mix-blend-multiply" />
            </div>

            <ServiceGrid title="Clinic Services" subtitle="In-House Care" data={CLINIC_SERVICE} />
            <ServiceGrid title="Hospital Services" subtitle="Advanced Procedures" data={SERVICES} />
        </section>
    );
};

export default Services;