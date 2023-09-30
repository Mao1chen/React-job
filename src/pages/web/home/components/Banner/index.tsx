import './index.less';
import LoginModal from '../../../components/LoginModal';
import React, { useState } from 'react';

export default () => {
  const [loginVisible, setLoginVisible] = useState<any>();
  return (
    <div className="banner-container">
      <div className="content">
        <p className="title1">大龙渠道通</p>
        <p className="title2">数字贸易产业发展渠道赋能专业服务商</p>
        <p className="title3">
          孵化1500 万家中国制造企业成为全球品牌商、全球供应商、全球跨境电商
        </p>
        <p className="title4">
          诚邀工厂、贸易商、外贸SOHO，物流商等入驻大龙渠道通开拓全球市场
        </p>
        <p className="title5" onClick={() => setLoginVisible(!loginVisible)}>
          轻松入驻
        </p>
      </div>
      <LoginModal visible={loginVisible} />
    </div>
  );
};
