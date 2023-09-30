import { useEffect, useState } from 'react';
import './index.less';
import { history } from 'umi';
import LunBo from '@/components/LunBo';
import { reUrl, hosturl } from '@/servies/api';
import request from 'umi-request';

type lunboArray = {
  title: string,
  des: string,
  link: string
}
export default () => {
  const [lunBoList, setList] = useState<lunboArray[]>([]);
  const getLunboDataList = async () => {
    await request.get(reUrl + 'Home/GetCase')
      .then(data => {
        let datalist: lunboArray[] = []
        if (data.Article.length > 0) {
          for (let a = 0; a < data.Article.length; a++) {
            let article = data.Article[a];
            datalist.push({
              title: article.Title,
              des: article.Content,
              link: article.ArticleImage
            })
          }
          setList(datalist);
        }
      })
      .catch(error => {
        console.error(error)
      })
  };

  useEffect(() => {
    getLunboDataList();
  }, []);

  return (
    <div className="case">
      <div className="title">服务案例</div>
      <div className="casesbg">
        <div className="overseas4">
          <LunBo>
            {lunBoList.map((item, index) => (
              <div className="content-box" key={"overseas_" + index}>
                <div className="content">
                  <img src={item.link} />
                  <div className="detail">
                    <div className="subtitle">
                      {item.title}
                      <div className="dian"></div>
                    </div>
                    <div className="desc">
                      {item.des}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </LunBo>
        </div>
      </div>
      <div className="button">
        <span onClick={() => history.push('case')}>了解更多详情</span>
      </div>
    </div>
  );
};
