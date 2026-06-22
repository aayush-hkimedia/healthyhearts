import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/common/MainLayout';
import Services from '../components/homepage/Services';
import HomePage from '../pages/HomePage';
import EchocardiographyPage from '../pages/HomePage/Services/EchocardiographyPage';
import StressTestingPage from '../pages/HomePage/Services/StressTestingPage';
import CardiacCatheterizationPage from '../pages/HomePage/Services/CardiacCatheterizationPage';
import AngioplastyPage from '../pages/HomePage/Services/AngioplastyPage';
import CoronaryAngiographyPage from '../pages/HomePage/Services/CoronaryAngiographyPage';
import AICDImplantationPage from '../pages/HomePage/Services/AicdImplantationPage';
import TavrPage from '../pages/HomePage/Services/Tavr';
import ConsultationPage from '../pages/HomePage/Services/ConsultationPage';
import HeartFailureTreatmentPage from '../pages/HomePage/Services/HeartFailureTreatment';
import CRTDImplantationPage from '../pages/HomePage/Services/CrtdImplantationPage';
import CardiacRehabilitationPage from '../pages/HomePage/Services/CardiacRehabiliation';
import ECGPage from '../pages/HomePage/Services/EcgPage';
import PacemakerTestingFollowupPage from '../pages/HomePage/Services/PaceMakerCare';
import YourDoctorPage from '../pages/YourDoctorPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import BlogDetails from '../components/blogs/BlogDetails';
import ResourcesPage from '../pages/ResourcePage';
import PatientEducationResourcesPage from '../pages/Resources/PatientEducationResourcesPage';
import FrequentlyAskedQuestionsPage from '../pages/Resources/FrequentlyAskedQuestionsPage';
import CommonHeartConditionsPage from '../pages/Resources/CommonHeartConditions';
import ConsultationForHeart from '../pages/HomePage/Services/ConsultationForHeart';
import AnginaPage from '../pages/Resources/CommonHeartConditions/AnginaPage';
import AtrialFibrillationPage from '../pages/Resources/CommonHeartConditions/AtrialFibrillationPage';
import CholesterolPage from '../pages/Resources/CommonHeartConditions/CholesterolPage';
import CongenitalHeartDefectsPage from '../pages/Resources/CommonHeartConditions/CongenitalHeartDefects';
import DiabetesPage from '../pages/Resources/CommonHeartConditions/Diabetes';
import HeartAttackPage from '../pages/Resources/CommonHeartConditions/HeartAttackPage';

const serviceRoutes = [
    { path: '/services/2d-echo', element: <EchocardiographyPage /> },
    { path: '/services/stress-testing', element: <StressTestingPage /> },
    {
        path: '/services/cardiac-catheterization',
        element: <CardiacCatheterizationPage />,
    },
    { path: '/services/angioplasty', element: <AngioplastyPage /> },
    {
        path: '/services/coronary-angiography',
        element: <CoronaryAngiographyPage />,
    },
    { path: '/services/aicd-implantation', element: <AICDImplantationPage /> },
    { path: '/services/tavr', element: <TavrPage /> },
    { path: '/services/consultation', element: <ConsultationPage /> },
    { path: '/services/ecg', element: <ECGPage /> },
    {
        path: '/services/heart-failure-treatment',
        element: <HeartFailureTreatmentPage />,
    },
    {
        path: '/services/crtd-lbba-implantation',
        element: <CRTDImplantationPage />,
    },
    {
        path: '/services/cardiac-rehabilitation',
        element: <CardiacRehabilitationPage />,
    },
    {
        path: '/services/pacemaker-testing-followup',
        element: <PacemakerTestingFollowupPage />,
    },
    {
        path: '/services/consultation-for-heart',
        element: <ConsultationForHeart />,
    },
];

const resourcesRoutes = [
    {
        path: '/resources/patient-education-resources',
        element: <PatientEducationResourcesPage />,
    },
    {
        path: '/resources/frequently-asked-questions',
        element: <FrequentlyAskedQuestionsPage />,
    },
    {
        path: '/resources/common-heart-conditions',
        element: <CommonHeartConditionsPage />,
    },
];

const conditionRoutes = [
    // { path: '/resource/understanding-chest-pain', element: <ChestPainPage /> },
    { path: '/resource/angina', element: <AnginaPage /> },
    // { path: '/resource/arrhythmia', element: <ArrhythmiaPage /> },
    {
        path: '/resource/atrial-fibrillation',
        element: <AtrialFibrillationPage />,
    },
    // { path: '/resource/cardiac-arrest', element: <CardiacArrestPage /> },
    // { path: '/resource/cardiac-rehab', element: <CardiacRehabPage /> },
    // { path: '/resource/cardiomyopathy', element: <CardiomyopathyPage /> },
    { path: '/resource/cholesterol', element: <CholesterolPage /> },
    {
        path: '/resource/congenital-heart-defects',
        element: <CongenitalHeartDefectsPage />,
    },
    { path: '/resource/diabetes', element: <DiabetesPage /> },
    // { path: '/resource/flu-prevention', element: <FluPreventionPage /> },
    { path: '/resource/heart-attack', element: <HeartAttackPage /> },
    // { path: '/resource/heart-failure', element: <HeartFailurePage /> },
    // { path: '/resource/heart-murmurs', element: <HeartMurmursPage /> },
    // { path: '/resource/heart-valve-problems-and-disease', element: <HeartValveDiseasePage /> },
    // { path: '/resource/high-blood-pressure', element: <HighBloodPressurePage /> },
    // { path: '/resource/infective-endocarditis', element: <InfectiveEndocarditisPage /> },
    // { path: '/resource/kawasaki-disease', element: <KawasakiDiseasePage /> },
    // { path: '/resource/metabolic-syndrome', element: <MetabolicSyndromePage /> },
    // { path: '/resource/myocarditis', element: <MyocarditisPage /> },
    // { path: '/resource/pericarditis', element: <PericarditisPage /> },
    // { path: '/resource/peripheral-artery-disease', element: <PeripheralArteryDiseasePage /> },
    // { path: '/resource/sleep-disorders', element: <SleepDisordersPage /> },
    // { path: '/resource/stroke', element: <StrokePage /> },
    // { path: '/resource/venous-thromboembolism', element: <VenousThromboembolismPage /> },
];

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/services', element: <Services /> },
            ...serviceRoutes,
            { path: '/your-doctor', element: <YourDoctorPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/blog', element: <BlogPage /> },
            { path: '/blog/:slug', element: <BlogDetails /> },
            { path: '/resources', element: <ResourcesPage /> },
            ...resourcesRoutes,
            ...conditionRoutes,
        ],
    },
]);
