import React from 'react';
import ResourceLayout from '../../../components/resource/ResourceLayout';
import { CHOLESTEROL_RESOURCE } from '../../../data/siteData';
import cholesterol from '../../../assets/Resource/cholesterol.jpg';

const CholesterolPage: React.FC = () => {
    const data = CHOLESTEROL_RESOURCE;

    return (
        <ResourceLayout currentSlug={data.slug} imageSrc={cholesterol}>
            <div className="space-y-8">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        {data.title}
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p className="text-lg text-[#0b1b36] font-medium">{data.overview}</p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.types.title}</h3>
                    <div className="grid gap-4">
                        <p><strong>LDL:</strong> {data.types.ldl}</p>
                        <p><strong>HDL:</strong> {data.types.hdl}</p>
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.impact.title}</h3>
                    <div className="space-y-6">
                        {data.impact.items.map((item, i) => (
                            <div key={i} className="pl-4 border-l-2 border-[#0056b3]">
                                <strong className="text-[#0b1b36]">{item.heading}</strong>
                                <p className="mt-1">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">{data.lifestyleFactors.title}</h3>
                    <div className="space-y-4">
                        {data.lifestyleFactors.items.map((item, i) => (
                            <div key={i}>
                                <strong className="text-[#0b1b36]">{item.factor}:</strong> {item.details}
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#F7FAFD] p-8 rounded-2xl border border-gray-100 mt-10">
                        <p className="text-[#0b1b36] leading-relaxed">
                            {data.conclusion.text}
                            <a href={data.conclusion.doctorUrl} className="text-[#0056b3] font-bold hover:underline">
                                {" " + data.conclusion.doctorName}
                            </a>, {data.conclusion.doctorLinkText}.
                        </p>
                    </div>
                </div>
            </div>
        </ResourceLayout>
    );
};

export default CholesterolPage;