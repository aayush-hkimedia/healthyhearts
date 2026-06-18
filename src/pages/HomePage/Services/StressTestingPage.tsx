import React from 'react';
import ServiceLayout from '../../../components/homepage/ServiceLayout';

const StressTestingPage: React.FC = () => {
    return (
        <ServiceLayout currentSlug="2d-echo">
            <div className="space-y-6">
                <div>
                    <h1 className="text-[32px] md:text-[42px] font-bold text-[#0b1b36] tracking-tight leading-tight mb-4">
                        Stress-testing (TMT)
                    </h1>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                </div>

                <div className="text-[#575A5F] text-[15.5px] leading-[1.75] space-y-6">
                    <p>
                        This test is similar to an ECG but records the activity
                        of the heart when it is made to work hard. This is
                        usually done by asking the person to walk or run on a
                        treadmill. This is called a TMT( Treadmill test) . For
                        people who have difficulty walking, an injection is
                        given, which will make the heart beat faster, and then
                        an ECG recording is done with simultaneous ultrasound
                        scanning of the heart, i.e., echocardiography . During
                        the period of this test, the person is lying on a bed,
                        and the whole procedure lasts for about half an hour.
                        Stress testing is more informative as compared to a
                        normal ECG, as during stress, silent or mild
                        abnormalities in the heart can be better detected .
                    </p>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default StressTestingPage;
