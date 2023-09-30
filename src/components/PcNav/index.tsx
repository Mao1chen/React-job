import './index.less';
import OrangeLogo from '@/assest/service-center/orange-logo.png';
import { Space } from 'antd';

export default () => {
  return (
    <div>
      <div className="pc_nav">
        <div className="logo">
          <img src={OrangeLogo} style={{ width: '222px', height: '100%' }} />
          <span className="desc">足不出户 · 做天下生意</span>
        </div>
        <div className="pc-sign">
          <Space size="large">
            <span className="up">注册</span>
            <span className="in">登陆</span>
          </Space>
        </div>
      </div>
    </div>
  );
};
