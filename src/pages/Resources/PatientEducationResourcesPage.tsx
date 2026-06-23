import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { PATIENT_EDUCATION_RESOURCES } from '../../data/siteData';

const PatientEducationResourcesPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen pt-[100px] lg:pt-[120px] pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto mb-12 sm:mb-20">
                <div className="flex justify-start mb-6 sm:mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-[#575A5F] hover:text-[#0056b3] transition-colors text-[14px] sm:text-[15px] font-medium relative z-50 cursor-pointer"
                    >
                        <ArrowLeft size={18} />
                        <span>Go Back</span>
                    </button>
                </div>

                <div className="text-center mb-10 sm:mb-16 flex flex-col items-center">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#F0F6FF] rounded-full flex items-center justify-center text-[#0056b3] mb-5 sm:mb-6 shrink-0">
                        <div className="block sm:hidden">
                            <BookOpen size={22} strokeWidth={1.5} />
                        </div>
                        <div className="hidden sm:block">
                            <BookOpen size={24} strokeWidth={1.5} />
                        </div>
                    </div>
                    <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] mb-2.5 block">
                        Knowledge & Insights
                    </span>
                    <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-3.5 tracking-tight">
                        Patient Education Resources
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3] mb-5 sm:mb-6" />
                    <p className="text-[#575A5F] text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto balance">
                        A comprehensive guide to understanding your heart health, diagnostic procedures, treatments, and lifestyle changes to keep your heart functioning at its best.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                    {PATIENT_EDUCATION_RESOURCES.map((resource) => (
                        <article
                            key={resource.id}
                            className="bg-white border border-gray-200/80 rounded-xl p-5 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-blue-200/60 transition-all duration-300 flex flex-col"
                        >
                            <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#0b1b36] mb-3.5 sm:mb-4 leading-snug tracking-tight">
                                {resource.title}
                            </h2>
                            
                            <div className="text-[14px] sm:text-[15px] text-[#575A5F] leading-[1.6] flex-grow space-y-3.5 sm:space-y-4 text-left balance">
                                {resource.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}

                                {resource.list && resource.list.length > 0 && (
                                    <ul className="list-disc pl-4 sm:pl-5 space-y-2 mt-4 text-left">
                                        {resource.list.map((listItem, index) => {
                                            const colonIndex = listItem.indexOf(':');
                                            
                                            if (colonIndex !== -1) {
                                                const boldPart = listItem.substring(0, colonIndex + 1);
                                                const regularPart = listItem.substring(colonIndex + 1);
                                                return (
                                                    <li key={index} className="pl-0.5">
                                                        <strong className="text-[#0b1b36] font-semibold">{boldPart}</strong>
                                                        {regularPart}
                                                    </li>
                                                );
                                            }
                                            
                                            return (
                                                <li key={index} className="pl-0.5">
                                                    {listItem}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PatientEducationResourcesPage;