import React from 'react';
import { BookOpen } from 'lucide-react';
import { PATIENT_EDUCATION_RESOURCES } from '../../data/siteData';

const PatientEducationResourcesPage: React.FC = () => {
    return (
        <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#F0F6FF] rounded-full flex items-center justify-center text-[#0056b3] mb-6">
                        <BookOpen size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3">
                        Knowledge & Insights
                    </span>
                    <h1 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-4">
                        Patient Education Resources
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3] mb-6"></div>
                    <p className="text-[#575A5F] text-[15px] leading-relaxed max-w-2xl mx-auto">
                        A comprehensive guide to understanding your heart health, diagnostic procedures, treatments, and lifestyle changes to keep your heart functioning at its best.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {PATIENT_EDUCATION_RESOURCES.map((resource) => (
                        <article
                            key={resource.id}
                            className="bg-white border border-gray-400 rounded-xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                        >
                            <h2 className="text-[20px] font-semibold text-[#0b1b36] mb-4 leading-snug">
                                {resource.title}
                            </h2>
                            
                            <div className="text-[15px] text-[#575A5F] leading-[1.6] flex-grow space-y-4">
                                {resource.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}

                                {resource.list && resource.list.length > 0 && (
                                    <ul className="list-disc pl-5 space-y-2 mt-4">
                                        {resource.list.map((listItem, index) => {
                                            const colonIndex = listItem.indexOf(':');
                                            
                                            if (colonIndex !== -1) {
                                                const boldPart = listItem.substring(0, colonIndex + 1);
                                                const regularPart = listItem.substring(colonIndex + 1);
                                                return (
                                                    <li key={index} className="pl-1">
                                                        <strong className="text-[#0b1b36] font-semibold">{boldPart}</strong>
                                                        {regularPart}
                                                    </li>
                                                );
                                            }
                                            
                                            return (
                                                <li key={index} className="pl-1">
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