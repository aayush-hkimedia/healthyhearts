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
    <section className="bg-primary py-section-padding">
      <div className="container">
        <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-clinical flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/20">
          <div className="space-y-4">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight max-w-xl">
              {title}
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a 
              href={`tel:${DOCTOR.phone}`} 
              className="bg-secondary text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-md"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a 
              href={`tel:${DOCTOR.phone}`} 
              className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
            >
              Book Online <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;