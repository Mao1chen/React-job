import { useEffect, useState } from 'react';
import './index.less';
import { getServiceCountryList } from '@/servies/api';
import { RightOutlined } from '@ant-design/icons';
import { reUrl, hosturl } from '@/servies/api';
import request from 'umi-request';

export default () => {
  const [list, setList] = useState<any[]>([
    {
      name: '波兰',
      source: 'Poland.png',
      link: 'http://www.18985.com/Channel/List?ChannelCircleID=24',
      categorie: 'OSELL 大龙网在阿联酋拥有3C产品、建材家居等品类渠道网络',
      settleIn:
        '目前已有近1400余家中国企业入驻波兰市场，通过“渠道通”实现足不出户，就能让海外渠道店铺为您销售产品….',
      imgs: []
    },
    {
      name: '俄罗斯',
      source: 'Russia.png',
      link: 'http://www.18985.com/Channel/List?ChannelCircleID=24',
      categorie:
        'OSELL 大龙网在俄罗斯拥有厨房用品、卫浴用品、3C配件等品类渠道网络',
      settleIn:
        '目前已有近1500余家中国企业入驻俄罗斯市场，通过“渠道通”实现足不出户，就能让海外渠道店铺为您销售产品…',
      imgs: []
    },
    {
      name: '阿联酋',
      source: 'UAE.png',
      link: 'http://www.18985.com/Channel/List?ChannelCircleID=42',
      categorie: 'OSELL 大龙网在阿联酋拥有3C产品、建材家居等品类渠道网络',
      settleIn:
        '目前已有近1400余家中国企业入驻阿联酋市场，通过“渠道通”实现足不出户，就能让海外渠道店铺为您销售产品…',
      imgs: []
    },
    {
      name: '加拿大',
      source: 'Canada.png',
      link: 'http://www.18985.com/Channel/List?ChannelCircleID=36',
      categorie: 'OSELL 大龙网在加拿大拥有建材、装饰材料等品类渠道网络',
      settleIn:
        '目前已有近1400余家中国企业入驻加拿大市场，通过“渠道通”实现足不出户，就能让海外渠道店铺为您销售产品…',
      imgs: []
    },
    {
      name: '越南',
      source: 'Vietnam.png',
      link: 'http://www.18985.com/Channel/List?ChannelCircleID=48',
      categorie: 'OSELL 大龙网在越南拥有LED光源、装饰灯等品类渠道网络',
      settleIn:
        '目前已有近230余家中国企业入驻越南市场，通过“渠道通”实现足不出户，就能让海外渠道店铺为您销售产品…',
      imgs: []
    },
    {
      name: '印度尼西亚',
      source: 'Indonesia.png',
      link: 'http://www.18985.com/Channel/List?ChannelCircleID=156',
      categorie:
        'OSELL 大龙网在印度尼西亚拥有箱包、3C、母婴、美妆等品类渠道网络',
      settleIn:
        '目前已有上千家中国企业入驻印度尼西亚市场，通过“渠道通”实现足不出户，就能让海外渠道店铺为您销售产品…',
      imgs: []
    },
  ]);

  const getLIst = async () => {
    await request.post(reUrl + 'Channel/GetHotChannel')
      .then(data => {
        let datalist = list;
        for (let d of datalist) {
          d.imgs = data[d.name];
        }
        setList(datalist);
      }) // JSON from `response.json()` call
      .catch(error => console.error(error))

    // const res = await getServiceCountryList();
    const data = list.map((e: any, index: number) => {
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
    <div className="country">
      {list.length &&
        list.map((e, index) => {
          return (
            <div key={"country_" + e.name}>
              <div className="country-item">
                <div>
                  <img
                    className="country-item-img"
                    src={require(`@/assest/global-channels/${e.source}`)}
                  />
                  <span className="country-item-name">{e.name}</span>
                </div>
                <span
                  className="view-detail-btn"
                  onClick={() => setShowDetail(index)}
                >
                  查看详情
                </span>
              </div>
              {e.isViewDetail && (
                <div className="detail-content">
                  <div className="border-top"></div>
                  <div className="detail-title">热门品类</div>
                  <div className="detail-text">{e.categorie}</div>
                  <div className="detail-title">签约入驻</div>
                  <div className="detail-text">{e.settleIn}</div>
                  <div
                    className="detail-title more"
                    onClick={() => window.open(e.link)}
                  >
                    <div>更多渠道展示</div>
                    <RightOutlined style={{ marginRight: 20 }} />
                  </div>
                  <div className="detail-more">
                    {e.imgs.map((msn, i) => {
                      return (<img
                        className="detail-more-img"
                        src={(msn)}
                      />)
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};
