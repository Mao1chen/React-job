import ImgLunBo from '../ImgLunBo';
import './index.less';
import { useRef, useState } from 'react';

export default ({ list, style, tabselectCallback, title1, title2 }) => {
  const [active, setActive] = useState(1);

  const carousel = useRef<any>();

  const pre = () => {
    carousel.current.pre();
  };
  const next = () => {
    carousel.current.next();
  };

  const handleSetActive = (type: number) => {
    setActive(type);
    tabselectCallback(type);
  };
  return (
    <div className="web-lunbo-img-container" style={{ ...style }}>
      <img
        onClick={() => pre()}
        className="btn-left"
        src={require('@/assest/web/home/left.png')}
      />
      <div style={{ width: '77.5vw' }}>
        <ImgLunBo onRef={carousel}>
          {list.map((item) => {
            return (
              <div>
                <img className="img" src={item.link} />
              </div>
            );
          })}
        </ImgLunBo>
      </div>
      <img
        onClick={() => next()}
        className="btn-right"
        src={require('@/assest/web/home/right.png')}
      />

      <div className="tab-select">
        <p
          onClick={() => handleSetActive(1)}
          style={active === 1 ? { background: '#DE5D0C' } : {}}
        >
          {title1}
        </p>
        <p
          onClick={() => handleSetActive(2)}
          style={active === 2 ? { background: '#DE5D0C' } : {}}
        >
          {title2}
        </p>
      </div>
    </div>
  );
};
