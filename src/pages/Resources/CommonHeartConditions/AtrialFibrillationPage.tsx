import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '../../../components/resource/ResourceLayout';
import { ATRIAL_FIBRILLATION_RESOURCE } from '../../../data/siteData';
import cholesterol from '../../../assets/Resource/cholesterol.jpg';
const AtrialFibrillationPage: React.FC = () => {
    const data = ATRIAL_FIBRILLATION_RESOURCE;

    return (
        <ResourceLayout currentSlug={data.slug}  imageSrc={cholesterol}>
            <div className="space-y-6 sm:space-y-8">
                <div>
                    <h1 className="text-[28px] sm:text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-3 sm:mb-4">
                        {data.title}
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15px] sm:text-[16px] leading-relaxed space-y-5 sm:space-y-6">
                    <p className="balance">{data.overview}</p>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0b1b36] pt-2 sm:pt-4">{data.causes.title}</h3>
                    <p className="balance">{data.causes.description}</p>
                    
                    <div className="pl-4 sm:pl-5 border-l-2 border-gray-200 my-4 sm:my-6">
                        <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                            {data.causes.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0b1b36] pt-2 sm:pt-4">{data.symptoms.title}</h3>
                    <p className="balance">{data.symptoms.description}</p>
                    
                    <div className="pl-4 sm:pl-5 border-l-2 border-gray-200 my-4 sm:my-6">
                        <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                            {data.symptoms.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="bg-[#F8FAFC] border border-gray-200 p-4 sm:p-5 rounded-xl text-[#0b1b36] font-medium text-[14.5px] sm:text-[15.5px] leading-relaxed balance">
                        {data.symptoms.criticalNote}
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0b1b36] pt-2 sm:pt-4">{data.complications.title}</h3>
                    <div className="bg-[#FEF2F2] border border-[#FCA5A5] p-4 sm:p-5 rounded-xl text-[#991B1B] text-[14.5px] sm:text-[15.5px] leading-relaxed">
                        <p className="font-bold balance">{data.complications.dangerText}</p>
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0b1b36] pt-2 sm:pt-4">{data.treatment.title}</h3>
                    <p className="balance">
                        To manage AFib, doctors will perform an{' '}
                        <Link to="/services/ecg" className="text-[#0056b3] font-semibold hover:underline transition-colors">
                            electrocardiogram (ECG)
                        </Link>
                        , which records the heart’s electrical activity.
                    </p>
                    <p className="balance">{data.treatment.optionsText}</p>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0b1b36] pt-2 sm:pt-4">{data.management.title}</h3>
                    <p className="balance">{data.management.lifestyleText}</p>
                    <p className="balance">
                        It’s also important to follow{' '}
                        <Link to="/your-doctor" className="text-[#0056b3] font-semibold hover:underline transition-colors">
                            your doctor’s
                        </Link>{' '}
                        recommendations for monitoring and treating AFib and also in case you are suffering from comorbidities such as high BP, diabetes, lung problems, etc. Do seek prompt medical attention if you experience any new or worsening symptoms.
                    </p>

                    <p className="pt-3 sm:pt-4 font-medium text-[#0b1b36] balance">
                        {data.conclusion.text}
                        <a 
                            href={data.conclusion.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#0056b3] font-bold hover:underline transition-colors"
                        >
                            {data.conclusion.linkText}
                        </a>
                        .
                    </p>

                    <div className="bg-[#F7FAFD] p-6 sm:p-8 rounded-2xl border border-gray-100 text-center mt-8 sm:mt-10">
                        <p className="font-semibold text-[#0b1b36] text-[15px] sm:text-[16px] balance">
                            Do you need further advice or more information regarding Atrial Fibrillation?
                        </p>
                        <Link to="/contact" className="inline-block mt-4 sm:mt-5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0056b3] text-white rounded-xl font-bold hover:bg-[#0A2540] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                            Contact Our Clinic
                        </Link>
                    </div>
                    
                </div>
            </div>
        </ResourceLayout>
    );
};

export default AtrialFibrillationPage;