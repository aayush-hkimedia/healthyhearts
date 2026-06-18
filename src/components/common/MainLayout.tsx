import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; 
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      <ScrollToTop />
      
      <Navbar/>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;