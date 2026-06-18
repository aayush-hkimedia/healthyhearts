import HeroImage from '../assets/HomePage/Heroimage.jpg'

export const DOCTOR = {
  name: 'Dr. (Col) Monik Mehta',
  shortName: 'Dr. Monik Mehta',
  title: 'Interventional Cardiologist',
  qualifications: 'MBBS, MD (Medicine), DM (Cardiology), FESC',
  experience: '20+',
  phone: '+91 98732 14382',
  email: 'enquiry@healthyheartsgurgaon.com',
  image: HeroImage,
  imageAbout: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSRWgeY8ox4VZJBKDJt0vN5mCD-o-Vnwk6RBZSRY5SgiOipgdKRXri5zz1K62xCUZaTJXCQE2-viWODIc7-zkq8OP3bqkOL1tqsmB4uGBKBXY74av_lbbq4AGOLrIRj-iHc3gJNGKqNgVMDTpO4S0f1LR-Gh_selBJKNI8uzdqiUmekqwQyFWbF-1m_3jWINl5HzY1ujEn0I5Leb8kpnRsfFGkwd5Dkh7JFV_nBa3fk1WqGXSD1C8N2-51pNPgHFO8o4CYgVJvO',
};

export const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '10k+', label: 'Successful Procedures' },
  { value: '25k+', label: 'Happy Patients' },
  { value: '4.9/5', label: 'Patient Satisfaction' },
];

