import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, ArrowLeft } from 'lucide-react';
import { COMMON_CONDITIONS_DATA } from '../../data/siteData';

const CommonHeartConditionsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen pt-[100px] lg:pt-[120px] pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
                
                <div className="flex justify-start mb-6 sm:mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-[#575A5F] hover:text-[#0056b3] transition-colors text-[14px] sm:text-[15px] font-medium relative z-50 cursor-pointer"
                    >
                        <ArrowLeft size={18} />
                        <span>Go Back</span>
                    </button>
                </div>

                <div className="text-center mb-10 sm:mb-16 md:mb-20 flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F0F6FF] rounded-2xl flex items-center justify-center text-[#0056b3] mb-5 sm:mb-8 rotate-3 shadow-sm shrink-0">
                        <Activity size={28} strokeWidth={1.5} className="-rotate-3" />
                    </div>
                    <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] mb-2.5 block">
                        Understanding Health
                    </span>
                    <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-3.5 tracking-tight">
                        Common Heart Conditions
                    </h1>
                    <p className="text-[#575A5F] text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto balance">
                        An overview of the cardiovascular conditions that require attention. Early awareness and professional consultation are the first steps toward better management and recovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {COMMON_CONDITIONS_DATA.map((condition, index) => (
                        <Link
                            key={condition.slug}
                            to={`/resource/${condition.slug}`}
                            className="group bg-white p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,86,179,0.06)] transition-all duration-500 flex items-center gap-4 sm:gap-6 text-left"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F0F6FF] flex items-center justify-center text-[#0056b3] font-bold text-[14px] sm:text-[16px] shrink-0 select-none group-hover:bg-[#0056b3] group-hover:text-white transition-colors duration-300">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                            <span className="text-[15px] sm:text-[17px] font-semibold text-[#0b1b36] leading-snug tracking-tight balance group-hover:text-[#0056b3] transition-colors duration-300">
                                {condition.title}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 bg-[#0b1b36] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#0056b3] blur-[80px] sm:blur-[100px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />
                    
                    <div className="relative z-10 space-y-3 sm:space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-[20px] sm:text-[26px] md:text-[32px] font-semibold tracking-tight leading-tight">
                            Have concerns about these conditions?
                        </h2>
                        <p className="text-[#94A3B8] text-[14px] sm:text-[15px] max-w-xl mx-auto leading-relaxed pb-4 sm:pb-6 balance">
                            If you or a loved one are experiencing symptoms or have questions regarding your heart health, do not delay. Expert guidance is available.
                        </p>
                        <a 
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[#0056b3] hover:bg-[#004494] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap active:translate-y-0 hover:-translate-y-0.5"
                        >
                            Schedule a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CommonHeartConditionsPage;