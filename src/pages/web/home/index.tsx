import Header from '@/pages/web/components/header';
import ContactUsModal from '../components/ContactUsModal';
import Footer from '../components/Footer';
import Advantage from './components/Advantage';
import Banner from './components/Banner';
import Case from './components/Case';
import Join from './components/Join';
import OverseasChannel from './components/OverseasChannel';
import Overview from './components/Overview';
import ProfessionalChannel from './components/ProfessionalChannel';
import ServiceCenter from './components/ServiceCenter';

import './index.less';

export default () => {
  return (
    <div className="web-app">
      <Header />
      <Banner />
      <Overview />
      <ProfessionalChannel />
      <OverseasChannel />
      <ServiceCenter />
      <Case />
      <Advantage />
      <Join />
      <Footer />
    </div>
  );
};
