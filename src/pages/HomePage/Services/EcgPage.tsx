import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const ECGPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="ecg">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        ECG
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        An ECG, or electrocardiogram, is a simple test that is used to monitor the health of your heart and identify heart problems quickly. Sensors attached to the skin are used to detect the electrical signals produced by your heart each time it beats. These signals are recorded by a machine and can be printed on a paper strip. This printout of the heart’s electrical signals is read by the cardiologist to look for any abnormality in the heart rate and rhythm, the supply of blood and oxygen to the heart, previous or in-progress heart attack, and structural abnormalities like chamber enlargement, etc.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Conditions in which ECG is needed</h3>
                    <p>
                        ECG is a completely non-invasive and painless testing procedure. It can be done safely for all age groups. It may be recommended for patients with chest pain, dizziness and confusion, palpitation, and shortness of breath. The test is used to detect the following conditions e.g
                    </p>
                    <ul className="space-y-3 my-4">
                        {[
                            'Abnormal heart rhythm',
                            'Narrowed and blocked arteries in the heart that can lead to angina or heart attack',
                            'Monitoring treatments and function of devices like pacemakers',
                            'During regular check-ups, if you have had heart attacks or have a family history of heart attacks'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">The process</h3>
                    <p>
                        The process takes a few minutes and can be done in a clinic or hospital. Up to 12 electrodes, or sensors, are attached to your chest and limbs with the help of patches. These electrodes contain wires that are connected to the monitor that records and displays the electric signals responsible for your heartbeat in a waveform that is then printed on a paper strip.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Risks or side effects</h3>
                    <p>
                        An ECG is a quick, safe, and painless test. No electricity is put into your body while it’s carried out. Hence, it is a completely safe
                    </p>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default ECGPage;