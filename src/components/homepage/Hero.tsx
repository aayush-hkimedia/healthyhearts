import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { DOCTOR } from '../../data/siteData';
import whatsapp from '../../assets/Icons/whatsapp.png';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F7FAFD] font-sans min-h-[70vh] flex items-center pt-28 md:pt-32 lg:pt-44 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <span className="text-[#0056b3] font-bold text-[12px] md:text-[13px] uppercase tracking-[0.2em] block">
            A New Standard in Cardiac Care
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b1b36] leading-[1.15] md:leading-[1.1] tracking-tight">
            Conservative Care for a <span className="text-[#0056b3]">Healthier Heart.</span>
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#575A5F] leading-relaxed max-w-lg mx-auto md:mx-0">
            {DOCTOR.shortName}, an Interventional Cardiologist with over {DOCTOR.experience} years of experience, 
            specialises in life-saving procedures while prioritising patient-first conservative heart management.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <a 
              href="https://calendly.com/healthyheartsgurgaon/appointment?month=2026-06"
              className="flex items-center justify-center gap-2 bg-[#0A2540] text-white px-8 py-4 rounded font-semibold hover:bg-[#0056b3] transition-all duration-300 whitespace-nowrap"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
            <Link 
              to="/your-doctor" 
              className="flex items-center justify-center px-8 py-4 rounded border border-gray-300 font-semibold text-[#0b1b36] hover:border-[#0056b3] hover:text-[#0056b3] transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* IMAGE CONTENT */}
        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-lg mx-auto order-1 md:order-2 mb-12 md:mb-0">
          <img 
            src={DOCTOR.image} 
            alt={DOCTOR.shortName} 
            className="rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] w-full object-cover aspect-[4/5] sm:aspect-auto"
          />
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 lg:left-6 bg-white p-4 sm:p-5 rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 sm:gap-4 w-[90%] sm:w-auto min-w-[200px] sm:min-w-[220px]">
            <div className="bg-blue-50 p-2 sm:p-3 rounded-full text-[#0056b3] shrink-0">
              <Award size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="font-bold text-[#0b1b36] text-[15px] sm:text-[16px]">{DOCTOR.experience} Years</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#575A5F] font-bold whitespace-nowrap">Clinical Experience</p>
            </div>
          </div>
        </div>

      </div>

      {/* FIXED FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
          <a
              href="https://wa.me/919873214382"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-[#0056b3] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg hover:bg-[#004a99] transition-all duration-300"
          >
              <img
                  src={whatsapp}
                  alt="WhatsApp Chat"
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-sm sm:text-lg whitespace-nowrap">Chat on WhatsApp</span>
              <ArrowRight size={18} className="text-white opacity-0 hidden sm:block group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
      </div>

    </section>
  );
};

export default Hero;