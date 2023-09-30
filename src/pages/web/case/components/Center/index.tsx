import './index.less';

const list = [
  {
    title: '安徽 · 安庆',
    des: '有图',
    link: 'http://www.aq.18985.com/',
  },
  {
    title: '安徽 · 东至',
    des: '有图',
    link: 'http://www.dz.18985.com/',
  },
  {
    title: '安徽 · 濉溪',
    des: '无',
    link: 'http://www.sx.18985.com/',
  },
  {
    title: '安徽 · 歙县',
    des: '有图',
    link: 'http://www.shx.18985.com/',
  },
  {
    title: '福建 · 漳州',
    des: '无',
    link: 'http://www.zz.18985.com/',
  },
  {
    title: '贵州 · 铜仁',
    des: '有图',
    link: 'http://www.tr.18985.com/',
  },
  {
    title: '河北 · 灵寿',
    des: '有图',
    link: 'http://www.ls.18985.com/',
  },
  {
    title: '河北 · 张家口',
    des: '有图',
    link: 'http://www.zjk.18985.com/',
  },
  {
    title: '黑龙江 · 大庆',
    des: '有图',
    link: 'http://www.dq.18985.com/',
  },
  {
    title: '湖北 · 荆门',
    des: '无',
    link: 'http://www.jm.18985.com/',
  },
  {
    title: '湖北 · 武汉',
    des: '有图',
    link: 'http://www.wh.18985.com/',
  },
  {
    title: '湖北 · 襄阳',
    des: '有图',
    link: 'http://www.xy.18985.com/',
  },
  {
    title: '江苏 · 江阴',
    des: '无',
    link: 'http://www.jy.18985.com/',
  },
  { title: '江苏 · 徐州', des: '有图', link: '无链接' },
  {
    title: '江苏 · 盐城',
    des: '有图',
    link: 'http://www.yc.18985.com/',
  },
  { title: '江西 · 景德镇', des: '有图', link: '无链接' },
  {
    title: '辽宁 · 本溪',
    des: '无',
    link: 'http://www.bx.18985.com/',
  },
  {
    title: '辽宁 · 沈阳',
    des: '无',
    link: 'http://www.sy.18985.com/',
  },
  {
    title: '山东 · 东营',
    des: '有图',
    link: 'http://www.dy.18985.com/',
  },
  { title: '山东 · 菏泽', des: '有图', link: '无链接' },
  {
    title: '山东 · 济南',
    des: '无',
    link: 'http://www.jn.18985.com/',
  },
  {
    title: '山东 · 金乡',
    des: '有图',
    link: 'http://www.jx.18985.com/',
  },
  { title: '山东 · 聊城', des: '有图', link: '无链接' },
  {
    title: '山东 · 临沂',
    des: '有图',
    link: 'http://www.ly.18985.com/',
  },
  { title: '山东 · 平原', des: '有图', link: '无链接' },
  {
    title: '山东 · 栖霞',
    des: '无',
    link: 'http://www.qx.18985.com/',
  },
  {
    title: '山东 · 青岛',
    des: '有图',
    link: 'http://www.qd.18985.com/',
  },
  {
    title: '山东 · 莘县',
    des: '无',
    link: 'http://www.shenxian.18985.com/',
  },
  {
    title: '山东 · 泰安',
    des: '无',
    link: 'http://www.ta.18985.com/',
  },
  {
    title: '山东 · 沾化',
    des: '有图',
    link: 'http://www.zh.18985.com/',
  },
  {
    title: '山东 · 淄博',
    des: '无',
    link: 'http://www.zb.18985.com/',
  },
  {
    title: '山东 · 邹城',
    des: '有图',
    link: 'http://www.zc.18985.com/',
  },
  {
    title: '山西 · 长治',
    des: '有图',
    link: 'http://www.cz.18985.com/',
  },
  {
    title: '陕西 · 合阳',
    des: '有图',
    link: 'http://www.hy.18985.com/',
  },
  {
    title: '四川 · 德阳',
    des: '有图',
    link: '无链接',
  },
  {
    title: '四川 · 青白江',
    des: '无',
    link: 'http://www.qbj.18985.com/',
  },
  {
    title: '浙江 · 瓯江口',
    des: '有图',
    link: 'http://www.ojk.18985.com/',
  },
  {
    title: '浙江 · 平湖',
    des: '有图',
    link: 'http://www.ph.18985.com/',
  },
];

export default () => {
  const goto = (item) => {
    if (item.link !== '无链接') window.location.href = item.link;
  };
  return (
    <div className="web-case-container">
      <p className="title1">国内服务中心</p>
      {/* <img className='divider-img' src={require('@/assest/web/case/web-case-down.jpg')}/> */}
      <p className="title2">
        大龙渠道通是一家为数字贸易产业发展渠道赋能的专业服务器，多场景应用电商
        <br />
        业务系统支撑国内产业带与全球本土化渠道互联互通，一体化大同从入驻、展
        <br />
        示、销售、运输、结算、退税的跨境贸易全链条交易环节。
      </p>

      <div className="img-list">
        {list.map((item) => (
          <div className="item" onClick={() => goto(item)}>
            <img
              src={
                item.des === '有图'
                  ? require(`@/assest/web/case/sucai/${item.title}.png`)
                  : require('@/assest/web/case/sucai/无图片放logo.png')
              }
              className="address-logo"
            />
            <div className="des-row">
              <img src={require('@/assest/web/case/location.png')} />
              <p>{item.title}</p>
            </div>
            <div className="go-img">
              <img src={require('@/assest/web/case/go.png')} />
            </div>
          </div>
        ))}
      </div>
      <img
        className="more-logo"
        src={require('@/assest/web/case/more-logo.png')}
      />
      <p className="title3">更多城市服务中心解锁中</p>
    </div>
  );
};