export const SERVICES = [
  {
    slug: '2d-echo',
    icon: 'activity', 
    title: '2D Echo',
    description: 'This is a non-invasive test to look at the heart and blood flow inside it. It is a type of ultrasound scan that uses high-frequency sound waves to create an image on a computer monitor, which is then analysed by the cardiologist.',
    detailedText: 'It is extremely helpful in detecting any structural damage or defect in the heart or its various parts, and it can also study the flow of blood inside the heart chambers - Echocardiography.',
  },
  {
    slug: 'stress-testing',
    icon: 'heart-pulse', 
    title: 'Stress Testing',
    description: 'This test is similar to an ECG but records the activity of the heart when it is made to work hard. This is usually done by asking the person to walk or run on a treadmill. This is called a TMT (Treadmill test).',
    detailedText: 'For people who have difficulty walking, an injection is given, which will make the heart beat faster, and then an ECG recording is done with simultaneous ultrasound scanning of the heart, i.e., echocardiography. During the period of this test, the person is lying on a bed, and the whole procedure lasts for about half an hour. Stress testing is more informative as compared to a normal ECG, as during stress, silent or mild abnormalities in the heart can be better detected.',
  },
  {
    slug: 'cardiac-catheterization',
    icon: 'syringe', 
    title: 'Cardiac Catheterization',
    description: 'Cardiac catheterization also called cardiac cath, or coronary angiogram is an invasive imaging procedure that allows evaluating your heart function. Today healthy hearts will guide you what Cardiac catheterization uses to:',
    introPoints: [
      'Evaluate the presence of coronary artery disease, valve disease or aortic disease',
      'Evaluate the purpose of the heart muscles',
      'Determine the requirement for further treatment such as an interventional procedure or coronary artery bypass graft, or CABG, surgery'
    ],
    detailedText: 'During cardiac catheterization, a catheter inserts into an artery or vein in your groin, neck, or arm region. This catheter is guided through your blood vessel until it reaches the heart. Once the catheter is in place, one can use it to run diagnostic tests. For example, you can inject a dye through the catheter that allows looking at the vessels and chambers of the heart with the use of a particular X-ray machine.',
    needTitle: 'The need for cardiac catheterization',
    needPoints: [
      'Cardiac catheterization, generally used to diagnose a cardiac problem or to determine a potential cause of chest pain. During the procedure:',
      'The presence of a congenital heart defect (a defect present at birth) can be confirmed',
      'We can check narrowed or blocked blood vessels that could cause chest pain',
      'Look at problems with your heart valves',
      'The amount of oxygen in your heart can be measured (hemodynamic assessment)',
      'The pressure inside your heart can be measured',
      'Perform a tissue biopsy from your heart',
      'The need for further treatment can be evaluated and determined'
    ],
    stagesTitle: 'Stages of the procedure',
    stagesText: 'Position the catheter by a short, hollow, plastic cover called a sheath. Once a catheter is in place, your doctor would proceed with the tests needed to diagnose your condition. Depending on the requirement, your doctor may perform one of the following procedures:',
    procedures: [
      { label: 'Coronary angiogram', text: 'Inject a contrast material or dye through the catheter in this procedure. Use an X-ray machine to watch the dye as it travels through your arteries, heart’s chambers, valves, and vessels to check for blockages or narrowing in your arteries.' },
      { label: 'Heart biopsy', text: 'Takes a sample of heart tissue (biopsy) for further testing. Or perform an additional procedure if you discover a potentially life-threatening during the catheterization. These procedures include:' },
      { label: 'Ablation', text: 'This procedure treats heart arrhythmia (irregular heartbeat). The energy in the form of heat (radio-frequency energy) or cold (nitrous oxide or laser) uses to destroy heart tissue and stop the irregular heart rhythm.' },
      { label: 'Angioplasty', text: 'Inserts a tiny inflatable balloon into the artery in this procedure. Then expand the balloon to widen a narrowed or blocked artery.' },
      { label: 'Balloon Valvuloplasty', text: 'A balloon-tipped catheter is inflated into narrowed heart valves to help open the restricted space.' },
      { label: 'Thrombectomy (blood clot treatment)', text: 'A catheter is used in this procedure to remove blood clots that could potentially dislodge and travel to organs or tissue.' }
    ],
    patientActionsText: 'During the catheterization, patients sometimes need to: Hold breath, Take deep breaths, Cough, Place your arms in various positions. All of this will help your healthcare team get a better image of your heart and arteries.',
    benefitsText: 'Cardiac catheterization can help your doctor to diagnose and treat problems that might otherwise cause severe issues, such as a heart attack or stroke. We can prevent a heart attack and a future stroke; if your doctor can correct any problems discovered during the procedure.',
    risksText: 'The procedure that involves your heart comes with a particular set of risks. Cardiac catheterization is a relatively low chance, and very few people have any problems. The dangers of complications, though rare, are more severe in the case of patients suffering from diabetes or kidney disease, or if they are 75 years or older.',
    risksPoints: [
      'Hypersensitivity to the contrast material or medications used during the procedure',
      'The catheter insertion site may have bleeding, infection, and bruising',
      'Heart attack, stroke, or another severe problem due to blood clots',
      'Damage to the arteries during the traveling of the catheter through your body',
      'Damage to the artery where the catheter presents',
      'Arrhythmias',
      'Contrast material may cause kidney damage',
      'Hyper-tension',
      'Heart tissue can be injured'
    ]
  },
  {
    slug: 'angioplasty',
    icon: 'circle-dot', 
    title: 'Angioplasty',
    description: 'Angioplasty is a minimally invasive treatment method that involves stretching open a narrowed or blocked artery with a balloon. It is done by inserting a deflated balloon into the narrowed vessel and then inflating it to push the plaque out of the artery, widening it, and restoring the vessel to normal size.',
    detailedText: 'The blockage is typically caused by "atherosclerosis," a condition in which a waxy substance or cholesterol plaque begins to build and harden inside the artery walls, causing blood flow to slow or even stop over time. Atherosclerosis can develop in any artery throughout the body. It has the potential to harm the heart, brain, limbs, and kidneys.',
    needTitle: 'Associated Diseases Caused by Atherosclerosis',
    needPoints: [
      'Coronary Artery Disease (CAD): When Atherosclerosis affects the arteries leading to the heart, then it causes CAD which can manifest as angina or heart attack.',
      'Carotid Artery Disease: The carotid arteries lead to your neck and brain. When atherosclerosis affects the carotid arteries, the cholesterol fragments can break off and get stuck in the blood vessels of the brain causing a paralytic stroke.',
      'Kidney Disease: When atherosclerosis affects the renal arteries that lead to your kidneys, it can cause kidney failure.',
      'PAD (Peripheral Artery Disease): PAD is caused by a blockage in the peripheral arteries that run through your legs, stomach, arms, and legs.'
    ],
    stagesTitle: 'Procedure Flow',
    stagesText: 'Your cardiologist will insert a thin tube into your bloodstream, known as a catheter, through your wrist or legs. This procedure is performed under local anesthesia. Following that, using X-ray imaging, the doctor can see and direct a deflated balloon passed over a wire to the narrowed artery in the affected area. The balloon is then repeatedly inflated and deflated until the plaque flattens against the artery walls, allowing the artery to widen and blood flow to resume.'
  },
  {
    slug: 'coronary-angiography',
    icon: 'scan-line',
    title: 'Coronary Angiography',
    description: 'Coronary angiography is an invasive imaging procedure that allows the evaluation of heart function. It usually involves taking X-rays of the heart’s arteries (coronary arteries) using a technique called coronary angiography. The resulting photos are known as coronary angiograms.',
    needTitle: 'The need for Coronary angiography',
    needPoints: [
      'After a heart attack – where the heart’s blood supply is blocked',
      'To help diagnose angina – where pain in the chest is caused by restricted blood supply to the heart',
      'To plan interventional or surgical procedures – such as a coronary angioplasty, where narrowed or blocked blood vessels are widened.'
    ],
    stagesTitle: 'Stages of the procedure',
    stagesPoints: [
      'During the procedure, a long, thin, flexible tube called a catheter is inserted into a blood vessel in your groin or arm.',
      'Using X-ray images as a guide, the tip of the catheter is passed up to the heart and coronary arteries.',
      'A special type of dye called contrast medium is injected through the catheter and X-ray images (angiograms) are taken.',
      'The contrast medium is visible on the angiograms, showing the blood vessels the fluid travels through. This highlights any blood vessels that are narrowed or blocked.',
      'The procedure is usually carried out under local anaesthetic, so you’ll be awake while the procedure is carried out, but the area where the catheter is inserted will be numbed.'
    ],
    detailedText: 'Post-coronary angiography care: You’ll usually be able to leave the hospital on the same day you have a coronary angiography, after a period of rest and observation. Most people feel fine a day or so after having the procedure, although you may feel a bit tired afterward and the wound site is likely to be tender for up to a week. Any bruising may last for up to 2 weeks. You’ll usually be advised to avoid certain activities, such as bathing and lifting heavy objects, for a day or two after the procedure. Do not drive until you’re told it’s safe to do so, which may not be for up to 3 days.',
    benefitsText: 'Coronary angiography is considered to be the best method (Gold standard) of diagnosing coronary heart disease, where a build-up of fatty substances in the coronary arteries affects the heart’s blood supply.',
    risksText: 'Coronary angiography is usually a very safe procedure. However as with all procedures, there are some risks, the incidence of major complications is very low (1% approx.)',
    risksPoints: [
      'Being allergic to the contrast dye – this is uncommon, but you should discuss any allergies you have with your heart specialist (cardiologist) before having the procedure',
      'Bleeding under the skin where the catheter was inserted – this is usually easily managed by pressure dressing.',
      'A very small risk of more serious complications, including damage to the artery in the arm or leg where the catheter was inserted, heart attack, stroke, kidney damage, and, very rarely, death.'
    ]
  },
  {
    slug: 'aicd-implantation',
    icon: 'shield-alert', 
    title: 'AICD Implantation',
    description: 'A rapid heartbeat can occasionally occur, preventing your heart from providing adequate blood to the rest of your body. These potentially lethal rhythms are called ventricular tachycardia or ventricular fibrillation.',
    detailedText: 'These problems usually emerge in patients whose heart muscle weakens as a result of disorders like diabetes, a prior heart attack, and so forth. To address these issues, medicines and/or an AICD device are employed. The AICD (automatic implantable cardioverter-defibrillator) is a small pacemaker-like device that is used to manage these severe or life-threatening arrhythmia.',
    needTitle: 'What is an AICD device?',
    needPoints: [
      'A pacemaker is an implanted device used in patients with dangerously slow heartbeats.',
      'Similar in appearance, the AICD is a battery-operated device that is implanted in the chest to identify and terminate abnormal heartbeats.',
      'It constantly monitors the heartbeat and, if necessary, shocks the heart to restore normal heart rhythm.'
    ],
    stagesTitle: 'The procedure',
    stagesText: 'The implantation of an AICD device is a minor surgical procedure performed under local anaesthesia. This procedure is performed by a cardiologist who has received special training in this area. The device is usually inserted through a small incision under your collarbone. The leads (wires) will be connected to your heart via a vein on one end, and the device on the other. Following that, the incision is closed and a local dressing is applied over the incision. The procedure lasts about an hour or two, and you must stay in the hospital for one to two days to recover.'
  },
  {
    slug: 'tavr',
    icon: 'layers', 
    title: 'TAVR',
    description: 'If you or someone you care for diagnosis with severe aortic stenosis, the process of evaluating treatment options can be devastating. But it is crucial to understand the options available and take action before aortic stenosis becomes life-threatening.',
    detailedText: 'TAVR is a process to remove the narrowed artery valve which fails to open appropriately. The disease is termed as Aortic Valve Stenosis. TAVR uses minimum possible instruments. It can cause chest pain, fainting, fatigue, leg swelling, and shortness of breath. It can also lead to heart failure and sudden cardiac death. TAVR is a minimally invasive option than open-heart surgery for the treatment of severe aortic stenosis. The TAVR procedure (also called transcatheter aortic valve implantation, or TAVI) uses a catheter to implant a new valve within your diseased valve instead of opening the chest to remove and replace the diseased valve. As this treatment is less invasive, it can help to get back to the activities you love faster than open-heart surgery. The transfemoral approach involves introduction of a new valve through a small incision in the leg. When appropriately positioned, Cardiologists remove the catheter, and the new valve takes over, allowing the heart to pump blood more efficiently. Doctors perform the procedure while the heart is beating.',
    needTitle: 'Indications',
    needPoints: [
      'For patients who are considered at intermediate or high risk of complications from aortic valve replacement surgery.',
      'The patients who can’t undergo open-heart surgery. Decision to go with TAVR is only made after proper consultations.'
    ],
    risksText: 'You may need to continue taking certain medications after your procedure is done. The medications prescribed by the surgeon should be taken on time. Regular Doctor visits or follow-up appointments with your doctor are also necessary. Let your surgeon know if you have any new or worsening signs or symptoms. You may be recommended to make healthy lifestyle changes, such as eating a heart-healthy diet, Workout regularly, maintaining a healthy weight and avoiding smoking.TAVR improves the lives of people with aortic stenosis who can’t have surgery or for whom surgery is too risky. In these people, TAVR can reduce the risk of complications. TAVR may also mitigate the signs and symptoms of aortic valve stenosis and improve overall health.',
    risksPoints: [
      'Bleeding & Complications in blood vessels',
      'Slipping out of place or leakage in the replaced valve',
      'Stroke & Arrhythmias',
      'Renal disease & Heart failure',
      'Infection, Death'
    ]
  },
  {
    slug: 'heart-failure-treatment',
    icon: 'heart', 
    title: 'Heart Failure Treatment',
    description: 'This is the condition when your heart cannot pump enough blood to satisfy the requirements of your body and is called heart failure. It does not mean your heart has stopped working, but that it needs some support to help it work better. It usually happens because the heart has become too weak or stiff.',
    detailedText: 'In medical terminology, it is also called "congestive heart failure." It can occur at any age but is most common in older people. It usually develops gradually and tends to get worse over time. However, in some cases, it occurs suddenly with no prior symptoms or a history of heart disease. It cannot usually be cured, but the symptoms can often be controlled for many years.',
    stagesTitle: 'Heart failure treatments options',
    stagesText: 'Heart failure is a critical health condition that needs immediate medical attention. Treatments are centered on symptom management, disease control, and failure prevention. Treatment will usually be needed for life. Three options are used in combination:',
    procedures: [
      { label: 'Medication', text: 'Different types of medicines are given. This includes medicines for widening blood vessels for increased blood flow, lowering or normalizing heartbeat, preventing fluid accumulation, and reducing cholesterol.' },
      { label: 'Angioplasty or Surgery', text: 'If caused by a clogged artery or faulty valve, your cardiologist can repair or replace the valve, insert a bypass graft, or perform an angioplasty.' },
      { label: 'Medical devices', text: 'Pacemakers and ICDs are used to restore rhythm. If a transplant is indicated, a heart pump extends life until a donor is found.' }
    ]
  },
  {
  slug: 'crtd-lbba-implantation',
  icon: 'zap',
  title: 'CRTD/LBBA Implantation',

  description:
    'Heart problems are among the most prevalent health issues that affect people in all corners of the world. Even the youngsters and young adults are also falling prey to health issues. Many are suffering from heart failure that becomes fatal in some cases.',

  detailedText:
    'Factors like inert lifestyle, unhealthy eating habits, and family history are responsible for these prevailing issues. The CRTD or cardiac resynchronization therapy device is a boon to such patients. It helps in saving the life of people with heart failure by defibrillating the heart rate. It monitors the heart rhythm, identifies irregularities, and uses subtle electric simulations to correct them. Heart problems, especially serious issues like heart failure, can be fatal and need only the best to treat them. Dr. (Col.) Monik Mehta is a renowned cardiologist and has nearly 30 years of experience in the field. He is an expert in cardiac resynchronization devices and has an exceptional track-record in treating critical patients successfully. Dr. Mehta treats his patients with compassion and ensures a smooth ride throughout the procedure.',

  needTitle: 'Working of CRTD',
  needPoints: [
    'Just like ICD, CRTD is also used to stop irregular heart rate and reinstate the proper rhythm.',
    'However, this device uses a weaker electric signal for simulation and is designed to work for the lower chamber especially.',
    'CRTD has three leads or wires that are connected to your heart and deliver to defibrillate your heart.',
    'It significantly enhances the blood flow and provides relief from symptoms like shortness of breath, exercise intolerance, and fatigue.',
    'The device effectively reduces the risk of fatal cardiac events.'
  ],

  stagesTitle: 'Implantation Process',
  stagesText:
    'Implanting a CRTD needs a surgery that generally lasts from two to four hours. Your surgeon makes a small incision below your shoulder. Three leads are guided through a major vein below your collarbone and are attached to your heart. The defibrillator unit is implanted in a pocket under the collarbone to which the other ends of the leads are attached. The device is tuned to meet your medical needs and the incision is closed. Your doctor would ask you to stay in the hospital for a couple of days to monitor the healing and operation of the inserted device.'
},
  {
  slug: 'cardiac-rehabilitation',
  icon: 'waves',
  title: 'Cardiac Rehabilitation',
  description:
    'Cardiac rehabilitation is a structured recovery program designed for patients recovering from heart attacks, heart surgery, heart failure, or other cardiovascular diseases. It combines exercise, education, lifestyle modification, and counseling to improve long-term heart health.',

  detailedText:
    'Cardiac rehabilitation is a proven outpatient program led by a multidisciplinary team including doctors, physiotherapists, counselors, and health professionals. It helps patients recover physically and mentally while reducing the risk of future cardiac complications through exercise, education, diet management, and lifestyle changes.',

  introPoints: [
    'Personalized recovery and prevention plan for heart patients',
    'Includes exercise, education, counseling, and lifestyle modification',
    'Helps reduce future heart risks and improves quality of life'
  ],

  needTitle: 'Who can be referred to this program?',
  needPoints: [
    'Patients with acute coronary syndrome such as myocardial infarction or unstable angina',
    'Patients undergoing coronary artery bypass surgery or angioplasty',
    'Patients with newly diagnosed chronic heart failure',
    'Patients with heart transplant or ventricular assist devices',
    'Patients with implanted cardiac defibrillators',
    'Patients undergoing cardiac resynchronization therapy',
    'Patients with exertional angina',
    'Patients after heart valve replacement'
  ],

  stagesTitle: 'Phases of Cardiac Rehabilitation',
  stagesText:
    'Cardiac rehabilitation consists of four progressive phases designed to help patients recover safely after a cardiac event and maintain long-term heart health.',

  procedures: [
    {
      label: 'Phase I: In-Center Patient Period',
      text:
        'Begins immediately after the cardiac event while in the hospital. Doctors and physiotherapists help restore mobility, assess risk factors, and create an individualized recovery plan. Usually lasts 2–5 days.'
    },
    {
      label: 'Phase II: Post-Discharge Period',
      text:
        'Continues after discharge at an outpatient center for 3–6 weeks. Includes supervised exercise, monitoring heart response, and educating patients on safe physical activity and self-monitoring.'
    },
    {
      label: 'Phase III: Education & Psychological Support',
      text:
        'Focuses on structured exercise, strength training, flexibility, aerobic conditioning, stress management, healthy eating, and psychological counseling. Usually lasts around 6 weeks.'
    },
    {
      label: 'Phase IV: Maintenance & Follow-Up',
      text:
        'Long-term independent lifestyle maintenance. Patients continue healthy habits, exercise regularly, attend follow-ups, and manage risk factors to prevent future cardiac problems.'
    }
  ],

  benefitsText:
    'Cardiac rehabilitation improves strength, fitness, and confidence. It helps patients manage weight, reduce stress, adopt heart-healthy habits, lower the risk of future cardiac events, and significantly improve overall quality of life.',

  risksText:
    'Cardiac rehabilitation is generally safe but may not be suitable for everyone. Doctors evaluate each patient before starting the program.',

  risksPoints: [
    'Small risk of cardiovascular complications during exercise',
    'Possible muscle strain or sprains during workouts',
    'Requires medical clearance before participation',
    'Continuous monitoring minimizes most risks'
  ]
}
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
    excerpt: 'An ECG captures the heart\'s electrical activity in real time. Here\'s how to interpret the key waveforms and what abnormalities may indicate.',
    date: 'June 2, 2025',
    readTime: '5 min read',
    category: 'Diagnostics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZ-sfHnW--ASmneAz-owvO-fQfIeol2c_C4ukM_Mw-2NtG1YCD0NxQ4H0omQ1qJdLxOYRqVjloF1BF9-N9eiOmjKo-We7UdGnJkul2IjUPsRhdcx82ojFWYh8uKFYu_3NpLJtzLql1RxnW8mqabzZJoQHS1nKxiP1kJFwxLt6dOxLhIFXTWgFGPBW5F17UKfFNiUAOHrAQdrbPNMgn8dBw5PiyFqJOwpWgHHvAdlOQbRhUgQIltpHXbEHTcQHMnzTFjl3lnYBR1Q6',
  },
  {
    id: 2,
    slug: 'genetics-and-heart-disease',
    title: 'The Genetic Frontier: How Your DNA Shapes Heart Risk',
    excerpt: 'Recent breakthroughs in genomics are reshaping how cardiologists assess hereditary risk and personalise preventive strategies.',
    date: 'May 18, 2025',
    readTime: '7 min read',
    category: 'Research',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLAXR00Ll56OH-RR6uKKz-mOWYb06krGImHjHD-YulCawLyKSYYP0eNhxI-fka_pY4GNLsRk4l_3CJeyMqSPKytRCKfyMUpQiThfUJYW24nPRmLq2zcJb9_-T4RHm8lrTITVj2uAUa2FUqTHursL9azCQCrYLSTah9QHEpzrnCdvEphJH4r1jIzhGrqzXNhCEI4CHjMBx2ZHgI9fJAm-OHsnq_e7j1bEttCiicTVWvNa4zM0IfV_LRseVcZK',
  },
  {
    id: 3,
    slug: 'supplements-for-heart-health',
    title: 'Which Supplements Actually Support Heart Health?',
    excerpt: 'From omega-3s to CoQ10, we review the clinical evidence behind popular cardiac supplements and what the data truly supports.',
    date: 'May 5, 2025',
    readTime: '6 min read',
    category: 'Wellness',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnzuFMN5_RHvocpY2Le2sjPlBJRX4Hpz2IMWXx3NZpSaxT0zeUkRqHWLgmCjzuzOR4VE02uBPbcO6H2UMetUx7Pknd7wz5RiIDs6WmiS3iMZxMaq5AVbwPGXgeNL1p_v8NWmn1GGmOnAgQRM4-6fxOMfTKJWnyEJ8vEt_d3-GdFJ2Odbh7tyJqlEpYfq2_2BDvrb5VM7B-U8QxYg06ljiFTtT_85QpstFLT0mqsNqIh_UwslI0xK4WDRP2dRahPJDsl95h4g0geinQ',
  },
  {
    id: 4,
    slug: 'heart-healthy-nuts',
    title: 'A Handful a Day: The Cardiac Case for Nuts and Seeds',
    excerpt: 'Walnuts, almonds, flaxseeds — discover the mechanisms by which these whole foods reduce LDL and protect arterial health.',
    date: 'April 22, 2025',
    readTime: '4 min read',
    category: 'Nutrition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMQ-y7BBMMKLi5VQbEaqv7tMaWk0ag-l8wUnuZa-HJX0LZutdS3eyqhFufX7oNGG0_AKUsDv-cijAA3XBF53OphOqpabMGQZc_qJHuHtbegImds57LATZjx8ATdB4NxUiUmXjyIrNm_pUeuSsKMS9E4r5W5TA2-q6LucXIGEZ_ZCKCZ2Zb7MRlBOenjIum-ZWov2uYbxaOkw7u9MY_LxTn7Ws2rQr7ZMGTq8maQZ8iv7OKMXtKbFsi_lSj78qXirR82pN92-9aIYjT',
  },
  {
    id: 5,
    slug: 'oil-free-cooking-for-heart',
    title: 'Cooking Without Oil: A Cardiologist\'s Guide to Heart-Smart Meals',
    excerpt: 'Small changes in your kitchen can translate to significant reductions in cardiovascular risk. Here\'s a practical guide to getting started.',
    date: 'April 8, 2025',
    readTime: '5 min read',
    category: 'Lifestyle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWqiEv86ed07A0cMhH6drUeuk1gySN0HKI-TNvcvsHY3R6NBq_SBEMTPYj-DYw0NsoAY_zr40Vr8Ok7UovHrlt0b7-bUarY7lDmEhsuLPgCFbtJj6C5LfPdjxRohCsVFB-CMXas162Rakx08UmJl0RME_ddqnQlFhWzKtAvbt8n-6eNxMz0AoRkSSnKGcvwMzKTzXmG0EchKLLU4jnD1Mp',
  },
  {
    id: 6,
    slug: 'patient-first-cardiology',
    title: 'Patient-First Cardiology: Why Shared Decision-Making Matters',
    excerpt: 'The shift toward collaborative care models has shown measurable improvements in adherence and outcomes — here\'s what it means in practice.',
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
    text: 'Dr. Mehta\'s conservative approach saved me from an unnecessary procedure. He explained every step patiently. My heart health has improved dramatically over 6 months.',
    rating: 5,
  },
  {
    name: 'Priya Kapoor',
    location: 'Delhi',
    text: 'After two other doctors recommended surgery, Dr. Mehta managed my condition with medication and lifestyle changes. Two years later, I\'m thriving without any procedure.',
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
  { label: 'Your Doctor', path: '/your-doctor' }
];

