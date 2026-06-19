import HeroImage from '../assets/HomePage/Heroimage.jpg';
import BestSurgeon from '../assets/AboutPage/BestSurgeon.webp';

export const DOCTOR = {
    name: 'Dr. (Col) Monik Mehta',
    shortName: 'Dr. Monik Mehta',
    title: 'Chief & Senior Consultant Cardiology',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology), FACC',
    experience: '20+',
    phone: '+91 98732 14382',
    email: 'enquiry@healthyheartsgurgaon.com',
    image: HeroImage,
    bioPara1:
        'Dr Monik Mehta is a Senior Interventional Cardiologist of over 25 years experience. He has trained from Mahidol University, Bangkok, Thailand and in Cardiology from AFMC, Pune, India and done fellowship in cardiac electrophysiology from Holy Family Hospital, Mumbai, India.',
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
        'Our mission is to educate and assist Gurgaon residents in making simple lifestyle and eating habits changes that will reduce their risk of developing cardiovascular disease. We also work to aid in the prevention, diagnosis, investigation, and treatment of all types of heart diseases.',
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
        name: 'Main Clinic — Apollo Clinic',
        address: 'A-257, Sector 27, DLF Phase 1, Gurgaon, Haryana – 122002',
        phone: '+91 98732 14382',
        email: 'enquiry@healthyheartsgurgaon.com',
        timings: [
            { days: 'Mon – Sat', hours: '06:00 PM – 09:00 PM' },
            {
                days: 'Sun',
                hours: '10:00 AM – 12:00 PM and 05:00 PM – 08:00 PM',
            },
        ],
        mapLink: 'https://www.google.com/maps/place/Apollo+Clinic+Gurugram+-+Best+Clinic+for+Dental+Services,+Diabetes+consultation,+Orthopedics,+Ultrasound,+X-Ray,Blood+test/@28.4748226,77.0908981,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18d6fec3ddc1:0x19af1c5aea0beee4!8m2!3d28.4748179!4d77.093473!16s%2Fg%2F11q4ds2zv3?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
    },
    {
        type: 'Hospital',
        name: 'Manipal Hospital',
        address: 'Palam Vihar, Gurgaon-122 017, Haryana',
        phone: '+91 98732 14382',
        email: 'enquiry@healthyheartsgurgaon.com',
        timings: [], 
        mapLink: 'https://www.google.com/maps/place/Manipal+Hospital,+Palam+Vihar,+Gurugram/@28.509286,77.0388311,17z/data=!3m1!4b1!4m6!3m5!1s0x390d19e69aaaaaab:0xd40e679700a4c5ab!8m2!3d28.5092813!4d77.041406!16s%2Fg%2F1td1n7_6?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
    },
    {
        type: 'Clinic',
        name: 'Apollo Clinic (Branch)',
        address: 'Road no 48, Block A, DLF Phase 1, Gurgaon - 122002, Haryana',
        phone: '+91 98732 14382',
        email: 'enquiry@healthyheartsgurgaon.com',
        timings: [
            { days: 'Mon – Sat', hours: '06:00 PM – 08:00 PM' },
            {
                days: 'Sun',
                hours: '10:00 AM – 12:00 PM and 05:00 PM – 08:00 PM',
            },
        ],
        mapLink: 'https://maps.google.com',
    },
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
        slug: 'cardiac-rehabilitation',
        icon: 'waves',
        title: 'Cardiac Rehabilitation',
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

