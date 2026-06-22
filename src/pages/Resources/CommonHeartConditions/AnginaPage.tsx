import React from 'react';
import ResourceLayout from '../../../components/resource/ResourceLayout';
import { ANGINA_RESOURCE } from '../../../data/siteData';
import anginaHeroImage from '../../../assets/Resource/angina-chest-pain.webp';

const AnginaPage: React.FC = () => {
    const data = ANGINA_RESOURCE;

    return (
        <ResourceLayout currentSlug={data.slug} imageSrc={anginaHeroImage}>
            <div className="space-y-8">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        {data.title}
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>{data.overview}</p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.causes.title}</h3>
                    <p>{data.causes.description}</p>
                    <div className="space-y-6 my-6">
                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">{data.causes.cardiac.title}</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                {data.causes.cardiac.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">{data.causes.nonCardiac.title}</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                {data.causes.nonCardiac.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.symptoms.title}</h3>
                    <div className="pl-4 border-l-2 border-gray-200 my-6">
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            {[...data.symptoms.typical, ...data.symptoms.atypical].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>

                    <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl text-[#0b1b36] font-medium">
                        <strong className="block mb-1">Kidney Connection:</strong>
                        {data.complications.items[0]}
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.riskFactors.title}</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 border-l-2 border-gray-200 pl-9">
                        {data.riskFactors.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>

                    <div className="space-y-3 bg-[#FEF2F2] border border-[#FCA5A5] p-6 rounded-2xl text-[#991B1B]">
                        <h4 className="text-[18px] font-bold m-0">{data.emergencyProtocol.title}</h4>
                        {data.emergencyProtocol.criticalNotes.map((note, i) => (
                            <p key={i} className={i === 0 ? "font-bold m-0" : "m-0"}>{note}</p>
                        ))}
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.treatment.title}</h3>
                    <p>{data.treatment.overview}</p>
                    <div className="space-y-6 my-6">
                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">Lifestyle Changes</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                {data.treatment.lifestyle.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">Clinical Interventions</strong>
                            <p className="text-[15px]">{data.treatment.clinical.join(' ')}</p>
                        </div>
                    </div>

                    <p className="pt-2 font-medium text-[#0b1b36]">{data.conclusion}</p>

                    <div className="bg-[#F7FAFD] p-8 rounded-2xl border border-gray-100 text-center mt-10">
                        <p className="font-semibold text-[#0b1b36] mb-6">
                            Do you need further advice or more information regarding angina?
                        </p>
                        <a href="/contact" className="inline-block px-8 py-3 bg-[#0056b3] text-white rounded-xl font-bold hover:bg-[#0A2540] transition-colors">
                            Contact Our Clinic
                        </a>
                    </div>
                </div>
            </div>
        </ResourceLayout>
    );
};

export default AnginaPage;