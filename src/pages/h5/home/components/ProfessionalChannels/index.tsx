import { useEffect, useState } from 'react';
import './index.less';

const service = [
  {
    icon: 'service1.png',
    name: '多场景应用系统服务',
    desc: '大龙渠道通在跨境电商软件和互联网技术领域深耕多年，研发出具有自主知识产权的多场景多业务电商业务系统，将业务流信息数据化、可统计、可备查。',
    title: '多场景多业务模式系统支持',
    source: 'serviceI1.png',
    bgImg: 'service-detail-bg1.png',
    labels: [
      { icon: '1-1.png', label: 'B2B商城系统' },
      { icon: '1-2.png', label: '网红电商服务平台' },
      { icon: '1-3.png', label: '多语言商超系统' },
      { icon: '1-4.png', label: '支付结汇收银系统' },
    ],
  },
  {
    icon: 'service2.png',
    name: '互展互销服务',
    desc: '为供应商产品提供龙工场数十家国内城市线下巡展、20+海外国家会展销售和专属供应链平台线上展示的多样化产品营销展示方案，助力企业快速拓展海内外市场。',
    title: '多样化产品营销展示方案',
    source: 'serviceI2.png',
    bgImg: 'service-detail-bg2.png',
    labels: [
      { icon: '2-1.png', label: '国内网红供应链平台' },
      { icon: '2-2.png', label: '60+国内城市线下巡展' },
      { icon: '2-3.png', label: '海外多语言应用平台' },
      { icon: '2-4.png', label: '20+海外国家会展销售' },
    ],
  },
  {
    icon: 'service3.png',
    name: 'E店秀服务',
    desc: '为企业提供海外E店秀商品展示机会，整合海外商家店铺资源，真实上架橱窗展示，直面海外一线采购商，带来海外市场真实行情，定点突破海外渠道。',
    title: '近距离聚焦海外市场',
    source: 'serviceI3.png',
    bgImg: 'service-detail-bg3.png',
    labels: [
      { icon: '3-1.png', label: '数十万海外真实商家，批发商贸市场应有尽有' },
      { icon: '3-2.png', label: '一线展示试销报告，了解海外市场真实需求' },
      { icon: '3-3.png', label: '实时实地店铺看样，节约传统外贸寄样时间' },
      { icon: '3-4.png', label: '样品扫码手机APP下单，便捷高效成单' },
    ],
  },
  {
    icon: 'service4.png',
    name: '海外渠道拓展服务',
    desc: '为本地企业提供反向集采拼单、组织贸易双向促进会和实地商旅考察等特色海外渠道拓展服务，帮助企业快速铺设海外渠道，开拓国际市场。',
    title: '丰富的营销解决方案支持',
    source: 'serviceI4.png',
    bgImg: 'service-detail-bg4.png',
    labels: [
      { icon: '4-1.png', label: '海外客商实地邀约' },
      { icon: '4-2.png', label: '反向集采抱团出海' },
      { icon: '4-3.png', label: '组团海外市场现场调研' },
      { icon: '4-4.png', label: '特色拼购撮合订单' },
      { icon: '4-5.png', label: '跨境贸易双向促进会' },
    ],
  },
  {
    icon: 'service5.png',
    name: 'FBO物流渠道服务',
    desc: 'FBO服务是大龙网推出的面向全球供应商的跨境电商工具包，为客户提供外贸出口代理，国际物流，质检等服务，解决跨境电商各个环节的难题，让中国供应商的出海之路更加便捷。',
    title: '一站式国际物流及仓储服务',
    source: 'serviceI5.png',
    bgImg: 'service-detail-bg5.png',
    labels: [
      { icon: '5-1.png', label: '进出口代理服务' },
      { icon: '5-2.png', label: '国际物流服务' },
      { icon: '5-3.png', label: '质检服务' },
      { icon: '5-4.png', label: '外贸仓储' },
    ],
  },
  {
    icon: 'service6.png',
    name: '金融服务',
    desc: '为本地供应链中小企业提供支付收单、结汇收款，以及供应链金融的全链条金融服务，解决在全球贸易中遇到的支付结汇、融资贷款等现实问题，降低资金风险，实现企业跨境安全合规结汇，缓解企业融资压力，助力企业快速拓展市场。',
    title: '全链条金融服务',
    source: 'serviceI6.png',
    bgImg: 'service-detail-bg6.png',
    labels: [
      {
        icon: '6-1.png',
        label: '多币种多平台跨境支付收单服务，省时、省力，方便快捷',
      },
      { icon: '6-2.png', label: '安全合规的结汇收款服务，全面降低结汇风险' },
      {
        icon: '6-3.png',
        label: '供应链金融服务，提供多种融资方式，缓解生产、采购的贷款压力',
      },
    ],
  },
];

export default () => {
  const [list, setList] = useState<any[]>([]);

  const getLIst = async () => {
    const data = service.map((e: any, index: number) => {
      let item = e;
      item.isViewDetail = false;
      if (!index) {
        item.isViewDetail = true;
      }
      return item;
    });
    setList(data);
  };

  const setShowDetail = (index: number) => {
    const data = list.map((e, i) => {
      let item = e;
      if (i === index) {
        item.isViewDetail = !item.isViewDetail;
      } else {
        item.isViewDetail = false;
      }
      return item;
    });
    setList(data);
  };

  useEffect(() => {
    getLIst();
  }, []);

  return (
    <div className="professional-channels">
      <div className="service-bg">专业渠道赋能 助力全球贸易</div>
      <div className="channels-service">
        {list.length &&
          list.map((e: any, index: number) => {
            return (
              <div key={"channels_service_"+index}>
                <div className="service-item">
                  <div>
                    <img
                      className="service-item-icon"
                      src={require(`@/assest/home/${e.icon}`)}
                    />
                    <span className="service-item-name">{e.name}</span>
                  </div>
                  <span
                    className="view-detail-btn"
                    onClick={() => setShowDetail(index)}
                  >
                    查看详情
                  </span>
                </div>
                {e.isViewDetail && (
                  <div className="service-detail">
                    <div className="detail-l">
                      <img src={require(`@/assest/home/${e.bgImg}`)} />
                    </div>
                    <div className="detail-r">
                      <div>
                        <img
                          className="service-item-img"
                          src={require(`@/assest/home/${e.source}`)}
                        />
                      </div>
                      <div className="name">
                        {e.name}
                        <div className="border"></div>
                      </div>
                      <div className="desc">{e.desc}</div>
                      <div className="title">{e.title}</div>
                      <div className="labels">
                        {e.labels.map((i: any) => {
                          return (
                            <div>
                              <img
                                className="service-item-img"
                                src={require(`@/assest/home/${i.icon}`)}
                              />
                              {i.label}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
