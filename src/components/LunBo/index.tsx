import { useEffect, useState, useRef } from 'react';
import { Carousel } from 'antd';
import ArrowL from '@/assest/home/arrow-l.png';
import ArrowR from '@/assest/home/arrow-r.png';

import './index.less';


export default ({ children, leftStyle, rightStyle }: { children: any, leftStyle: any, rightStyle: any }) => {
  const carousel = useRef<any>();
  const pre = () => {
    carousel.current.prev();
  };
  const next = () => {
    carousel.current.next();
  };
  return (
    <div className='lunbo-container'>
      <img className='left' style={leftStyle ? { ...leftStyle } : {}} src={ArrowL} onClick={() => pre()}/>
      <Carousel dots={false} ref={carousel}>
        {children}
      </Carousel>
      <img className='right' style={rightStyle ? { ...rightStyle } : {}} src={ArrowR} onClick={() => next()}/>
    </div>
  );
}
