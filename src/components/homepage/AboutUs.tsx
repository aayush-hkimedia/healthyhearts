import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Heart } from 'lucide-react';
import { DOCTOR } from '../../data/siteData';

const AboutSection: React.FC = () => {
    return (
        <section
            className="bg-gradient-to-b from-white to-[#F7FAFD] py-20 font-sans"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <span className="text-[#0056b3] bg-[#0056b3]/10 px-4 py-1.5 rounded-full font-bold text-[12px] uppercase tracking-[0.15em] mb-4">
                            About Us
                        </span>

                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b1b36] tracking-tight mb-1">
                            {DOCTOR.name}
                        </h2>

                        <p className="text-[14px] font-medium text-[#575A5F] tracking-wide mb-5">
                            ({DOCTOR.qualifications})
                        </p>

                        <h4 className="text-[17px] md:text-[19px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#3b82f6] mb-6">
                            {DOCTOR.title}
                        </h4>

                        <div className="space-y-4 text-[15px] md:text-[16px] text-[#575A5F] leading-[1.7] mb-8">
                            <p>{DOCTOR.bioPara1}</p>
                            <p>{DOCTOR.bioPara2}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full sm:w-auto mb-8">
                            <div className="flex items-center gap-2 text-[#0b1b36] font-medium text-sm">
                                <Award
                                    className="text-[#0056b3] shrink-0"
                                    size={18}
                                />
                                <span>
                                    {DOCTOR.experience} Years Experience
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[#0b1b36] font-medium text-sm">
                                <ShieldCheck
                                    className="text-[#0056b3] shrink-0"
                                    size={18}
                                />
                                <span>Certified FESC Fellow</span>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className="group flex items-center gap-2 bg-[#0A2540] hover:bg-[#0056b3] text-white py-3.5 px-8 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Know More
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
                        <div className="rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] w-full object-cover">
                            <img
                                src={DOCTOR.image2}
                                alt={DOCTOR.name}
                                className="w-full h-full object-cover rounded-2xl"
                                loading="lazy"
                            />

                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl flex items-center gap-3 shadow-lg">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#F0F6FF] to-[#E0EFFF] text-[#0056b3] rounded-xl flex items-center justify-center">
                                    <Heart
                                        size={20}
                                        className="fill-[#0056b3]/10"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-[#0b1b36] text-[16px]">
                                        20+ Years
                                    </p>
                                    <p className="text-[10px] uppercase tracking-widest text-[#575A5F] font-bold">
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
