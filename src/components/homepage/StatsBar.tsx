import React from 'react';
import { STATS } from '../../data/siteData';

const StatsBar: React.FC = () => {
    return (
        <section className="bg-white py-10 border-b border-black-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((stat, i) => (
                    <div
                        key={i}
                        className="text-center flex flex-col items-center"
                    >
                        <p className="text-[32px] font-bold text-[#0b1b36]">
                            {stat.value}
                        </p>

                        <p className="text-[14px] font-medium text-[#575A5F] mt-1">
                            {stat.label}
                        </p>

                        {stat.label === 'Patient Satisfaction' && (
                            <div className="flex gap-0.5 mt-1.5 text-[#FFB81C] text-[14px]">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index}>★</span>
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