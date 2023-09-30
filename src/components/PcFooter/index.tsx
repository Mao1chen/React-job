import './index.less';
import GreyLogo from '@/assest/service-center/grey-logo.png';
import ContactUs from '@/assest/service-center/contact-us.png';

export default () => {
  return (
    <div>
      <div>
        <img src={ContactUs} style={{ width: '100%' }} />
      </div>
      <div className="pc_footer">
        <div className="terms">
          <div className="logo">
            <img src={GreyLogo} style={{ width: '164.45px', height: '48px' }} />
          </div>
          <div className="separate"></div>
          <div>
            <div style={{ paddingBottom: 10 }}>
              <span>联系我们</span>
              <span>隐私声明</span>
              <span>法律声明</span>
            </div>
            <div>
              <span>服务条款</span>
              <span>著作权与商标声明</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div> © 2017 重庆大龙网科技有限公司版权所有</div>
          <div>渝ICP备19010902号-2</div>
        </div>
      </div>
    </div>
  );
};
