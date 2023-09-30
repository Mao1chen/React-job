import './index.less';
import GreyLogo from '@/assest/service-center/grey-logo.png';
import ContactUs from '@/assest/service-center/contact-us-H5.png';
import ContactUsModal from '@/components/ContactUsModal';
import React from 'react';

export default () => {
const _year = new Date().getFullYear()

  const [contactUsModal, setContactUsModal] = React.useState<any>()
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img src={ContactUs} style={{ width: '100%' }}/>
        <span style={{
          position: 'absolute',
          bottom: '0.1rem',
          left:'1.8rem',
          width: '2.2rem',
          height: '0.8rem',
          display: 'inline-block',
        }} onClick={()=>setContactUsModal(!contactUsModal)}></span>
      </div>
      <div className="h5_footer">
        <div className="terms">
          <div className="logo">
            <img
              src={GreyLogo}
              style={{ width: '1.95rem', height: '0.58rem' }}
            />
          </div>
          <div className="separate"></div>
          <div>
            <div style={{ paddingBottom: 10 }}>
              <span onClick={() => window.location.href ="http://www.18985.com/home/contact" }>联系我们</span>
              <span onClick={() => window.location.href ="http://www.18985.com/home/yssm" }>隐私声明</span>
              <span style={{ paddingRight: 0 }} onClick={() => window.location.href ="http://www.18985.com/home/flsm" }>法律声明</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span onClick={() => window.location.href ="http://www.18985.com/home/fwtk" }>服务条款</span>
              <span style={{ paddingRight: 0 }} onClick={() => window.location.href ="http://www.18985.com/home/zzq" }>著作权与商标声明</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div style={{ paddingBottom: '0.14rem', paddingTop: '0.28rem' }}>
            渝ICP备19010902号-2
          </div>
          <div> © {_year} 重庆大龙网科技有限公司版权所有</div>
        </div>
      </div>
      <ContactUsModal visible={contactUsModal}/>
    </div>
  );
};
