import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';
import { Link } from 'react-router-dom';

const CardiacCatheterizationPage: React.FC = () => {
    const linkStyle = "text-[#0056b3] font-semibold decoration-2 underline-offset-2 hover:text-[#003d80] transition-colors";

    return (
        <ServiceLayout currentSlug="cardiac-catheterization">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Cardiac Catheterization
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        Cardiac catheterization, also called cardiac cath or coronary angiogram, is an 
                        invasive imaging procedure that allows evaluating your heart function. 
                        Today, <Link to='/' className={linkStyle}>Healthy Hearts</Link> will guide you on what Cardiac catheterization is used to:
                    </p>

                    <ul className="space-y-3 my-4">
                        {[
                            'Evaluate the presence of coronary artery disease, valve disease, or aortic disease',
                            'Evaluate the purpose of the heart muscles',
                            'Determine the requirement for further treatment such as an interventional procedure or coronary artery bypass graft (CABG) surgery'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <p>
                        During cardiac catheterization, a catheter is inserted into an artery or vein 
                        in your groin, neck, or arm region. This catheter is guided through your blood 
                        vessel until it reaches the heart. Once in place, one can use it to run 
                        diagnostic tests. For example, you can inject a dye through the catheter that 
                        allows looking at the vessels and chambers of the heart with the use of a 
                        particular X-ray machine.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">The Need for Cardiac Catheterization</h3>
                    <p>
                        Cardiac catheterization is generally used to diagnose a cardiac problem or 
                        to determine a potential cause of chest pain. During the procedure:
                    </p>
                    <ul className="space-y-3.5 my-4">
                        {[
                            'The presence of a congenital heart defect (a defect present at birth) can be confirmed',
                            'We can check narrowed or blocked blood vessels that could cause chest pain',
                            'Look at problems with your heart valves',
                            'The amount of oxygen in your heart can be measured (hemodynamic assessment)',
                            'The pressure inside your heart can be measured',
                            'Perform a tissue biopsy from your heart',
                            'The need for further treatment can be evaluated and determined'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Stages of the Procedure</h3>
                    <p>
                        Position the catheter by a short, hollow, plastic cover called a sheath. 
                        Once a catheter is in place, your doctor would proceed with the tests needed 
                        to diagnose your condition. Depending on the requirement, <Link to='/your-doctor' className={linkStyle}>your doctor</Link> may 
                        perform one of the following procedures:
                    </p>
                    
                    <div className="space-y-5 my-6">
                        {[
                            { label: 'Coronary angiogram', text: 'Inject a contrast material or dye through the catheter in this procedure. Use an X-ray machine to watch the dye as it travels through your arteries, heart’s chambers, valves, and vessels to check for blockages or narrowing in your arteries.' },
                            { label: 'Heart biopsy', text: 'Takes a sample of heart tissue (biopsy) for further testing.' }
                        ].map((proc, idx) => (
                            <div key={idx} className="pl-4 border-l-2 border-gray-200 hover:border-[#0056b3] transition-colors duration-200">
                                <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">{proc.label}</strong>
                                <p className="text-[14.5px] leading-relaxed">{proc.text}</p>
                            </div>
                        ))}
                    </div>

                    <p>
                        Or perform an additional procedure if you discover a potentially 
                        life-threatening condition during the catheterization. These include:
                    </p>

                    <div className="space-y-5 my-6">
                        {[
                            { label: 'Ablation', text: 'This procedure treats heart arrhythmia (irregular heartbeat). The energy in the form of heat (radio-frequency energy) or cold (nitrous oxide or laser) is used to destroy heart tissue and stop the irregular heart rhythm.' },
                            { label: 'Angioplasty', text: 'Inserts a tiny inflatable balloon into the artery in this procedure. Then expand the balloon to widen a narrowed or blocked artery.' },
                            { label: 'Balloon Valvuloplasty', text: 'A balloon-tipped catheter is inflated into narrowed heart valves to help open the restricted space.' },
                            { label: 'Thrombectomy (blood clot treatment)', text: 'A catheter is used in this procedure to remove blood clots that could potentially dislodge and travel to organs or tissue.' }
                        ].map((proc, idx) => (
                            <div key={idx} className="pl-4 border-l-2 border-gray-200 hover:border-[#0056b3] transition-colors duration-200">
                                <strong className="text-[#0b1b36] block text-[17px] font-bold mb-1">{proc.label}</strong>
                                <p className="text-[14.5px] leading-relaxed">{proc.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="bg-[#F7FAFD] p-5 rounded-2xl border border-gray-100 italic">
                        During the catheterization, patients sometimes need to hold breath, take deep 
                        breaths, cough, or place your arms in various positions. All of this will 
                        help your healthcare team get a better image of your heart and arteries.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Benefits</h3>
                    <p>
                        Cardiac catheterization can help your doctor to diagnose and treat problems 
                        that might otherwise cause severe issues, such as a heart attack or stroke. 
                        We can prevent a heart attack and a future stroke if your doctor can correct 
                        any problems discovered during the procedure.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Risks</h3>
                    <p>
                        The procedure that involves your heart comes with a particular set of risks. 
                        Cardiac catheterization is a relatively low chance, and very few people have 
                        any problems. The dangers of complications, though rare, are more severe in 
                        the case of patients suffering from diabetes or kidney disease, or if they 
                        are 75 years or older.
                    </p>
                    
                    <ul className="space-y-2.5 my-4">
                        {[
                            'Hypersensitivity to the contrast material or medications used during the procedure',
                            'The catheter insertion site may have bleeding, infection, and bruising',
                            'Heart attack, stroke, or another severe problem due to blood clots',
                            'Damage to the arteries during the traveling of the catheter through your body',
                            'Damage to the artery where the catheter presents',
                            'Arrhythmias',
                            'Contrast material may cause kidney damage',
                            'Hypertension',
                            'Heart tissue can be injured'
                        ].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-[9px] shrink-0" />
                                <span>{pt}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default CardiacCatheterizationPage;