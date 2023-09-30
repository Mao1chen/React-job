import './index.less';
import Footer from '@/pages/web/home';
import { useState } from 'react';
import ContactUsModal from '../ContactUsModal';

export default () => {
  const [loginVisible, setLoginVisible] = useState<any>();

  return (
    <div className='footer-container'>
      <div className='footer1'>
        <div className='left'>
          <img src={require('@/assest/web/footer/footer-img.jpg')}/>
          <p className='des'>
            诚邀外贸SOHO，贸易商、物流商<br/>
            让您的跨境生意更高效，现在入驻即享合作奖励
          </p>
        </div>
        <p className='btn' onClick={()=>setLoginVisible(!loginVisible)}>立即联系我们</p>
      </div>
      <div className='footer2'>
        <div className='row1'>
          <img src={require('@/assest/web/footer/logo.jpg')}/>
          <div className='splider'></div>
          <div className='btn'>
            <p>联系我们</p>
            <p>隐私声名</p>
            <p>法律声名</p>
            <p>服务条款</p>
            <p>著作权与商标声名</p>
          </div>
        </div>
        <div className='row2'>
          <p>© 2017 重庆大龙网科技有限公司版权所有</p>
          <p>渝ICP备19010902号-2</p>
        </div>
      </div>
      <ContactUsModal visible={loginVisible}/>
    </div>
  );
}
