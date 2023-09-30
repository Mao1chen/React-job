import './index.less';
import LoginModal from '../../../components/LoginModal';
import React, { useState } from 'react';

export default () => {
  const [loginVisible, setLoginVisible] = useState<any>();
  return (
    <div className="join-container">
      <p>简单便捷的入驻五步曲</p>
      <img src={require('@/assest/web/home/join/back.png')} />
      <div onClick={() => setLoginVisible(!loginVisible)}>轻松入驻</div>
      <LoginModal visible={loginVisible} />
    </div>
  );
};
