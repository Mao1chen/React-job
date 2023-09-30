import { useEffect, useState } from 'react';
import './index.less';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GlobalSubtitle from '@/components/GlobalSubtitle';
import { getServiceAddress } from '@/servies/api';
import Card from '@/components/Card';
import { reUrl, hosturl, _isMobile } from '@/servies/api';

export default function IndexPage() {
  const [isShowAll, setIsShowAll] = useState(false);
  const [list, setList] = useState<
    Array<{ address: string; img: string; link: string }>
  >([
    {
      address: '安徽 · 安庆',
      img: '1.png',
      link: 'http://www.aq.18985.com/',
    },
    {
      address: '安徽 · 东至',
      img: '2.png',
      link: 'http://www.dz.18985.com/',
    },
    {
      address: '安徽 · 歙县',
      img: '3.png',
      link: 'http://www.shx.18985.com/',
    },
    {
      address: '福建 · 漳州',
      img: '34.png',
      link: 'http://www.zz.18985.com/',
    },
    {
      address: '贵州 · 贵阳',
      img: '28.png',
      link: 'http://www.gy.18985.com/',
    },
    {
      address: '河北 · 灵寿',
      img: '5.png',
      link: 'http://www.ls.18985.com/',
    },
    {
      id: 2,
      address: '河北 · 张家口',
      img: '6.png',
      link: 'http://www.zjk.18985.com/',
    },
    {
      id: 2,
      address: '河北 · 昌黎',
      img: '29.png',
      link: 'http://www.cl.18985.com/',
    },
    {
      id: 2,
      address: '河北 · 孟村',
      img: '30.png',
      link: 'http://www.mc.18985.com/',
    },
    {
      address: '湖北 · 荆门',
      img: '43.png',
      link: 'http://www.jm.18985.com/',
    },
    {
      address: '湖北 · 襄阳',
      img: '9.png',
      link: 'http://www.xy.18985.com/',
    },
    {
      address: '江苏 · 江阴',
      img: '35.png',
      link: 'http://www.jy.18985.com/',
    },
    {
      address: '江苏 · 盐城',
      img: '11.png',
      link: 'http://www.yc.18985.com/',
    },
    {
      address: '江苏 · 阜宁',
      img: '31.png',
      link: 'http://www.fn.18985.com/',
    },
    {
      address: '江西 · 九江',
      img: '32.png',
      link: 'http://www.jj.18985.com/',
    },
    {
      address: '辽宁 · 沈阳',
      img: '36.png',
      link: 'http://www.sy.18985.com/',
    },
    {
      address: '山东 · 东营',
      img: '13.png',
      link: 'http://www.dy.18985.com/',
    },
    {
      address: '山东 · 菏泽',
      img: '14.png',
      link: null,
    },
    {
      address: '山东 · 济南',
      img: '37.png',
      link: 'http://www.jn.18985.com/',
    },
    {
      address: '山东 · 金乡',
      img: '15.png',
      link: 'http://www.jx.18985.com/',
    },
    {
      address: '山东 · 聊城',
      img: '38.png',
      link: null,
    },
    {
      address: '山东 · 平原',
      img: '39.png',
      link: null,
    },
    {
      address: '山东 · 青岛',
      img: '19.png',
      link: 'http://www.qd.18985.com/',
    },
    {
      address: '山东 · 莘县',
      img: '40.png',
      link: 'http://www.shenxian.18985.com/',
    },
    {
      address: '山东 · 泰安',
      img: '41.png',
      link: 'http://www.ta.18985.com/',
    },
    {
      address: '山东 · 沾化',
      img: '20.png',
      link: 'http://www.zh.18985.com/',
    },
    {
      address: '山东 · 淄博',
      img: 'wu.png',
      link: 'http://www.zb.18985.com/',
    },
    {
      address: '山东 · 邹城',
      img: '21.png',
      link: 'http://www.zc.18985.com/',
    },
    {
      address: '山东 · 邹平',
      img: '33.png',
      link: 'http://www.zp.18985.com/',
    },
    {
      address: '山东 · 峡山',
      img: '42.png',
      link: null,
    },
    {
      address: '陕西 · 合阳',
      img: '23.png',
      link: 'http://www.hy.18985.com/',
    },
    {
      address: '浙江 · 瓯江口',
      img: '25.png',
      link: 'http://www.ojk.18985.com/',
    },
    {
      address: '浙江 · 平湖',
      img: '26.png',
      link: 'http://www.ph.18985.com/',
    },
  ]);

  // const getLIst = async () => {
  // const res = await getServiceAddress();
  //   setList(res);
  // };

  useEffect(() => {
    if (!_isMobile()) {
      window.location.href = reUrl + 'ServiceCenter';
    }
  }, []);
  return (
    <div className="h5-service-center">
      <Nav />
      <div className="bg">
        <GlobalSubtitle title="国内服务中心" type="h5" />
        <div className="description">
          大龙渠道通国内服务中心已落地安徽东至、山东青岛、河北张家口、江苏盐城、贵州贵阳、陕西合阳、湖北襄阳等60多个城市，服务对象是源头正品、源头优品的中国中小微企业，利用互联网和线上线下服务工具，提供专业的渠道赋能服务，把中国的源头工厂和海外下游渠道直接联通，帮助中国制造对接全球采购，实现“足不出户，做天下生意”。
        </div>
        <div className="service-item">
          {list.length &&
            list.map((e, index) => {
              if (isShowAll) {
                return <Card {...e} key={'service_' + index} type="h5" />;
              } else {
                return (
                  index < 10 && (
                    <Card {...e} key={'service_' + index} type="h5" />
                  )
                );
              }
            })}
        </div>
      </div>
      {!isShowAll && (
        <div className="service-more" onClick={() => setIsShowAll(true)}>
          查看更多
        </div>
      )}
      <Footer />
    </div>
  );
}
