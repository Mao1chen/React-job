import './index.less';

const list = [
  { num: '10 +', des: '2010 年平台成立至今已过 10 年，高速发展，日趋成熟', link: require('@/assest/web/home/banner/banner1.png') },
  { num: '60 +', des: '服务网点覆盖全国60+个城市', link: require('@/assest/web/home/banner/banner2.png') },
  { num: '27 +', des: '全球超27个海外服务中心', link: require('@/assest/web/home/banner/banner3.png') },
  { num: '1000亿 +', des: '交易流水超1000亿', link: require('@/assest/web/home/banner/banner4.png') },
  { num: '30 +', des: '囊括30+个行业日常消费类目，商品备受海外消费者欢迎', link: require('@/assest/web/home/banner/banner5.png') },
  { num: '70 +', des: '支持全球70+个国家的当地支付方式', link: require('@/assest/web/home/banner/banner6.png') },
];

export default () => {
  return (
    <div className='overview-container'>
      <p className='overview-title'>数字贸易产业发展渠道赋能专业服务商</p>
      <p
        className='overview-des'>大龙渠道通是一家为数字贸易产业发展渠道赋能的专业服务商，多场景应用电商业务系统支撑国内产业带与全球本土化渠道互联互通，一体化打通从入驻、展示、销售、运输、结算、退税的跨境贸易全链条交易环节，为数字贸易产业发展提供专业的渠道赋能服务，帮助中国制造对接全球采购，实现“足不出户，做天下生意”。</p>

      <div className='overview'>
        {list.map(item => (
          <div style={{
            paddingRight: '40px',
            width: '33.33%',
          }}>
            <div className='overview-item'>
              <img src={item.link}/>
              <div className='right'>
                <p className='num'>{item.num}</p>
                <p className='des'>{item.des}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
