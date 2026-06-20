import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const CoronaryAngiographyPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="coronary-angiography">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Coronary Angiography
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        Coronary angiography is an invasive imaging procedure that allows the evaluation 
                        of heart function. It usually involves taking X-rays of the heart’s arteries 
                        (coronary arteries) using a technique called coronary angiography. The resulting 
                        photos are known as coronary angiograms.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">The Need for Coronary Angiography</h3>
                    <p>
                        Coronary angiography helps in finding the presence of heart problems, 
                        planning the future course of treatment, and carrying out certain procedures. 
                        For example, it may be used:
                    </p>
                    <ul className="space-y-3 my-4">
                        {[
                            'After a heart attack – where the heart’s blood supply is blocked',
                            'To help diagnose angina – where pain in the chest is caused by restricted blood supply',
                            'To plan interventional or surgical procedures – such as a coronary angioplasty'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Stages of the Procedure</h3>
                    <ul className="space-y-3.5 my-4">
                        {[
                            'A long, thin, flexible tube called a catheter is inserted into a blood vessel in your groin or arm.',
                            'Using X-ray images as a guide, the tip of the catheter is passed up to the heart and coronary arteries.',
                            'A special dye (contrast medium) is injected, making blood vessels visible on angiograms to highlight blockages.',
                            'The procedure is carried out under local anaesthetic, keeping you awake while the insertion area is numbed.'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Post-Procedure Care</h3>
                    <p>
                        You’ll usually be able to leave the hospital on the same day after a period of 
                        rest and observation. You may feel tired, and the wound site may be tender for 
                        up to a week with bruising lasting up to 2 weeks. It is advised to avoid 
                        strenuous activities, bathing, and heavy lifting for a few days, and do not 
                        drive until confirmed safe (typically up to 3 days).
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Benefits & Risks</h3>
                    <p>
                        <strong>Benefits:</strong> It is considered the "Gold standard" for diagnosing 
                        coronary heart disease, where fatty substance build-up affects heart blood supply.
                    </p>
                    <p>
                        <strong>Risks:</strong> While very safe (major complications are ~1%), risks include 
                        allergic reactions to dye, bleeding at the insertion site, or rarely, damage to 
                        arteries, heart attack, stroke, or kidney damage.
                    </p>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default CoronaryAngiographyPage;