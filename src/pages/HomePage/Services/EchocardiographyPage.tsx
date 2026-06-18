import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const EchocardiographyPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="2d-echo">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Echocardiography (2D Echo)
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        This is a non-invasive test to look at the heart and
                        blood flow inside it. It is a type of ultrasound scan
                        that uses high-frequency sound waves to create an image
                        on a computer monitor, which is then analysed by the
                        cardiologist. It is extremely helpful in detecting any
                        structural damage or defect in the heart or its various
                        parts, and it can also study the flow of blood inside
                        the heart chambers
                    </p>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default EchocardiographyPage;
