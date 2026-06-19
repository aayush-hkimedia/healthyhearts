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
    const scrollItems = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section className="bg-white py-2 font-sans overflow-hidden" id="testimonials">
            <div className="w-full">
                
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1c2456] tracking-tight">
                        Patient Testimonials
                    </h2>
                    <div className="w-12 h-[3px] bg-[#1c2456] mx-auto mt-5 rounded-full"></div>
                </div>

                <div className="relative w-full overflow-hidden mb-16 group">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused] px-4">
                        {scrollItems.map((video, idx) => (
                            <div 
                                key={idx}
                                className="w-[85vw] md:w-[45vw] lg:w-[31vw] xl:w-[31.5vw] shrink-0 aspect-video rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100"
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

                {/* <div className="flex justify-center">
                    <Link
                        to="/testimonials"
                        className="bg-[#1c2456] hover:bg-[#151b40] text-white text-[16px] font-medium px-10 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                        Read more
                    </Link>
                </div> */}

            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    /* -50% shifts exactly half the items, -1rem accounts for half of the gap-8 (2rem) space between the two identical sets */
                    100% { transform: translateX(calc(-50% - 1rem)); }
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default PatientTestimonials;