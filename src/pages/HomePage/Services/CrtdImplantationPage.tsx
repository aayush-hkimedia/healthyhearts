import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const CRTDImplantationPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="crtd-lbba-implantation">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        CRTD Implantation
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        Heart problems are among the most prevalent health issues affecting people globally. 
                        Increasingly, even young adults are falling prey to these conditions. Many suffer 
                        from heart failure, which can be fatal in severe cases. Factors such as a sedentary 
                        lifestyle, unhealthy eating habits, and family history are major contributors 
                        to these prevailing issues.
                    </p>

                    <p>
                        The <strong>CRTD (Cardiac Resynchronization Therapy Device)</strong> is a 
                        technological boon for such patients. It helps save lives by monitoring heart 
                        rhythms, identifying irregularities, and delivering subtle electric 
                        simulations to correct them, effectively preventing fatal cardiac events.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Expert Care with Dr. (Col.) Monik Mehta</h3>
                    <p>
                        Serious cardiac issues like heart failure require treatment by the very best. 
                        <strong> Dr. (Col.) Monik Mehta</strong> is a renowned cardiologist with nearly 
                        30 years of experience. An expert in cardiac resynchronization devices, he 
                        maintains an exceptional track record in treating critical patients successfully. 
                        Dr. Mehta is known for treating his patients with profound compassion, ensuring 
                        comfort and clarity throughout the entire procedure.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Working Mechanism of CRTD</h3>
                    <p>
                        Similar to an ICD, the CRTD is designed to stop irregular heart rates and reinstate 
                        the proper rhythm. However, it utilizes a weaker electric signal for simulation 
                        and is specifically engineered to work for the lower chambers of the heart.
                    </p>
                    <ul className="space-y-3 my-4">
                        {[
                            'Equipped with three leads (wires) connected to the heart to deliver precise defibrillation.',
                            'Significantly enhances blood flow and provides relief from symptoms such as shortness of breath, exercise intolerance, and chronic fatigue.',
                            'Effectively reduces the risk of fatal cardiac events through constant monitoring.'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">The Implantation Process</h3>
                    <p>
                        Implanting a CRTD is a surgical procedure that generally lasts from two to four hours.
                    </p>
                    <div className="space-y-4 my-4">
                        <p><strong>1. Incision:</strong> Your surgeon makes a small incision below the shoulder area.</p>
                        <p><strong>2. Lead Placement:</strong> Three leads are carefully guided through a major vein below your collarbone and attached to the heart.</p>
                        <p><strong>3. Device Placement:</strong> The defibrillator unit is implanted in a prepared pocket under the collarbone, and the leads are attached to the device.</p>
                        <p><strong>4. Calibration:</strong> The device is professionally tuned to meet your specific medical needs, and the incision is closed.</p>
                    </div>
                    <p className="bg-[#F7FAFD] p-5 rounded-2xl border border-gray-100 italic">
                        Post-surgery, your doctor will require you to stay in the hospital for a couple of 
                        days to closely monitor the healing process and ensure the optimal operation 
                        of the newly inserted device.
                    </p>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default CRTDImplantationPage;