import HeroImage from '../assets/HomePage/Heroimage.jpg';
import BestSurgeon from '../assets/AboutPage/BestSurgeon.webp';
import Blog1 from '../assets/BlogPage/how-arterial-blood-clots-can-trigger-a-heart-attack.jpg';
import Blog2 from '../assets/BlogPage/family-history-and-heart-disease-are-you-at-risk.webp';
import Blog3 from '../assets/BlogPage/dietary-supplements-heart-health.jpg';
import Blog4 from '../assets/BlogPage/how-nuts-can-keep-your-heart-happy-and-healthy.jpg';
import Blog5 from '../assets/BlogPage/why-zero-oil-cooking-is-a-heart-smart-choice.jpg';
import doctor2 from '../assets/HomePage/Doctor2.jpg';

const linkClass =
    'text-[#0056b3] font-semibold hover:text-[#0b1b36] underline-offset-4 transition-colors duration-200';
const resourceLinkStyle =
    'text-[#0056b3] font-semibold hover:text-[#0b1b36] hover:underline underline-offset-4 transition-colors duration-200';

export const DOCTOR = {
    name: 'Dr. (Col) Monik Mehta',
    shortName: 'Dr. Monik Mehta',
    title: 'Chief & Senior Consultant Cardiology',
    qualifications:
        'MBBS, MD(Med), DM (Cardiology), Fellow of American College of cardiology(FACC)',
    experience: '20+',
    phone: '+91 98732 14382',
    email: 'enquiry@healthyheartsgurgaon.com',
    image: HeroImage,
    image2: doctor2,
    bioPara1:
        'Dr Monik Mehta is a Senior Interventional Cardiologist of over 25 years experience. He has trained from Mahidol University, Bangkok, Thailand and in Cardiology from AFMC, Pune, India and done fellowship in cardiac electrophysiology from Holy Family Hospital, Mumbai, India and advanced training in cardiac electrophysiology from Fuwai Hospital, Beijing , China.',
    bioPara2:
        'He has worked as a clinician with the United Nations and run a multispecialty hospital in Bhutan. After more than 20 years of service in the Indian government, he has worked for a number of corporate hospitals in the Delhi NCR region, holding a number of leadership roles in the field of cardiology, including Head of Department, Senior interventional cardiologist, Head of heart team, and Chief of Cardiology. Presently he is working in Manipal Hospital, Gurgaon (Delhi NCR).',
    generalInfo: {
        designation: 'Chief & Senior Consultant Cardiology',
        speciality: 'Cardiology',
        location: 'Gurgaon',
        nationality: 'Indian',
        languages: 'Hindi, English, Punjabi',
    },
    academicQualifications: [
        'MBBS, AFMC, Pune University',
        'MD (Medicine), Army Hospital, Delhi University',
        'DM (Cardiology), AFMC, Pune University',
    ],
    memberships: [
        'Fellow of American College of Cardiology (FACC)',
        'Society for Cardiac Angiography and Interventions (USA)',
        'European Association of Percutaneous Cardiovascular Interventions (EAPCI)',
        'Asia Pacific Vascular Society',
        'Asia Pacific Heart Rhythm Society',
        'Indian Heart Rhythm society',
        'Cardiological Society of India',
        'Association of Physicians of India',
    ],
    honorsAndAwards: [
        'Videsh Sewa Medal by Govt. of India',
        'The United Nations Medal by United Nations',
    ],
    clinicalFocus: [
        'Complex Coronary Interventions',
        'Transradial Interventions',
        'Peripheral Interventions including Carotid and Renal',
        'Device Closure of Congenital Heart Defects',
        'Pacemakers, ICD’s and Cardiac Resynchronisation Therapy Implants',
        'Balloon Valvuloplasty',
        'Cardiac Electrophysiological Studies',
    ],
};

export const ABOUT_US = {
    image: BestSurgeon,
    history:
        'Healthy Hearts Gurgaon was founded as a Heart Disease Prevention Initiative by Dr. (Col) Monik Mehta, a renowned cardiologist in Gurgaon. With over 30 years of medical experience, including over 20 years in the Indian Army, which required him to travel and work in various parts of India and abroad, and having worked closely with people at all levels of society, he has witnessed how Indians disregard the very organ they have romanticised since time immemorial. Our South Asian gene pool, diet, and sedentary lifestyle have exacerbated this to the point where it affects even children.',
    mission:
        'Our approach is to educate and assist Gurgaon residents in making simple lifestyle and eating habits changes that will reduce their risk of developing cardiovascular disease. We also work to aid in the prevention, diagnosis, investigation, and treatment of all types of heart diseases.',
    approach: [
        'Informing the patient about their condition and treatment options.',
        'Listening to and addressing the patient’s concerns and fears.',
        'Involve the patient in the development of their treatment plan while respecting their autonomy.',
        'Provide emotional support and physical comfort measures to ensure optimal quality of life.',
        'Provide follow-up care and support to help the patient manage their condition and avoid future complications.',
    ],
    vision: {
        description:
            'Through a cardiovascular health network led by an experienced and caring physician, the highest quality, comprehensive, and compassionate care will be provided. Healthy Hearts Gurgaon will achieve this through a personalised care approach and a wide range of skills, with the common goal of:',
        goals: [
            'Superior outcomes',
            'Cost effective treatments',
            'Innovation',
            'Exceptional patient experience',
        ],
    },
    principles: [
        'Do not cause harm to the patient, including avoiding treatments that may cause more harm than benefit.',
        'Act in the best interests of the patient and do everything in our power to improve their health and well-being.',
        'Treating the patient with dignity and maintaining their privacy and confidentiality.',
    ],
};

export const STATS = [
    { value: '20+', label: 'Years of Experience' },
    { value: '10k+', label: 'Successful Procedures' },
    { value: '25k+', label: 'Happy Patients' },
    { value: '4.9/5', label: 'Patient Satisfaction' },
];

export const LOCATIONS = [
    {
        type: 'Clinic',
        name: 'Apollo Clinic',
        address: 'DLF Phase 1, Gurgaon, Haryana – 122002',
        phone: '+91 98732 14382',
        email: 'enquiry@healthyheartsgurgaon.com',
        timings: [
            { days: 'Mon – Sat', hours: '06:00 PM – 09:00 PM' },
            {
                days: 'Sun',
                hours: '10:00 AM – 12:00 PM and 05:00 PM – 08:00 PM',
            },
        ],
        mapLink:
            'https://www.google.com/maps/place/Apollo+Clinic+Gurugram+-+Best+Clinic+for+Dental+Services,+Diabetes+consultation,+Orthopedics,+Ultrasound,+X-Ray,Blood+test/@28.4748226,77.0908981,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18d6fec3ddc1:0x19af1c5aea0beee4!8m2!3d28.4748179!4d77.093473!16s%2Fg%2F11q4ds2zv3?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
    },
    {
        type: 'Hospital',
        name: 'Manipal Hospital',
        address: 'Palam Vihar, Gurgaon-122 017, Haryana',
        phone: '+91 98732 14382',
        email: 'enquiry@healthyheartsgurgaon.com',
        timings: [],
        mapLink:
            'https://www.google.com/maps/place/Manipal+Hospital,+Palam+Vihar,+Gurugram/@28.509286,77.0388311,17z/data=!3m1!4b1!4m6!3m5!1s0x390d19e69aaaaaab:0xd40e679700a4c5ab!8m2!3d28.5092813!4d77.041406!16s%2Fg%2F1td1n7_6?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
    },
    // {
    //     type: 'Clinic',
    //     name: 'Apollo Clinic (Branch)',
    //     address: 'Road no 48, Block A, DLF Phase 1, Gurgaon - 122002, Haryana',
    //     phone: '+91 98732 14382',
    //     email: 'enquiry@healthyheartsgurgaon.com',
    //     timings: [
    //         { days: 'Mon – Sat', hours: '06:00 PM – 08:00 PM' },
    //         {
    //             days: 'Sun',
    //             hours: '10:00 AM – 12:00 PM and 05:00 PM – 08:00 PM',
    //         },
    //     ],
    //     mapLink: 'https://maps.google.com',
    // },
];

export const SERVICES = [
    {
        slug: '2d-echo',
        icon: 'activity',
        title: '2D Echo',
        description:
            'A non-invasive ultrasound scan that uses high-frequency sound waves to evaluate your heart structure and blood flow.',
    },
    {
        slug: 'stress-testing',
        icon: 'heart-pulse',
        title: 'Stress Testing',
        description:
            'Monitors your heart activity while walking or running on a treadmill to detect silent or mild cardiac abnormalities.',
    },
    {
        slug: 'cardiac-catheterization',
        icon: 'syringe',
        title: 'Cardiac Catheterization',
        description:
            'An invasive imaging procedure to evaluate heart function, diagnose coronary artery disease, and determine necessary treatments.',
    },
    {
        slug: 'angioplasty',
        icon: 'circle-dot',
        title: 'Angioplasty',
        description:
            'A minimally invasive procedure that uses a tiny balloon to stretch open a narrowed or blocked artery and restore blood flow.',
    },
    {
        slug: 'coronary-angiography',
        icon: 'scan-line',
        title: 'Coronary Angiography',
        description:
            'An imaging procedure using X-rays and contrast dye to clearly visualize the heart’s arteries and detect any dangerous blockages.',
    },
    {
        slug: 'aicd-implantation',
        icon: 'shield-alert',
        title: 'AICD Implantation',
        description:
            'Placement of a small device in the chest to continuously monitor your heartbeat and deliver life-saving shocks to correct arrhythmias.',
    },
    {
        slug: 'tavr',
        icon: 'layers',
        title: 'TAVR',
        description:
            'A minimally invasive procedure to replace a narrowed aortic valve without requiring open-heart surgery, ensuring faster recovery.',
    },
    {
        slug: 'heart-failure-treatment',
        icon: 'heart',
        title: 'Heart Failure Treatment',
        description:
            'Comprehensive symptom management, disease control, and advanced therapies to support a heart that has become too weak or stiff.',
    },
    {
        slug: 'crtd-lbba-implantation',
        icon: 'zap',
        title: 'CRTD/LBBA Implantation',
        description:
            'Implantation of a cardiac resynchronization device to correct irregular heart rates and significantly enhance blood circulation.',
    },
    {
        slug: 'cardiac-electrophysiology-&-rfa',
        icon: 'waves',
        title: 'Cardiac Electrophsiology & RFA Page',
        description:
            'A structured outpatient recovery program combining exercise, education, and lifestyle modifications for long-term heart health.',
    },
];

export const CLINIC_LOCATIONS = [
    {
        name: 'Main Clinic — DLF Phase 1',
        address: 'A-257, Sector 27, DLF Phase 1, Gurugram, Haryana 122002',
        phone: '+91 98732 14382',
        days: 'Mon – Sat',
        hours: '9:00 AM – 6:00 PM',
        mapLink: 'https://maps.google.com',
    },
    {
        name: 'Manipal Hospital',
        address: 'Sector 6, Dwarka, New Delhi 110075',
        phone: '+91 98732 14382',
        days: 'Tuesday & Thursday',
        hours: '2:00 PM – 5:00 PM',
        mapLink: 'https://maps.google.com',
    },
    {
        name: 'Apollo Clinic',
        address: 'DLF Phase 4, Sector 28, Gurugram, Haryana 122002',
        phone: '+91 98732 14382',
        days: 'Monday & Wednesday',
        hours: '10:00 AM – 1:00 PM',
        mapLink: 'https://maps.google.com',
    },
];

export const TESTIMONIALS = [
    {
        name: 'Rajesh Sharma',
        location: 'Gurgaon',
        text: "Dr. Mehta's conservative approach saved me from an unnecessary procedure. He explained every step patiently. My heart health has improved dramatically over 6 months.",
        rating: 5,
    },
    {
        name: 'Priya Kapoor',
        location: 'Delhi',
        text: "After two other doctors recommended surgery, Dr. Mehta managed my condition with medication and lifestyle changes. Two years later, I'm thriving without any procedure.",
        rating: 5,
    },
    {
        name: 'Anil Gupta',
        location: 'Faridabad',
        text: 'The level of personalised attention I received was exceptional. Dr. Mehta truly listens and involves you in all decisions. I feel completely reassured about my cardiac health.',
        rating: 5,
    },
];

export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Resource', path: '/resources' },
    { label: 'Blog', path: '/blog/' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Your Doctor', path: '/your-doctor' },
];

export const CLINIC_SERVICES = [
    'Consultation',
    'ECG',
    'Pacemaker Testing & Followup',
];

export const CLINIC_SERVICE = [
    {
        title: 'Consultation',
        slug: 'consultation',
        icon: 'stethoscope',
        description:
            'Expert clinical evaluation, second opinions, and personalized cardiac care planning.',
    },
    {
        title: 'ECG',
        slug: 'ecg',
        icon: 'activity',
        description:
            'Quick and accurate electrocardiogram testing for immediate heart rhythm analysis.',
    },
    {
        title: 'Pacemaker Testing & Followup',
        slug: 'pacemaker-testing-followup',
        icon: 'zap',
        description:
            'Routine check-ups, battery monitoring, and programming to ensure optimal function.',
    },
];

export const HOSPITAL_SERVICES = [
    { label: 'Echocardiography', path: '/services/2d-echo' },
    { label: 'Stress Testing (TMT)', path: '/services/stress-testing' },
    {
        label: 'Cardiac Catheterization',
        path: '/services/cardiac-catheterization',
    },
    { label: 'Angioplasty', path: '/services/angioplasty' },
    { label: 'Coronary Angiography', path: '/services/coronary-angiography' },
    {
        label: 'Heart Failure Treatment',
        path: '/services/heart-failure-treatment',
    },
    { label: 'AICD Implantation', path: '/services/aicd-implantation' },
    { label: 'CRTD Implantation', path: '/services/crtd-lbba-implantation' },
    { label: 'TAVR', path: '/services/tavr' },
    {
        label: 'Cardiac Rehabilitation',
        path: '/services/cardiac-rehabilitation',
    },
];

export const RESOURCES_DATA = [
    {
        label: 'Patient Education Resources',
        path: '/resources/patient-education-resources',
    },
    {
        label: 'Frequently Asked Questions',
        path: '/resources/frequently-asked-questions',
    },
    {
        label: 'Common Heart Conditions',
        path: '/resources/common-heart-conditions',
    },
];

export const RESOURCES = [
    'Patient Education Resources',
    'Frequently Asked Questions',
    'Common Heart Questions',
];

export const SOCIAL_LINKS = [
    {
        id: 1,
        platform: 'Facebook',
        title: 'Healthy Hearts Gurgaon',
        subtitle: '888 followers',
        url: 'https://www.facebook.com/drmonikmehta/?ref=embed_page#',
        embedUrl:
            'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdrmonikmehta%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true',
    },
    {
        id: 2,
        platform: 'Instagram',
        title: 'Dr Monik Mehta',
        subtitle: '@healthyheartsgurgaon',
        url: 'https://www.instagram.com/healthyheartsgurgaon',
        embedUrl: 'https://www.instagram.com/healthyheartsgurgaon/embed',
    },
];

import { Link } from 'react-router-dom';

