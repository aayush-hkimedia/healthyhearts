import React from 'react';

interface TestimonialVideo {
    id: string;
    title: string;
}

const TESTIMONIALS: TestimonialVideo[] = [
    { id: '7oqckWd-gGE', title: 'Heaviness on chest - Testimonial Video' },
    { id: '_B8l3ZACRvU', title: 'Patient Testimonial | Dr. Monik Mehta' },
    { id: 'LcLpaEE35_A', title: 'Transcatheter Aortic Valve Replacement' },
    { id: 'FO3knQmWQnA', title: 'Cardiac Care Recovery Review 1' },
];

const PatientTestimonials: React.FC = () => {
    const scrollItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section className="bg-white py-14 sm:py-20 font-sans overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0b1b36] tracking-tight">
                        Patient Testimonials
                    </h2>
                    <div className="w-16 h-[3px] bg-[#0056b3] mx-auto mt-4 sm:mt-5 rounded-full"></div>
                </div>

                <div className="relative w-full overflow-hidden group">
                    <div className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee whitespace-nowrap will-change-transform md:group-hover:[animation-play-state:paused]">
                        {scrollItems.map((video, idx) => (
                            <div 
                                key={idx}
                                className="w-[280px] sm:w-[360px] md:w-[480px] shrink-0 aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 md:hover:scale-[1.02] md:hover:shadow-2xl border border-gray-100 relative"
                            >
                                <iframe
                                    className="w-full h-full border-0 pointer-events-none md:pointer-events-auto"
                                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.3333%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                @media (min-width: 768px) {
                    .animate-marquee {
                        animation: marquee 40s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default PatientTestimonials;