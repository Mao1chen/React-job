import { Carousel } from 'antd';

import './index.less';
import { useImperativeHandle, useRef } from 'react';

export default ({children, onRef}) => {

  useImperativeHandle(onRef, () => ({
    pre: () => {
      pre();
    },
    next: () => {
      next();
    }
  }));

  const carousel = useRef<any>();
  const pre = () => {
    carousel.current.prev();
  };
  const next = () => {
    carousel.current.next();
  };
  return (<Carousel ref={carousel} autoplay dots={false} arrows={true} variableWidth  >
    {children}
  </Carousel>);
}