// export const BLOG_POSTS = [
//     {
//         id: 1,
//         slug: 'arterial-blood-clots-heart-attack',
//         title: 'How Arterial Blood Clots Can Trigger a Heart Attack',
//         category: 'Patient Care',
//         date: 'July 19, 2024',
//         readTime: '5 min read',
//         image: Blog1,
//         excerpt:
//             'When a blood clot develops in the arteries of the heart, it can obstruct blood flow partially or completely, causing...',
//         content: (
//             <div className="space-y-6">
//                 <p>
//                     When a blood clot develops in the arteries of the heart, it
//                     can obstruct blood flow partially or completely, causing
//                     damage to the heart muscles. In order to prevent heart
//                     attacks and other fatal complications, immediate treatment
//                     is essential. This article delves into the formation of
//                     blood clots, their impact on heart health, and strategies
//                     for prevention and management.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     What are Blood Clots?
//                 </h3>
//                 <p>
//                     Blood clotting, or coagulation, is an essential process that
//                     prevents excessive bleeding when a blood vessel is injured.
//                     This process involves platelets, a type of blood cell, and
//                     proteins in the plasma (the liquid part of the blood). When
//                     a blood vessel is injured, platelets quickly gather at the
//                     site and form a plug. Meanwhile, plasma proteins interact to
//                     form fibrin threads that reinforce the platelet plug,
//                     creating a stable clot. If you are experiencing any issues
//                     related to blood clotting, it is important to consult with
//                     the <Link to='/'>best cardiologist in gurgaon </Link>to receive expert medical
//                     advice and treatment.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     How Do Clots Form in the Arteries?
//                 </h3>
//                 <p>
//                     The formation of clots in arteries, especially those
//                     supplying the heart, is often linked to a condition known as
//                     atherosclerosis. This condition is characterized by the
//                     buildup of fatty deposits, known as plaques, within the
//                     arterial walls. Over time, these plaques can become large
//                     and unstable.
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Atherosclerosis and Plaque Formation:</strong>{' '}
//                         Plaques are composed of cholesterol, fatty substances,
//                         cellular waste products, calcium, and fibrin. As they
//                         accumulate, they narrow the arteries, reducing blood
//                         flow to the heart. The danger arises when these plaques
//                         rupture.
//                     </li>
//                     <li>
//                         <strong>Rupture and Clot Formation:</strong> When a
//                         plaque ruptures, it exposes its contents to the
//                         bloodstream, triggering the clotting process. Platelets
//                         rush to the rupture site, and clotting factors in the
//                         blood form a clot. It is possible for the clot to block
//                         the artery completely if it grows large enough.
//                     </li>
//                     <li>
//                         <strong>Resulting Blockage:</strong> A blocked artery
//                         prevents oxygen-rich blood from reaching the heart
//                         muscle, leading to a heart attack. The severity of the
//                         heart attack depends on the location and size of the
//                         blockage, as well as the duration of the obstruction.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Signs of a Blood Clotting in the Heart
//                 </h3>
//                 <p>
//                     Recognizing the symptoms is critical for timely
//                     intervention. Common signs include:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Discomfort or Pain in the Chest:</strong>{' '}
//                         Described as pressure, squeezing, fullness, or pain in
//                         the center of the chest. The feeling can last for more
//                         than a few minutes or it can go away and then return.
//                     </li>
//                     <li>
//                         <strong>Pain in Other Parts of the Body:</strong> Pain
//                         may radiate to the arms, back, neck, jaw, or stomach.
//                     </li>
//                     <li>
//                         <strong>Breathing difficulty:</strong> Chest discomfort
//                         may accompany breathing difficulty.
//                     </li>
//                     <li>
//                         <strong>Other Symptoms:</strong> Nausea, light
//                         headedness, or cold sweats.
//                     </li>
//                 </ul>
//                 <p>
//                     These symptoms can vary between men and women. It is more
//                     common for women to experience shortness of breath, nausea,
//                     and back or jaw pain during pregnancy.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Prevention and Management
//                 </h3>
//                 <p>
//                     Reducing the risk of arterial clots involves making
//                     lifestyle changes and managing underlying health conditions.
//                     Here are several strategies:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Stay Physically Active:</strong> Regular
//                         exercise helps maintain a healthy weight, lowers blood
//                         pressure, improves cholesterol levels, and reduces the
//                         risk of developing diabetes. Aim for at least 150
//                         minutes of moderate-intensity aerobic activity each
//                         week, combined with muscle-strengthening exercises on
//                         two or more days a week.
//                     </li>
//                     <li>
//                         <strong>Eat a Healthy Diet:</strong> A heart-healthy
//                         diet includes plenty of fruits, vegetables, whole
//                         grains, lean proteins, and healthy fats. The consumption
//                         of saturated fats, trans fats, cholesterol, sodium, and
//                         added sugars should also be limited. The Mediterranean
//                         diet and DASH diet are both excellent choices for heart
//                         health. For personalized dietary recommendations and
//                         comprehensive heart care, consulting with the <Link to='/'>top
//                         cardiologist in gurgaon</Link> can provide you with expert
//                         guidance and support.
//                     </li>
//                     <li>
//                         <strong>
//                             Maintain Healthy Blood Pressure and Diabetes:
//                         </strong>{' '}
//                         High blood pressure and diabetes can lead to a number of
//                         health problems such as atherosclerosis and heart
//                         attacks. Regular monitoring and management through
//                         medication, diet, and lifestyle changes can
//                         significantly reduce risks.
//                     </li>
//                     <li>
//                         <strong>Control Cholesterol Levels:</strong> High levels
//                         of low-density lipoprotein (LDL) cholesterol can lead to
//                         plaque formation in the arteries. Changing your
//                         lifestyle and taking medication can help you maintain a
//                         healthy cholesterol level.
//                     </li>
//                     <li>
//                         <strong>Avoid Smoking:</strong> Smoking damages the
//                         lining of the arteries, contributing to the formation of
//                         plaques and increasing the risk of clot formation. It is
//                         beneficial for the heart’s health to quit smoking
//                         immediately as well as over the long term.
//                     </li>
//                     <li>
//                         <strong>Stay Well-Hydrated:</strong> Proper hydration
//                         helps maintain healthy blood viscosity and circulation,
//                         reducing the risk of clot formation. Stay hydrated
//                         throughout the day.
//                     </li>
//                     <li>
//                         <strong>Maintain a Healthy Weight:</strong> Excess
//                         weight, especially around the abdomen, increases the
//                         risk of developing atherosclerosis and other
//                         heart-related issues. Maintaining a healthy weight can
//                         be achieved and maintained with a balanced diet and
//                         regular exercise.
//                     </li>
//                     <li>
//                         <strong>Managing stress:</strong> High levels of chronic
//                         stress can increase your risk of heart disease.
//                         Practices such as mindfulness, meditation, yoga, and
//                         regular physical activity can help manage stress levels.
//                     </li>
//                     <li>
//                         <strong>Regular Health Screenings:</strong> Regular
//                         check-ups with your healthcare provider can help monitor
//                         heart health and detect any risk factors early on. This
//                         includes blood pressure checks, cholesterol tests, and
//                         diabetes screening.
//                     </li>
//                 </ul>
//                 <p>
//                     Understanding the trigger is essential for preventing and
//                     managing heart disease. By making informed lifestyle choices
//                     and managing health conditions, individuals can
//                     significantly reduce their risk of experiencing a heart
//                     attack. Staying active, eating a healthy diet, and avoiding
//                     smoking are foundational steps toward a heart-healthy life.
//                     Regular medical check-ups and screenings play a crucial role
//                     in early detection and prevention, ensuring better long-term
//                     heart health. For expert advice and personalized care,
//                     consulting with a<Link to='/'>good cardiologist in gurgaon</Link> can help you
//                     maintain optimal heart health.
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 2,
//         slug: 'family-history-and-heart-disease',
//         title: 'Family History and Heart Disease: Are You at Risk?',
//         category: 'Diagnostics',
//         date: 'June 26, 2024',
//         readTime: '6 min read',
//         image: Blog2,
//         excerpt:
//             'Heart disease is a major health concern globally, and India is no exception. Many of us have heard stories from...',
//         content: (
//             <div className="space-y-6">
//                 <p>
//                     Heart disease is a major health concern globally, and India
//                     is no exception. Many of us have heard stories from our
//                     elders about relatives who suffered from heart issues or
//                     other heart-related issues. These stories might make us
//                     wonder: “Am I at risk of heart attack because of my family
//                     history?” We can protect our heart health by taking
//                     preventive steps if we know the link between heart problems
//                     and relative history. Consulting the <Link to='/'>best heart doctor in
//                     gurgao</Link> can provide insights and personalized advice.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     What is Heart Disease?
//                 </h3>
//                 <p>
//                     Many different heart-related illnesses are included under
//                     the umbrella term “heart attack”. Heart failure, arrhythmias
//                     (irregular heartbeats), coronary artery disease, and other
//                     conditions are among them. The most common type is coronary
//                     artery disease, which happens when the blood vessels
//                     supplying blood to the heart become narrow or blocked. This
//                     can lead to chest pain (angina), heart issues, and other
//                     serious problems.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     The Role of Family History
//                 </h3>
//                 <p>
//                     Bloodline history plays a significant role in determining
//                     one’s risk of heart problems. If your parents, siblings, or
//                     grandparents have had cardiovascular disease, you might be
//                     more likely to develop it too. A mix of common lifestyle
//                     variables and genetics probably accounts for this increased
//                     risk.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Genetic Factors
//                 </h3>
//                 <p>
//                     Genes are the basic units of heredity, passed down from
//                     parents to children. They can influence various aspects of
//                     our health, including the likelihood of developing cardiac
//                     disease. Certain genetic mutations can increase cholesterol
//                     levels, blood pressure, and other risk factors for coronary
//                     artery disease. For example, a condition called familial
//                     hyper cholesterolemia is caused by a genetic mutation that
//                     leads to very high cholesterol levels and early heart
//                     failure.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Early Warning Signs
//                 </h3>
//                 <p>
//                     Being aware of the early warning signs of heart problems can
//                     help you seek medical attention promptly. Some common
//                     symptoms include:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>Chest pain or discomfort</li>
//                     <li>Shortness of breath</li>
//                     <li>Palpitations or irregular heartbeats</li>
//                     <li>Fatigue or weakness</li>
//                     <li>Your legs, ankles, or feet are swelling.</li>
//                 </ul>
//                 <p>
//                     If you find these sorts of symptoms are present, be sure to
//                     see your doctor right away. It causes you to consult your
//                     doctor immediately when you experience any of these
//                     symptoms, you might consider consulting <Link to='/your-doctor'>Dr Monik Mehta</Link> , who
//                     provides the best heart care.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Shared Lifestyle Habits
//                 </h3>
//                 <p>
//                     Families often share lifestyle habits that can impact heart
//                     health. These include diet, physical activity levels, and
//                     smoking habits. For instance, if your family consumes a diet
//                     high in unhealthy fats and sugars, you might be more prone
//                     to developing cardiac disease. Similarly, if physical
//                     inactivity or smoking is common in your family, these habits
//                     can increase your risk.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Other Risk Factors
//                 </h3>
//                 <p>
//                     Although a significant influence, relatives history is not
//                     the sole one. Other cardiovascular disease risk factors
//                     include:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Age:</strong> Risk increases with age.
//                     </li>
//                     <li>
//                         <strong>Gender:</strong> Men are generally at higher
//                         risk, but women’s risk increases after menopause.
//                     </li>
//                     <li>
//                         <strong>High Blood Pressure:</strong> The heart is
//                         strained more as a result.
//                     </li>
//                     <li>
//                         <strong>High Cholesterol:</strong> It may also
//                         eventually harden into plaque in the arteries.
//                     </li>
//                     <li>
//                         <strong>Diabetes:</strong> High blood sugar may damage
//                         blood vessels.
//                     </li>
//                     <li>
//                         <strong>Obesity:</strong> Excess weight increases the
//                         burden on the heart.
//                     </li>
//                     <li>
//                         <strong>Stress:</strong> Chronic stress can harm the
//                         heart.
//                     </li>
//                     <li>
//                         <strong>Unhealthy Diet:</strong> Diets high in saturated
//                         fats, trans fats, and cholesterol can increase risk.
//                     </li>
//                     <li>
//                         <strong>Lack of Physical Activity:</strong> Regular
//                         exercise is crucial for heart health.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Assessing Your Risk
//                 </h3>
//                 <p>
//                     The first step in assessing your risk is understanding your
//                     ancestry. To find out more about your family’s cardiac
//                     issues, have a conversation with them. Please record the age
//                     at when they were diagnosed, since early onset of coronary
//                     artery disease in close relatives may be a more accurate
//                     indicator of inherited risk.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Preventive Measures
//                 </h3>
//                 <p>
//                     While you can’t change your genes, you can adopt healthy
//                     habits to lower your risk of cardiac disease. The following
//                     are some of the tips you can achieve:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Maintain a Healthy Diet:</strong> Consume a
//                         balanced diet rich in whole grains, fruits, vegetables,
//                         lean meats, and healthy fats. Limit the amount of sugar,
//                         salt, trans fats, and saturated fats you consume.
//                     </li>
//                     <li>
//                         <strong>Exercise Regularly:</strong> Every week, try to
//                         get in 150 or 75 minutes of vigorous or
//                         moderate-to-intense activity. Exercises that are good
//                         for the heart include cycling, swimming, walking, and
//                         running.
//                     </li>
//                     <li>
//                         <strong>Monitor Your Health:</strong> Monitor Your Blood
//                         Pressure, Cholesterol, and Blood Sugar. Regular checkups
//                         can also help identify issues while they are still
//                         small.
//                     </li>
//                     <li>
//                         <strong>Quit Smoking:</strong> Seek support to help you
//                         quit smoking. Smokers are more prone to get coronary
//                         artery disease.
//                     </li>
//                     <li>
//                         <strong>Manage Stress:</strong> Practice stress-relief
//                         techniques like yoga, meditation, deep breathing, or
//                         hobbies that you enjoy.
//                     </li>
//                     <li>
//                         <strong>Limit Alcohol:</strong> Drinking alcohol in
//                         moderation if you have high blood pressure. In older
//                         men, prolonged excessive drinking is linked to a higher
//                         risk of cardiovascular disease and is a risk factor for
//                         hypertension.
//                     </li>
//                     <li>
//                         <strong>Stay Informed:</strong> Educate yourself about
//                         cardiovascular disease and stay updated on new research
//                         and recommendations.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Conclusion
//                 </h3>
//                 <p>
//                     The mere fact that heart failure runs in your family does
//                     not guarantee that you will have it. Making good lifestyle
//                     choices and being aware of your risk of heart attack may
//                     help you significantly lower your risk. Remember, knowledge
//                     is power. Your heart now is the first step towards a better
//                     tomorrow. For personalized advice and treatment, consider
//                     consulting <Link to='/your-doctor'>heart specialist doctor in gurgaon</Link>. Taking
//                     proactive steps towards a healthier lifestyle benefits your
//                     heart and enhances your overall well-being. Start making
//                     changes today for a healthier, happier tomorrow.
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 3,
//         slug: 'dietary-supplements-heart-health',
//         title: 'Dietary Supplements & Heart Health',
//         category: 'Wellness',
//         date: 'June 13, 2024',
//         readTime: '7 min read',
//         image: Blog3,
//         excerpt:
//             'There are several dietary supplements that promote cardiovascular health and a healthy heart. These supplements, which range from well-known omega-3s...',
//         content: (
//             <div className="space-y-6">
//                 <p>
//                     There are several dietary supplements that promote
//                     cardiovascular health and a healthy heart. These
//                     supplements, which range from well-known omega-3s to the
//                     lesser-known coenzyme Q10, promise heart health benefits.
//                     However, there is a dearth of supporting scientific
//                     evidence. The following provides a quick summary of the
//                     science and benefits of what is currently known regarding
//                     their efficacy.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Fish Oil (Omega-3 Fatty Acids)
//                 </h3>
//                 <p>
//                     Fish oil contains the omega-3 fatty acids eicosapentaenoic
//                     acid (EPA) and docosahexaenoic acid (DHA), but the
//                     proportion of each varies with formulation. Although fish
//                     oil can successfully lower blood triglyceride levels, it is
//                     unclear whether this reduces the risk of cardiovascular
//                     disease. The question of whether fish oil reduces the risk
//                     of cardiovascular disease (CVD) while lowering cholesterol
//                     levels in blood tests is even more contentious. Although
//                     previous studies suggested that fish oil has
//                     cardioprotective effects, a meta-analysis of subsequent
//                     trials found no meaningful reduction in outcomes. A
//                     meta-analysis of patients with existing CVD similarly failed
//                     to identify any advantage. The difference between older and
//                     newer trials may indicate that fish oil offers only a minor
//                     benefit in CVD, which has been overshadowed by more recent
//                     therapies (for example, statins). Fortunately, omega-3 fatty
//                     acids have been shown to be relatively safe, however, they
//                     may raise the risk of bleeding and should be used with
//                     caution in individuals taking aspirin or anticoagulants.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Niacin
//                 </h3>
//                 <p>
//                     Niacin or Vitamin B3 has been shown to reduce total
//                     cholesterol and low-density lipoprotein concentrations
//                     (LDL-C), although it does so less effectively than statins
//                     and has not been associated with comparable reductions in
//                     cardiovascular events. Although niacin also decreases
//                     triglycerides and increases high-density lipoprotein
//                     concentrations (HDL-C), these effects have not conferred
//                     improvements in cardiovascular outcomes among patients
//                     receiving statins. Moreover, its use for this purpose
//                     increases the risk of adverse effects, including impaired
//                     glucose control, gastrointestinal disturbances, and
//                     musculoskeletal effects. Although niacin may still have a
//                     role in patients with challenging dyslipidemias, its use
//                     should be limited to clinicians who specialize in this area.
//                     Of note, inositol hexanicotinate (IHN) or “flush free”
//                     niacin does not demonstrate lipid-lowering properties and
//                     should not be used for this purpose. Additionally,
//                     sustained-release formulations have been associated with an
//                     excess risk of hepatotoxicity.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Co-enzyme Q10
//                 </h3>
//                 <p>
//                     Co-enzyme Q10 (CoQ10), also known as ubiquinone or
//                     ubidecarenone, is a fat-soluble antioxidant synthesized
//                     endogenously and involved in a variety of metabolic
//                     processes. Supplementation with CoQ10 has been touted for
//                     reducing statin-associated muscle symptoms (SAMS); however,
//                     recent evidence has shown CoQ10 to have no apparent impact
//                     on SAMS. CoQ10 has also been studied in heart failure for
//                     its promising effects on myocardial contractility and
//                     exercise performance. However, these trials have shown mixed
//                     results and have been subject to significant flaws in
//                     methodology. Current guidelines do not recommend addition of
//                     CoQ10 in patients with heart failure.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Vitamin D
//                 </h3>
//                 <p>
//                     Vitamin D deficiency has been shown to have a strong
//                     association with CVD, but it is unknown whether vitamin D
//                     deficiency contributes to the pathogenesis of CVD or if it
//                     is merely a surrogate marker for comorbidities that
//                     contribute to CVD. Available evidence is contradictory and
//                     current recommendations do not support vitamin D
//                     supplementation solely for cardiovascular health.
//                     Supplementation with vitamin D3 has been specifically
//                     studied in heart failure patients, showing a modest increase
//                     in left ventricular hemodynamic function but failing to
//                     influence exercise capacity or other clinical endpoints.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Magnesium
//                 </h3>
//                 <p>
//                     Magnesium is commonly prescribed for patients who develop
//                     hypomagnesemia as a consequence of diuretic therapy, but it
//                     has also been evaluated for a variety of other
//                     cardiovascular conditions, including arrhythmias, coronary
//                     artery disease, and myocardial infarction. Although
//                     correcting hypomagnesemia can reduce the risk of arrhythmias
//                     in high-risk patients, its effects on other cardiovascular
//                     conditions remains inconclusive. Some epidemiologic studies
//                     indicate that low serum magnesium concentrations may
//                     increase the risk of CVD, whereas others have failed to show
//                     an association.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Red yeast rice
//                 </h3>
//                 <p>
//                     Red yeast rice is a fermented rice product that may contain
//                     monacolin K, an HMG-CoA reductase inhibitor identical to the
//                     active ingredient in lovastatin. In the late 1990s, the FDA
//                     prohibited red yeast rice products in the US from containing
//                     more than trace amounts of monacolin K and began taking
//                     legal action against manufacturers whose products were in
//                     violation of these regulations. Nonetheless, due to
//                     limitations in the agency’s ability to inspect manufacturers
//                     of dietary supplements, some products may still contain more
//                     than trace amounts of monacolin K as well as the toxin
//                     citrinin. Red yeast rice products that conform to FDA
//                     regulations often consist of proprietary blends of other
//                     ingredients that lack proven efficacy in the treatment of
//                     dyslipidemia.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Antioxidant vitamins (A and E)
//                 </h3>
//                 <p>
//                     Contrary to the lack of rigorous evaluation for most dietary
//                     supplements, vitamin A (beta-carotene) and vitamin E
//                     (alpha-tocopherol) have been studied in large, robust
//                     clinical trials. Both were believed to lower the risk of
//                     cancer and CVD, but neither of these effects was observed
//                     when compared to placebo. In addition, long-term vitamin E
//                     supplementation has been associated with an increased risk
//                     of heart failure in patients with pre-existing vascular
//                     disease or diabetes.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Garlic
//                 </h3>
//                 <p>
//                     Garlic supplementation has been promoted for modifying
//                     cardiovascular risk factors, including hyperlipidemia and
//                     hypertension. The active compounds in garlic and their
//                     effective doses are ill-defined, and the data available to
//                     support the use of garlic are severely limited due to
//                     methodological flaws.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Resveratrol
//                 </h3>
//                 <p>
//                     Resveratrol is a naturally occurring plant compound with
//                     purported cardioprotective effects attributed to its
//                     antioxidant-like properties and salutary impact on serum
//                     lipid concentrations and blood pressure. It is believed to
//                     be the active component in red wine that confers
//                     cardiovascular benefits in observational analyses. However,
//                     in controlled clinical trials, supplementation with
//                     resveratrol does not alter CVD risk factors or clinical
//                     outcomes.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Flaxseed
//                 </h3>
//                 <p>
//                     Flaxseeds contain phytoestrogens as well as alpha-linolenic
//                     acid, an omega-3 fatty acid. Some formulations have been
//                     associated with improvements in surrogate markers for CVD,
//                     such as total cholesterol and LDL-C, whereas others have
//                     produced inconsistent results. Similar findings exist for
//                     its potential effects on blood pressure. To date, no
//                     evidence suggests flaxseed has an impact on cardiovascular
//                     outcomes.
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 4,
//         slug: 'nuts-keep-heart-happy',
//         title: 'How Nuts Can Keep Your Heart Happy and Healthy',
//         category: 'Nutrition',
//         date: 'May 24, 2024',
//         readTime: '4 min read',
//         image: Blog4,
//         excerpt:
//             'Nuts may be good for the heart when consumed in a healthy diet. They contain nutritional and unsaturated fatty acids...',
//         content: (
//             <div className="space-y-6">
//                 <p>
//                     Nuts may be good for the heart when consumed in a healthy
//                     diet. They contain nutritional and unsaturated fatty acids.
//                     They’re also great snacks. They’re easy to pack and store
//                     and inexpensive on the go.
//                 </p>
//                 <p>
//                     It is crucial to remember that some snacks contain high
//                     calories. Hence, it’s vital to control your portions. Opting
//                     for nuts over less healthy snacks can help you stick to a
//                     heart-healthy diet. If you need guidance on heart health,
//                     consulting a <Link to='/your-doctor'>heart specialist in Gurgaon</Link> could provide
//                     valuable insights and personalized advice tailored to your
//                     needs.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Are nuts good for your heart?
//                 </h3>
//                 <p>
//                     Several studies have shown that nuts and seeds lower
//                     inflammation levels associated with diabetes and heart
//                     disease.
//                 </p>
//                 <p>Nutritional benefits include:</p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>Maintain healthy arteries.</li>
//                     <li>Improve heart health by reducing inflammation.</li>
//                     <li>
//                         Prevent heart attacks and strokes by reducing blood clot
//                         risk.
//                     </li>
//                     <li>Blood pressure can be lowered.</li>
//                     <li>
//                         Cardiovascular disease is a leading cause of early
//                         death.
//                     </li>
//                     <li>
//                         Lower unhealthy cholesterol levels, specifically
//                         triglycerides and low-density lipoproteins, or “bad”
//                         cholesterol.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Are nuts heart-healthy?
//                 </h3>
//                 <p>
//                     They are the best protein sources. Furthermore, it comes
//                     with these heart-healthy nutrients:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Contains unsaturated fats:</strong> Some believe
//                         that nuts’ monounsaturated fats and polyunsaturated fats
//                         lower harmful cholesterol levels for reasons that are
//                         not fully understood.
//                     </li>
//                     <li>
//                         <strong>Fats rich in omega-3:</strong> It is the omega-3
//                         fatty acids found in these nuts that make them a healthy
//                         snack. Healthful fatty acids include omega-3s. There may
//                         be a reduction in the risk of heart attack and stroke
//                         caused by these nutrients.
//                     </li>
//                     <li>
//                         <strong>Contains fiber:</strong> Almost all of them
//                         contain fibre, a substance that lowers cholesterol. By
//                         consuming fibre, you feel complete for extended periods
//                         and eat fewer calories.
//                     </li>
//                     <li>
//                         <strong>Sterols from plants:</strong> A substance found
//                         in some nuts can help reduce cholesterol, called plant
//                         sterols. It is common for plant sterols to be added to
//                         products such as margarine and orange juice for their
//                         health benefits; however naturally contain plant
//                         sterols.
//                     </li>
//                     <li>
//                         <strong>The L-arginine:</strong> The amino acid
//                         L-arginine can also be found. There is some evidence
//                         that L-arginine lowers blood pressure, reduces
//                         cholesterol, and improves the health of blood vessels in
//                         general.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Nut servings: what is a healthy amount?
//                 </h3>
//                 <p>
//                     It is important to note that nuts contain fat. Even though
//                     most of them come from healthy fats, the calories can still
//                     add up. The key to keeping nuts healthy is to keep them in
//                     moderation.
//                 </p>
//                 <p>
//                     Ensuring an adequate intake of unsalted nuts in your diet
//                     typically means aiming for about 4 to 6 servings per week
//                     for adults. Serving recommendations may differ for children
//                     depending on their age. If you’re worried about your child’s
//                     nut consumption, it’s wise to consult their paediatrician to
//                     determine the appropriate serving size. Additionally, for
//                     personalized advice on maintaining heart health, consider
//                     contacting <Link to='/'>heart doctor in Gurgaon</Link> who can offer tailored
//                     recommendations and support.
//                 </p>
//                 <p>
//                     Instead of cooking nuts in oil, choose raw or dry-roasted
//                     nuts. You can enjoy two tablespoons of nut butter with each
//                     serving of whole nuts or a handful of whole nuts (1.5
//                     ounces).
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Are nuts of different kinds better than others?
//                 </h3>
//                 <p>
//                     There is no evidence that nuts are harmful in general.
//                     However, some may contain more heart-healthy nutrients than
//                     others. Walnuts, for instance, contain Omega-3 fatty acids.
//                 </p>
//                 <p>
//                     The heart-healthy properties of almonds, macadamia nuts,
//                     hazelnuts and pecans are well-established. The same applies
//                     to peanuts, although they are technically legumes, not nuts.
//                 </p>
//                 <p>
//                     It would help if you chose unsalted or unsweetened nuts.
//                     Salt or sugar can diminish heart-healthy benefits.
//                 </p>
//                 <p>
//                     The following is information on the nutrition of some of the
//                     most common types of nuts. A serving of unsalted nuts
//                     contains 28.4 grams of calories and fat.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Are nut oils a good idea? How healthy are they as well?
//                 </h3>
//                 <p>
//                     Nut oils provide nutrients but do not contain the fibre
//                     found in whole nuts. Walnut oil has more omega-3s than any
//                     other oil.
//                 </p>
//                 <p>
//                     Contemplate incorporating nut oils into your recipes when
//                     preparing salad dressings or cooking. Nut oils possess
//                     distinct properties compared to vegetable oils, particularly
//                     in their reaction to heat. It’s essential to avoid
//                     overheating nuts, as it can lead to a bitter taste.
//                     Furthermore, owing to their high fat and calorie content,
//                     it’s advisable to use nut oils sparingly. For individuals
//                     seeking specialized care and treatment for heart conditions,
//                     the <Link to='/your-doctor'>Best Heart Hospital in Gurgaon</Link> can provide comprehensive
//                     services and expert guidance tailored to individual needs.
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 5,
//         slug: 'zero-oil-cooking-heart-smart',
//         title: 'Why Zero-Oil Cooking is a Heart-Smart Choice',
//         category: 'Lifestyle',
//         date: 'April 22, 2024',
//         readTime: '5 min read',
//         image: Blog5,
//         excerpt:
//             'In the busy city of Gurgaon, where life moves fast with all its energy, maintaining heart health has become an essential priority...',
//         content: (
//             <div className="space-y-6">
//                 <p>
//                     In the busy city of Gurgaon, where life moves fast with all
//                     its energy, maintaining heart health has become an essential
//                     priority for many <Link to='/your-doctor'>Dr. Monik Mehta</Link> is like a shining light,
//                     a renowned heart specialist whose commitment to heart care
//                     has gained a lot of attention. He not only treats heart
//                     problems but also talks about ways to prevent them. Today,
//                     let’s explore the world of heart-friendly choices,
//                     especially focusing on why cooking without oil is such an
//                     important part of a healthy heart lifestyle.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     The Heart of the Matter: Dr. Monik Mehta’s Expertise
//                 </h3>
//                 <p>
//                     With years of experience in heart medicine, his expertise is
//                     like a guiding star for many who want top-quality heart
//                     care. As a specialist in this field, he combines advanced
//                     medical knowledge with a caring approach, making sure every
//                     patient gets special attention.
//                 </p>
//                 <p>
//                     In a city where life’s speed can sometimes affect health, he
//                     stresses the importance of preventive steps. One big thing
//                     he talks about is the role of food in staying healthy. This
//                     is where the idea of cooking without oil comes in as a
//                     revolutionary, heart-friendly choice.
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     Why Zero-Oil Cooking?
//                 </h3>
//                 <p>
//                     Imagine this: cooking vegetables in a pan without a drop of
//                     oil, the smell filling up the kitchen. It might seem like a
//                     cooking challenge, but the benefits are for your heart. The
//                     dedicated heart specialist in Gurgaon often discusses the
//                     advantages of oil-free food preparation with his patients,
//                     showing how it can really help the heart.
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Reduced Risk of Heart Disease:</strong> Food
//                         preparation without oil significantly reduces the intake
//                         of saturated fats and cholesterol. These are the things
//                         that can clog up your arteries and cause heart disease.
//                         By choosing zero-oil recipes, you can actively lower
//                         these risks.
//                     </li>
//                     <li>
//                         <strong>Weight control:</strong> One of the main risk
//                         factors for heart disease is obesity. An oil-free diet
//                         promotes weight management by cutting down on
//                         unnecessary calories. It lets you enjoy tasty meals
//                         without the burden of extra fat.
//                     </li>
//                     <li>
//                         <strong>Better Cholesterol Levels:</strong> Healthy fats
//                         are essential, but too much can raise your cholesterol.
//                         Cooking without oil lets natural flavours and spices
//                         shine, making dishes tasty without the extra fat.
//                     </li>
//                     <li>
//                         <strong>Improved Blood Pressure:</strong> Excess sodium,
//                         often found in processed oils, can spike blood pressure.
//                         In addition, a diet without oil focuses on fresh
//                         ingredients, aiding in maintaining optimal blood
//                         pressure levels.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     His Recommendations for a Heart-Smart Kitchen
//                 </h3>
//                 <p>
//                     He offers some invaluable advice to those beginning their
//                     journey into the world of oil-free food:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-3 mb-6">
//                     <li>
//                         <strong>Embrace Natural Flavours:</strong> Herbs,
//                         spices, and citrus juices are your best friends in the
//                         kitchen. They enhance food’s flavour and depth without
//                         using oil.
//                     </li>
//                     <li>
//                         <strong>Invest in Non-Stick Cookware:</strong> Quality
//                         non-stick pans and pots make oil-free meal preparation
//                         easy. They ensure that your ingredients cook evenly
//                         without sticking to the surface.
//                     </li>
//                     <li>
//                         <strong>Grilling and Baking:</strong> Explore the world
//                         of grilling and baking for oil-free meal methods.
//                         Grilled vegetables and baked dishes retain their natural
//                         flavours while being heart-smart.
//                     </li>
//                     <li>
//                         <strong>Avocado and Nuts:</strong> When opting for fats,
//                         choose healthy options like avocados and nuts. They add
//                         a creamy texture to dishes without compromising on
//                         nutrition.
//                     </li>
//                 </ul>