export const BLOG_POSTS = [
    {
        id: 1,
        slug: 'understanding-your-ecg',
        title: 'Understanding Your ECG: What Those Lines Really Mean',
        excerpt:
            "An ECG captures the heart's electrical activity in real time. Here's how to interpret the key waveforms and what abnormalities may indicate.",
        date: 'June 2, 2025',
        readTime: '5 min read',
        category: 'Diagnostics',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZ-sfHnW--ASmneAz-owvO-fQfIeol2c_C4ukM_Mw-2NtG1YCD0NxQ4H0omQ1qJdLxOYRqVjloF1BF9-N9eiOmjKo-We7UdGnJkul2IjUPsRhdcx82ojFWYh8uKFYu_3NpLJtzLql1RxnW8mqabzZJoQHS1nKxiP1kJFwxLt6dOxLhIFXTWgFGPBW5F17UKfFNiUAOHrAQdrbPNMgn8dBw5PiyFqJOwpWgHHvAdlOQbRhUgQIltpHXbEHTcQHMnzTFjl3lnYBR1Q6',
    },
    {
        id: 2,
        slug: 'genetics-and-heart-disease',
        title: 'The Genetic Frontier: How Your DNA Shapes Heart Risk',
        excerpt:
            'Recent breakthroughs in genomics are reshaping how cardiologists assess hereditary risk and personalise preventive strategies.',
        date: 'May 18, 2025',
        readTime: '7 min read',
        category: 'Research',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLAXR00Ll56OH-RR6uKKz-mOWYb06krGImHjHD-YulCawLyKSYYP0eNhxI-fka_pY4GNLsRk4l_3CJeyMqSPKytRCKfyMUpQiThfUJYW24nPRmLq2zcJb9_-T4RHm8lrTITVj2uAUa2FUqTHursL9azCQCrYLSTah9QHEpzrnCdvEphJH4r1jIzhGrqzXNhCEI4CHjMBx2ZHgI9fJAm-OHsnq_e7j1bEttCiicTVWvNa4zM0IfV_LRseVcZK',
    },
    {
        id: 3,
        slug: 'supplements-for-heart-health',
        title: 'Which Supplements Actually Support Heart Health?',
        excerpt:
            'From omega-3s to CoQ10, we review the clinical evidence behind popular cardiac supplements and what the data truly supports.',
        date: 'May 5, 2025',
        readTime: '6 min read',
        category: 'Wellness',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnzuFMN5_RHvocpY2Le2sjPlBJRX4Hpz2IMWXx3NZpSaxT0zeUkRqHWLgmCjzuzOR4VE02uBPbcO6H2UMetUx7Pknd7wz5RiIDs6WmiS3iMZxMaq5AVbwPGXgeNL1p_v8NWmn1GGmOnAgQRM4-6fxOMfTKJWnyEJ8vEt_d3-GdFJ2Odbh7tyJqlEpYfq2_2BDvrb5VM7B-U8QxYg06ljiFTtT_85QpstFLT0mqsNqIh_UwslI0xK4WDRP2dRahPJDsl95h4g0geinQ',
    },
    {
        id: 4,
        slug: 'heart-healthy-nuts',
        title: 'A Handful a Day: The Cardiac Case for Nuts and Seeds',
        excerpt:
            'Walnuts, almonds, flaxseeds — discover the mechanisms by which these whole foods reduce LDL and protect arterial health.',
        date: 'April 22, 2025',
        readTime: '4 min read',
        category: 'Nutrition',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMQ-y7BBMMKLi5VQbEaqv7tMaWk0ag-l8wUnuZa-HJX0LZutdS3eyqhFufX7oNGG0_AKUsDv-cijAA3XBF53OphOqpabMGQZc_qJHuHtbegImds57LATZjx8ATdB4NxUiUmXjyIrNm_pUeuSsKMS9E4r5W5TA2-q6LucXIGEZ_ZCKCZ2Zb7MRlBOenjIum-ZWov2uYbxaOkw7u9MY_LxTn7Ws2rQr7ZMGTq8maQZ8iv7OKMXtKbFsi_lSj78qXirR82pN92-9aIYjT',
    },
    {
        id: 5,
        slug: 'oil-free-cooking-for-heart',
        title: "Cooking Without Oil: A Cardiologist's Guide to Heart-Smart Meals",
        excerpt:
            "Small changes in your kitchen can translate to significant reductions in cardiovascular risk. Here's a practical guide to getting started.",
        date: 'April 8, 2025',
        readTime: '5 min read',
        category: 'Lifestyle',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWqiEv86ed07A0cMhH6drUeuk1gySN0HKI-TNvcvsHY3R6NBq_SBEMTPYj-DYw0NsoAY_zr40Vr8Ok7UovHrlt0b7-bUarY7lDmEhsuLPgCFbtJj6C5LfPdjxRohCsVFB-CMXas162Rakx08UmJl0RME_ddqnQlFhWzKtAvbt8n-6eNxMz0AoRkSSnKGcvwMzKTzXmG0EchKLLU4jnD1Mp',
    },
    {
        id: 6,
        slug: 'patient-first-cardiology',
        title: 'Patient-First Cardiology: Why Shared Decision-Making Matters',
        excerpt:
            "The shift toward collaborative care models has shown measurable improvements in adherence and outcomes — here's what it means in practice.",
        date: 'March 25, 2025',
        readTime: '6 min read',
        category: 'Patient Care',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBblSxlTPL5McNcI7rFoY7m7HDbrFYT1VojSSVrQOXV7WkACMNhNYMOFzItZcl10NmEopf4KUsRneL-NinRRd8zNmDTrrbf_Ga0N1yEq9hTkj7NcOCrxsbg1ftzzblmfGF2av9k1mzlNWfOU5jW5wkYVR4NELohoCUYtpM9oepP-b-cZJFISYtaYxChOM5A_6ozqUJFDntO2uM8HyCdjE4GOX-893TW_tUbn4_iO4O7dE6kLbgn3uvkruSw-Eah3ApIAdSOsLocTlG9',
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
    { label: 'Resource', path: '/resource' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
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
        path: '/resource/education',
    },
    {
        label: 'Frequently Asked Questions',
        path: '/resource/faqs',
    },
    {
        label: 'Common Heart Questions',
        path: '/resource/heart-questions',
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
