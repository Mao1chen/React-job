import OrangeLogo from '@/assest/service-center/orange-logo.png';
import { history } from '@@/core/history';
import React, { useState } from 'react';
import LoginModal from '../LoginModal';

import './index.less';


export default () => {
  const [loginVisible, setLoginVisible] = useState<any>();
  return (
    <>
      <div className='header-container'>
        <div className='left'>
          <img className='header-logo' src={OrangeLogo} onClick={() => history.push('/')}/>
          <p className='sub-title'>足不出户 · 做天下生意</p>
        </div>

        <div className='btn-wrap'>
          <p className='btn register' onClick={() => setLoginVisible(!loginVisible)}>注册</p>
          <p className='btn login' onClick={() => setLoginVisible(!loginVisible)}>登陆</p>
        </div>
      </div>
      <div className='neck-container'>
        <p>首页</p>
        <p>服务产品</p>
        <p>服务案例</p>
        <p>全球渠道</p>
        <p>国内服务中心</p>
      </div>
      <LoginModal visible={loginVisible}/>
    </>
  );
}
