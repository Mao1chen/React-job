import { useEffect, useState } from 'react';
import './index.less';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Card from './components/Card';
import OverseasChannels from './components/OverseasChannels';
import SettleIn from './components/SettleIn';
import Case from './components/case';
import ProfessionalChannels from './components/ProfessionalChannels';
import Six from './components/Six';
import Center from './components/center';
import LoginModal from '@/components/LoginModal';
import { reUrl, _isMobile } from '@/servies/api';
import React from 'react';

const professionalServiceList = [
  {
    count: '10',
    source: '10.png',
    desc: '2010 年平台成立至今已过 10 年，高速发展，日趋成熟',
  },
  { count: '60', source: '60.png', desc: '服务网点覆盖全国60+个城市' },
  { count: '27', source: '27.png', desc: '全球超27个海外服务中心' },
  { count: '1000亿', source: '1yi.png', desc: '交易流水超1000亿' },
  {
    count: '30',
    source: '30.png',
    desc: '囊括30+个行业日常消费类目，商品备受海外消费者欢迎',
  },
  { count: '70', source: '70.png', desc: '支持全球70+个国家的当地支付方式' },
];

export default function IndexPage() {
  useEffect(() => {
    if (!_isMobile()) {
      window.location.href = reUrl;
    }
  }, []);

  const [loginVisible, setLoginVisible] = useState<any>();
  return (
    <div className="pc-home">
      <Nav />
      <div className="banner">
        <img
          src={require(`@/assest/home/banner.png`)}
          style={{ width: '100%' }}
        />
        <div
          className="btn"
          onClick={() => setLoginVisible(!loginVisible)}
        ></div>
      </div>
      <div className="professional-service">
        <div className="pro-titile">数字贸易产业发展渠道赋能专业服务商</div>
        <div className="description">
          大龙渠道通是一家为数字贸易产业发展渠道赋能的专业服务商，多场景应用电商业务系统支撑国内产业带与全球本土化渠道互联互通，一体化打通从入驻、展示、销售、运输、结算、退税的跨境贸易全链条交易环节，为数字贸易产业发展提供专业的渠道赋能服务，帮助中国制造对接全球采购，实现“足不出户，做天下生意”。
        </div>
        <div className="service-item">
          {professionalServiceList.length &&
            professionalServiceList.map((e: any, index: number) => {
              return <Card {...e} key={'serv_' + index} type="pc" />;
            })}
        </div>
      </div>
      <ProfessionalChannels />
      <OverseasChannels />
      <Center />
      <Case />
      <Six />
      <SettleIn />
      <Footer />
      <LoginModal visible={loginVisible} />
    </div>
  );
}
