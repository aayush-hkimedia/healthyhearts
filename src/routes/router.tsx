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
    {
        path: '/services/aicd-implantation',
        element: <AICDImplantationPage />,
    },
    {
        path: '/services/tavr',
        element: <TavrPage />,
    },
    {
        path: '/services/consultation',
        element: <ConsultationPage/>,
    },
    {
        path: '/services/ecg',
        element: <ECGPage/>,
    },
    {
        path: '/services/heart-failure-treatment',
        element: <HeartFailureTreatmentPage/>,
    },
    {
        path: '/services/crtd-lbba-implantation',
        element: <CRTDImplantationPage/>,
    },
    {
        path: '/services/cardiac-rehabilitation',
        element: <CardiacRehabilitationPage/>
    },
    {
        path: '/services/pacemaker-testing-followup',
        element: <PacemakerTestingFollowupPage/>
    }
];

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/services', element: <Services /> },
            ...serviceRoutes,
        ],
    },
]);
