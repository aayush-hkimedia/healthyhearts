import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';
import { Link } from 'react-router-dom';

const ConsultationForHeart: React.FC = () => {
    return (
        <ServiceLayout currentSlug="consultation">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Cardiac Consultation
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        Your family physician or general practitioner would often advise you to consult a heart specialist (cardiologist) if there is a problem with your heart health. Consult a cardiologist immediately if the symptoms are severe. In these situations, you should consult the most skilled and knowledgeable cardiologist, who will also provide you with individualized treatment. You can get well quickly if you begin therapy on time. Any delay might have a negative effect on your health and lead to major cardiac issues that could jeopardize your general well-being.
                    </p>

                    <p>
                        Regular cardiac consultations allow the doctor to monitor your heart on a regular basis and provide you with the necessary medications and treatments. It is also important to undergo frequent preventive heart checks to detect any silent diseases, especially if one has high risk factors such as diabetes, high blood pressure, kidney illness, or a strong family history of heart disease.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">What is done during consultation</h3>
                    <p>
                        During a consultation, the doctor will question you about your complaints and concerns and go over them in depth with you. He would also inquire about any previous medical illnesses or the specifics of any current or former therapy. After that, the doctor will examine you, including blood pressure checks, and may recommend some diagnostic tests. Once the doctor has reached a diagnosis, a treatment plan will be recommended. This could include dietary and lifestyle adjustments to improve your heart’s health, medications, or a procedure such as angiography, and when to return for follow-up. During your session, please feel free to ask the doctor any questions or concerns you may have.
                    </p>

                    <h3 className="text-[22px] font-bold text-[#0b1b36] pt-4">Preparing for your consultation</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Prebook an appointment.</li>
                        <li>Make a list of your symptoms, when they began, and what makes them better or worse.</li>
                        <li>Carry all your previous medical papers with you when you go for your scheduled visit.</li>
                        <li>Write down all your questions or doubts that you need to ask your cardiologist and bring this paper along with you.</li>
                        <li>Bring a family member to come with you for your comfort and confidence.</li>
                    </ul>

                    <div className="p-6 bg-[#F7FAFD] rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-[#0b1b36] mb-3">Why choose Dr. Monik Mehta for consulting for heart problems?</h4>
                        <p className="mb-4">
                            Dr.(Col) Monik Mehta has vast experience of heart diseases and will provide you with the best advice. He is one of the top cardiologists who believes in promoting healthy lives for his patients.
                        </p>
                        <p>
                            He is a strong proponent of the conservative approach for the treatment of heart diseases and believes in the philosophy that one should avoid invasive procedures or operations as far as possible. However, if the need arises, he is extremely competent in the use of the latest and most advanced pieces of equipment that may be required to ensure that the best treatment is offered. Moreover, all the tests and procedures are performed in such a way as to ensure that the patient experiences the highest level of comfort and receives the best care for their heart.
                        </p>
                        <p className="mt-4">
                            Many patients have benefited from the care given by Dr.(Col) Monik Mehta over the past few decades, and the many testimonials given by grateful patients are available in online reviews for all to see and assess for themselves. He may be contacted <Link to="/contact" className="text-[#0056b3] underline font-semibold">here</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default ConsultationForHeart;