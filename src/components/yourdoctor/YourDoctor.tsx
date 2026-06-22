import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import CallToAction from '../homepage/CallToAction';
import { DOCTOR, ABOUT_US, CLINIC_SERVICE, HOSPITAL_SERVICES, STATS } from '../../data/siteData';

const DoctorPage: React.FC = () => {
    return (
        <main className="font-sans antialiased text-[#575A5F] bg-white overflow-hidden">
            <section className="relative bg-gradient-to-b from-[#F0F6FF]/60 to-white py-14 sm:py-20 px-4 sm:px-6 text-center border-b border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[300px] bg-[#0056b3]/5 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none select-none" />
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
                    <span className="text-[#0056b3] font-bold text-[11px] uppercase tracking-[0.2em]">
                        Your Doctor
                    </span>
                    <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-semibold text-[#0b1b36] tracking-tight leading-tight">
                        {DOCTOR.shortName}
                    </h1>
                    <p className="text-[14px] sm:text-[16px] text-[#575A5F] max-w-2xl leading-relaxed balance">
                        {DOCTOR.title} · {DOCTOR.qualifications} <br className="hidden sm:inline" />
                        A boutique cardiology practice dedicated to evidence-based, patient-first care in Gurgaon.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-start">
                <div className="relative group lg:sticky lg:top-24 max-w-md mx-auto lg:mx-0 w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0056b3] to-[#00a896] rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                    <img
                        src={DOCTOR.image2 as string}
                        alt={DOCTOR.shortName}
                        className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-[0_8px_30px_rgba(11,27,54,0.08)] ring-1 ring-black/5"
                    />
                </div>
                
                <div className="space-y-8 lg:space-y-10">
                    <div className="space-y-4 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="w-8 h-[2px] bg-[#00a896] hidden lg:block" />
                            <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em]">
                                Our Story
                            </span>
                        </div>
                        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] tracking-tight">
                            A Legacy of Clinical Excellence
                        </h2>
                        <div className="space-y-4 text-[14px] sm:text-[15px] leading-relaxed text-left balance">
                            <p>
                                Healthy Hearts Gurgaon was founded by <strong className="text-[#0b1b36] font-semibold">{DOCTOR.name}</strong>, 
                                with a singular mission — to bring world-class interventional cardiology to the NCR region with a human touch. 
                                {DOCTOR.bioPara1}
                            </p>
                            <p>{DOCTOR.bioPara2}</p>
                            <p>
                                The practice operates from a state-of-the-art clinic in DLF Phase 1, Gurugram, and maintains 
                                visiting consultant roles at top hospitals to ensure patients receive care in the setting most convenient for them.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl">
                        {STATS.map((s, i) => (
                            <div key={i} className="text-center p-2">
                                <p className="text-[20px] sm:text-[24px] font-bold text-[#0b1b36] tracking-tight leading-none mb-2">{s.value}</p>
                                <p className="text-[10px] sm:text-[11px] font-bold uppercase text-[#575A5F] tracking-wider leading-tight">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-6 sm:py-10 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#0b1b36] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-10 lg:gap-16 items-stretch relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#0056b3] blur-[100px] sm:blur-[120px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />
                        
                        <div className="space-y-3.5 relative z-10">
                            <h2 className="text-[20px] sm:text-[24px] font-semibold text-white flex items-center gap-2.5">
                                <span className="w-5 h-[2px] bg-[#00a896]" /> Our Mission
                            </h2>
                            <p className="text-[14px] sm:text-[15px] text-white/80 leading-relaxed balance">
                                {ABOUT_US.mission}
                            </p>
                        </div>
                        
                        <div className="hidden md:block w-px bg-white/10 self-stretch relative z-10" />
                        
                        <div className="space-y-3.5 relative z-10">
                            <h2 className="text-[20px] sm:text-[24px] font-semibold text-white flex items-center gap-2.5">
                                <span className="w-5 h-[2px] bg-[#00a896]" /> Our Vision
                            </h2>
                            <p className="text-[14px] sm:text-[15px] text-white/80 leading-relaxed balance">
                                {ABOUT_US.vision.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                                {ABOUT_US.vision.goals.map((goal: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 text-[14px] sm:text-[15px] text-white/90 truncate">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00a896] shrink-0" /> <span>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#0b1b36] flex items-center gap-3 tracking-tight">
                        <GraduationCap className="text-[#0056b3] shrink-0" /> <span>Education & Qualifications</span>
                    </h2>
                    <ul className="space-y-5 sm:space-y-6">
                        {DOCTOR.academicQualifications.map((edu, i) => {
                            const [d, inst, year] = edu.split(', ');
                            return (
                                <li key={i} className="flex gap-3.5 sm:gap-4 items-start">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0056b3] shrink-0">
                                        <GraduationCap size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-[#0b1b36] text-[15px] sm:text-[16px] leading-snug">{d}</p>
                                        <p className="text-[13px] sm:text-[14px] text-[#575A5F] mt-0.5 leading-normal balance">{inst}</p>
                                        <p className="text-[11px] sm:text-[12px] font-bold text-[#0056b3] mt-1">{year}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#0b1b36] flex items-center gap-3 tracking-tight">
                        <MapPin className="text-[#0056b3] shrink-0" /> <span>Career Milestones</span>
                    </h2>
                    <div className="space-y-6 sm:space-y-8 border-l-2 border-gray-100 ml-4 sm:ml-5 pl-6 sm:pl-8">
                        {[
                            { role: 'Colonel & Senior Cardiologist', org: 'Indian Army Medical Corps' },
                            { role: 'Physician', org: 'United Nations' },
                            { role: 'Officer Commanding and Physician', org: 'IMTRAT, Bhutan' },
                            { role: 'Various Corporate Hospitals (Delhi NCR)', org: 'Leadership Cardiology Roles' },
                            { role: 'Fellowship in Cardiac Electrophysiology', org: 'Holy Family Hospital, Mumbai' },
                            { role: 'Associate Chief Physician', org: 'Dept of Cardiology, Fuwai Hospital, Beijing, China' },
                        ].map((c, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-4 border-white bg-[#0056b3] shrink-0" />
                                <p className="font-semibold text-[#0b1b36] text-[15px] sm:text-[16px] leading-snug">{c.role}</p>
                                <p className="text-[13px] sm:text-[14px] text-[#575A5F] mt-0.5 leading-normal">{c.org}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#FCFDFF] py-14 sm:py-20 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center mb-10 sm:mb-12 text-center space-y-2.5">
                        <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em]">
                            Clinical Expertise
                        </span>
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] tracking-tight">
                            Scope of Practice
                        </h2>
                        <div className="w-12 h-[3px] bg-gradient-to-r from-[#0056b3] to-[#00a896] rounded-full mt-1.5" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
                        <div className="group bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0056b3]" />
                            <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0b1b36] mb-5 sm:mb-6 flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#0056b3]" /> <span>Clinic Services</span>
                            </h3>
                            <ul className="flex flex-col gap-3.5">
                                {CLINIC_SERVICE.map((s: { title: string; slug: string }, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] leading-relaxed text-[#575A5F]">
                                        <CheckCircle2 size={18} className="text-[#00a896] shrink-0 mt-0.5" strokeWidth={1.5} />
                                        <Link to={`/services/${s.slug}`} className="hover:text-[#0056b3] transition-colors truncate">{s.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="group bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#00a896]/30 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#00a896]" />
                            <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0b1b36] mb-5 sm:mb-6 flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#00a896]" /> <span>Hospital Services</span>
                            </h3>
                            <ul className="flex flex-col gap-3.5">
                                {HOSPITAL_SERVICES.map((s: { label: string; path: string }, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] leading-relaxed text-[#575A5F]">
                                        <CheckCircle2 size={18} className="text-[#0056b3] shrink-0 mt-0.5" strokeWidth={1.5} />
                                        <Link to={s.path} className="hover:text-[#0056b3] transition-colors truncate">{s.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0b1b36] mb-5 sm:mb-6 text-center flex items-center justify-center gap-2.5 tracking-tight">
                        <Award className="text-[#00a896] shrink-0" /> <span>Specialized Procedures</span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                        {DOCTOR.clinicalFocus.map((area, i) => (
                            <div key={i} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm text-center text-[13px] sm:text-[14px] font-medium hover:border-[#0056b3] hover:text-[#0056b3] transition-colors flex items-center justify-center min-h-[56px] balance">
                                {area}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] block">
                                Philosophy
                            </span>
                            <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0b1b36] tracking-tight">
                                Our Approach & Ethics
                            </h2>
                        </div>
                        <ul className="flex flex-col gap-4 sm:gap-5">
                            {ABOUT_US.approach.map((p: string, i: number) => (
                                <li key={`app-${i}`} className="flex items-start gap-3.5 sm:gap-4">
                                    <span className="text-[13px] sm:text-[14px] font-semibold text-[#0056b3] bg-[#F0F6FF] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[14px] sm:text-[15px] text-[#575A5F] leading-relaxed pt-0.5 balance">{p}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-3.5 sm:gap-4 pt-2">
                            {ABOUT_US.principles.map((p: string, i: number) => (
                                <li key={`prin-${i}`} className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-[#FCFDFF] border border-gray-100">
                                    <CheckCircle2 size={20} className="text-[#00a896] shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <span className="text-[14px] sm:text-[15px] text-[#575A5F] leading-relaxed balance">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="space-y-6 max-w-2xl mx-auto md:mx-0 w-full">
                        <div className="space-y-2 mb-6 sm:mb-8 text-center md:text-left">
                            <span className="text-[#00a896] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] block">
                                Academics
                            </span>
                            <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0b1b36] tracking-tight">
                                Research & Publications
                            </h2>
                        </div>
                        <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                            <BookOpen size={32} className="text-[#00a896] shrink-0" />
                            <p className="text-[14px] sm:text-[15px] leading-relaxed balance">
                                Dr. Mehta has authored over 30 peer-reviewed papers in leading cardiology journals including the Indian Heart Journal and the Journal of the American College of Cardiology. His research focuses on outcomes in CTO-PCI and the long-term benefits of conservative management in stable coronary disease.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default DoctorPage;