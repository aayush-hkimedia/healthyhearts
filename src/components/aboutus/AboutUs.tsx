import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import CallToAction from '../homepage/CallToAction';
import { DOCTOR, ABOUT_US, CLINIC_SERVICE, HOSPITAL_SERVICES } from '../../data/siteData';

const AboutUs: React.FC = () => {
  return (
    <main className="font-sans antialiased text-[#575A5F] bg-white overflow-hidden">
      
      <section className="relative bg-gradient-to-b from-[#F0F6FF]/60 to-white py-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0056b3]/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-4">
          <span className="text-[#0056b3] font-bold text-[11px] uppercase tracking-[0.2em]">
            About Us
          </span>
          <h1 className="text-[36px] md:text-[44px] font-semibold text-[#0b1b36] tracking-tight mb-2">
            About Healthy Hearts
          </h1>
          <p className="text-[16px] text-[#575A5F] max-w-2xl leading-[1.6]">
            A boutique cardiology practice dedicated to evidence-based, patient-first care in Gurgaon.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0056b3] to-[#00a896] rounded-xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(11,27,54,0.08)] ring-1 ring-black/5">
              <img 
                src={ABOUT_US.image as string} 
                alt={DOCTOR.shortName as string} 
                className="w-full aspect-video object-cover object-center"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#00a896]"></div>
                <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em]">
                  Our Story
                </span>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36]">
                A Legacy of Clinical Excellence
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-[1.7] text-[#575A5F]">
              <p>
                Healthy Hearts Gurgaon was founded by <strong className="text-[#0b1b36] font-semibold">{DOCTOR.name}</strong>, {DOCTOR.qualifications}, 
                with a singular mission — to bring world-class interventional cardiology to the NCR region with a human touch. 
                Trained at premier institutions and with over two and a half decades of hands-on experience, 
                Dr. Mehta has performed thousands of complex cardiac procedures while consistently advocating for 
                conservative management wherever clinically appropriate.
              </p>
              <p>
                The practice operates from a state-of-the-art clinic in DLF Phase 1, Gurugram, and maintains 
                visiting consultant roles at Manipal Hospital and Apollo Clinics to ensure patients receive care 
                in the setting most convenient for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFDFF] py-20 relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-12 text-center space-y-3">
            <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em]">
              Clinical Expertise
            </span>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36]">
              Scope of Practice
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#0056b3] to-[#00a896] rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0056b3]"></div>
              <h3 className="text-[19px] font-semibold text-[#0b1b36] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0056b3]"></span>
                Clinic Services
              </h3>
              <ul className="flex flex-col gap-3.5">
                {CLINIC_SERVICE.map((s: { title: string; slug: string }, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#575A5F]">
                    <CheckCircle2 size={18} className="text-[#00a896] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <Link to={`/services/${s.slug}`} className="hover:text-[#0056b3] transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#00a896]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00a896]"></div>
              <h3 className="text-[19px] font-semibold text-[#0b1b36] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00a896]"></span>
                Hospital Services
              </h3>
              <ul className="flex flex-col gap-3.5">
                {HOSPITAL_SERVICES.map((s: { label: string; path: string }, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#575A5F]">
                    <CheckCircle2 size={18} className="text-[#0056b3] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <Link to={s.path} className="hover:text-[#0056b3] transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0b1b36] rounded-3xl p-10 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-16 items-stretch relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0056b3] blur-[120px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <h2 className="text-[24px] font-semibold text-white flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#00a896]"></span> Our Mission
              </h2>
              <p className="text-[15px] text-white/80 leading-[1.6]">
                {ABOUT_US.mission}
              </p>
            </div>
            
            <div className="hidden md:block w-px bg-white/10 self-stretch relative z-10"></div>
            
            <div className="space-y-4 relative z-10">
              <h2 className="text-[24px] font-semibold text-white flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#00a896]"></span> Our Vision
              </h2>
              <p className="text-[15px] text-white/80 leading-[1.6]">
                {ABOUT_US.vision.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ABOUT_US.vision.goals.map((goal: string, i: number) => (
                  <li key={i} className="flex items-center gap-2.5 text-[15px] text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a896] shrink-0"></span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] block">
                Philosophy
              </span>
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36]">
                Our Approach
              </h2>
            </div>
            <ul className="flex flex-col gap-5">
              {ABOUT_US.approach.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[14px] font-semibold text-[#0056b3] bg-[#F0F6FF] w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] text-[#575A5F] leading-[1.6] pt-1">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] block">
                Ethics
              </span>
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36]">
                Our Principles
              </h2>
            </div>
            <ul className="flex flex-col gap-5">
              {ABOUT_US.principles.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#FCFDFF] border border-gray-100">
                  <CheckCircle2 size={20} className="text-[#00a896] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-[15px] text-[#575A5F] leading-[1.6]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};

export default AboutUs;