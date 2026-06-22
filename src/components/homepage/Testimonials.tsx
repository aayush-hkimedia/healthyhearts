import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#F7FAFD] py-14 sm:py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.15em] block">
            Patient Stories
          </span>
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mt-3 tracking-tight">
            Lives Changed, Hearts Healed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between"
            >
              <div className="flex-grow">
                <Quote size={28} className="text-[#0056b3] opacity-20 mb-4 sm:mb-6" />
                <p className="text-[15px] sm:text-[16px] text-[#575A5F] italic leading-relaxed balance">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 shrink-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#F0F6FF] text-[#0056b3] rounded-full flex items-center justify-center font-bold text-[16px] sm:text-lg shrink-0 select-none">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-bold text-[#0b1b36] text-sm truncate">{t.name}</p>
                  <p className="text-[11px] text-[#575A5F] uppercase tracking-wide truncate mt-0.5">{t.location}</p>
                </div>
                <div className="text-[#FFB81C] text-sm flex gap-0.5 shrink-0 select-none">
                  {'★'.repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;