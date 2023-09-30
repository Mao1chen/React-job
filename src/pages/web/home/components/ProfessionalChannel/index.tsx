import './index.less';
import { useState } from 'react';

const tabList = [
  {
    tabName: '多场景应用系统服务',
    link: require('@/assest/web/home/professional-channel/tab1.png'),
    linkdef: require('@/assest/web/home/professional-channel/tab1-def.png'),
    detailImg: require('@/assest/web/home/professional-channel/detail1/img.png'),
    title2:
      '大龙渠道通在跨境电商软件和互联网技术领域深耕多年，研发出具有自主知识产权的多场景多业务电商业务系统，将业务流信息数据化、可统计、可备查。',
    title3: '多场景多业务模式系统支持',
    logoList: [
      {
        des: 'B2B商城系统',
        logo: require('@/assest/web/home/professional-channel/detail1/logo1.png'),
      },
      {
        des: '网红电商服务平台',
        logo: require('@/assest/web/home/professional-channel/detail1/logo2.png'),
      },
      {
        des: '网红电商服务平台',
        logo: require('@/assest/web/home/professional-channel/detail1/logo3.png'),
      },
      {
        des: '支付结汇收银系统',
        logo: require('@/assest/web/home/professional-channel/detail1/logo4.png'),
      },
    ],
  },
  {
    tabName: '互展互销服务',
    link: require('@/assest/web/home/professional-channel/tab2.png'),
    linkdef: require('@/assest/web/home/professional-channel/tab2-def.png'),
    detailImg: require('@/assest/web/home/professional-channel/detail2/img.png'),
    title2:
      '为供应商产品提供龙工场数十家国内城市线下巡展、20+海外国家会展销售和专属供应链平台线上展示的多样化产品营销展示方案，助力企业快速拓展海内外市场。',
    title3: '多样化产品营销展示方案',
    logoList: [
      {
        des: '国内网红供应链平台',
        logo: require('@/assest/web/home/professional-channel/detail2/logo1.png'),
      },
      {
        des: '60+国内城市线下巡展',
        logo: require('@/assest/web/home/professional-channel/detail2/logo2.png'),
      },
      {
        des: '海外多语言应用平台',
        logo: require('@/assest/web/home/professional-channel/detail2/logo3.png'),
      },
      {
        des: '20+海外国家会展销售',
        logo: require('@/assest/web/home/professional-channel/detail2/logo4.png'),
      },
    ],
  },
  {
    tabName: 'E店秀服务',
    link: require('@/assest/web/home/professional-channel/tab3.png'),
    linkdef: require('@/assest/web/home/professional-channel/tab3-def.png'),
    detailImg: require('@/assest/web/home/professional-channel/detail3/img.png'),
    title2:
      '为企业提供海外E店秀商品展示机会，整合海外商家店铺资源，真实上架橱窗展示，直面海外一线采购商，带来海外市场真实行情，定点突破海外渠道。',
    title3: '近距离聚焦海外市场',
    logoList: [
      {
        des: '数十万海外真实商家，批发商贸市场应有尽有',
        logo: require('@/assest/web/home/professional-channel/detail3/logo1.png'),
      },
      {
        des: '一线展示试销报告，了解海外市场真实需求',
        logo: require('@/assest/web/home/professional-channel/detail3/logo2.png'),
      },
      {
        des: '实时实地店铺看样，节约传统外贸寄样时间',
        logo: require('@/assest/web/home/professional-channel/detail3/logo3.png'),
      },
      {
        des: '样品扫码手机APP下单，便捷高效成单',
        logo: require('@/assest/web/home/professional-channel/detail3/logo4.png'),
      },
    ],
  },
  {
    tabName: '海外渠道拓展服务',
    link: require('@/assest/web/home/professional-channel/tab4.png'),
    linkdef: require('@/assest/web/home/professional-channel/tab4-def.png'),
    detailImg: require('@/assest/web/home/professional-channel/detail4/img.png'),
    title2:
      '为本地企业提供反向集采拼单、组织贸易双向促进会和实地商旅考察等特色海外渠道拓展服务，帮助企业快速铺设海外渠道，开拓国际市场。',
    title3: '丰富的营销解决方案支持',
    logoList: [
      {
        des: '海外客商实地邀约',
        logo: require('@/assest/web/home/professional-channel/detail4/logo1.png'),
      },
      {
        des: '反向集采抱团出海',
        logo: require('@/assest/web/home/professional-channel/detail4/logo2.png'),
      },
      {
        des: '组团海外市场现场调研',
        logo: require('@/assest/web/home/professional-channel/detail4/logo3.png'),
      },
      {
        des: '特色拼购撮合订单',
        logo: require('@/assest/web/home/professional-channel/detail4/logo4.png'),
      },
      {
        des: '跨境贸易双向促进会',
        logo: require('@/assest/web/home/professional-channel/detail4/logo5.png'),
      },
    ],
    layoutGrid: true,
  },
  {
    tabName: 'FBO物流渠道服务',
    link: require('@/assest/web/home/professional-channel/tab5.png'),
    linkdef: require('@/assest/web/home/professional-channel/tab5-def.png'),
    detailImg: require('@/assest/web/home/professional-channel/detail5/img.png'),
    title2:
      'FBO服务是大龙网推出的面向全球供应商的跨境电商工具包，为客户提供外贸出口代理，国际物流，质检等服务，解决跨境电商各个环节的难题，让中国供应商的出海之路更加便捷。',
    title3: '一站式国际物流及仓储服务',
    logoList: [
      {
        des: '进出口代理服务',
        logo: require('@/assest/web/home/professional-channel/detail5/logo1.png'),
      },
      {
        des: '国际物流服务',
        logo: require('@/assest/web/home/professional-channel/detail5/logo2.png'),
      },
      {
        des: '质检服务',
        logo: require('@/assest/web/home/professional-channel/detail5/logo3.png'),
      },
      {
        des: '外贸仓储',
        logo: require('@/assest/web/home/professional-channel/detail5/logo4.png'),
      },
    ],
    layoutGrid: true,
  },
  {
    tabName: '金融服务',
    link: require('@/assest/web/home/professional-channel/tab6.png'),
    linkdef: require('@/assest/web/home/professional-channel/tab6-def.png'),
    detailImg: require('@/assest/web/home/professional-channel/detail6/img.png'),
    title2:
      '为本地供应链中小企业提供支付收单、结汇收款，以及供应链金融的全链条金融服务，解决在全球贸易中遇到的支付结汇、融资贷款等现实问题，降低资金风险，实现企业跨境安全合规结汇，缓解企业融资压力，助力企业快速拓展市场。',
    title3: '全链条金融服务',
    logoList: [
      {
        des: '多币种多平台跨境支付收单服务，省时、省力，方便快捷',
        logo: require('@/assest/web/home/professional-channel/detail6/logo1.png'),
      },
      {
        des: '安全合规的结汇收款服务，全面降低结汇风险',
        logo: require('@/assest/web/home/professional-channel/detail6/logo2.png'),
      },
      {
        des: '供应链金融服务，提供多种融资方式，缓解生产、采购的贷款压力',
        logo: require('@/assest/web/home/professional-channel/detail6/logo3.png'),
      },
    ],
  },
];

