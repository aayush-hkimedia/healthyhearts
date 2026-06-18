import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../../data/siteData';
import ConsultationForm from './ConsultaionForm';

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
        <main className="bg-white min-h-screen pt-32 pb-24 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#575A5F] hover:text-[#0056b3] transition-colors mb-12 group"
                >
                    <ArrowLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform"
                    />{' '}
                    Back to all services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                    <div className="lg:col-span-7">{children}</div>

                   
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                            alt="Consultation"
                            className="w-full h-[320px] object-cover rounded-3xl"
                        />
                        <ConsultationForm />
                        <div className="bg-white rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-[18px] font-bold text-[#0b1b36] mb-4">
                                Other Hospital Services
                            </h3>
                            <ul className="divide-y divide-gray-100">
                                {otherServices.map((item) => (
                                    <li key={item.slug}>
                                        <Link
                                            to={`/services/${item.slug}`}
                                            className="py-3.5 flex items-center justify-between text-[14.5px] text-[#575A5F] hover:text-[#0056b3] font-semibold group transition-colors"
                                        >
                                            {item.title}
                                            <ChevronRight
                                                size={16}
                                                className="text-gray-400 group-hover:text-[#0056b3] group-hover:translate-x-0.5 transition-all"
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
