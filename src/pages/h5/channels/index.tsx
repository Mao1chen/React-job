import { useEffect, useState } from 'react';
import './index.less';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GlobalSubtitle from '@/components/GlobalSubtitle';
import PopularGlobalChannel from '@/assest/global-channels/global-channels-H5-bg.png';
import HotList from './components/hot';
import CountryList from './components/CountryList';
import { reUrl, hosturl, _isMobile } from '@/servies/api';
import request from 'umi-request';

type storeList = {
  name: string;
  source: string;
  link: string;
};

export default function IndexPage() {
  const [list, setList] = useState<storeList[]>([]);
  const getStoreList = async () => {
    await request
      .get(reUrl + 'channel/GetDynamicChannel')
      .then((data) => {
        let datalist: storeList[] = [];
        if (data.length > 0) {
          for (let a = 0; a < data.length; a++) {
            let article = data[a];
            datalist.push({
              name: article.StoreName,
              source: article.FirstImg,
              link: 'http://www.18985.com/Channel/Detail?ShopID=' + article.ID,
            });
          }
          setList(datalist);
        }
      }) // JSON from `response.json()` call
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (!_isMobile()) {
      window.location.href = reUrl + 'Channel';
    }
    getStoreList();
  }, []);
  return (
    <div className="h5-popular-channels">
      <Nav />
      <img
        src={PopularGlobalChannel}
        style={{ height: '1.5646rem', width: '100%' }}
      />
      <div style={{ marginTop: '0.4rem' }}>
        <GlobalSubtitle title="全球热门渠道" type="h5" />
      </div>
      <div style={{ padding: '0.2rem' }}>
        <CountryList />
      </div>
      <div className="real-time-add">
        <GlobalSubtitle title="实时新增渠道" type="h5" />
        <div className="real-time-content">
          {list.length &&
            list.map((e, index) => {
              return (
                <div
                  className="real-time-item"
                  key={'store_' + index}
                  onClick={() => window.open(e.link)}
                >
                  <div>
                    <img src={e.source} />
                  </div>
                  <div className="name">{e.name}</div>
                </div>
              );
            })}
        </div>
      </div>
      <GlobalSubtitle title="全球品类热销榜" type="h5" />
      <div style={{ padding: '0.6rem 0.2rem' }}>
        <HotList />
      </div>
      <Footer />
    </div>
  );
}
