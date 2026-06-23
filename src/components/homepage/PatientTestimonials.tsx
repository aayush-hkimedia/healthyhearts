import React, { useState, useRef, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

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
    const [playingIdx, setPlayingIdx] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Added a 5px buffer to prevent precision issues on some screens
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            // Scroll by roughly the width of one card
            const scrollAmount = window.innerWidth < 640 ? window.innerWidth * 0.85 : 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="bg-white py-14 sm:py-20 font-sans" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#0b1b36] tracking-tight">
                        Patient Testimonials
                    </h2>
                    <div className="w-16 h-[3px] bg-[#0056b3] mx-auto mt-4 sm:mt-5 rounded-full"></div>
                </div>

                <div className="relative w-full group">
                    
                    {/* LEFT ARROW */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute left-2 sm:-left-4 md:-left-6 top-[45%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-[#0056b3] hover:bg-[#0056b3] hover:text-white transition-all duration-300 focus:outline-none ${canScrollLeft ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} className="ml-[-2px]" />
                    </button>

                    <div 
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
                    >
                        {TESTIMONIALS.map((video, idx) => (
                            <div 
                                key={idx}
                                className="w-[85vw] max-w-[280px] sm:max-w-[360px] md:max-w-[480px] shrink-0 snap-center sm:snap-start aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 md:hover:scale-[1.02] md:hover:shadow-2xl border border-gray-100 relative group/video"
                            >
                                {playingIdx === idx ? (
                                    <iframe
                                        className="w-full h-full border-0"
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div 
                                        className="w-full h-full relative cursor-pointer"
                                        onClick={() => setPlayingIdx(idx)}
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover/video:bg-black/30 transition-colors duration-300">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 group-hover/video:scale-110 transition-transform duration-300">
                                                <Play size={26} className="text-white ml-1.5 fill-white" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={() => scroll('right')}
                        className={`absolute right-2 sm:-right-4 md:-right-6 top-[45%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-[#0056b3] hover:bg-[#0056b3] hover:text-white transition-all duration-300 focus:outline-none ${canScrollRight ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} className="mr-[-2px]" />
                    </button>

                </div>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default PatientTestimonials;