//                 <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
//                     The Benefits of Cooking without Oil
//                 </h3>
//                 <p>
//                     Going oil-free has lots of health benefits, not just for
//                     your heart. It helps manage weight, reduces inflammation,
//                     improves digestion, and boosts overall well-being. By making
//                     this choice, you’re not just taking care of your heart but
//                     also promoting a healthier lifestyle for yourself and your
//                     loved ones.
//                 </p>
//                 <p>
//                     As we move through the busy streets of Gurgaon, it’s clear
//                     that heart health isn’t a luxury—it’s a must-have. The
//                     esteemed <Link to='/'>Cardiologist Doctor in Gurgaon</Link>encourages us to
//                     make thoughtful choices for our health. Cooking without oil
//                     seems like a simple yet powerful tool in this mission,
//                     promising a healthier heart and a happier life.
//                 </p>
//                 <p>
//                     So, the next time you step into your kitchen, think about
//                     the impact of your cooking choices. With his expert advice
//                     and the magic of oil-free cooking, you’re paving the way for
//                     a healthy lifestyle.
//                 </p>

//                 <div className="border-t border-b border-gray-100 py-8 my-8 text-center">
//                     <p className="text-lg text-[#0b1b36] font-medium mb-4">
//                         Ready to embrace a heart-smart lifestyle?
//                     </p>
//                     <div className="flex justify-center gap-4">
//                         <Link
//                             to="/your-doctor"
//                             className="text-[#0056b3] font-semibold hover:underline"
//                         >
//                             Meet Dr. Mehta
//                         </Link>
//                         <span className="text-gray-300">|</span>
//                         <Link
//                             to="/contact"
//                             className="text-[#0056b3] font-semibold hover:underline"
//                         >
//                             Book a Consultation
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         ),
//     },
// ];
export const BLOG_POSTS = [
    {
        id: 1,
        slug: 'arterial-blood-clots-heart-attack',
        title: 'How Arterial Blood Clots Can Trigger a Heart Attack',
        category: 'Patient Care',
        date: 'July 19, 2024',
        readTime: '5 min read',
        image: Blog1, // Make sure Blog1 is imported
        excerpt:
            'When a blood clot develops in the arteries of the heart, it can obstruct blood flow partially or completely, causing...',
        content: (
            <div className="space-y-6">
                <p>
                    When a blood clot develops in the arteries of the heart, it
                    can obstruct blood flow partially or completely, causing
                    damage to the heart muscles. In order to prevent heart
                    attacks and other fatal complications, immediate treatment
                    is essential. This article delves into the formation of
                    blood clots, their impact on heart health, and strategies
                    for prevention and management.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What are Blood Clots?
                </h3>
                <p>
                    Blood clotting, or coagulation, is an essential process that
                    prevents excessive bleeding when a blood vessel is injured.
                    This process involves platelets, a type of blood cell, and
                    proteins in the plasma (the liquid part of the blood). When
                    a blood vessel is injured, platelets quickly gather at the
                    site and form a plug. Meanwhile, plasma proteins interact to
                    form fibrin threads that reinforce the platelet plug,
                    creating a stable clot. If you are experiencing any issues
                    related to blood clotting, it is important to consult with
                    the{' '}
                    <Link to="/" className={linkClass}>
                        best cardiologist in gurgaon
                    </Link>{' '}
                    to receive expert medical advice and treatment.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    How Do Clots Form in the Arteries?
                </h3>
                <p>
                    The formation of clots in arteries, especially those
                    supplying the heart, is often linked to a condition known as
                    atherosclerosis. This condition is characterized by the
                    buildup of fatty deposits, known as plaques, within the
                    arterial walls. Over time, these plaques can become large
                    and unstable.
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Atherosclerosis and Plaque Formation:</strong>{' '}
                        Plaques are composed of cholesterol, fatty substances,
                        cellular waste products, calcium, and fibrin. As they
                        accumulate, they narrow the arteries, reducing blood
                        flow to the heart. The danger arises when these plaques
                        rupture.
                    </li>
                    <li>
                        <strong>Rupture and Clot Formation:</strong> When a
                        plaque ruptures, it exposes its contents to the
                        bloodstream, triggering the clotting process. Platelets
                        rush to the rupture site, and clotting factors in the
                        blood form a clot. It is possible for the clot to block
                        the artery completely if it grows large enough.
                    </li>
                    <li>
                        <strong>Resulting Blockage:</strong> A blocked artery
                        prevents oxygen-rich blood from reaching the heart
                        muscle, leading to a heart attack. The severity of the
                        heart attack depends on the location and size of the
                        blockage, as well as the duration of the obstruction.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Signs of a Blood Clotting in the Heart
                </h3>
                <p>
                    Recognizing the symptoms is critical for timely
                    intervention. Common signs include:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Discomfort or Pain in the Chest:</strong>{' '}
                        Described as pressure, squeezing, fullness, or pain in
                        the center of the chest. The feeling can last for more
                        than a few minutes or it can go away and then return.
                    </li>
                    <li>
                        <strong>Pain in Other Parts of the Body:</strong> Pain
                        may radiate to the arms, back, neck, jaw, or stomach.
                    </li>
                    <li>
                        <strong>Breathing difficulty:</strong> Chest discomfort
                        may accompany breathing difficulty.
                    </li>
                    <li>
                        <strong>Other Symptoms:</strong> Nausea, light
                        headedness, or cold sweats.
                    </li>
                </ul>
                <p>
                    These symptoms can vary between men and women. It is more
                    common for women to experience shortness of breath, nausea,
                    and back or jaw pain during pregnancy.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Prevention and Management
                </h3>
                <p>
                    Reducing the risk of arterial clots involves making
                    lifestyle changes and managing underlying health conditions.
                    Here are several strategies:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Stay Physically Active:</strong> Regular
                        exercise helps maintain a healthy weight, lowers blood
                        pressure, improves cholesterol levels, and reduces the
                        risk of developing diabetes. Aim for at least 150
                        minutes of moderate-intensity aerobic activity each
                        week, combined with muscle-strengthening exercises on
                        two or more days a week.
                    </li>
                    <li>
                        <strong>Eat a Healthy Diet:</strong> A heart-healthy
                        diet includes plenty of fruits, vegetables, whole
                        grains, lean proteins, and healthy fats. The consumption
                        of saturated fats, trans fats, cholesterol, sodium, and
                        added sugars should also be limited. The Mediterranean
                        diet and DASH diet are both excellent choices for heart
                        health. For personalized dietary recommendations and
                        comprehensive heart care, consulting with the{' '}
                        <Link to="/" className={linkClass}>
                            top cardiologist in gurgaon
                        </Link>{' '}
                        can provide you with expert guidance and support.
                    </li>
                    <li>
                        <strong>
                            Maintain Healthy Blood Pressure and Diabetes:
                        </strong>{' '}
                        High blood pressure and diabetes can lead to a number of
                        health problems such as atherosclerosis and heart
                        attacks. Regular monitoring and management through
                        medication, diet, and lifestyle changes can
                        significantly reduce risks.
                    </li>
                    <li>
                        <strong>Control Cholesterol Levels:</strong> High levels
                        of low-density lipoprotein (LDL) cholesterol can lead to
                        plaque formation in the arteries. Changing your
                        lifestyle and taking medication can help you maintain a
                        healthy cholesterol level.
                    </li>
                    <li>
                        <strong>Avoid Smoking:</strong> Smoking damages the
                        lining of the arteries, contributing to the formation of
                        plaques and increasing the risk of clot formation. It is
                        beneficial for the heart’s health to quit smoking
                        immediately as well as over the long term.
                    </li>
                    <li>
                        <strong>Stay Well-Hydrated:</strong> Proper hydration
                        helps maintain healthy blood viscosity and circulation,
                        reducing the risk of clot formation. Stay hydrated
                        throughout the day.
                    </li>
                    <li>
                        <strong>Maintain a Healthy Weight:</strong> Excess
                        weight, especially around the abdomen, increases the
                        risk of developing atherosclerosis and other
                        heart-related issues. Maintaining a healthy weight can
                        be achieved and maintained with a balanced diet and
                        regular exercise.
                    </li>
                    <li>
                        <strong>Managing stress:</strong> High levels of chronic
                        stress can increase your risk of heart disease.
                        Practices such as mindfulness, meditation, yoga, and
                        regular physical activity can help manage stress levels.
                    </li>
                    <li>
                        <strong>Regular Health Screenings:</strong> Regular
                        check-ups with your healthcare provider can help monitor
                        heart health and detect any risk factors early on. This
                        includes blood pressure checks, cholesterol tests, and
                        diabetes screening.
                    </li>
                </ul>
                <p>
                    Understanding the trigger is essential for preventing and
                    managing heart disease. By making informed lifestyle choices
                    and managing health conditions, individuals can
                    significantly reduce their risk of experiencing a heart
                    attack. Staying active, eating a healthy diet, and avoiding
                    smoking are foundational steps toward a heart-healthy life.
                    Regular medical check-ups and screenings play a crucial role
                    in early detection and prevention, ensuring better long-term
                    heart health. For expert advice and personalized care,
                    consulting with a{' '}
                    <Link to="/" className={linkClass}>
                        good cardiologist in gurgaon
                    </Link>{' '}
                    can help you maintain optimal heart health.
                </p>
            </div>
        ),
    },
    {
        id: 2,
        slug: 'family-history-and-heart-disease',
        title: 'Family History and Heart Disease: Are You at Risk?',
        category: 'Diagnostics',
        date: 'June 26, 2024',
        readTime: '6 min read',
        image: Blog2,
        excerpt:
            'Heart disease is a major health concern globally, and India is no exception. Many of us have heard stories from...',
        content: (
            <div className="space-y-6">
                <p>
                    Heart disease is a major health concern globally, and India
                    is no exception. Many of us have heard stories from our
                    elders about relatives who suffered from heart issues or
                    other heart-related issues. These stories might make us
                    wonder: “Am I at risk of heart attack because of my family
                    history?” We can protect our heart health by taking
                    preventive steps if we know the link between heart problems
                    and relative history. Consulting the{' '}
                    <Link to="/" className={linkClass}>
                        best heart doctor in gurgaon
                    </Link>{' '}
                    can provide insights and personalized advice.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What is Heart Disease?
                </h3>
                <p>
                    Many different heart-related illnesses are included under
                    the umbrella term “heart attack”. Heart failure, arrhythmias
                    (irregular heartbeats), coronary artery disease, and other
                    conditions are among them. The most common type is coronary
                    artery disease, which happens when the blood vessels
                    supplying blood to the heart become narrow or blocked. This
                    can lead to chest pain (angina), heart issues, and other
                    serious problems.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    The Role of Family History
                </h3>
                <p>
                    Bloodline history plays a significant role in determining
                    one’s risk of heart problems. If your parents, siblings, or
                    grandparents have had cardiovascular disease, you might be
                    more likely to develop it too. A mix of common lifestyle
                    variables and genetics probably accounts for this increased
                    risk.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Genetic Factors
                </h3>
                <p>
                    Genes are the basic units of heredity, passed down from
                    parents to children. They can influence various aspects of
                    our health, including the likelihood of developing cardiac
                    disease. Certain genetic mutations can increase cholesterol
                    levels, blood pressure, and other risk factors for coronary
                    artery disease. For example, a condition called familial
                    hyper cholesterolemia is caused by a genetic mutation that
                    leads to very high cholesterol levels and early heart
                    failure.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Early Warning Signs
                </h3>
                <p>
                    Being aware of the early warning signs of heart problems can
                    help you seek medical attention promptly. Some common
                    symptoms include:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>Chest pain or discomfort</li>
                    <li>Shortness of breath</li>
                    <li>Palpitations or irregular heartbeats</li>
                    <li>Fatigue or weakness</li>
                    <li>Your legs, ankles, or feet are swelling.</li>
                </ul>
                <p>
                    If you find these sorts of symptoms are present, be sure to
                    see your doctor right away. It causes you to consult your
                    doctor immediately when you experience any of these
                    symptoms, you might consider consulting{' '}
                    <Link to="/your-doctor" className={linkClass}>
                        Dr Monik Mehta
                    </Link>
                    , who provides the best heart care.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Shared Lifestyle Habits
                </h3>
                <p>
                    Families often share lifestyle habits that can impact heart
                    health. These include diet, physical activity levels, and
                    smoking habits. For instance, if your family consumes a diet
                    high in unhealthy fats and sugars, you might be more prone
                    to developing cardiac disease. Similarly, if physical
                    inactivity or smoking is common in your family, these habits
                    can increase your risk.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Other Risk Factors
                </h3>
                <p>
                    Although a significant influence, relatives history is not
                    the sole one. Other cardiovascular disease risk factors
                    include:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Age:</strong> Risk increases with age.
                    </li>
                    <li>
                        <strong>Gender:</strong> Men are generally at higher
                        risk, but women’s risk increases after menopause.
                    </li>
                    <li>
                        <strong>High Blood Pressure:</strong> The heart is
                        strained more as a result.
                    </li>
                    <li>
                        <strong>High Cholesterol:</strong> It may also
                        eventually harden into plaque in the arteries.
                    </li>
                    <li>
                        <strong>Diabetes:</strong> High blood sugar may damage
                        blood vessels.
                    </li>
                    <li>
                        <strong>Obesity:</strong> Excess weight increases the
                        burden on the heart.
                    </li>
                    <li>
                        <strong>Stress:</strong> Chronic stress can harm the
                        heart.
                    </li>
                    <li>
                        <strong>Unhealthy Diet:</strong> Diets high in saturated
                        fats, trans fats, and cholesterol can increase risk.
                    </li>
                    <li>
                        <strong>Lack of Physical Activity:</strong> Regular
                        exercise is crucial for heart health.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Assessing Your Risk
                </h3>
                <p>
                    The first step in assessing your risk is understanding your
                    ancestry. To find out more about your family’s cardiac
                    issues, have a conversation with them. Please record the age
                    at when they were diagnosed, since early onset of coronary
                    artery disease in close relatives may be a more accurate
                    indicator of inherited risk.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Preventive Measures
                </h3>
                <p>
                    While you can’t change your genes, you can adopt healthy
                    habits to lower your risk of cardiac disease. The following
                    are some of the tips you can achieve:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Maintain a Healthy Diet:</strong> Consume a
                        balanced diet rich in whole grains, fruits, vegetables,
                        lean meats, and healthy fats. Limit the amount of sugar,
                        salt, trans fats, and saturated fats you consume.
                    </li>
                    <li>
                        <strong>Exercise Regularly:</strong> Every week, try to
                        get in 150 or 75 minutes of vigorous or
                        moderate-to-intense activity. Exercises that are good
                        for the heart include cycling, swimming, walking, and
                        running.
                    </li>
                    <li>
                        <strong>Monitor Your Health:</strong> Monitor Your Blood
                        Pressure, Cholesterol, and Blood Sugar. Regular checkups
                        can also help identify issues while they are still
                        small.
                    </li>
                    <li>
                        <strong>Quit Smoking:</strong> Seek support to help you
                        quit smoking. Smokers are more prone to get coronary
                        artery disease.
                    </li>
                    <li>
                        <strong>Manage Stress:</strong> Practice stress-relief
                        techniques like yoga, meditation, deep breathing, or
                        hobbies that you enjoy.
                    </li>
                    <li>
                        <strong>Limit Alcohol:</strong> Drinking alcohol in
                        moderation if you have high blood pressure. In older
                        men, prolonged excessive drinking is linked to a higher
                        risk of cardiovascular disease and is a risk factor for
                        hypertension.
                    </li>
                    <li>
                        <strong>Stay Informed:</strong> Educate yourself about
                        cardiovascular disease and stay updated on new research
                        and recommendations.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Conclusion
                </h3>
                <p>
                    The mere fact that heart failure runs in your family does
                    not guarantee that you will have it. Making good lifestyle
                    choices and being aware of your risk of heart attack may
                    help you significantly lower your risk. Remember, knowledge
                    is power. Your heart now is the first step towards a better
                    tomorrow. For personalized advice and treatment, consider
                    consulting{' '}
                    <Link to="/your-doctor" className={linkClass}>
                        heart specialist doctor in gurgaon
                    </Link>
                    . Taking proactive steps towards a healthier lifestyle
                    benefits your heart and enhances your overall well-being.
                    Start making changes today for a healthier, happier
                    tomorrow.
                </p>
            </div>
        ),
    },
    {
        id: 3,
        slug: 'dietary-supplements-heart-health',
        title: 'Dietary Supplements & Heart Health',
        category: 'Wellness',
        date: 'June 13, 2024',
        readTime: '7 min read',
        image: Blog3,
        excerpt:
            'There are several dietary supplements that promote cardiovascular health and a healthy heart. These supplements, which range from well-known omega-3s...',
        content: (
            <div className="space-y-6">
                <p>
                    There are several dietary supplements that promote
                    cardiovascular health and a healthy heart. These
                    supplements, which range from well-known omega-3s to the
                    lesser-known coenzyme Q10, promise heart health benefits.
                    However, there is a dearth of supporting scientific
                    evidence. The following provides a quick summary of the
                    science and benefits of what is currently known regarding
                    their efficacy.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Fish Oil (Omega-3 Fatty Acids)
                </h3>
                <p>
                    Fish oil contains the omega-3 fatty acids eicosapentaenoic
                    acid (EPA) and docosahexaenoic acid (DHA), but the
                    proportion of each varies with formulation. Although fish
                    oil can successfully lower blood triglyceride levels, it is
                    unclear whether this reduces the risk of cardiovascular
                    disease. The question of whether fish oil reduces the risk
                    of cardiovascular disease (CVD) while lowering cholesterol
                    levels in blood tests is even more contentious. Although
                    previous studies suggested that fish oil has
                    cardioprotective effects, a meta-analysis of subsequent
                    trials found no meaningful reduction in outcomes. A
                    meta-analysis of patients with existing CVD similarly failed
                    to identify any advantage. The difference between older and
                    newer trials may indicate that fish oil offers only a minor
                    benefit in CVD, which has been overshadowed by more recent
                    therapires (for example, statins). Fortunately, omega-3
                    fatty acids have been shown to be relatively safe, however,
                    they may raise the risk of bleeding and should be used with
                    caution in individuals taking aspirin or anticoagulants.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Niacin
                </h3>
                <p>
                    Niacin or Vitamin B3 has been shown to reduce total
                    cholesterol and low-density lipoprotein concentrations
                    (LDL-C), although it does so less effectively than statins
                    and has not been associated with comparable reductions in
                    cardiovascular events. Although niacin also decreases
                    triglycerides and increases high-density lipoprotein
                    concentrations (HDL-C), these effects have not conferred
                    improvements in cardiovascular outcomes among patients
                    receiving statins. Moreover, its use for this purpose
                    increases the risk of adverse effects, including impaired
                    glucose control, gastrointestinal disturbances, and
                    musculoskeletal effects. Although niacin may still have a
                    role in patients with challenging dyslipidemias, its use
                    should be limited to clinicians who specialize in this area.
                    Of note, inositol hexanicotinate (IHN) or “flush free”
                    niacin does not demonstrate lipid-lowering properties and
                    should not be used for this purpose. Additionally,
                    sustained-release formulations have been associated with an
                    excess risk of hepatotoxicity.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Co-enzyme Q10
                </h3>
                <p>
                    Co-enzyme Q10 (CoQ10), also known as ubiquinone or
                    ubidecarenone, is a fat-soluble antioxidant synthesized
                    endogenously and involved in a variety of metabolic
                    processes. Supplementation with CoQ10 has been touted for
                    reducing statin-associated muscle symptoms (SAMS); however,
                    recent evidence has shown CoQ10 to have no apparent impact
                    on SAMS. CoQ10 has also been studied in heart failure for
                    its promising effects on myocardial contractility and
                    exercise performance. However, these trials have shown mixed
                    results and have been subject to significant flaws in
                    methodology. Current guidelines do not recommend addition of
                    CoQ10 in patients with heart failure.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Vitamin D
                </h3>
                <p>
                    Vitamin D deficiency has been shown to have a strong
                    association with CVD, but it is unknown whether vitamin D
                    deficiency contributes to the pathogenesis of CVD or if it
                    is merely a surrogate marker for comorbidities that
                    contribute to CVD. Available evidence is contradictory and
                    current recommendations do not support vitamin D
                    supplementation solely for cardiovascular health.
                    Supplementation with vitamin D3 has been specifically
                    studied in heart failure patients, showing a modest increase
                    in left ventricular hemodynamic function but failing to
                    influence exercise capacity or other clinical endpoints.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Magnesium
                </h3>
                <p>
                    Magnesium is commonly prescribed for patients who develop
                    hypomagnesemia as a consequence of diuretic therapy, but it
                    has also been evaluated for a variety of other
                    cardiovascular conditions, including arrhythmias, coronary
                    artery disease, and myocardial infarction. Although
                    correcting hypomagnesemia can reduce the risk of arrhythmias
                    in high-risk patients, its effects on other cardiovascular
                    conditions remains inconclusive. Some epidemiologic studies
                    indicate that low serum magnesium concentrations may
                    increase the risk of CVD, whereas others have failed to show
                    an association.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Red yeast rice
                </h3>
                <p>
                    Red yeast rice is a fermented rice product that may contain
                    monacolin K, an HMG-CoA reductase inhibitor identical to the
                    active ingredient in lovastatin. In the late 1990s, the FDA
                    prohibited red yeast rice products in the US from containing
                    more than trace amounts of monacolin K and began taking
                    legal action against manufacturers whose products were in
                    violation of these regulations. Nonetheless, due to
                    limitations in the agency’s ability to inspect manufacturers
                    of dietary supplements, some products may still contain more
                    than trace amounts of monacolin K as well as the toxin
                    citrinin. Red yeast rice products that conform to FDA
                    regulations often consist of proprietary blends of other
                    ingredients that lack proven efficacy in the treatment of
                    dyslipidemia.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Antioxidant vitamins (A and E)
                </h3>
                <p>
                    Contrary to the lack of rigorous evaluation for most dietary
                    supplements, vitamin A (beta-carotene) and vitamin E
                    (alpha-tocopherol) have been studied in large, robust
                    clinical trials. Both were believed to lower the risk of
                    cancer and CVD, but neither of these effects was observed
                    when compared to placebo. In addition, long-term vitamin E
                    supplementation has been associated with an increased risk
                    of heart failure in patients with pre-existing vascular
                    disease or diabetes.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Garlic
                </h3>
                <p>
                    Garlic supplementation has been promoted for modifying
                    cardiovascular risk factors, including hyperlipidemia and
                    hypertension. The active compounds in garlic and their
                    effective doses are ill-defined, and the data available to
                    support the use of garlic are severely limited due to
                    methodological flaws.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Resveratrol
                </h3>
                <p>
                    Resveratrol is a naturally occurring plant compound with
                    purported cardioprotective effects attributed to its
                    antioxidant-like properties and salutary impact on serum
                    lipid concentrations and blood pressure. It is believed to
                    be the active component in red wine that confers
                    cardiovascular benefits in observational analyses. However,
                    in controlled clinical trials, supplementation with
                    resveratrol does not alter CVD risk factors or clinical
                    outcomes.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Flaxseed
                </h3>
                <p>
                    Flaxseeds contain phytoestrogens as well as alpha-linolenic
                    acid, an omega-3 fatty acid. Some formulations have been
                    associated with improvements in surrogate markers for CVD,
                    such as total cholesterol and LDL-C, whereas others have
                    produced inconsistent results. Similar findings exist for
                    its potential effects on blood pressure. To date, no
                    evidence suggests flaxseed has an impact on cardiovascular
                    outcomes.
                </p>
            </div>
        ),
    },
    {
        id: 4,
        slug: 'nuts-keep-heart-happy',
        title: 'How Nuts Can Keep Your Heart Happy and Healthy',
        category: 'Nutrition',
        date: 'May 24, 2024',
        readTime: '4 min read',
        image: Blog4,
        excerpt:
            'Nuts may be good for the heart when consumed in a healthy diet. They contain nutritional and unsaturated fatty acids...',
        content: (
            <div className="space-y-6">
                <p>
                    Nuts may be good for the heart when consumed in a healthy
                    diet. They contain nutritional and unsaturated fatty acids.
                    They’re also great snacks. They’re easy to pack and store
                    and inexpensive on the go.
                </p>
                <p>
                    It is crucial to remember that some snacks contain high
                    calories. Hence, it’s vital to control your portions. Opting
                    for nuts over less healthy snacks can help you stick to a
                    heart-healthy diet. If you need guidance on heart health,
                    consulting a{' '}
                    <Link to="/your-doctor" className={linkClass}>
                        heart specialist in Gurgaon
                    </Link>{' '}
                    could provide valuable insights and personalized advice
                    tailored to your needs.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Are nuts good for your heart?
                </h3>
                <p>
                    Several studies have shown that nuts and seeds lower
                    inflammation levels associated with diabetes and heart
                    disease.
                </p>
                <p>Nutritional benefits include:</p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>Maintain healthy arteries.</li>
                    <li>Improve heart health by reducing inflammation.</li>
                    <li>
                        Prevent heart attacks and strokes by reducing blood clot
                        risk.
                    </li>
                    <li>Blood pressure can be lowered.</li>
                    <li>
                        Cardiovascular disease is a leading cause of early
                        death.
                    </li>
                    <li>
                        Lower unhealthy cholesterol levels, specifically
                        triglycerides and low-density lipoproteins, or “bad”
                        cholesterol.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Are nuts heart-healthy?
                </h3>
                <p>
                    They are the best protein sources. Furthermore, it comes
                    with these heart-healthy nutrients:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Contains unsaturated fats:</strong> Some believe
                        that nuts’ monounsaturated fats and polyunsaturated fats
                        lower harmful cholesterol levels for reasons that are
                        not fully understood.
                    </li>
                    <li>
                        <strong>Fats rich in omega-3:</strong> It is the omega-3
                        fatty acids found in these nuts that make them a healthy
                        snack. Healthful fatty acids include omega-3s. There may
                        be a reduction in the risk of heart attack and stroke
                        caused by these nutrients.
                    </li>
                    <li>
                        <strong>Contains fiber:</strong> Almost all of them
                        contain fibre, a substance that lowers cholesterol. By
                        consuming fibre, you feel complete for extended periods
                        and eat fewer calories.
                    </li>
                    <li>
                        <strong>Sterols from plants:</strong> A substance found
                        in some nuts can help reduce cholesterol, called plant
                        sterols. It is common for plant sterols to be added to
                        products such as margarine and orange juice for their
                        health benefits; however naturally contain plant
                        sterols.
                    </li>
                    <li>
                        <strong>The L-arginine:</strong> The amino acid
                        L-arginine can also be found. There is some evidence
                        that L-arginine lowers blood pressure, reduces
                        cholesterol, and improves the health of blood vessels in
                        general.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Nut servings: what is a healthy amount?
                </h3>
                <p>
                    It is important to note that nuts contain fat. Even though
                    most of them come from healthy fats, the calories can still
                    add up. The key to keeping nuts healthy is to keep them in
                    moderation.
                </p>
                <p>
                    Ensuring an adequate intake of unsalted nuts in your diet
                    typically means aiming for about 4 to 6 servings per week
                    for adults. Serving recommendations may differ for children
                    depending on their age. If you’re worried about your child’s
                    nut consumption, it’s wise to consult their paediatrician to
                    determine the appropriate serving size. Additionally, for
                    personalized advice on maintaining heart health, consider
                    contacting{' '}
                    <Link to="/" className={linkClass}>
                        heart doctor in Gurgaon
                    </Link>{' '}
                    who can offer tailored recommendations and support.
                </p>
                <p>
                    Instead of cooking nuts in oil, choose raw or dry-roasted
                    nuts. You can enjoy two tablespoons of nut butter with each
                    serving of whole nuts or a handful of whole nuts (1.5
                    ounces).
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Are nuts of different kinds better than others?
                </h3>
                <p>
                    There is no evidence that nuts are harmful in general.
                    However, some may contain more heart-healthy nutrients than
                    others. Walnuts, for instance, contain Omega-3 fatty acids.
                </p>
                <p>
                    The heart-healthy properties of almonds, macadamia nuts,
                    hazelnuts and pecans are well-established. The same applies
                    to peanuts, although they are technically legumes, not nuts.
                </p>
                <p>
                    It would help if you chose unsalted or unsweetened nuts.
                    Salt or sugar can diminish heart-healthy benefits.
                </p>
                <p>
                    The following is information on the nutrition of some of the
                    most common types of nuts. A serving of unsalted nuts
                    contains 28.4 grams of calories and fat.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Are nut oils a good idea? How healthy are they as well?
                </h3>
                <p>
                    Nut oils provide nutrients but do not contain the fibre
                    found in whole nuts. Walnut oil has more omega-3s than any
                    other oil.
                </p>
                <p>
                    Contemplate incorporating nut oils into your recipes when
                    preparing salad dressings or cooking. Nut oils possess
                    distinct properties compared to vegetable oils, particularly
                    in their reaction to heat. It’s essential to avoid
                    overheating nuts, as it can lead to a bitter taste.
                    Furthermore, owing to their high fat and calorie content,
                    it’s advisable to use nut oils sparingly. For individuals
                    seeking specialized care and treatment for heart conditions,
                    the{' '}
                    <Link to="/your-doctor" className={linkClass}>
                        Best Heart Hospital in Gurgaon
                    </Link>{' '}
                    can provide comprehensive services and expert guidance
                    tailored to individual needs.
                </p>
            </div>
        ),
    },
    {
        id: 5,
        slug: 'zero-oil-cooking-heart-smart',
        title: 'Why Zero-Oil Cooking is a Heart-Smart Choice',
        category: 'Lifestyle',
        date: 'April 22, 2024',
        readTime: '5 min read',
        image: Blog5,
        excerpt:
            'In the busy city of Gurgaon, where life moves fast with all its energy, maintaining heart health has become an essential priority...',
        content: (
            <div className="space-y-6">
                <p>
                    In the busy city of Gurgaon, where life moves fast with all
                    its energy, maintaining heart health has become an essential
                    priority for many{' '}
                    <Link to="/your-doctor" className={linkClass}>
                        Dr. Monik Mehta
                    </Link>{' '}
                    is like a shining light, a renowned heart specialist whose
                    commitment to heart care has gained a lot of attention. He
                    not only treats heart problems but also talks about ways to
                    prevent them. Today, let’s explore the world of
                    heart-friendly choices, especially focusing on why cooking
                    without oil is such an important part of a healthy heart
                    lifestyle.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    The Heart of the Matter: Dr. Monik Mehta’s Expertise
                </h3>
                <p>
                    With years of experience in heart medicine, his expertise is
                    like a guiding star for many who want top-quality heart
                    care. As a specialist in this field, he combines advanced
                    medical knowledge with a caring approach, making sure every
                    patient gets special attention.
                </p>
                <p>
                    In a city where life’s speed can sometimes affect health, he
                    stresses the importance of preventive steps. One big thing
                    he talks about is the role of food in staying healthy. This
                    is where the idea of cooking without oil comes in as a
                    revolutionary, heart-friendly choice.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    Why Zero-Oil Cooking?
                </h3>
                <p>
                    Imagine this: cooking vegetables in a pan without a drop of
                    oil, the smell filling up the kitchen. It might seem like a
                    cooking challenge, but the benefits are for your heart. The
                    dedicated heart specialist in Gurgaon often discusses the
                    advantages of oil-free food preparation with his patients,
                    showing how it can really help the heart.
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Reduced Risk of Heart Disease:</strong> Food
                        preparation without oil significantly reduces the intake
                        of saturated fats and cholesterol. These are the things
                        that can clog up your arteries and cause heart disease.
                        By choosing zero-oil recipes, you can actively lower
                        these risks.
                    </li>
                    <li>
                        <strong>Weight control:</strong> One of the main risk
                        factors for heart disease is obesity. An oil-free diet
                        promotes weight management by cutting down on
                        unnecessary calories. It lets you enjoy tasty meals
                        without the burden of extra fat.
                    </li>
                    <li>
                        <strong>Better Cholesterol Levels:</strong> Healthy fats
                        are essential, but too much can raise your cholesterol.
                        Cooking without oil lets natural flavours and spices
                        shine, making dishes tasty without the extra fat.
                    </li>
                    <li>
                        <strong>Improved Blood Pressure:</strong> Excess sodium,
                        often found in processed oils, can spike blood pressure.
                        In addition, a diet without oil focuses on fresh
                        ingredients, aiding in maintaining optimal blood
                        pressure levels.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    His Recommendations for a Heart-Smart Kitchen
                </h3>
                <p>
                    He offers some invaluable advice to those beginning their
                    journey into the world of oil-free food:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>Embrace Natural Flavours:</strong> Herbs,
                        spices, and citrus juices are your best friends in the
                        kitchen. They enhance food’s flavour and depth without
                        using oil.
                    </li>
                    <li>
                        <strong>Invest in Non-Stick Cookware:</strong> Quality
                        non-stick pans and pots make oil-free meal preparation
                        easy. They ensure that your ingredients cook evenly
                        without sticking to the surface.
                    </li>
                    <li>
                        <strong>Grilling and Baking:</strong> Explore the world
                        of grilling and baking for oil-free meal methods.
                        Grilled vegetables and baked dishes retain their natural
                        flavours while being heart-smart.
                    </li>
                    <li>
                        <strong>Avocado and Nuts:</strong> When opting for fats,
                        choose healthy options like avocados and nuts. They add
                        a creamy texture to dishes without compromising on
                        nutrition.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    The Benefits of Cooking without Oil
                </h3>
                <p>
                    Going oil-free has lots of health benefits, not just for
                    your heart. It helps manage weight, reduces inflammation,
                    improves digestion, and boosts overall well-being. By making
                    this choice, you’re not just taking care of your heart but
                    also promoting a healthier lifestyle for yourself and your
                    loved ones.
                </p>
                <p>
                    As we move through the busy streets of Gurgaon, it’s clear
                    that heart health isn’t a luxury—it’s a must-have. The
                    esteemed{' '}
                    <Link to="/" className={linkClass}>
                        Cardiologist Doctor in Gurgaon
                    </Link>{' '}
                    encourages us to make thoughtful choices for our health.
                    Cooking without oil seems like a simple yet powerful tool in
                    this mission, promising a healthier heart and a happier
                    life.
                </p>
                <p>
                    So, the next time you step into your kitchen, think about
                    the impact of your cooking choices. With his expert advice
                    and the magic of oil-free cooking, you’re paving the way for
                    a healthy lifestyle.
                </p>

                <div className="border-t border-b border-gray-100 py-8 my-8 text-center">
                    <p className="text-lg text-[#0b1b36] font-medium mb-4">
                        Ready to embrace a heart-smart lifestyle?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/your-doctor" className={linkClass}>
                            Meet Dr. Mehta
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link to="/contact" className={linkClass}>
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
];

export const RESOURCE_POSTS = [
    {
        id: 1,
        slug: 'what-is-coronary-artery-disease',
        title: 'What is Coronary Artery Disease (CAD)?',
        category: 'Conditions',
        excerpt:
            'Coronary Artery Disease is a group of conditions that include angina, myocardial infarction, and possible cardiac arrest...',
        content: (
            <div className="space-y-6">
                <p>
                    Coronary Artery Disease is a group of conditions that
                    include angina (stable or unstable), myocardial infarction,
                    and possible cardiac arrest. It is also known as ischemic
                    heart disease (IHD), in which the most common symptom is
                    chest pain or discomfort, along with referred pain to the
                    arms, shoulders, neck, back, or jaw.
                </p>
                <p>
                    It also gives a sign of heartburn, which is most commonly
                    misunderstood by acid reflux. The symptoms are associated
                    with physical or mental stress, tachycardia, or bradycardia.
                    Sometimes the symptoms are silent or can appear as heart
                    attacks.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What are the common risk factors of CAD?
                </h3>
                <p>
                    Heart disease is a complex issue that a variety of factors
                    can cause. The important risk factors, include:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                        <strong>High blood pressure:</strong> High blood
                        pressure is a major risk factor for heart disease, and
                        women are at an increased risk of developing high blood
                        pressure after menopause.
                    </li>
                    <li>
                        <strong>High cholesterol:</strong> High cholesterol
                        levels can increase the risk of heart disease, and women
                        are more likely to have high cholesterol after
                        menopause.
                    </li>
                    <li>
                        <strong>Obesity:</strong> Obesity is a major risk factor
                        for heart disease, and women are more likely to be obese
                        than men.
                    </li>
                    <li>
                        <strong>Smoking:</strong> Smoking is a major risk factor
                        for heart disease, and individuals who smoke are at an
                        increased risk of developing heart disease.
                    </li>
                    <li>
                        <strong>Gender/Age:</strong> Risk of CAD increases
                        exponentially with age. Risk begins after 45 years of
                        age in males and 55 years of age in females.
                    </li>
                    <li>
                        <strong>Family history of heart disease:</strong>{' '}
                        Persons with a family history of heart disease are at an
                        increased risk of developing it themselves.
                    </li>
                    <li>
                        <strong>Physical Inactivity</strong>
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What Dietary measures can you take to reduce the risks?
                </h3>
                <p>
                    Dietary control with physical activity can give a
                    satisfactory result. You can take preventive measures to cut
                    down on low-density lipids (LDL cholesterol), sugar levels,
                    and blood pressure. We advise you to include whole grains,
                    fibrous foods, fruits, and unsaturated fats in your diet. As
                    much as possible, try to avoid excessive salt and sugar
                    consumption.
                </p>
            </div>
        ),
    },
    {
        id: 2,
        slug: 'what-should-normal-blood-pressure-be',
        title: 'What Should My Normal Blood Pressure Be?',
        category: 'Metrics',
        excerpt:
            'Blood pressure numbers of less than 120/80 mm Hg is considered to be within the normal range...',
        content: (
            <div className="space-y-6">
                <p>
                    Blood pressure numbers of less than 120/80 mm Hg is
                    considered to be within the normal range. Readings more than
                    130/80 indicate high blood pressure and at this stage
                    lifestyle changes are recommended. However if the values
                    increase beyond 140/90 mm Hg then usually medicines are
                    added to lifestyle modifications.
                </p>
                <p>
                    High blood pressure is a “silent” killer causing various
                    diseases e.g heart attack, stroke, kidney failure, visual
                    loss etc hence it is extremely important to protect yourself
                    from these risks.
                </p>
            </div>
        ),
    },
    {
        id: 3,
        slug: 'angioplasty-and-stenting',
        title: 'What is Angioplasty and Stenting?',
        category: 'Procedures',
        excerpt:
            'The term “angioplasty” means using a balloon to stretch open a narrowed or blocked artery...',
        content: (
            <div className="space-y-6">
                <p>
                    The term “angioplasty” means using a balloon to stretch open
                    a narrowed or blocked artery. However, most modern
                    angioplasty procedures also involve inserting a short
                    wire-mesh tube, called a stent, into the artery during the
                    procedure. The stent is left in place permanently to allow
                    blood to flow more freely.
                </p>
                <p>
                    For more information{' '}
                    <Link
                        to="/services/angioplasty"
                        className={resourceLinkStyle}
                    >
                        click here
                    </Link>
                    .
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What are the benefits of a coronary angioplasty?
                </h3>
                <p>
                    In most cases, the blood flow through the coronary arteries
                    improves after an angioplasty. Many people find their
                    symptoms get significantly better and they’re able to do
                    more than they could before the procedure.
                </p>
                <p>
                    If you’ve had a heart attack, an angioplasty can increase
                    your chances of surviving more than clot-busting medication
                    (thrombolysis). The procedure can also reduce your chances
                    of having another heart attack in the future.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What are the complications of a coronary angioplasty?
                </h3>
                <p>
                    Coronary angioplasty is a relatively safe procedure with few
                    complications. Commonly, one can have minor discomfort or
                    bruising under the skin where the catheter was inserted.
                    More serious complications are less common (usually less
                    than 1%) but can include damage to the artery where the
                    sheath was inserted; allergic reaction to the contrast agent
                    used during the procedure; damage to an artery in the heart;
                    excessive bleeding requiring a blood transfusion; heart
                    attack, stroke or death.
                </p>
            </div>
        ),
    },
    {
        id: 4,
        slug: 'electrocardiogram-ecg',
        title: 'What is an Electrocardiogram (ECG)?',
        category: 'Diagnostics',
        excerpt:
            'EKG is an essential non-invasive tool to assess the structural or functional anomalies in the heart...',
        content: (
            <div className="space-y-6">
                <p>
                    EKG is an essential non-invasive tool to assess the
                    structural or functional anomalies in the heart and the
                    associated blood vessels. It measures electrical activity
                    across the heart and measures the rhythmic pattern.
                </p>
                <p>
                    <Link to="/services/ecg" className={resourceLinkStyle}>
                        Click here for more information
                    </Link>
                    .
                </p>
            </div>
        ),
    },
    {
        id: 5,
        slug: 'echo-or-echocardiogram',
        title: 'What is an Echo or Echocardiogram?',
        category: 'Diagnostics',
        excerpt:
            'This is a non-invasive test to look at the heart and blood flow inside it using high-frequency sound waves...',
        content: (
            <div className="space-y-6">
                <p>
                    This is a non-invasive test to look at the heart and blood
                    flow inside it. It is a type of ultrasound scan that uses
                    high-frequency sound waves to create an image on a computer
                    monitor, which is then analyzed by the cardiologist. It is
                    extremely helpful in detecting any structural damage or
                    defect in the heart or its various parts, and it can also
                    study the flow of blood inside the heart chambers.
                </p>
                <p>
                    For more information{' '}
                    <Link to="/services/2d-echo" className={resourceLinkStyle}>
                        click here
                    </Link>
                    .
                </p>
            </div>
        ),
    },
    {
        id: 6,
        slug: 'coronary-artery-bypass-graft',
        title: 'What is Coronary Artery Bypass Graft (CABG)?',
        category: 'Procedures',
        excerpt:
            'CABG stands for Coronary Artery Bypass Grafting. It is a type of surgery used to treat severe coronary artery disease...',
        content: (
            <div className="space-y-6">
                <p>
                    CABG stands for Coronary Artery Bypass Grafting. It is a
                    type of surgery that is used to treat patients with severe
                    coronary artery disease (CAD) and is also known as “open
                    heart surgery” or “bypass surgery” in layman’s language.
                </p>
                <p>
                    Plaque buildup narrows or obstructs the coronary arteries,
                    which give blood and oxygen to the heart muscle. This is
                    known as coronary heart disease. If the blockage becomes
                    serious enough to cut off blood flow to the heart, it can
                    cause chest pain or even a heart attack.
                </p>
                <p>
                    For more information{' '}
                    <Link
                        to="/services/cardiac-catheterization"
                        className={resourceLinkStyle}
                    >
                        click here
                    </Link>
                    .
                </p>
            </div>
        ),
    },
    {
        id: 7,
        slug: 'electrophysiological-study-eps-rfa',
        title: 'What is an Electrophysiological Study (EPS) or RFA?',
        category: 'Diagnostics',
        excerpt:
            'An electrophysiological study measures electrical activity to diagnose irregular heart rhythms...',
        content: (
            <div className="space-y-6">
                <p>
                    An electrophysiological study is a test that measures the
                    electrical activity of the heart and is used to diagnose an
                    arrhythmia, or irregular heart rhythms while Radiofrequency
                    ablation (RFA) is the treatment to control or correct the
                    irregular heartbeat.
                </p>
                <p>
                    For more information{' '}
                    <Link
                        to="/services/pacemaker-testing-followup"
                        className={resourceLinkStyle}
                    >
                        click here
                    </Link>
                    .
                </p>
            </div>
        ),
    },
    {
        id: 8,
        slug: 'cardiac-rehabilitation',
        title: 'What is Cardiac Rehabilitation?',
        category: 'Programs',
        excerpt:
            'Healthy Hearts provides rehabilitation programs focused heavily on stress management, lifestyle, and awareness...',
        content: (
            <div className="space-y-6">
                <p>
                    Healthy Hearts provides cardiac rehabilitation generally for
                    patients with a history of severe cardiac events. The focus
                    of the program is majorly on awareness, personal
                    consultation, stress management, lifestyle management, and
                    physical activity management.
                </p>
                <p>
                    For more information{' '}
                    <Link
                        to="/services/cardiac-rehabilitation"
                        className={resourceLinkStyle}
                    >
                        click here
                    </Link>
                    .
                </p>
            </div>
        ),
    },
    {
        id: 9,
        slug: 'who-is-a-cardiologist',
        title: 'Who is a Cardiologist?',
        category: 'Education',
        excerpt:
            'Cardiologists treat the heart and its diseases using diagnostic tests and medication strategies...',
        content: (
            <div className="space-y-6">
                <p>
                    Cardiologists are physicians who treat the heart and its
                    diseases using diagnostics and medication. Unlike cardiac
                    surgeons, they do not perform traditional surgical
                    procedures.{' '}
                </p>
                <p>
                    Cardiologists who additionally do minimally invasive
                    procedures involving small incisions, e.g., pacemaker
                    implantations and catheters, e.g., angioplasty, are called
                    interventional cardiologists. These procedures are used to
                    diagnose and treat diseases such as heart valve disorders,
                    coronary artery disease, congenital heart disease,
                    endocarditis, and peripheral artery disease.
                </p>

                <h3 className="text-2xl font-bold text-[#0b1b36] mt-8 mb-4">
                    What is the difference between an Interventional
                    Cardiologist and a Cardiothoracic Surgeon?
                </h3>
                <p>
                    Cardiologists who do minimally invasive procedures involving
                    small incisions e.g. pacemaker implantations and catheters
                    e.g. angioplasty, and don’t do any traditional surgery are
                    called interventional cardiologists. The procedures done by
                    interventional cardiologists usually require only local
                    anesthesia, while cardiothoracic surgeons are specialized
                    surgeons who perform surgery in the area of the heart and
                    lungs that require general anesthesia.
                </p>
            </div>
        ),
    },
    {
        id: 10,
        slug: 'clarify-doubts-treatment-procedure',
        title: 'How do I clarify any doubts about my treatment/procedure?',
        category: 'Support',
        excerpt:
            'Your treating doctor will go over details. You can also contact Dr.(Col) Monik Mehta directly for questions or a second opinion...',
        content: (
            <div className="space-y-6">
                <p>
                    Your treating doctor will usually go over your specific
                    procedure or treatment in great detail. You can also contact
                    Dr.(Col) Monik Mehta if you have any further questions or
                    need a second opinion.
                </p>
                <p>
                    To contact or message Dr.(Col) Monik Mehta{' '}
                    <Link to="/contact" className={resourceLinkStyle}>
                        click here
                    </Link>
                    .
                </p>
            </div>
        ),
    },
];

export const PATIENT_EDUCATION_RESOURCES = [
    {
        id: 1,
        title: 'What is coronary artery disease (CAD)?',
        content: [
            'Coronary Artery Disease is a group of conditions that include angina (stable or unstable), myocardial infarction, and possible cardiac arrest. It is also known as ischemic heart disease (IHD), in which the most common symptom is chest pain or discomfort, along with referred pain to the arms, shoulders, neck, back, or jaw.',
            'It also gives a sign of heartburn, which is most commonly misunderstood by acid reflux. The symptoms are associated with physical or mental stress, tachycardia, or bradycardia. Sometimes the symptoms are silent or can appear as heart attacks.',
        ],
    },
    {
        id: 2,
        title: 'What are the common risk factors of CAD?',
        content: [
            'Heart disease is a complex issue that a variety of factors can cause. The important risk factors, include:',
        ],
        list: [
            'High blood pressure: High blood pressure is a major risk factor for heart disease, and women are at an increased risk of developing high blood pressure after menopause.',
            'High cholesterol: High cholesterol levels can increase the risk of heart disease, and women are more likely to have high cholesterol after menopause.',
            'Obesity: Obesity is a major risk factor for heart disease, and women are more likely to be obese than men.',
            'Smoking: Smoking is a major risk factor for heart disease, and indiviuals who smoke are at an increased risk of developing heart disease.',
            'Gender/Age: Risk of CAD increases exponentially with age. Risk begins after 45 years of age in males and 55 years of age in females.',
            'Family history of heart disease: Persons with a family history of heart disease are at an increased risk of developing it themselves.',
            'Physical Inactivity',
        ],
    },
    {
        id: 3,
        title: 'What Dietary measures can you take to reduce the risks?',
        content: [
            'Dietary control with physical activity can give a satisfactory result. You can take preventive measures to cut down on low-density lipids (LDL cholesterol), sugar levels, and blood pressure. We advise you to include whole grains, fibrous foods, fruits, and unsaturated fats in your diet. As much as possible, try to avoid excessive salt and sugar consumption.',
        ],
    },
    {
        id: 4,
        title: 'What should my normal blood pressure be ?',
        content: [
            'Blood pressure numbers of less than 120/80 mm Hg is considered to be within the normal range.Readings more than 130/80 indicate high blood pressure and at this stage lifestyle changes are recommended.However if the values increase beyond 140/90 mm Hg then usually medicines are added to lifestyle modifications.High blood pressure is a “silent ” killer causing various diseases e.g heart attack, stroke, kidney failure , visual loss etc hence it is extremely important to protect yourself from these risks.',
        ],
    },
    {
        id: 5,
        title: 'What is Angioplasty and stenting?',
        content: [
            'The term “angioplasty” means using a balloon to stretch open a narrowed or blocked artery. However, most modern angioplasty procedures also involve inserting a short wire-mesh tube, called a stent, into the artery during the procedure. The stent is left in place permanently to allow blood to flow more freely.For more information click here',
        ],
    },
    {
        id: 6,
        title: 'What are the benefits of a coronary angioplasty?',
        content: [
            'In most cases, the blood flow through the coronary arteries improves after an angioplasty. Many people find their symptoms get significantly better and they’re able to do more than they could before the procedure.',
            'If you’ve had a heart attack, an angioplasty can increase your chances of surviving more than clot-busting medication (thrombolysis). The procedure can also reduce your chances of having another heart attack in the future.',
        ],
    },
    {
        id: 7,
        title: 'What are the complications of a coronary angioplasty?',
        content: [
            'Coronary angioplasty is a relatively safe procedure with few complications. Commonly, one can have minor discomfort or bruising under the skin where the catheter was inserted. More serious complications are less common ( usually less than 1 %) but can include damage to the artery where the sheath was inserted; allergic reaction to the contrast agent used during the procedure; damage to an artery in the heart; excessive bleeding requiring a blood transfusion; heart attack, stroke or death.',
        ],
    },
    {
        id: 8,
        title: 'What is an Electrocardiogram (ECG)?',
        content: [
            'EKG is an essential non-invasive tool to assess the structural or functional anomalies in the heart and the associated blood vessels. It measures electrical activity across the heart and measures the rhythmic pattern.Click here for more information.',
        ],
    },
    {
        id: 9,
        title: 'What is an Echo or Echocardiogram?',
        content: [
            'This is a non-invasive test to look at the heart and blood flow inside it. It is a type of ultrasound scan that uses high-frequency sound waves to create an image on a computer monitor, which is then analyzed by the cardiologist. It is extremely helpful in detecting any structural damage or defect in the heart or its various parts, and it can also study the flow of blood inside the heart chambers.',
        ],
    },
    {
        id: 10,
        title: 'What is Coronary Artery Bypass Graft (CABG)?',
        content: [
            'CABG stands for Coronary Artery Bypass Grafting. It is a type of surgery that is used to treat patients with severe coronary artery disease (CAD) and is also known as “open heart surgery “ or “bypass surgery” in layman’s language.',
            'Plaque buildup narrows or obstructs the coronary arteries, which give blood and oxygen to the heart muscle. This is known as coronary heart disease.If the blockage becomes serious enough to cut off blood flow to the heart, it can cause chest pain or even a heart attack.',
            'For more information click here',
        ],
    },
    {
        id: 11,
        title: 'What is an Electrophysiological Study (EPS) or RFA?',
        content: [
            'An electrophysiological study is a test that measures the electrical activity of the heart and is used to diagnose an arrhythmia, or irregular heart rhythms while Radiofrequency ablation(RFA) is the treatment to control or correct the irregular heartbeat. For more information click here',
        ],
    },
    {
        id: 12,
        title: 'What is Cardiac Rehabilitation?',
        content: [
            'Healthy Hearts provides cardiac rehabilitation generally for patients with a history of severe cardiac events. The focus of the program is majorly on awareness, personal consultation, stress management, lifestyle management, and physical activity management.',
        ],
    },
    {
        id: 13,
        title: 'Who is a Cardiologist?',
        content: [
            'Cardiologists are physicians who treat the heart and its diseases using diagnostics and medication. Unlike cardiac surgeons, they do not perform traditional surgical procedures. Cardiologists who additionally do minimally invasive procedures involving small incisions, e.g., pacemaker implantations and catheters, e.g., angioplasty, are called interventional cardiologists. These procedures are used to diagnose and treat diseases such as heart valve disorders, coronary artery disease, congenital heart disease, endocarditis, and peripheral artery disease.',
        ],
    },
    {
        id: 14,
        title: 'What is the difference between an Interventional Cardiologist and a Cardiothoracic Surgeon?',
        content: [
            'Cardiologists who do minimally invasive procedures involving small incisions e.g. pacemaker implantations and catheters e.g. angioplasty, and don’t do any traditional surgery are called interventional cardiologists. The procedures done by interventional cardiologists usually require only local anesthesia, while cardiothoracic surgeons are specialized surgeons who perform surgery in the area of the heart and lungs that require general anesthesia.',
        ],
    },
    {
        id: 15,
        title: 'How do I clarify any doubts about my treatment/procedure?',
        content: [
            'Your treating doctor will usually go over your specific procedure or treatment in great detail. You can also contact Dr(Col) Monik Mehta if you have any further questions or need a second opinion. To contact or message Dr.(Col) Monik Mehta click here',
        ],
    },
];

export const FAQS_DATA = [
    {
        id: 1,
        question: 'How do I make an appointment?',
        answer: 'Patients are seen by appointment throughout the week. Contact our staff by WhatsApp, mobile, or email so that a convenient time can be fixed for you. Do reach the clinic in time for your appointment with all your old medical records. The staff will make every effort to see you at your scheduled time, but delays may occur in the event of an emergency or due to the delayed completion of a previous consultation.',
    },
    {
        id: 2,
        question: 'What are your hours of operation?',
        answer: '6 -9 pm Monday to Saturday\n11 am – 1 pm, 6- 9 pm Sundays\nThe normal visit duration is 15 minutes.',
    },
    {
        id: 3,
        question: 'What are the modalities of payment?',
        answer: 'Cash,Cards,Paytm,UPI',
    },
    {
        id: 4,
        question: 'How many visits are permitted on one consultation charge?',
        answer: 'Patients are allowed one complimentary visit to be done within 5 days of the initial date of visit.',
    },
    {
        id: 5,
        question:
            'Do I have to carry my old records with me at the time of my clinic visit?',
        answer: 'Though efforts are made to ensure that prescription records of all patients are maintained in the clinic, it is still strongly advised that all patients should keep a personal copy of their medical records safely and bring them whenever they visit the clinic.',
    },
    {
        id: 6,
        question: 'In an emergency what should I do?',
        answer: 'In any emergency, one should go to the nearest health care facility for immediate first aid. Do carry your medical records with you and show them to the emergency duty doctor. Thereafter the clinic should be contacted on our Whatsapp/mobile number for further assistance and guidance.',
    },
    {
        id: 7,
        question:
            'How do I contact the doctor for any non-emergency questions or clarifications?',
        answer: 'You are most welcome to ask any questions or clarification regarding your treatment by email or Whatsapp message. All efforts will be made to give you an early reply but do wait for 24 hours before sending a reminder message.',
    },
];

export const COMMON_CONDITIONS_DATA = [
    { title: 'Angina', slug: 'angina' },
    { title: 'Arrhythmia', slug: 'arrhythmia' },
    { title: 'Atrial Fibrillation', slug: 'atrial-fibrillation' },
    { title: 'Cardiac Arrest', slug: 'cardiac-arrest' },
    { title: 'Cardiac Rehab', slug: 'cardiac-rehab' },
    { title: 'Cardiomyopathy', slug: 'cardiomyopathy' },
    { title: 'Cholesterol', slug: 'cholesterol' },
    { title: 'Congenital Heart Defects', slug: 'congenital-heart-defects' },
    { title: 'Diabetes', slug: 'diabetes' },
    { title: 'Flu Prevention', slug: 'flu-prevention' },
    { title: 'Heart Attack', slug: 'heart-attack' },
    { title: 'Heart Failure', slug: 'heart-failure' },
    { title: 'Heart Murmurs', slug: 'heart-murmurs' },
    {
        title: 'Heart Valve Problems & Disease',
        slug: 'heart-valve-problems-and-disease',
    },
    { title: 'High Blood Pressure', slug: 'high-blood-pressure' },
    { title: 'Infective Endocarditis', slug: 'infective-endocarditis' },
    { title: 'Kawasaki Disease', slug: 'kawasaki-disease' },
    { title: 'Metabolic Syndrome', slug: 'metabolic-syndrome' },
    { title: 'Myocarditis', slug: 'myocarditis' },
    { title: 'Pericarditis', slug: 'pericarditis' },
    { title: 'Peripheral Artery Disease', slug: 'peripheral-artery-disease' },
    { title: 'Sleep Disorders', slug: 'sleep-disorders' },
    { title: 'Stroke', slug: 'stroke' },
    { title: 'Venous Thromboembolism', slug: 'venous-thromboembolism' },
];

export const CHEST_PAIN_RESOURCE = {
    id: 'chest-pain-guide',
    slug: 'understanding-chest-pain',
    title: 'Understanding Chest Pain & Angina',
    subtitle: 'Knowledge & Insights',
    excerpt:
        'Chest pain can range from mild indigestion to life-threatening emergencies. Learn to recognize the causes, symptoms, and when to seek urgent care.',
    metaDescription:
        'Comprehensive guide on chest pain, angina pectoris, coronary artery disease risk factors, symptoms, and interventional treatment options.',

    overview:
        'Chest pain can be a disturbing issue. It can range from mild and harmless to severe and life-threatening, depending on its cause. Mild chest pain can be caused by indigestion, for example. Chest pain known as angina happens when the heart doesn’t receive enough blood flow and oxygen. It is also known as angina pectoris.',

    causes: {
        title: 'What Causes Chest Pain?',
        description:
            'A variety of health problems can cause angina and other chest pain.',
        cardiac: {
            title: 'Cardiac Causes',
            items: [
                'Coronary Artery Disease (CAD): The most common cause of angina. Plaque (cholesterol and calcium deposits) can build up in the heart’s blood vessels (arteries), preventing adequate blood flow and oxygen.',
                'Coronary Artery Spasm: A less common condition where the artery suddenly contracts, temporarily restricting blood flow.',
            ],
        },
        nonCardiac: {
            title: 'Non-Heart Related Causes',
            items: [
                'Lung Problems: Pneumonia, blood clots in the lungs (pulmonary embolism), or a collapsed lung.',
                'Psychological: Panic or anxiety attacks.',
                'Gastrointestinal: Acid reflux conditions such as GERD (gastroesophageal reflux disease) or heartburn; gallbladder or pancreas disease.',
                'Musculoskeletal: Chest muscle strain or rib cage bony injuries.',
            ],
        },
    },

    symptoms: {
        title: 'Recognizing the Symptoms',
        typical: [
            'Chest pain or discomfort that may spread into the arms or the jaw',
            'Shortness of breath or difficulty breathing',
            'Discomfort that is exacerbated during exercise or physical exertion',
        ],
        atypical: [
            'Nausea or vomiting',
            'Light-headedness or fainting',
            'Extreme sweating or cold sweats',
        ],
    },

    riskFactors: {
        title: 'Main Risk Factors',
        items: [
            'High cholesterol',
            'High blood pressure (hypertension)',
            'Smoking or vaping',
            'Obesity or being very overweight',
            'Diabetes or insulin resistance',
            'Congestive heart failure',
            'Family history of coronary artery disease',
        ],
    },

    complications: {
        title: 'Related Complications',
        items: [
            'Kidney Disease: When atherosclerosis affects the renal arteries that lead to your kidneys, it can restrict blood flow and potentially cause kidney failure.',
        ],
    },

    emergencyProtocol: {
        title: 'When to See a Doctor',
        criticalNotes: [
            'Chest pain that lasts longer than a few minutes and doesn’t go away with rest or angina medicines may be due to a heart attack. Call for emergency medical help immediately.',
            'Only drive yourself to the hospital if there is absolutely no other alternative way.',
            'If chest discomfort is a completely new symptom for you, see a healthcare professional immediately to determine the cause and start proper treatment.',
            'If you have known stable angina and your symptoms suddenly get worse, change, or intensify, seek medical help without delay.',
        ],
    },

    treatment: {
        title: 'Treatment & Management Options',
        overview:
            'Angina is not always an emergency and can often be relieved with rest. Medication, lifestyle changes, and advanced procedures can manage symptoms and even help reverse underlying CAD.',
        lifestyle: [
            'Exercise & Activity: Increase daily physical activity. Walking is the best exercise for many individuals. Avoid intensely heavy exercise or grueling physical labor.',
            'Dietary Changes: Include plenty of fresh vegetables, fruits, whole grains, legumes, and lean meats. Avoid high-fat, high-salt, and fried foods. Eat until satisfied, but avoid overeating.',
            'Weight Management: Maintain a healthy weight baseline to reduce cardiovascular strain.',
            'Glycemic Control: Keep blood sugar levels strictly within your normal range if managing diabetes or insulin resistance.',
            'Smoking Cessation: Quit smoking or vaping completely, and avoid secondhand smoke exposure.',
            'Mental Wellness: Practice relaxation and stress reduction methods. Seek professional treatment for underlying depression or anxiety if needed.',
        ],
        clinical: [
            'Conservative Therapy: Optimized medication plans combined with targeted lifestyle modifications to arrest plaque progression.',
            'Interventional Procedures: Highly effective, minimally invasive day-care procedures such as coronary angiography with or without angioplasty and stenting when lifestyle changes are insufficient.',
            'Surgical Options: Advanced invasive surgeries like CABG can be offered to suitable patients presenting with complex multi-vessel blockages.',
        ],
    },
};

export const ANGINA_RESOURCE = {
    id: 'angina-guide',
    slug: 'angina',
    title: 'Angina & Chest Pain',
    subtitle: 'Understanding Health',
    excerpt:
        'Chest pain known as angina happens when the heart doesn’t receive enough blood flow and oxygen. Learn about causes, symptoms, and treatments.',
    metaDescription:
        'Comprehensive guide on Angina pectoris, its causes like CAD, symptoms, risk factors, and modern treatment options.',

    overview:
        'Chest pain can be a disturbing issue. It can be mild and harmless to severe and life-threatening, depending on its cause. Mild chest pain can be caused by indigestion, for example. Chest pain known as angina happens when the heart doesn’t receive enough blood flow and oxygen. It is also known as angina pectoris.',

    causes: {
        title: 'Causes',
        description:
            'A variety of health problems can cause angina and other chest pain. Therefore some chest pain is a symptom of an illness or condition that isn’t an emergency. But you should still seek medical care, since you may have one of these conditions:',
        cardiac: {
            title: 'Cardiac Causes',
            items: [
                'Coronary artery disease (CAD) is the most common cause of angina. Plaque (cholesterol and calcium deposits) can build up in the heart’s blood vessels (arteries). Clogged or blocked arteries prevent the heart from getting enough blood flow and oxygen.',
                'Less commonly, angina is caused by coronary artery spasm, in which the artery suddenly contracts.',
            ],
        },
        nonCardiac: {
            title: 'Non Heart-Related Problems',
            items: [
                'Lung problems such as pneumonia, blood clot in the lungs (pulmonary embolism) or a collapsed lung',
                'Panic or anxiety attack',
                'Acid reflux conditions, such as GERD (gastroesophageal reflux disease) or heartburn',
                'Gallbladder or pancreas disease',
                'Chest muscles or rib cage bony injury',
            ],
        },
    },

    symptoms: {
        title: 'Symptoms',
        typical: [
            'Chest pain spreading into the arms or the jaw',
            'Shortness of breath or difficulty breathing',
            'Discomfort that is exacerbated during exercise or other exertion',
        ],
        atypical: [
            'Nausea or vomiting',
            'Light-headedness or fainting',
            'Extreme sweating or cold sweats',
        ],
    },

    complications: {
        title: 'Kidney Disease Connection',
        items: [
            'When atherosclerosis affects the renal arteries that lead to your kidneys, it can cause kidney failure.',
        ],
    },

    riskFactors: {
        title: 'Risk Factors',
        items: [
            'High cholesterol',
            'High blood pressure (hypertension)',
            'Smoking or vaping',
            'Obesity or being very overweight',
            'Diabetes or insulin resistance',
            'Congestive heart failure',
            'Family history of coronary artery disease',
        ],
    },

    emergencyProtocol: {
        title: 'When to see a doctor',
        criticalNotes: [
            'Chest pain that lasts longer than a few minutes and doesn’t go away with rest or angina medicines may be due to a heart attack. Call for emergency medical help. Only drive yourself to the hospital if there is no other way.',
            'If chest discomfort is a new symptom for you, see a healthcare professional to determine the cause and to get proper treatment.',
            'If you have stable angina and it gets worse or changes, seek medical help immediately.',
        ],
    },

    treatment: {
        title: 'Treatment',
        overview:
            'Angina is not always an emergency and can often be relieved with rest. Medication and lifestyle changes can help manage symptoms and can even reverse underlying CAD.',
        lifestyle: [
            'Exercising or increasing physical activity. Walking is the best exercise for many people. Avoid intense exercise or physical work.',
            'Maintain a healthy weight.',
            'Eat healthier and enjoy your food. Include plenty of fresh vegetables and fruits, whole grains, legumes, and lean meats. Avoid high-fat, high-salt, and fried foods. Eat enough to feel satisfied, but don’t overeat.',
            'Keep blood sugar within your normal range if you have diabetes or insulin resistance.',
            'Quit smoking or don’t start.',
            'Practice relaxation and stress reduction methods. Get treatment for depression or anxiety if needed.',
        ],
        clinical: [
            'If drugs and lifestyle changes are not enough, interventional cardiology procedures such as coronary angiography with or without angioplasty are highly effective, minimally invasive, causing minimal discomfort, and are practically daycare procedures.',
            'Lastly, invasive surgery can also be offered to suitable patients.',
        ],
    },

    conclusion:
        'Understanding chest pain can help you take care of yourself or a loved one. Be sure to consult your cardiologist if you experience chest pain or have risk factors for heart disease. Do contact us for any additional queries.',
};

export const ATRIAL_FIBRILLATION_RESOURCE = {
    id: 'atrial-fibrillation-guide',
    slug: 'atrial-fibrillation',
    title: 'Understanding Atrial Fibrillation (AFib)',
    subtitle: 'Understanding Health',
    excerpt:
        'Atrial fibrillation (AFib) is a common heart condition where the heart beats irregularly and often faster than normal. Learn about risks, symptoms, and treatments.',
    metaDescription:
        'Comprehensive patient guide on Atrial Fibrillation (AFib), covering disorganized electrical signals, stroke risks, ECG diagnosis, and treatment choices.',

    overview:
        'Atrial fibrillation (AFib) is a common heart condition where the heart beats irregularly and often faster than normal. Normally, the heart beats in a steady rhythm, but in AFib, the heart’s electrical signals become disorganized and cause the heart’s upper chambers to quiver instead of contracting effectively.',

    causes: {
        title: 'Causes & Risk Factors',
        description:
            'AFib can be caused by other medical conditions, though it can also occur in people without any related medical conditions. There are several risk factors for developing AFib:',
        items: [
            'High blood pressure (Hypertension)',
            'Heart valve disorders',
            'Coronary artery disease (CAD) and underlying heart disease',
            'Sleep apnea',
            'Obesity or being overweight',
            'Diabetes',
            'Smoking',
            'Excessive alcohol consumption or drug use',
            'Lung disease and pneumonia',
            'Hyperthyroidism (overactive thyroid)',
        ],
    },

    symptoms: {
        title: 'Usual Symptoms',
        description:
            'Atrial fibrillation (AFib) is more common in older individuals but can occur at any age. If you have AFib, you might experience:',
        items: [
            'Rapid heartbeat with irregular rhythm',
            'Fluttering or pounding feeling in your chest (palpitations)',
            'Excessive sweating',
            'Chest pain or pressure',
            'Shortness of breath',
            'Extreme tiredness or fatigue',
            'Dizziness, light-headedness, fainting, or confusion',
        ],
        criticalNote:
            'Keep in mind that some people with atrial fibrillation may not experience any symptoms at all.',
    },

    complications: {
        title: 'Should I be concerned about Atrial Fibrillation?',
        dangerText:
            'In some cases, AFib can lead to blood clots, stroke, and heart failure. This can happen even if the usual symptoms are not felt. This is the real danger!!',
    },

    treatment: {
        title: 'How will my doctor treat my A-Fib?',
        diagnosticText:
            'To manage AFib, doctors will perform an electrocardiogram (ECG), which records the heart’s electrical activity.',
        optionsText:
            'If AFib is confirmed, treatment may involve medications to control heart rate or rhythm, blood thinners to reduce the risk of blood clots and stroke, or procedures such as cardioversion, catheter ablation, or surgery to restore a normal heart rhythm.',
    },

    management: {
        title: 'What can I do to manage my condition?',
        lifestyleText:
            'Living with AFib requires making certain lifestyle changes, such as managing underlying health conditions, maintaining a healthy weight, quitting smoking, avoiding excessive alcohol consumption, and managing stress.',
        comorbidityText:
            'It’s also important to follow your doctor’s recommendations for monitoring and treating AFib and also in case you are suffering from comorbidities such as high BP, diabetes, lung problems, etc. Do seek prompt medical attention if you experience any new or worsening symptoms.',
    },

    conclusion: {
        text: 'Stay healthy and take care! For more information, visit the American Heart Association guide on ',
        linkText: 'Atrial Fibrillation',
        url: 'https://www.heart.org/en/health-topics/atrial-fibrillation',
    },
};

export const CHOLESTEROL_RESOURCE = {
    id: 'cholesterol-guide',
    slug: 'cholesterol',
    title: 'Understanding Cholesterol: Good vs. Bad',
    subtitle: 'Understanding Health',
    excerpt:
        'Learn the difference between HDL and LDL cholesterol and how maintaining optimal levels protects your heart health.',
    metaDescription:
        'A comprehensive guide on cholesterol, explaining the roles of HDL and LDL, lifestyle factors, and how to improve your heart health.',

    overview:
        'Cholesterol is a waxy, fat-like substance found in your body and certain foods, playing a crucial role in building cell membranes and producing hormones. It is transported through the bloodstream by lipoproteins: low-density lipoprotein (LDL) and high-density lipoprotein (HDL).',

    types: {
        title: 'The Difference Between Good and Bad Cholesterol',
        ldl: "LDL cholesterol is referred to as 'bad' cholesterol because it can cause artery plaque to form and raise the risk of heart disease.",
        hdl: "HDL cholesterol is known as 'good' cholesterol because it aids in the removal of LDL cholesterol from the arteries, lowering the risk of heart disease.",
    },

    impact: {
        title: 'The Impact of Good Cholesterol on Heart Health',
        items: [
            {
                heading: 'A Protective Shield',
                text: 'HDL cholesterol scavenges excess LDL cholesterol from arterial walls and transports it to the liver for excretion, preventing arterial plaques and atherosclerosis.',
            },
            {
                heading: 'Anti-Inflammatory Properties',
                text: 'Good cholesterol helps combat inflammation in the blood vessels, contributing to better arterial function and lowering the risk of heart attacks and strokes.',
            },
            {
                heading: 'Antioxidant Abilities',
                text: 'HDL cholesterol neutralizes harmful free radicals, helping to prevent oxidative stress, which is a significant factor in cardiovascular diseases.',
            },
            {
                heading: 'Blood Clot Prevention',
                text: 'It aids in maintaining the balance of clotting factors in the blood, reducing the chances of dangerous clots.',
            },
        ],
    },

    lifestyleFactors: {
        title: 'Factors Affecting Good Cholesterol Levels',
        items: [
            {
                factor: 'Diet and Nutrition',
                details:
                    'Avoid trans/saturated fats. Enrich your diet with unsaturated fats, fruits, vegetables, and whole grains.',
            },
            {
                factor: 'Physical Activity',
                details:
                    'Regular aerobic exercise, swimming, and running can significantly boost HDL levels.',
            },
            {
                factor: 'Weight Management',
                details:
                    'Obesity can lower HDL. Achieving a healthy weight through diet and exercise increases good cholesterol.',
            },
            {
                factor: 'Smoking and Alcohol',
                details:
                    'Smoking and excessive alcohol consumption lower HDL. Quitting or moderating intake helps raise levels.',
            },
        ],
    },

    conclusion: {
        text: 'HDL cholesterol is your heart’s loyal ally. For expert guidance on optimizing your HDL levels and promoting a healthier heart, consult ',
        doctorName: 'Dr. Monik Mehta',
        doctorLinkText: 'the best heart doctor in Gurgaon',
        doctorUrl: '/your-doctor',
    },
};

export const CHD_RESOURCE = {
    id: 'chd-guide',
    slug: 'congenital-heart-defects',
    title: 'Understanding Congenital Heart Disease',
    subtitle: 'Understanding Heart Health',
    excerpt:
        'Discover the various types of congenital heart defects, recognize early symptoms, and learn why prompt medical evaluation is crucial.',
    metaDescription:
        'A comprehensive guide on congenital heart disease, exploring structural defects like ASD and VSD, recognizing symptoms, and finding expert cardiac care.',

    overview:
        'CHD encompasses a diverse set of structural abnormalities in the heart or major blood vessels that occur during foetal development. These defects can affect blood flow through the heart, leading to complications ranging from mild to life-threatening. While some cases remain mild and undetected for years, untreated instances can pose significant health risks.',

    types: {
        title: 'Types of Congenital Heart Defects',
        items: [
            {
                heading: 'Atrial Septal Defect (ASD)',
                text: 'A hole in the wall (septum) separating the upper chambers (atria) of the heart.',
            },
            {
                heading: 'Ventricular Septal Defect (VSD)',
                text: 'A septal defect referring to a perforation in the wall dividing the lower chambers (ventricles) of the heart.',
            },
            {
                heading: 'Tetralogy of Fallot',
                text: 'A combination of four heart defects that affect the structure of the heart and disrupt normal blood flow.',
            },
            {
                heading: 'Patent Ductus Arteriosus (PDA)',
                text: 'Failure of a foetal blood vessel, the ductus arteriosus, to close after birth, leading to abnormal blood flow between the aorta and pulmonary artery.',
            },
        ],
    },

    impact: {
        // Mapped to Symptoms to match your layout's section iteration
        title: 'Recognizing the Symptoms',
        items: [
            {
                heading: 'Cyanosis',
                text: 'A bluish tint in the skin, lips, or fingernails, resulting from inadequate oxygen levels in the blood. This may worsen during physical exertion or crying.',
            },
            {
                heading: 'Difficulty Breathing & Fatigue',
                text: 'Children and adults may encounter ongoing fatigue, weakness, or difficulty keeping pace during physical activities due to diminished blood flow capacity.',
            },
            {
                heading: 'Poor Feeding and Growth',
                text: 'Babies may tire easily during feeding sessions or show little interest, leading to inadequate weight gain and reflecting compromised nutrient and oxygen delivery.',
            },
            {
                heading: 'Heart Murmurs',
                text: 'Abnormal sounds heard during a heartbeat. While not all murmurs indicate CHD, they warrant further evaluation to rule out underlying cardiac abnormalities.',
            },
        ],
    },

    lifestyleFactors: {
        // Mapped to Medical Evaluation to match your layout's item iteration
        title: 'Seeking Medical Evaluation',
        items: [
            {
                factor: 'Diagnostic Tests',
                details:
                    'A thorough physical examination alongside echocardiography, electrocardiography, and chest X-rays can identify structural abnormalities.',
            },
            {
                factor: 'Early Intervention',
                details:
                    'Early detection plays a pivotal role in enhancing outcomes and significantly reducing complications linked to heart defects.',
            },
            {
                factor: 'Ongoing Management',
                details:
                    'Individuals with CHD can access the care and support necessary for a fulfilling life by maintaining vigilance and acting on early signs.',
            },
        ],
    },

    conclusion: {
        text: "Every heartbeat matters. Recognizing the symptoms early on is paramount for effective management. Don't hesitate to seek specialized care and consult ",
        doctorName: 'the best cardiologist in Gurgaon',
        doctorLinkText: 'for expert guidance and treatment',
        doctorUrl: '/',
    },
};

export const DIABETES_HEART_RESOURCE = {
    id: 'diabetes-heart-guide',
    slug: 'diabetes-heart-health',
    title: 'The Link Between Diabetes and Heart Health',
    subtitle: 'Understanding Health',
    excerpt:
        'Individuals with diabetes face a two to four times higher risk of developing heart disease. Learn how managing blood sugar saves cardiovascular function.',
    metaDescription:
        'A comprehensive guide on the relationship between diabetes and heart disease, essential lifestyle adjustments, and expert cardiovascular monitoring tips.',

    overview:
        'The link between diabetes and heart health is undeniable and significant. Individuals with diabetes face a heightened risk, two to four times higher, of developing heart disease compared to those without diabetes. This elevated risk is attributed to the detrimental effects of high blood sugar levels on blood vessels and the nerves that regulate the heart’s functions, potentially culminating in heart disease, stroke, and severe health complications.',

    types: {
        title: 'Understanding the Diabetes-Heart Health Connection',
        items: [
            {
                heading: 'Inflammatory Impact',
                text: 'Elevated blood sugar levels can trigger inflammation within blood vessels. This inflammatory response can lead to the accumulation of plaque, a fatty substance, which can narrow or obstruct arteries, impeding normal blood flow.',
            },
            {
                heading: 'Nerve Damage',
                text: 'Diabetes can inflict damage on the nerves that control the heart’s rhythm and functioning. This may result in irregular heart rhythms and, in severe cases, progressive heart failure.',
            },
            {
                heading: 'Secondary Risk Factors',
                text: 'Diabetes not only directly affects the heart but also increases the likelihood of developing additional high-impact risk factors for heart disease, including high blood pressure and abnormal cholesterol levels.',
            },
        ],
    },

    impact: {
        // Mapped to the Lifestyle Modifications section
        title: 'Lifestyle Modifications to Reduce Heart Disease Risk',
        items: [
            {
                heading: 'Dietary Adjustments & Weight Management',
                text: 'A diabetes-friendly diet prioritises low sugar, saturated fat, and cholesterol intake while emphasising fruits, vegetables, and whole grains. Consistent meal patterns help reliably stabilise blood sugar levels.',
            },
            {
                heading: 'Regular Exercise & Energy Demands',
                text: 'Physical activity plays a pivotal role in blood sugar regulation, enhances insulin sensitivity, and reduces cardiovascular risk. Aim for a minimum of 30 minutes of moderately intense physical activity on most days.',
            },
            {
                heading: 'Stress Management & Lifestyle Habits',
                text: 'Stress can sharply elevate blood sugar levels. Implementing stress-reduction techniques like yoga, meditation, alongside smoking cessation and alcohol moderation, stands as a pivotal step towards enhancing health.',
            },
            {
                heading: 'Medication Adherence & Diagnostics',
                text: 'Medications prescribed to manage diabetes should be taken exactly as directed by healthcare providers without skipping doses. Scheduled medical check-ups and regular blood tests are vital to monitor changes.',
            },
        ],
    },

    lifestyleFactors: {
        // Mapped to the Additional Tips section
        title: 'Additional Tips for Managing Diabetes',
        items: [
            {
                factor: 'Routine Tracking',
                details:
                    'Monitor blood sugar levels regularly and remain consciously aware of your specific clinical target numbers.',
            },
            {
                factor: 'Behavior Consistency',
                details:
                    'Maintain strict consistency in both your diet and exercise routines to avoid sudden, dangerous spikes or crashes.',
            },
            {
                factor: 'Proactive Education',
                details:
                    'Continually educate yourself about diabetes through verified books, structured websites, and reliable support networks.',
            },
            {
                factor: 'Professional Outreach',
                details:
                    'If managing diabetes becomes independently challenging, consult with your doctor or an educator to develop a tailored roadmap.',
            },
        ],
    },

    conclusion: {
        text: 'Nobody dies of diabetes per se, but it is through its negative toll on cardiovascular health that the primary threat exists. In diabetes, always prioritize looking at heart health first. To safeguard your heart and build an effective, professional treatment plan, consult ',
        doctorName: 'the best cardiologist in Gurgaon',
        doctorLinkText:
            'at our dedicated heart specialist hospital for personalized guidance',
        doctorUrl: '/',
    },
};

export const HEART_RESOURCE = {
    id: "diabetes-heart-guide",
    slug: "diabetes-heart-health",
    title: "The Link Between Diabetes and Heart Health",
    subtitle: "Understanding Health",
    excerpt: "Individuals with diabetes face a heightened risk, two to four times higher, of developing heart disease compared to those without diabetes.",
    metaDescription: "The link between diabetes and heart health is undeniable and significant. Learn about the connection and lifestyle modifications.",
    
    overview: "The link between diabetes and heart health is undeniable and significant. Individuals with diabetes face a heightened risk, two to four times higher, of developing heart disease compared to those without diabetes. This elevated risk is attributed to the detrimental effects of high blood sugar levels on blood vessels and the nerves that regulate the heart’s functions. Over time, these effects can culminate in heart disease, stroke, and other severe health complications. The best cardiologist in gurgaon consistently advocates for lifestyle modifications to mitigate diabetes’s impact on various organs, especially the heart.",

    types: {
        title: "Understanding the Diabetes-Heart Health Connection",
        items: [
            {
                heading: "Inflammatory Impact",
                text: "Elevated blood sugar levels can trigger inflammation within blood vessels. This inflammatory response can lead to the accumulation of plaque, a fatty substance, which can narrow or obstruct arteries, impeding blood flow."
            },
            {
                heading: "Nerve Damage",
                text: "Diabetes can inflict damage on the nerves that control the heart’s rhythm and functioning. This may result in irregular heart rhythms and, in severe cases, heart failure."
            },
            {
                heading: "Secondary Risk Factors",
                text: "Diabetes not only directly affects the heart but also increases the likelihood of developing additional risk factors for heart disease, including high blood pressure and high cholesterol levels."
            }
        ]
    },

    impact: {
        title: "Lifestyle Modifications for Diabetics to Reduce Heart Disease Risk",
        items: [
            {
                heading: "Dietary Adjustments",
                text: "A diabetes-friendly diet prioritises low sugar, saturated fat, and cholesterol intake while emphasising fruits, vegetables, and whole grains. Consistent meal and snack patterns help stabilise blood sugar levels."
            },
            {
                heading: "Regular Exercise",
                text: "Physical activity plays a pivotal role in diabetes management. It aids in blood sugar regulation, enhances insulin sensitivity, and reduces the risk of heart disease. Aim for a minimum of 30 minutes of moderately intense physical activity on most days throughout the week."
            },
            {
                heading: "Stress Management",
                text: "Stress has the potential to elevate blood sugar levels. Implementing stress-reduction techniques like yoga, meditation, or spending time in natural settings can help maintain stable blood sugar levels."
            },
            {
                heading: "Smoking Cessation",
                text: "Smoking is a major contributor to heart disease and stroke. Cessation of smoking stands as a pivotal step towards enhancing one’s overall health."
            },
            {
                heading: "Regular Check-Ups",
                text: "Scheduled medical check-ups and blood tests, overseen by a good cardiologist in Gurgaon, are vital to monitor diabetes and detect any complications promptly."
            },
            {
                heading: "Alcohol Moderation",
                text: "Excessive alcohol consumption can lead to high blood pressure and negatively impact cholesterol levels, further increasing the risk of heart disease."
            },
            {
                heading: "Medication Adherence",
                text: "Medications prescribed to manage diabetes should be taken as directed by healthcare providers without skipping doses."
            }
        ]
    },

    lifestyleFactors: {
        title: "Additional Tips for Managing Diabetes",
        items: [
            { factor: "Blood Sugar", details: "Monitor blood sugar levels regularly and be aware of your target levels." },
            { factor: "Medications", details: "Adhere to prescribed medications, whether they are insulin, oral medications, or others." },
            { factor: "Consistency", details: "Maintain consistency in your diet and exercise routines to stabilise blood sugar levels." },
            { factor: "Education", details: "Educate yourself about diabetes through available resources, including books, websites, and support groups." },
            { factor: "Support", details: "Don’t hesitate to seek help. If managing diabetes becomes challenging, consult with your doctor or a diabetes educator to develop a tailored plan." }
        ]
    },

    conclusion: {
        text: "Remember, nobody dies of diabetes per se but it is through its negative on our heart health that the major conern should be there. Therefore in diabetes always first and always look at heart health. Thus it’s crucial to stay connected with a cardiologist to discuss your cardio health, especially if you or a loved one is grappling with diabetes. Professional medical advice can help manage the disease and reduce its impact on overall well-being. Diabetes is manageable, and with proper care, individuals can lead long and healthy lives. For more insights on diabetes and lifestyle disorders, explore our blog page, featuring accurate medical content from experts at the heart specialist hospital in gurgaon. You can also ",
        doctorName: "reach out for a consultation with our experienced diabetes doctors",
        doctorLinkText: "to receive personalized guidance and care. Your journey towards better health and diabetes management begins with informed choices and professional support",
        doctorUrl: "/"
    }
};

export const HEART_ATTACK_RESOURCE = {
    id: "heart-attack-guide",
    slug: "heart-attack",
    title: "The Link Between Diabetes and Heart Health",
    subtitle: "Understanding Health",
    excerpt: "Individuals with diabetes face a heightened risk, two to four times higher, of developing heart disease compared to those without diabetes.",
    metaDescription: "The link between diabetes and heart health is undeniable and significant. Learn about the connection and lifestyle modifications.",
    
    overview: "The link between diabetes and heart health is undeniable and significant. Individuals with diabetes face a heightened risk, two to four times higher, of developing heart disease compared to those without diabetes. This elevated risk is attributed to the detrimental effects of high blood sugar levels on blood vessels and the nerves that regulate the heart’s functions. Over time, these effects can culminate in heart disease, stroke, and other severe health complications. The best cardiologist in gurgaon consistently advocates for lifestyle modifications to mitigate diabetes’s impact on various organs, especially the heart.",

    types: {
        title: "Understanding the Diabetes-Heart Health Connection",
        items: [
            {
                heading: "Inflammatory Impact",
                text: "Elevated blood sugar levels can trigger inflammation within blood vessels. This inflammatory response can lead to the accumulation of plaque, a fatty substance, which can narrow or obstruct arteries, impeding blood flow."
            },
            {
                heading: "Nerve Damage",
                text: "Diabetes can inflict damage on the nerves that control the heart’s rhythm and functioning. This may result in irregular heart rhythms and, in severe cases, heart failure."
            },
            {
                heading: "Secondary Risk Factors",
                text: "Diabetes not only directly affects the heart but also increases the likelihood of developing additional risk factors for heart disease, including high blood pressure and high cholesterol levels."
            }
        ]
    },

    impact: {
        title: "Lifestyle Modifications for Diabetics to Reduce Heart Disease Risk",
        items: [
            {
                heading: "Dietary Adjustments",
                text: "A diabetes-friendly diet prioritises low sugar, saturated fat, and cholesterol intake while emphasising fruits, vegetables, and whole grains. Consistent meal and snack patterns help stabilise blood sugar levels."
            },
            {
                heading: "Regular Exercise",
                text: "Physical activity plays a pivotal role in diabetes management. It aids in blood sugar regulation, enhances insulin sensitivity, and reduces the risk of heart disease. Aim for a minimum of 30 minutes of moderately intense physical activity on most days throughout the week."
            },
            {
                heading: "Stress Management",
                text: "Stress has the potential to elevate blood sugar levels. Implementing stress-reduction techniques like yoga, meditation, or spending time in natural settings can help maintain stable blood sugar levels."
            },
            {
                heading: "Smoking Cessation",
                text: "Smoking is a major contributor to heart disease and stroke. Cessation of smoking stands as a pivotal step towards enhancing one’s overall health."
            },
            {
                heading: "Regular Check-Ups",
                text: "Scheduled medical check-ups and blood tests, overseen by a good cardiologist in Gurgaon, are vital to monitor diabetes and detect any complications promptly."
            },
            {
                heading: "Alcohol Moderation",
                text: "Excessive alcohol consumption can lead to high blood pressure and negatively impact cholesterol levels, further increasing the risk of heart disease."
            },
            {
                heading: "Medication Adherence",
                text: "Medications prescribed to manage diabetes should be taken as directed by healthcare providers without skipping doses."
            }
        ]
    },

    lifestyleFactors: {
        title: "Additional Tips for Managing Diabetes",
        items: [
            { factor: "Blood Sugar", details: "Monitor blood sugar levels regularly and be aware of your target levels." },
            { factor: "Medications", details: "Adhere to prescribed medications, whether they are insulin, oral medications, or others." },
            { factor: "Consistency", details: "Maintain consistency in your diet and exercise routines to stabilise blood sugar levels." },
            { factor: "Education", details: "Educate yourself about diabetes through available resources, including books, websites, and support groups." },
            { factor: "Support", details: "Don’t hesitate to seek help. If managing diabetes becomes challenging, consult with your doctor or a diabetes educator to develop a tailored plan." }
        ]
    },

    conclusion: {
        text: "Remember, nobody dies of diabetes per se but it is through its negative on our heart health that the major conern should be there. Therefore in diabetes always first and always look at heart health. Thus it’s crucial to stay connected with a cardiologist to discuss your cardio health, especially if you or a loved one is grappling with diabetes. Professional medical advice can help manage the disease and reduce its impact on overall well-being. Diabetes is manageable, and with proper care, individuals can lead long and healthy lives. For more insights on diabetes and lifestyle disorders, explore our blog page, featuring accurate medical content from experts at the heart specialist hospital in gurgaon. You can also ",
        doctorName: "reach out for a consultation with our experienced diabetes doctors",
        doctorLinkText: "to receive personalized guidance and care. Your journey towards better health and diabetes management begins with informed choices and professional support",
        doctorUrl: "/"
    }
};

interface Publication {
    citation: string;
    journal: string;
    details: string;
    authors: string;
    doi?: string;
}

export const PUBLICATIONS_DATA: Publication[] = [
    {
        citation: "Letter to the editor.",
        journal: "Journal of Current Cardiology",
        details: "2(3):p 168, Sep–Dec 2024",
        doi: "10.4103/JCC.JCC_39_24",
        authors: "Mehta, Monik."
    },
    {
        citation: "Acetylsalicylic Acid Desensitization in Patients with Acute Coronary Syndrome - A Systematic Review and Meta-Analysis. Manuscript Number: AJC-D-19-00293R1.",
        journal: "American Journal of Cardiology",
        details: "April 09, 2019",
        authors: "Amitabh Chopra, M.B.A; Pablo Díez-Villanueva, MD, PhD; Juan Gabriel Córdoba-Soriano, MD; Joe KT Lee, MBBS, MRCP; Mona Al-Ahmad, MBBS; Victor A Ferraris, MD, PhD; Monik Mehta, MD, DM; Marek L Kowalski, MD, PhD."
    },
    {
        citation: "Practical Approach to Constrictive Pericarditis.",
        journal: "Int Arch Intern Med",
        details: "2:006, 2018",
        authors: "Mehta M."
    },
    {
        citation: "Polymer coating embolism from intravascular medical devices- a clinical literature review.",
        journal: "Cardiovascular Pathology",
        details: "September–October, 2017, Volume 30, Pages 45–54",
        authors: "Amitabh M.Chopra, Monik Mehta, JeanBismuth, MaksimShapiro, MichaelC. Fishbein, AlinaG.Bridges, Harry V.Vinters."
    },
    {
        citation: "Submitral Aneurysm of the Left Ventricle.",
        journal: "MJAFI",
        details: "2004; 60: 399-401",
        authors: "Lt Col V Jetley, Lt Col JS Duggal (Retd), Col Charanjit Singh, Lt Col S.K. Datta, Lt Col JS Sabharwal, Lt Col S Sofat, Lt Col M Mehta"
    },
    {
        citation: "Techniques in Cardiology: PDA Closure in Children.",
        journal: "MJAFI",
        details: "2005; 61: 63-65",
        authors: "Lt Col JS Duggal (Retd), Lt Col V Jetley, Lt Col JK Sharma (Retd), Brig. CharanjitSingh, Lt Col M Mehta, Lt Col JS Sabharwal, Lt Col Sunil Sofat, Lt Col P Bharadwaj"
    },
    {
        citation: "Transcatheter Atrial Septal Defect and Patent DuctusArteriosus Device Closure in Children Weighing 15 Kg and Less.",
        journal: "Indian Heart Journal",
        details: "Sept-Oct, 2003; 55:(5) Article No. 252",
        authors: "JS Dugal, V Jetley, C Singh, M Mehta, S Sofat, P Bhardwaj, A Bahadur"
    },
    {
        citation: "Radiofrequency Ablation: Single-Center Experience in the Armed Forces.",
        journal: "Indian Heart Journal",
        details: "Sept-Oct, 2003; 55:(5) Article No. 216",
        authors: "V Jetley, JS Dugal, C Singh, M Mehta, S Sofat, P Bhardwaj"
    },
    {
        citation: "Pediatric Radiofrequency Ablation: Single-Center Experience in the Armed Forces.",
        journal: "Indian Heart Journal",
        details: "Sept-Oct, 2003; 55:(5) Article No. 217",
        authors: "JS Dugal, V Jetley, C Singh, M Mehta, S Sofat, P Bhardwaj, A Bahadur"
    }
];