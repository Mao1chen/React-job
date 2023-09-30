import { useEffect, useState } from 'react';
import './index.less';
import Nav from '@/components/Nav';
import { Spin } from 'antd';
import Footer from '@/components/Footer';
import GlobalSubtitle from '@/components/GlobalSubtitle';
import { reUrl, hosturl, _isMobile } from '@/servies/api';
import request from 'umi-request';

type caseObj = {
  title: string;
  description: string;
  img: string;
  link: string;
};
export default function IndexPage() {
  const [list, setList] = useState<caseObj[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [noMore, setNoMore] = useState(false);
  const [loading, setLoading] = useState(false);
  let [pageindex, setindex] = useState(1);
  const getLIst = async () => {
    await request
      .post(reUrl + 'Home/GetCase', { data: { pagesize: 5, pageindex } })
      .then((data) => {
        let datalist: caseObj[] = [];
        if (5 * pageindex < data.DateCount) {
          setHasMore(true);
          setindex(++pageindex);
        }
        console.log('pageindex=' + pageindex);
        if (data.Article.length > 0) {
          for (let a = 0; a < data.Article.length; a++) {
            let article = data.Article[a];
            datalist.push({
              title: article.Title,
              description: article.Abstract,
              img: article.ArticleImage,
              link: `http://www.18985.com/Information/SuccessCaseDetails?ArticleID=${article.ID}&TypeName=服务案例`,
            });
          }
          setList(datalist);
        }
      }) // JSON from `response.json()` call
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (!_isMobile()) {
      window.location.href = reUrl + 'Information/SuccessCase';
    }
    getLIst();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    setHasMore(false);
    await request
      .post(reUrl + 'Home/GetCase', {
        data: { pagesize: 5, pageindex: pageindex },
      })
      .then((data) => {
        let datalist = list;
        if (5 * pageindex < data.DateCount) {
          setHasMore(true);
          setindex(++pageindex);
        } else {
          setNoMore(true);
        }
        console.log('pageindex=' + pageindex);

        if (data.Article.length > 0) {
          for (let a = 0; a < data.Article.length; a++) {
            let article = data.Article[a];
            datalist.push({
              title: article.Title,
              description: article.Abstract,
              img: article.ArticleImage,
              link: `http://www.18985.com/Information/SuccessCaseDetails?ArticleID=${article.ID}&TypeName=服务案例`,
            });
          }
          setList(datalist);
        }
        // setList(datalist);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="main">
      <Nav />
      <div className="service-case">
        <GlobalSubtitle title="服务案例" type="h5" />
        <div className="case">
          {list.length > 0
            ? list.map((e, index) => {
                return (
                  <div
                    key={'case_' + index}
                    className="service-item"
                    onClick={() => {
                      e.link ? window.open(e.link) : '';
                    }}
                  >
                    <div>
                      <img src={e.img}></img>
                    </div>
                    <div className="item-right">
                      <div>{e.title}</div>
                      <div className="description">{e.description}</div>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        ) : (
          <></>
        )}
        {hasMore ? (
          <div
            className="service-more"
            onClick={() => {
              loadMore();
            }}
          >
            查看更多
          </div>
        ) : (
          <></>
        )}
        {noMore ? <div className="service-more">客官, 见底了！</div> : <></>}
      </div>
      <Footer />
    </div>
  );
}
