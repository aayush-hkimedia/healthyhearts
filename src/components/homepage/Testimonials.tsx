import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-surface-container-lowest py-section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="font-label-caps text-secondary uppercase tracking-widest">
            Patient Stories
          </span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-4">
            Lives Changed, Hearts Healed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-clinical border border-outline-variant/20 flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-secondary mb-6" />
                <p className="font-body-md text-on-surface-variant italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-surface-container">
                <div className="w-12 h-12 bg-primary-fixed text-primary rounded-full flex items-center justify-center font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wide">{t.location}</p>
                </div>
                <div className="text-secondary text-sm">
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