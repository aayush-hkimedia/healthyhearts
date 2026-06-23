import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Heart } from 'lucide-react';
import { DOCTOR } from '../../data/siteData';

const AboutSection: React.FC = () => {
    return (
        <section
            className="bg-gradient-to-b from-white to-[#F7FAFD] py-14 sm:py-20 lg:py-24 font-sans"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        <span className="text-[#0056b3] bg-[#0056b3]/10 px-4 py-1.5 rounded-full font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.15em] mb-4 block">
                            About Us
                        </span>

                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0b1b36] tracking-tight mb-1">
                            {DOCTOR.name}
                        </h2>

                        <p className="text-[13px] sm:text-[14px] font-medium text-[#575A5F] tracking-wide mb-4">
                            ({DOCTOR.qualifications})
                        </p>

                        <h4 className="text-[16px] sm:text-[18px] md:text-[19px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#3b82f6] mb-6">
                            {DOCTOR.title}
                        </h4>

                        <div className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#575A5F] leading-[1.65] mb-8 balance">
                            <p>{DOCTOR.bioPara1}</p>
                            <p>{DOCTOR.bioPara2}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto mb-8">
                            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-[#0b1b36] font-medium text-sm">
                                <Award className="text-[#0056b3] shrink-0" size={18} />
                                <span>{DOCTOR.experience} Years Experience</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-[#0b1b36] font-medium text-sm">
                                <ShieldCheck className="text-[#0056b3] shrink-0" size={18} />
                                <span>Certified FACC Fellow</span>
                            </div>
                        </div>

                        <Link
                            to="/your-doctor"
                            className="group flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#0056b3] text-white py-3.5 px-8 w-full sm:w-auto rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            <span>Know More</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2 mb-4 lg:mb-0 max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                        <div className="rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] w-full relative">
                            <img
                                src={DOCTOR.image2}
                                alt={DOCTOR.name}
                                className="w-full h-full object-cover rounded-2xl aspect-[4/5] sm:aspect-auto"
                                loading="lazy"
                            />

                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 bg-white/95 backdrop-blur-md border border-gray-100 p-4 rounded-2xl flex items-center gap-3 shadow-lg w-[90%] sm:w-auto min-w-[220px]">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#F0F6FF] to-[#E0EFFF] text-[#0056b3] rounded-xl flex items-center justify-center shrink-0">
                                    <Heart size={20} className="fill-[#0056b3]/10" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-[#0b1b36] text-[16px] leading-tight">
                                        {DOCTOR.experience} Years
                                    </p>
                                    <p className="text-[10px] uppercase tracking-widest text-[#575A5F] font-bold whitespace-nowrap mt-0.5">
                                        Clinical Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;