export const CLINIC_SERVICES = [
  'Consultation', 
  'ECG', 
  'Pacemaker Testing & Followup'
];

export const CLINIC_SERVICE = [
  {
    title: 'Consultation',
    slug: 'consultation',
    icon: 'stethoscope',
    description: 'Expert clinical evaluation, second opinions, and personalized cardiac care planning.'
  },
  {
    title: 'ECG',
    slug: 'ecg',
    icon: 'activity',
    description: 'Quick and accurate electrocardiogram testing for immediate heart rhythm analysis.'
  },
  {
    title: 'Pacemaker Testing & Followup',
    slug: 'pacemaker-testing-followup',
    icon: 'zap',
    description: 'Routine check-ups, battery monitoring, and programming to ensure optimal function.'
  }
];

export const HOSPITAL_SERVICES = [
  'Echocardiography', 
  'Stress Testing (TMT)', 
  'Coronary Angiography', 
  'Angioplasty',
  'Cardiac Catheterization', 
  'Heart Failure Treatment', 
  'Pacemaker Surgery', 
  'AICD Implantation', 
  'CRTD Implantation', 
  'TAVR', 
  'Cardiac Ablation', 
  'Cardiac Rehabilitation', 
  'Fractional Flow Reserve'
];

export const RESOURCES = [
  'Patient Education Resources', 
  'Frequently Asked Questions', 
  'Common Heart Questions'
];
