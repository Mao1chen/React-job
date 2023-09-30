import { useEffect, useState } from 'react';
import './index.less';
import MapChina from '@/assest/home/map-china.png';
import { history } from 'umi';
import ImgLunBo from '@/components/ImgLunBo';




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
  // const getLIst = async () => {
  //   const res = await getServiceHotList();
  //   setList(res);
  // };
  // useEffect(() => {
  //   getLIst();
  // }, []);

  const [active, setActive] = useState(1);
  const [lunBoImgList, setLunBoImgList] = useState([...lunBoImgList1]);
  const handleSetActive = (type) => {
    setActive(type)
    if (type === 1) {
      setLunBoImgList([...lunBoImgList1]);
    } else {
      setLunBoImgList([...lunBoImgList2]);
    }
  };

  const getLIst = () => {
    let arr: any = [];
    for (let index = 0; index < 13; index++) {
      arr.push(`exhibition${index + 1}.png`);
    }
    return arr;
  };

  return (
    <div className="center">
      <div className="title">国内服务中心</div>
      <div className="channelsbg">
        <img src={MapChina}/>
      </div>
      <div className="channels">
        <div className="channels-button">
          <span className={active === 1 ? 'active' : ''} onClick={() => handleSetActive(1)}>国内服务中心</span>
          <span className={active === 2 ? 'active' : ''} onClick={() => handleSetActive(2)}>国内线下展厅</span>
        </div>
        <div className="channels-img">
          <ImgLunBo>
            {lunBoImgList.map((item,index) => {
              return <div key={"channel_img_"+index}><img className='img' src={item.link}/></div>;
            })}
          </ImgLunBo>
        </div>
      </div>
      <div className="button">
        <span onClick={() => history.push('center')}>了解更多详情</span>
      </div>
    </div>
  );
};
