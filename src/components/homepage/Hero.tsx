import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { DOCTOR } from '../../data/siteData';

const Hero: React.FC = () => {
  return (

    <section className="bg-[#F7FAFD] font-sans min-h-[70vh] flex items-center pt-45 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <span className="text-[#0056b3] font-bold text-[13px] uppercase tracking-[0.2em]">
            A New Standard in Cardiac Care
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0b1b36] leading-[1.1] tracking-tight">
            Conservative Care for a <span className="text-[#0056b3]">Healthier Heart.</span>
          </h1>
          <p className="text-[18px] text-[#575A5F] leading-relaxed max-w-lg">
            {DOCTOR.shortName}, an Interventional Cardiologist with over {DOCTOR.experience} years of experience, 
            specialises in life-saving procedures while prioritising patient-first conservative heart management.
          </p>
          
          <div className="flex gap-4 pt-2">
            <a 
              href='https://calendly.com/healthyheartsgurgaon/appointment?month=2026-06'
              className="flex items-center gap-2 bg-[#0A2540] text-white px-8 py-4 rounded font-semibold hover:bg-[#0056b3] transition-all duration-300"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
            <Link 
              to="/about" 
              className="px-8 py-4 rounded border border-gray-300 font-semibold text-[#0b1b36] hover:border-[#0056b3] hover:text-[#0056b3] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-lg justify-self-center">
          <img 
            src={DOCTOR.image} 
            alt={DOCTOR.shortName} 
            className="rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] w-full object-cover"
          />
          
          <div className="absolute -bottom-8 -left-6 md:left-6 bg-white p-5 rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-full text-[#0056b3]">
              <Award size={24} />
            </div>
            <div>
              <p className="font-bold text-[#0b1b36] text-[16px]">20+ Years</p>
              <p className="text-[10px] uppercase tracking-widest text-[#575A5F] font-bold">Clinical Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;