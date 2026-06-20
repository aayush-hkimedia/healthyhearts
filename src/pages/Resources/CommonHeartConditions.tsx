import React from 'react';
import { Activity } from 'lucide-react';
import { COMMON_CONDITIONS_DATA } from '../../data/siteData';

const CommonHeartConditionsPage: React.FC = () => {
    return (
        <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto mb-20">
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F0F6FF] rounded-2xl flex items-center justify-center text-[#0056b3] mb-8 rotate-3 shadow-sm">
                        <Activity size={28} strokeWidth={1.5} className="-rotate-3" />
                    </div>
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3">
                        Understanding Health
                    </span>
                    <h1 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-4">
                        Common Heart Conditions
                    </h1>
                    <p className="text-[#575A5F] text-[15px] leading-relaxed max-w-2xl mx-auto">
                        An overview of the cardiovascular conditions that require attention. Early awareness and professional consultation are the first steps toward better management and recovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {COMMON_CONDITIONS_DATA.map((condition, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,86,179,0.06)] transition-all duration-500 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#F0F6FF] flex items-center justify-center text-[#0056b3] font-semibold text-[16px] shrink-0">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                            <span className="text-[17px] font-semibold text-[#0b1b36]">
                                {condition}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-[#0b1b36] rounded-[2rem] p-10 md:p-16 text-center text-white">
                    <h2 className="text-[24px] md:text-[32px] font-semibold mb-6">
                        Have concerns about these conditions?
                    </h2>
                    <p className="text-[#94A3B8] text-[15px] mb-10 max-w-xl mx-auto leading-relaxed">
                        If you or a loved one are experiencing symptoms or have questions regarding your heart health, do not delay. Expert guidance is available.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-block bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </main>
    );
};

export default CommonHeartConditionsPage;