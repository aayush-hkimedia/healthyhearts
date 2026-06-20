import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../../data/siteData';

const FrequentlyAskedQuestionsPage: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto mb-20">
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F0F6FF] rounded-2xl flex items-center justify-center text-[#0056b3] mb-8 rotate-3 shadow-sm">
                        <HelpCircle size={28} strokeWidth={1.5} className="-rotate-3" />
                    </div>
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3">
                        Got Questions?
                    </span>
                    <h1 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#575A5F] text-[15px] leading-relaxed max-w-2xl mx-auto">
                        Find answers to common queries regarding appointments, clinic timings, payments, and emergency protocols.
                    </p>
                </div>

                <div className="space-y-6">
                    {FAQS_DATA.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div 
                                key={faq.id} 
                                className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                                    isOpen 
                                        ? 'border-[#0056b3]/30 shadow-[0_12px_40px_rgba(0,86,179,0.08)] -translate-y-1' 
                                        : 'border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,86,179,0.06)]'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                                    className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none"
                                >
                                    <h3 className={`text-[20px] font-semibold mb-0 leading-snug transition-colors ${
                                        isOpen ? 'text-[#0056b3]' : 'text-[#0b1b36]'
                                    }`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                                        isOpen 
                                            ? 'bg-[#0056b3] text-white rotate-180' 
                                            : 'bg-[#F0F6FF] text-[#0056b3] rotate-0'
                                    }`}>
                                        <ChevronDown size={22} strokeWidth={2} />
                                    </div>
                                </button>
                                
                                <div className={`transition-all duration-500 ease-in-out px-8 md:px-10 ${
                                    isOpen ? 'max-h-[800px] opacity-100 pb-10' : 'max-h-0 opacity-0 pb-0'
                                }`}>
                                    <div className="w-12 h-[2px] bg-[#E2E8F0] mb-8"></div>
                                    <p className="text-[15px] text-[#575A5F] leading-[1.6] whitespace-pre-line">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default FrequentlyAskedQuestionsPage;