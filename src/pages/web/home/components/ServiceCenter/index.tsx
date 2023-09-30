import WebImgLunBo from '@/components/WebImgLunBo';
import { useState } from 'react';
import { history } from 'umi';
import './index.less';

const lunBoImgList1 = [
  { link: require('@/assest/web/home/center/center/国内服务中心-1.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-2.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-3.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-4.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-5.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-6.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-7.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-8.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-9.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-10.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-11.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-12.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-13.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-14.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-15.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-16.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-17.png') },
  { link: require('@/assest/web/home/center/center/国内服务中心-18.png') },
];

const lunBoImgList2 = [
  { link: require('@/assest/web/home/center/zhanting/1.png') },
  { link: require('@/assest/web/home/center/zhanting/2.png') },
  { link: require('@/assest/web/home/center/zhanting/3.png') },
  { link: require('@/assest/web/home/center/zhanting/4.png') },
  { link: require('@/assest/web/home/center/zhanting/5.png') },
  { link: require('@/assest/web/home/center/zhanting/6.png') },
  { link: require('@/assest/web/home/center/zhanting/7.png') },
  { link: require('@/assest/web/home/center/zhanting/8.png') },
  { link: require('@/assest/web/home/center/zhanting/9.png') },
  { link: require('@/assest/web/home/center/zhanting/10.png') },
  { link: require('@/assest/web/home/center/zhanting/11.png') },
];
export default () => {
  const [lunBoImgList, setLunBoImgList] = useState(lunBoImgList1);
  const handleSetActive = (type: number) => {
    if (type === 1) {
      setLunBoImgList([...lunBoImgList1]);
    } else {
      setLunBoImgList([...lunBoImgList2]);
    }
  };

  return (
    <div className="service-center-container">
      <p className="title">国内服务中心</p>
      <img
        className="china-map"
        src={require('@/assest/web/home/overseas/map-china.png')}
      />
      <WebImgLunBo
        list={lunBoImgList}
        style={{ background: 'rgba(0, 0, 0, 0.24)' }}
        tabselectCallback={handleSetActive}
        title1={'国内服务中心'}
        title2={'国内线下展厅'}
      />

      <p className="button" onClick={() => history.push('web/case')}>
        了解更多详情
      </p>
    </div>
  );
};