const selectStyle = {
  backgroundImage: 'url("~@/assest/web/home/professional-channel/select.jpg"',
  background: '#FFD6AD',
  color: '#833200',
  width: '194px',
};
const style = {
  background: '#DF5500',
  color: '#febf97',
  fontSize: '14px',
};

export default () => {
  const [selectIndex, setIelectIndex] = useState(0);
  return (
    <div className="professional-channel-container">
      <div className="tab">
        <p className="title">专业渠道赋能 助力全球贸易</p>
        <div className="channel-items">
          {tabList.map((item, index) => (
            <div
              onClick={() => setIelectIndex(index)}
              className={[
                'item',
                index === selectIndex ? 'select-style' : 'style',
              ].join(' ')}
            >
              <p>{item.tabName}</p>
              <img src={index === selectIndex ? item.linkdef : item.link} />
            </div>
          ))}
        </div>
      </div>
      <div className="detail">
        <img className="detail-img" src={tabList[selectIndex].detailImg} />
        <div className="right">
          <p className="title1">{tabList[selectIndex].tabName}</p>
          <img
            src={require('@/assest/web/home/professional-channel/line.jpg')}
          />
          <p className="title2">{tabList[selectIndex].title2}</p>
          <p className="title3">{tabList[selectIndex].title3}</p>
          {tabList[selectIndex].layoutGrid ? (
            <div className="logo-grid">
              {tabList[selectIndex].logoList.map((item) => (
                <div className="logo-row">
                  <img src={item.logo} />
                  <p>{item.des}</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              {tabList[selectIndex].logoList.map((item) => (
                <div className="logo-row">
                  <img src={item.logo} />
                  <p>{item.des}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
