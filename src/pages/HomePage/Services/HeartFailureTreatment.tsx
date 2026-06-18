import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const HeartFailureTreatmentPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="heart-failure-treatment">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Heart Failure Treatment
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        Heart failure is a condition where the heart cannot pump enough blood to satisfy the requirements 
                        of your body. It does not mean your heart has stopped working, but that it needs support 
                        to function effectively. This usually occurs because the heart has become too weak or stiff.
                    </p>

                    <p>
                        In medical terminology, it is referred to as <strong>"congestive heart failure."</strong> While it can 
                        occur at any age, it is most common in older individuals. It usually develops gradually, 
                        tending to worsen over time, though in some cases, it may occur suddenly without prior 
                        symptoms or history of heart disease. While it often cannot be cured, symptoms can 
                        frequently be controlled effectively for many years.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Expert Care with Dr. (Col.) Monik Mehta</h3>
                    <p>
                        Dr. (Col.) Monik Mehta is one of the best heart specialists in the country and has 
                        established the <strong>Healthy Heart Clinic</strong> to provide world-class, 
                        quality treatment for heart diseases. With his vast and rich experience, he ensures 
                        precise diagnosis and effective management for conditions like acute heart failure. 
                        Dr. Mehta has an impeccable record in saving lives in emergency conditions and 
                        has earned the deep trust and appreciation of his patients for improving their quality of life.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Heart Failure Treatment Options</h3>
                    <p>
                        Heart failure is a critical health condition that requires immediate medical attention. 
                        As this problem can have serious long-term consequences, treatments are centered 
                        on symptom management, disease control, and preventing further failure. 
                        Treatment is usually required for life, often utilizing three options in combination:
                    </p>

                    <div className="space-y-6 my-6">
                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">Medication</strong>
                            <p className="text-[14.5px] leading-relaxed">
                                Various medications are prescribed to help manage symptoms and improve heart function, including:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Widening blood vessels to increase blood flow</li>
                                <li>Lowering or normalizing the heart rate</li>
                                <li>Preventing fluid accumulation in the body</li>
                                <li>Reducing chest pain and managing cholesterol levels</li>
                            </ul>
                        </div>

                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">Angioplasty or Surgery</strong>
                            <p className="text-[14.5px] leading-relaxed">
                                If the heart failure is caused by a clogged artery or a faulty valve, your cardiologist 
                                may recommend repair or replacement of the valve, bypass grafting to create a new pathway 
                                for blood flow, or angioplasty to open blocked vessels.
                            </p>
                        </div>

                        <div className="pl-4 border-l-2 border-gray-200">
                            <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">Medical Devices</strong>
                            <p className="text-[14.5px] leading-relaxed">
                                Advanced devices such as pacemakers and ICDs (Implantable Cardioverter-Defibrillators) 
                                are used to restore rhythm and provide electric simulations to ensure efficient pumping. 
                                In cases where a heart transplant is indicated, a heart pump may be used to extend 
                                life while awaiting a donor.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#F7FAFD] p-6 rounded-2xl border border-gray-100 text-center">
                        <p className="font-semibold text-[#0b1b36]">
                            Do you need further advice or more information regarding heart failure treatment?
                        </p>
                        <a href="/contact" className="inline-block mt-4 px-6 py-3 bg-[#0056b3] text-white rounded-xl font-bold hover:bg-[#0A2540] transition-colors">
                            Contact Our Clinic
                        </a>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default HeartFailureTreatmentPage;