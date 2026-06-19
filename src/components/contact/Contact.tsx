import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';
import { LOCATIONS, DOCTOR } from '../../data/siteData';

const Contact: React.FC = () => {
  return (
    <main className="font-sans antialiased text-[#575A5F] bg-[#FCFDFF]">
      
      <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
        <h1 className="text-[40px] md:text-[48px] font-bold text-[#0b1b36] mb-4">Contact Us</h1>
        <p className="text-[#575A5F] max-w-lg mx-auto leading-relaxed">
          Reach out to schedule a consultation or ask any question about your cardiac care journey.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-[32px] font-bold text-[#0b1b36] text-center mb-16">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-[19px] font-semibold text-[#0b1b36] mb-8">{loc.name}</h3>
              <div className="space-y-5 text-[14px]">
                <p className="flex gap-4 items-start"><MapPin size={20} className="text-[#0056b3] shrink-0 mt-0.5" /> {loc.address}</p>
                <p className="flex gap-4 items-center"><Phone size={20} className="text-[#0056b3] shrink-0" /> {loc.phone}</p>
                <div className="pt-4 border-t border-gray-50 space-y-3">
                  {loc.timings.map((t, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <Clock size={18} className="text-[#00a896] shrink-0 mt-0.5" />
                      <p className="font-medium text-[#575A5F]">{t.days}: <span className="text-[#0b1b36] font-bold">{t.hours}</span></p>
                    </div>
                  ))}
                </div>
              </div>
              <a href={loc.mapLink} className="inline-flex items-center gap-2 text-[#0056b3] font-bold text-[13px] uppercase tracking-widest mt-8 group-hover:gap-3 transition-all">
                Get Directions <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="space-y-8">
            <h2 className="text-[36px] font-bold text-[#0b1b36] leading-tight">Send Us an Inquiry</h2>
            <p className="text-[16px] leading-relaxed">Fill in the form and our team will respond within one business day. For urgent cardiac concerns, please call directly.</p>
            <div className="space-y-6 pt-6">
              <p className="flex items-center gap-4 text-[15px] font-medium"><Phone className="text-[#0056b3]" /> {DOCTOR.phone}</p>
              <p className="flex items-center gap-4 text-[15px] font-medium"><Mail className="text-[#0056b3]" /> {DOCTOR.email}</p>
              <p className="flex items-start gap-4 text-[15px] font-medium"><MapPin className="text-[#0056b3] mt-1" /> {LOCATIONS[0].address}</p>
            </div>
          </div>

          <form className="bg-[#F8FAFC] p-10 md:p-12 rounded-3xl border border-gray-100 space-y-6 shadow-inner">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0056b3] outline-none transition-all" required />
              <input type="email" placeholder="Email Address *" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0056b3] outline-none transition-all" required />
            </div>
            <input type="text" placeholder="Phone Number *" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0056b3] outline-none transition-all" required />
            <textarea placeholder="Message" rows={5} className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0056b3] outline-none transition-all"></textarea>
            <button className="w-full bg-[#0b1b36] text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#0056b3] transition-all shadow-lg hover:shadow-blue-900/20">
              Send Inquiry <Send size={18} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;