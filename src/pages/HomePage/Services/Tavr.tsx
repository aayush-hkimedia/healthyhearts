import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';
import { Link } from 'react-router-dom';

const TavrPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="tavr">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        TAVR (Transcatheter Aortic Valve Replacement)
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        If you or someone you care for is diagnosed with severe
                        aortic stenosis, the process of evaluating treatment
                        options can be overwhelming. It is crucial to understand
                        the options available and take action before aortic
                        stenosis becomes life-threatening.
                    </p>

                    <p>
                        In the past, the only option was open-heart surgery, but
                        today’s scenario is changing.{' '}
                        <strong><Link to='/'>Healthy Hearts Gurgaon</Link></strong> is here to help
                        you navigate this shift. TAVR (Transcatheter Aortic
                        Valve Replacement) is a minimally invasive procedure to
                        treat severe aortic valve stenosis—a condition where the
                        valve fails to open appropriately.The disease is termed
                        as Aortic Valve Stenosis. TAVR uses minimum possible
                        instruments. It can cause chest pain, fainting, fatigue,
                        leg swelling, and shortness of breath. It can also lead
                        to heart failure and sudden cardiac death.
                    </p>

                    <p>
                        TAVR is a minimally invasive option than open-heart
                        surgery for the treatment of severe aortic stenosis. The
                        TAVR procedure (also called transcatheter aortic valve
                        implantation, or TAVI) uses a catheter to implant a new
                        valve within your diseased valve instead of opening the
                        chest to remove and replace the diseased valve. As this
                        treatment is less invasive, it can help to get back to
                        the activities you love faster than open-heart surgery.
                    </p>

                    <div className="p-6 bg-[#F7FAFD] rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-[#0b1b36] mb-2">
                            The Transfemoral Approach
                        </h4>
                        <p>
                            The TAVR method involves the introduction of a new
                            valve through a small incision in the leg, which
                            refers to the “transfemoral approach. The new valve
                            is guided into place within the heart using a
                            catheter. When appropriately positioned,
                            <Link to='/your-doctor'>Cardiologists</Link> remove the catheter, and the new valve
                            takes over, allowing the heart to pump blood more
                            efficiently throughout the body. Doctors perform the
                            procedure while the heart is beating. Most TAVR
                            patients can return to their normal activities more
                            quickly than with open-heart surgery, which usually
                            takes weeks or months for recovery.
                        </p>
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">
                        Indications
                    </h3>
                    <ul className="space-y-3 my-4">
                        {[
                            'Patients at intermediate or high risk of complications from traditional surgery.',
                            'Patients who cannot undergo open-heart surgery (decision made after specialized consultation).',
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">
                        Risks & Considerations
                    </h3>
                    <p>
                        While TAVR can mitigate symptoms and improve overall
                        health, it carries specific risks, including stroke,
                        bleeding, vessel complications, or leakage in the
                        replaced valve.
                    </p>

                    <div className="bg-white p-6 border border-gray-200 rounded-2xl">
                        <h4 className="font-bold text-[#0b1b36] mb-3">
                            Post-Procedure Commitment
                        </h4>
                        <p className="mb-4">
                            Successful recovery requires your active
                            participation. This includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Adhering strictly to prescribed medications.
                            </li>
                            <li>
                                Attending{' '}
                                <Link
                                    to="/services/consultation-for-heart"
                                    className="text-[#0056b3] underline"
                                >
                                    regular doctor visits
                                </Link>
                                .
                            </li>
                            <li>
                                Maintaining a{' '}
                                <Link
                                    to="/healthy-lifestyle"
                                    className="text-[#0056b3] underline"
                                >
                                    healthy lifestyle
                                </Link>{' '}
                                (heart-healthy diet, regular workouts, and
                                avoiding smoking).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default TavrPage;
