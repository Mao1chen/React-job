import { useEffect, useState } from 'react';
import './index.less';
import FiveSteps from '@/assest/home/five-steps.png';
import Footer from '@/pages/h5/home';
import LoginModal from "@/components/LoginModal";
import React from 'react';
export default () => {
  // const getLIst = async () => {
  //   const res = await getServiceHotList();
  //   setList(res);
  // };
  // useEffect(() => {
  //   getLIst();
  // }, []);

  const [loginVisible, setLoginVisible] = useState<any>()
  return (
    <div className="settle-in">
      <div className="title">简单便捷的入驻五步曲</div>
      <img src={FiveSteps} style={{ width: '100%' }} />
      <div className="button" onClick={()=>setLoginVisible(!loginVisible)}>轻松入驻</div>
      <LoginModal visible={loginVisible}/>
    </div>
  );
};
