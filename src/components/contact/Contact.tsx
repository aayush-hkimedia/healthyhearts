import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';
import { LOCATIONS, DOCTOR } from '../../data/siteData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfvgjoWSmG7VwFPvo5_tVcnN_re6oFv8hTy7gWfv-4JLNCQsQ/formResponse";

    const formBody = new URLSearchParams();
    formBody.append('entry.364346808', formData.name);
    formBody.append('entry.1646337660', formData.email);
    formBody.append('entry.765530356', formData.phone);
    formBody.append('entry.201103062', formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="font-sans antialiased text-[#575A5F] bg-[#FCFDFF]">
      
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 text-center border-b border-gray-100">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#0b1b36] mb-3.5 tracking-tight">Contact Us</h1>
        <p className="text-[#575A5F] max-w-lg mx-auto leading-relaxed text-[15px] sm:text-[16px] balance">
          Reach out to schedule a consultation or ask any question about your cardiac care journey.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0b1b36] text-center mb-10 sm:mb-16 tracking-tight">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0b1b36] mb-6 sm:mb-8">{loc.name}</h3>
                <div className="space-y-4 sm:space-y-5 text-[14px]">
                  <p className="flex gap-3 sm:gap-4 items-start"><MapPin size={20} className="text-[#0056b3] shrink-0 mt-0.5" /> <span className="leading-relaxed">{loc.address}</span></p>
                  <p className="flex gap-3 sm:gap-4 items-center"><Phone size={20} className="text-[#0056b3] shrink-0" /> <a href={`tel:${loc.phone}`} className="hover:text-[#0056b3] transition-colors">{loc.phone}</a></p>
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    {loc.timings.map((t, idx) => (
                      <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                        <Clock size={18} className="text-[#00a896] shrink-0 mt-0.5" />
                        <p className="font-medium text-[#575A5F] leading-normal">{t.days}: <span className="text-[#0b1b36] font-bold whitespace-nowrap">{t.hours}</span></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-2">
                <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0056b3] font-bold text-[13px] uppercase tracking-widest group-hover:gap-3 transition-all">
                  <span>Get Directions</span> <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0b1b36] leading-tight tracking-tight">Send Us an Inquiry</h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed balance">Fill in the form and our team will respond within one business day. For urgent cardiac concerns, please call directly.</p>
            <div className="space-y-4 pt-4 sm:pt-6 border-t lg:border-t-0 border-gray-100 flex flex-col items-center lg:items-start text-left">
              <p className="flex items-center gap-3.5 text-[15px] font-medium"><Phone className="text-[#0056b3] shrink-0" /> <a href={`tel:${DOCTOR.phone}`} className="hover:text-[#0056b3] transition-colors">{DOCTOR.phone}</a></p>
              <p className="flex items-center gap-3.5 text-[15px] font-medium"><Mail className="text-[#0056b3] shrink-0" /> <a href={`mailto:${DOCTOR.email}`} className="hover:text-[#0056b3] transition-colors break-all">{DOCTOR.email}</a></p>
              <p className="flex items-start gap-3.5 text-[15px] font-medium"><MapPin className="text-[#0056b3] mt-0.5 shrink-0" /> <span className="leading-relaxed">{LOCATIONS[0].address}</span></p>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            {submitted ? (
              <div className="bg-[#F8FAFC] p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-gray-100 text-center space-y-3 shadow-inner flex flex-col justify-center items-center min-h-[350px]">
                <h3 className="text-2xl font-bold text-[#0b1b36] tracking-tight">Thank You!</h3>
                <p className="text-[#575A5F] text-[15px] sm:text-[16px] max-w-md balance">Your inquiry has been submitted successfully. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F8FAFC] p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-gray-100 space-y-4 sm:space-y-5 shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] text-[14px] text-[#0b1b36] placeholder-gray-400 transition-all" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] text-[14px] text-[#0b1b36] placeholder-gray-400 transition-all" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Phone Number *" 
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] text-[14px] text-[#0b1b36] placeholder-gray-400 transition-all" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required 
                />
                <textarea 
                  placeholder="Message" 
                  rows={5} 
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3] text-[14px] text-[#0b1b36] placeholder-gray-400 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="w-full bg-[#0b1b36] hover:bg-[#0056b3] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-blue-900/20 text-[15px] cursor-pointer active:translate-y-0 hover:-translate-y-0.5">
                  <span>Send Inquiry</span> <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;