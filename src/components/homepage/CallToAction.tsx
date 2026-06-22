import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { DOCTOR } from '../../data/siteData';

interface CallToActionProps {
  title?: string;
  description?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = 'Start Your Journey to a Healthier Heart',
  description = "Schedule a comprehensive consultation with Dr. Monik Mehta — one of India's leading interventional cardiologists. Early evaluation saves lives.",
}) => {
  return (
    <section className="bg-[#FCFDFF] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-[#0b1b36] tracking-tight">
              Stay Connected
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#575A5F] max-w-lg mx-auto balance">
              Join our community for regular heart-health insights and clinic updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { 
                label: 'Facebook', 
                svg: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="text-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                bg: 'bg-[#1877F2]',
                src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdrmonikmehta%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" 
              },
              { 
                label: 'Instagram', 
                svg: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.135.052 1.917.23 2.583.49.704.272 1.206.598 1.734 1.127.528.528.854 1.03 1.127 1.734.26.666.438 1.448.49 2.583.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.135-.23 1.917-.49 2.583-.272.704-.598 1.206-1.127 1.734-.528.528-1.03.854-1.734 1.127-.666.26-1.448.438-2.583.49-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.135-.052-1.917-.23-2.583-.49-.704-.272-1.206-.598-1.734-1.127-.528-.528-.854-1.03-1.127-1.734-.26-.666-.438-1.448-.49-2.583-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.135.23-1.917.49-2.583.272-.704.598-1.206 1.127-1.734.528-.528 1.03-.854 1.734-1.127.666-.26 1.448-.438 2.583-.49 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.15.253-2.916.551-.788.307-1.455.72-2.12 1.385-.664.664-1.077 1.332-1.385 2.12-.298.766-.493 1.639-.551 2.916-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.253 2.15.551 2.916.307.788.72 1.455 1.385 2.12.664.664 1.332 1.077 2.12 1.385.766.298 1.639.493 2.916.551 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.15-.253 2.916-.551.788-.307 1.455-.72 2.12-1.385.664-.664 1.077-1.332 1.385-2.12.298-.766.493-1.639.551-2.916.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.253-2.15-.551-2.916-.307-.788-.72-1.455-1.385-2.12-.664-.664-1.332-1.077-2.12-1.385-.766-.298-1.639-.493-2.916-.551-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/></svg>,
                bg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
                src: "https://www.instagram.com/healthyheartsgurgaon/embed" 
              }
            ].map((social, i) => (
              <div key={i} className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 px-2 sm:px-4 py-3 border-b border-gray-50 mb-3">
                  <div className={`p-2 rounded-full shrink-0 ${social.bg}`}>
                    {social.svg}
                  </div>
                  <span className="font-bold text-[#0b1b36] text-[15px] sm:text-[16px]">{social.label}</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-50">
                  <iframe
                    src={social.src}
                    className="w-full h-full border-none absolute inset-0"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-6 sm:p-10 lg:p-16 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,86,179,0.1)] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] block">
              Take Action Today
            </span>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#0b1b36] leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[17px] text-[#575A5F] leading-[1.65] balance">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
            <a 
              href={`tel:${DOCTOR.phone}`} 
              className="bg-[#0b1b36] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0056b3] transition-all shadow-lg hover:shadow-blue-900/20 whitespace-nowrap text-[15px]"
            >
              <Phone size={18} /> <span>Call Now</span>
            </a>
            <a 
              href="https://calendly.com/healthyheartsgurgaon/appointment" 
              className="bg-white border-2 border-[#0056b3] text-[#0056b3] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F0F6FF] transition-all whitespace-nowrap text-[15px]"
            >
              <span>Book Online</span> <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;