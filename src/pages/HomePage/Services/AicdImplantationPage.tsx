import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const AICDImplantationPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="aicd-implantation">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        AICD Implantation
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        A rapid heartbeat can occasionally occur, preventing your heart from providing 
                        adequate blood to the rest of your body. These potentially lethal rhythms 
                        are called ventricular tachycardia or ventricular fibrillation.
                    </p>
                    <p>
                        These problems usually emerge in patients whose heart muscle weakens as a 
                        result of disorders like diabetes, a prior heart attack, and so forth. 
                        To address these issues, medicines and/or an AICD device are employed.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">What is an AICD device?</h3>
                    <p>
                        The AICD (Automatic Implantable Cardioverter-Defibrillator) is a small 
                        pacemaker-like device used to manage severe or life-threatening arrhythmias.
                    </p>
                    
                    

                    <ul className="space-y-3.5 my-4">
                        {[
                            'Unlike a pacemaker, which is used for dangerously slow heartbeats, the AICD is designed for life-threatening rapid rhythms.',
                            'It is a battery-operated device implanted in the chest to identify and terminate abnormal heartbeats.',
                            'It constantly monitors the heartbeat and, if necessary, delivers a shock to the heart to restore a normal rhythm.'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">The Procedure</h3>
                    <p>
                        The implantation of an AICD device is a minor surgical procedure performed 
                        under local anaesthesia by a specially trained cardiologist.
                    </p>
                    
                    <ul className="space-y-3.5 my-4">
                        {[
                            'The device is inserted through a small incision under your collarbone.',
                            'Leads (wires) are connected to your heart via a vein on one end, and to the device on the other.',
                            'The incision is closed and a local dressing is applied.',
                            'The procedure lasts about one to two hours, followed by a hospital stay of one to two days for recovery.'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default AICDImplantationPage;