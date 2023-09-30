import Footer from '../components/Footer';
import Header from '../components/Header';
import Center from './components/Center';

import './index.less';

export default ()=>{
  return (
    <div className='web-app'>
      <Header/>
      <Center/>
      <Footer/>
    </div>
  );
}
