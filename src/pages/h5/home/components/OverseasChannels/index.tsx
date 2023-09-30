import { useEffect, useState } from 'react';
import './index.less';
import Map from '@/assest/home/map.png';
import ImgLunBo from '@/components/ImgLunBo';
import { history } from 'umi';

const lunBoImgList1 = [
  { link: require('@/assest/web/home/overseas/qianyue/签约图1.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图2.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图3.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图4.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图5.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图6.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图7.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图8.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图9.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图10.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图11.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图12.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图13.png') },
  { link: require('@/assest/web/home/overseas/qianyue/签约图14.png') },
];

const lunBoImgList2 = [
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销1.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销2.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销3.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销4.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销5.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销6.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销7.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销8.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销9.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销10.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销11.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销12.png') },
  { link: require('@/assest/web/home/overseas/huixiao/海外会展会销13.png') },
];

export default () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgList] = useState([
    { left: '4rem', top: '2rem', link: require('@/assest/web/home/overseas/sucai/利雅得.png') },
    { left: '1.2rem', top: '1.5rem', link: require('@/assest/web/home/overseas/sucai/多伦多.png') },
    { left: '3.3rem', top: '1.31rem', link: require('@/assest/web/home/overseas/sucai/华沙.png') },
    { left: '4rem', top: '2rem', link: require('@/assest/web/home/overseas/sucai/迪拜.png') },
    { left: '5.3rem', top: '2.2rem', link: require('@/assest/web/home/overseas/sucai/胡志明市.png') },
    { left: '5.1rem', top: '2.5rem', link: require('@/assest/web/home/overseas/sucai/雅加达.png') },
    { left: '4.4rem', top: '1.2rem', link: require('@/assest/web/home/overseas/sucai/俄罗斯.png') },
  ]);


  const [active, setActive] = useState(1);
  const [lunBoImgList, setLunBoImgList] = useState([...lunBoImgList1]);
  const handleSetActive = (type) => {
    setActive(type);
    if (type === 1) {
      setLunBoImgList([...lunBoImgList1]);
    } else {
      setLunBoImgList([...lunBoImgList2]);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setImgIndex(v => (v + 1) % imgList.length);
    }, 3000);
  }, []);

  return (
    <div className="overseas-channels">
      <div className="title">海外渠道赋能服务</div>
      <div className="channelsbg">
        <img src={Map}/>
        {imgList.map((item, index) => (
          <>
            {
              imgIndex === index ? <div className="overseas" style={{ ...item, position: 'absolute' }}>
                <img src={item.link}/>
              </div> : <></>
            }
          </>
        ))}
      </div>
      <div className="channels">
        <div className="channels-button">
          <span className={active === 1 ? 'active' : ''} onClick={() => handleSetActive(1)}>海外渠道签约展示</span>
          <span className={active === 2 ? 'active' : ''} onClick={() => handleSetActive(2)}>海外会展会销展示</span>
        </div>
        <div className="channels-img">
          <ImgLunBo>
            {lunBoImgList.map(item => {
              return <div><img className='img' src={item.link}/></div>;
            })}
          </ImgLunBo>
        </div>
      </div>
      <div className="button">
        <span onClick={() => history.push('channels')}>了解更多详情</span>
      </div>
    </div>
  );
};
