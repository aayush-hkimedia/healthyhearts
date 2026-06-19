import React from 'react';
import { Award, BookOpen, MapPin, GraduationCap } from 'lucide-react';
import CallToAction from '../homepage/CallToAction';
import { DOCTOR, STATS } from '../../data/siteData';

const DoctorPage: React.FC = () => {
    return (
        <main className="font-sans antialiased text-[#575A5F] bg-white">
            <section className="bg-gradient-to-b from-[#F0F6FF]/60 to-white py-20 px-6 text-center border-b border-gray-100">
                <div className="max-w-3xl mx-auto space-y-4">
                    <span className="text-[#0056b3] font-bold text-[11px] uppercase tracking-[0.2em]">
                        Your Doctor
                    </span>
                    <h1 className="text-[40px] font-bold text-[#0b1b36] tracking-tight">
                        {DOCTOR.shortName}
                    </h1>
                    <p className="text-[#0056b3] font-medium">
                        {DOCTOR.title} · {DOCTOR.qualifications}
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 items-start">
                <img
                    src={DOCTOR.image as string}
                    alt={DOCTOR.shortName}
                    className="w-full aspect-[4/5] object-cover rounded-2xl border border-gray-100 shadow-lg sticky top-24"
                />
                <div className="space-y-8">
                    <div className="space-y-4">
                        <span className="text-[#0056b3] font-bold text-[11px] uppercase tracking-widest">
                            About the Doctor
                        </span>
                        <h2 className="text-[32px] font-bold text-[#0b1b36]">
                            {DOCTOR.name}
                        </h2>
                        <p className="text-[15px] leading-[1.7]">
                            {DOCTOR.bioPara1}
                        </p>
                        <p className="text-[15px] leading-[1.7]">
                            {DOCTOR.bioPara2}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#F8FAFC] p-6 rounded-2xl">
                        {STATS.map((s, i) => (
                            <div key={i} className="text-center">
                                <p className="text-[24px] font-bold text-[#0b1b36]">
                                    {s.value}
                                </p>
                                <p className="text-[11px] font-bold uppercase text-[#575A5F] tracking-wider">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Career */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 border-t border-gray-100">
                <div className="space-y-8">
                    <h2 className="text-[24px] font-semibold text-[#0b1b36] flex items-center gap-3">
                        <GraduationCap className="text-[#0056b3]" /> Education &
                        Qualifications
                    </h2>
                    <ul className="space-y-6">
                        {DOCTOR.academicQualifications.map((edu, i) => {
                            const [d, inst, year] = edu.split(', ');
                            return (
                                <li key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0056b3] shrink-0">
                                        <GraduationCap size={18} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#0b1b36]">
                                            {d}
                                        </p>
                                        <p className="text-[14px]">{inst}</p>
                                        <p className="text-[12px] font-bold text-[#0056b3]">
                                            {year}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="space-y-8">
                    <h2 className="text-[24px] font-semibold text-[#0b1b36] flex items-center gap-3">
                        <MapPin className="text-[#0056b3]" /> Career Timeline
                    </h2>
                    <div className="space-y-8 border-l-2 border-gray-100 ml-5 pl-8">
                        {[
                            {
                                period: '2001 – 2015',
                                role: 'Colonel & Senior Cardiologist',
                                org: 'Indian Army Medical Corps',
                            },
                            {
                                period: '2015 – 2018',
                                role: 'Senior Consultant Cardiologist',
                                org: 'Medanta — The Medicity, Gurugram',
                            },
                            {
                                period: '2018 – 2021',
                                role: 'Director, Interventional Cardiology',
                                org: 'Paras Hospital, Gurugram',
                            },
                            {
                                period: '2021 – Present',
                                role: 'Founder & Chief Cardiologist',
                                org: 'Healthy Hearts Gurgaon',
                            },
                        ].map((c, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-white bg-[#0056b3]"></div>
                                <p className="text-[12px] font-bold text-[#0056b3] uppercase tracking-widest">
                                    {c.period}
                                </p>
                                <p className="font-semibold text-[#0b1b36]">
                                    {c.role}
                                </p>
                                <p className="text-[14px]">{c.org}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="bg-[#F8FAFC] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[28px] font-semibold text-[#0b1b36] mb-12 text-center flex items-center justify-center gap-3">
                        <Award className="text-[#00a896]" /> Areas of Expertise
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {DOCTOR.clinicalFocus.map((area, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center text-[14px] font-medium hover:border-[#0056b3] transition-colors"
                            >
                                {area}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="max-w-7xl mx-auto px-6 py-20 flex gap-8">
                <BookOpen size={40} className="text-[#00a896] shrink-0" />
                <div className="space-y-4">
                    <h3 className="text-[20px] font-semibold text-[#0b1b36]">
                        Research & Publications
                    </h3>
                    <p className="text-[15px] leading-[1.7]">
                        Dr. Mehta has authored over 30 peer-reviewed papers in
                        leading cardiology journals including the Indian Heart
                        Journal and the Journal of the American College of
                        Cardiology. His research focuses on outcomes in CTO-PCI
                        and the long-term benefits of conservative management in
                        stable coronary disease.
                    </p>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default DoctorPage;
