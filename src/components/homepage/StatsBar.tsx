import React from 'react';
import { STATS } from '../../data/siteData';

const StatsBar: React.FC = () => {
    return (
        <section className="bg-white py-8 sm:py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
                {STATS.map((stat, i) => (
                    <div
                        key={i}
                        className="text-center flex flex-col items-center justify-center p-2 rounded-xl transition-colors"
                    >
                        <p className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0b1b36] tracking-tight leading-none">
                            {stat.value}
                        </p>

                        <p className="text-[13px] sm:text-[14px] font-medium text-[#575A5F] mt-2 max-w-[150px] sm:max-w-none balance">
                            {stat.label}
                        </p>

                        {stat.label === 'Patient Satisfaction' && (
                            <div className="flex gap-0.5 mt-2 text-[#FFB81C] text-[16px] sm:text-[18px] leading-none">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className="select-none">★</span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsBar;