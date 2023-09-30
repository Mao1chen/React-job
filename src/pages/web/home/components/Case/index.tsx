import LunBo from '@/components/LunBo';
import './index.less';
import { useState } from 'react';
import Exhibition4 from '@/assest/home/overseas/exhibition4.png';

export default () => {
  const [lunBoList] = useState([
    {
      title: '',
      des: '',
      link: require('@/assest/home/overseas/exhibition4.png'),
    },
    {
      title: '',
      des: '',
      link: require('@/assest/home/overseas/exhibition4.png'),
    },
    {
      title: '',
      des: '',
      link: require('@/assest/home/overseas/exhibition4.png'),
    },
    {
      title: '',
      des: '',
      link: require('@/assest/home/overseas/exhibition4.png'),
    },
    {
      title: '',
      des: '',
      link: require('@/assest/home/overseas/exhibition4.png'),
    },
  ]);

  const leftStyle = {
    zIndex: '999',
    position: 'absolute',
    width: '1vw',
    left: '-1vw',
    top: '48%',
  };

  const rightStyle = {
    zIndex: '999',
    position: 'absolute',
    width: '1vw',
    right: '-1vw',
    top: '48%',
  };

  return (
    <div className="case-container">
      <p className="title">服务案例</p>
      <div className="overseas4">
        <LunBo leftStyle={leftStyle} rightStyle={rightStyle}>
          {lunBoList.map((item) => (
            <div className="content">
              <img className="logo" src={Exhibition4} />
              <div className="detail">
                <p className="subtitle">中山市依莎照明科技有限公司</p>
                <p className="dian">...</p>
                <p className="desc">
                  中山市依莎照明灯饰有限公司是一家大型灯饰制造企业。位于国际灯饰城中山市古镇，专业生产工程用灯系列，家用水晶灯系家用水晶灯系家用水晶灯系家用水晶…
                </p>
              </div>
            </div>
          ))}
        </LunBo>
      </div>

      <p
        className="button"
        onClick={() =>
          (window.location.href =
            'http://www.18985.com/Information/SuccessCase')
        }
      >
        了解更多详情
      </p>
    </div>
  );
};
