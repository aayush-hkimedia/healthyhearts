import React from 'react';
import { Link } from 'react-router-dom';

interface TestimonialVideo {
    id: string;
    title: string;
}

const TESTIMONIALS: TestimonialVideo[] = [
    { id: 'dQw4w9WgXcQ', title: 'Heaviness on chest- Testimonial Video | Heart Speciali' },
    { id: 'dQw4w9WgXcQ', title: 'Patient Testimonial | Dr. Monik Mehta | Manipal Hospit' },
    { id: 'dQw4w9WgXcQ', title: 'Transcatheter Aortic Valve Replacement | Dr. Monik M' },
    { id: 'dQw4w9WgXcQ', title: 'Cardiac Care Recovery Review | Patient Success' },
];

const PatientTestimonials: React.FC = () => {
    const scrollItems = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section className="bg-white py-16 font-sans overflow-hidden" id="testimonials">
            <div className="w-full">
                
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[38px] font-semibold text-[#1c2456] tracking-tight">
                        Patient Testimonial
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden mb-12 group">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
                        {scrollItems.map((video, idx) => (
                            <div 
                                key={idx}
                                className="w-[300px] sm:w-[400px] md:w-[460px] shrink-0 aspect-video rounded-none overflow-hidden bg-black shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md border border-transparent hover:border-gray-200"
                            >
                                <iframe
                                    className="w-full h-full border-0 pointer-events-auto"
                                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link
                        to="/testimonials"
                        className="bg-[#1c2456] hover:bg-[#151b40] text-white text-[15px] font-medium px-8 py-3 rounded transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
                    >
                        Read more
                    </Link>
                </div>

            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default PatientTestimonials;