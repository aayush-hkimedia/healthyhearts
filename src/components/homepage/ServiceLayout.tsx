import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../../data/siteData';

interface ServiceLayoutProps {
    children: React.ReactNode;
    currentSlug: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
    children,
    currentSlug,
}) => {
    const otherServices = SERVICES.filter((s) => s.slug !== currentSlug).slice(
        0,
        6,
    );

    return (
        <main className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-[#f3f8ff] via-white to-[#eef6ff] relative overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full" />
            <div className="absolute right-10 bottom-20 w-96 h-96 bg-cyan-200/20 blur-[140px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-md text-[14px] font-semibold text-[#575A5F] hover:text-[#0056b3] transition-all mb-12 group"
                >
                    <ArrowLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to all services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 md:p-10">
                        {children}
                    </div>

                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
                        <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,86,179,0.18)]">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                                alt="Consultation"
                                className="w-full h-[320px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d]/60 via-transparent to-transparent" />
                            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                                <p className="text-[14px] font-semibold text-[#0b1b36]">
                                    Trusted by 10,000+ Patients
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[32px] overflow-hidden border border-blue-100 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,86,179,0.12)]">
                            <div className="px-7 py-6 bg-gradient-to-r from-[#003b7a] via-[#0056b3] to-[#0d8bff]">
                                <span className="text-blue-100 font-bold text-[12px] uppercase tracking-[0.1em] block mb-2">
                                    Consultation
                                </span>

                                <h3 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight">
                                    Book Appointment
                                </h3>

                                <p className="text-[15px] text-blue-100 leading-[1.6] mt-3">
                                    Schedule an appointment with our specialist
                                </p>
                            </div>

                            <div className="px-6 pt-5 flex gap-3 flex-wrap">
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] text-[12px] font-semibold">
                                    Expert Doctors
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] text-[12px] font-semibold">
                                    Secure Booking
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] text-[12px] font-semibold">
                                    Fast Response
                                </span>
                            </div>

                            <div className="p-4 bg-white">
                                <iframe
                                    src="https://healthyheartsgurgaon.com/wp-json/ssa/v1/embed-inner?integration&type=consultation-phone-call&label&types=1&ssa_locale=en_US&sid=b457aa22b6c63b1c8ecbf79839af7aa3fbca632e&booking_url=https%3A%2F%2Fhealthyheartsgurgaon.com%2Fechocardiography%2F&booking_post_id=471&booking_title=Echocardiography&_wpnonce=ae56ad64f6#/"
                                    title="Book a consultation"
                                    width="100%"
                                    height="705"
                                    loading="eager"
                                    className="w-full rounded-2xl border-0"
                                    style={{ overflow: 'hidden' }}
                                />
                            </div>
                        </div>

                        <div className="rounded-[32px] p-8 bg-white/85 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                            <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3 block">
                                More Services
                            </span>

                            <h3 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-5 leading-tight">
                                Hospital Services
                            </h3>

                            <ul className="space-y-2">
                                {otherServices.map((item) => (
                                    <li key={item.slug}>
                                        <Link
                                            to={`/services/${item.slug}`}
                                            className="py-4 px-4 rounded-2xl flex items-center justify-between hover:bg-blue-50 transition-all group"
                                        >
                                            <span className="text-[15px] text-[#575A5F] leading-[1.6] font-medium group-hover:text-[#0056b3] transition-colors">
                                                {item.title}
                                            </span>

                                            <ChevronRight
                                                size={16}
                                                className="text-gray-400 group-hover:text-[#0056b3] group-hover:translate-x-1 transition-all"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceLayout;
