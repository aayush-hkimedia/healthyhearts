import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowLeft, HeartPulse } from 'lucide-react';

const ComingSoonResource: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="font-sans antialiased bg-[#FCFDFF] min-h-[80vh] flex items-center justify-center py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#0056b3]/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none select-none" />

            <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 sm:mb-10">
                    <div className="absolute inset-0 bg-[#0056b3] opacity-10 rounded-[2rem] rotate-6 animate-pulse" />
                    <div className="absolute inset-0 bg-[#F0F6FF] rounded-[2rem] flex items-center justify-center shadow-sm border border-white">
                        <Clock
                            size={36}
                            strokeWidth={1.5}
                            className="text-[#0056b3]"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                        <HeartPulse size={16} className="text-[#00a896]" />
                    </div>
                </div>

                <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] mb-3 block">
                    Resource In Development
                </span>

                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#0b1b36] mb-5 tracking-tight leading-tight">
                    Content Coming Soon
                </h1>

                <p className="text-[#575A5F] text-[15px] sm:text-[16px] leading-relaxed max-w-lg mx-auto balance mb-10 sm:mb-12">
                    Our medical experts are currently reviewing and preparing
                    the comprehensive guide for this condition to ensure you
                    receive the most accurate, evidence-based information.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center justify-center gap-2 bg-[#0b1b36] hover:bg-[#0056b3] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all duration-300 shadow-md active:translate-y-0 hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-[#0056b3] hover:text-[#0056b3] text-[#0b1b36] px-8 py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all duration-300 shadow-sm w-full sm:w-auto"
                    >
                        Contact Clinic Directly
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ComingSoonResource;
