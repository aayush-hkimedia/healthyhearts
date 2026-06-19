import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-[#F8FAFC] py-20 font-sans" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.15em] mb-3">
                        Patient Stories
                    </span>
                    <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1c2456] tracking-tight">
                        Lives Changed, Hearts Healed
                    </h2>
                    <div className="w-12 h-[3px] bg-[#0056b3] mt-5"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 flex flex-col shadow-[0_4px_24px_rgb(0,0,0,0.03)]"
                        >
                            <Quote
                                size={36}
                                className="text-[#0056b3]/20 mb-6 shrink-0"
                                strokeWidth={1.5}
                            />
                            
                            <p className="text-[15px] text-[#575A5F] leading-[1.7] flex-grow mb-10">
                                {t.text}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-[14px] shrink-0">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-[14px] font-bold text-[#0A2540] leading-tight mb-0.5">
                                            {t.name}
                                        </h3>
                                        <p className="text-[12px] text-[#575A5F]">
                                            {t.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(t.rating)].map((_, index) => (
                                        <Star
                                            key={index}
                                            size={12}
                                            className="fill-[#FACC15] text-[#FACC15]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;