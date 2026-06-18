import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const AngioplastyPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="angioplasty">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Angioplasty
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        Angioplasty is a minimally invasive treatment method
                        that involves stretching open a narrowed or blocked
                        artery with a balloon. It is done by inserting a
                        deflated balloon into the narrowed vessel and then
                        inflating it to push the plaque out of the artery,
                        widening it, and restoring the vessel to normal size.
                    </p>
                    <p>
                        The blockage is typically caused by “atherosclerosis,” a
                        condition in which a waxy substance or cholesterol
                        plaque begins to build and harden inside the artery
                        walls, causing blood flow to slow or even stop over
                        time. Atherosclerosis can develop in any artery
                        throughout the body, having the potential to harm the
                        heart, brain, limbs, and kidneys.
                    </p>
                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">
                        Associated Diseases
                    </h3>
                    <ul className="space-y-4 my-4">
                        {[
                            {
                                title: 'Coronary Artery Disease (CAD):',
                                text: 'When atherosclerosis affects the arteries leading to the heart, it can manifest as angina or a heart attack.',
                            },
                            {
                                title: 'Carotid Artery Disease:',
                                text: 'Affects arteries leading to the neck and brain. Cholesterol fragments can break off and cause a paralytic stroke.',
                            },
                            {
                                title: 'Kidney Disease:',
                                text: 'When atherosclerosis affects the renal arteries leading to your kidneys, it can cause kidney failure.',
                            },
                            {
                                title: 'PAD (Peripheral Artery Disease):',
                                text: 'Caused by a blockage in the peripheral arteries that run through your legs, stomach, and arms.',
                            },
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>
                                    <strong>{item.title}</strong> {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">
                        Procedure
                    </h3>
                    <p>
                        Your cardiologist will insert a thin tube into your
                        bloodstream, known as a catheter, through your wrist or
                        legs. This procedure is performed under local
                        anesthesia. Following that, using X-ray imaging, the
                        doctor can see and direct a deflated balloon passed over
                        a wire to the narrowed artery in the affected area. The
                        balloon is then repeatedly inflated and deflated until
                        the plaque flattens against the artery walls, allowing
                        the artery to widen and blood flow to resume.
                    </p>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default AngioplastyPage;
