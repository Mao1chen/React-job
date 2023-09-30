import { useEffect, useState } from 'react';
import './index.less';
import { reUrl, hosturl } from '@/servies/api';
import Start from '@/assest/global-channels/star.png';
import request from 'umi-request';

export default () => {
  const [hotlist, setList] = useState<any[]>([
    {
      name: 'Canada',
      lable1: '时尚服饰与鞋类',
      lable2: '手袋及箱包',
      lable3: 'LED灯杯',
      color: '#fb9004',
    },
    {
      name: 'Poland',
      lable1: '电子元器件',
      lable2: '灯具及电气',
      lable3: '家电',
      color: '#e05645',
    },
    {
      name: 'Russia',
      lable1: '家用器具',
      lable2: '时装及面料',
      lable3: '家具及家饰用品',
      color: '#f4b73a',
    },
    {
      name: 'UAE',
      lable1: '其他',
      lable2: '蓝牙耳机',
      lable3: '电子元器件',
      color: '#229ac8',
    },
    {
      name: 'Vietnam',
      lable1: '灯具及电气',
      lable2: '灯/照明',
      lable3: 'LED照明',
      color: '#8569c9',
    },
    {
      name: 'Indonesia',
      lable1: '箱包',
      lable2: '服饰',
      lable3: '玩具',
      color: '#4291ff',
    },
  ]);
  const getChannelList = () => {
    request.post(reUrl + 'Channel/getsellwellcategory')
      .then(data => {
        let datalist = hotlist;
        let cc = 0;
        for (let i = 0; i < data.length; i++) {
          let tempData = datalist.filter(l => l.name == data[i].name);
          if (tempData.length > 0) {
            let index = datalist.indexOf(tempData[0]);
            if (cc == 0) {
              datalist[index].lable1 = data[i].param
            }
            if (cc == 1) {
              datalist[index].lable2 = data[i].param
            }
            if (cc == 2) {
              datalist[index].lable3 = data[i].param
            }
            cc++;
            if (cc == 3) {
              cc = 0;
            }
          }
        }
        setList(datalist);
      }) // JSON from `response.json()` call
      .catch(error => console.error(error))
  };

  const classNameFilter = (str: string) => {
    return str.length > 4 ? 'lable no-line-height' : 'lable';
  };

  useEffect(() => {
    getChannelList();
  }, []);
  return (
    <div>
      <div className="hot">
        <div className="name" style={{ backgroundColor: '#fb9004' }}>
          排行
        </div>
        <div className="lable flex">
          <img src={Start} />
          <img src={Start} />
          <img src={Start} />
        </div>
        <div
          className="lable flex"
          style={{
            backgroundColor: '#f1f2f3',
          }}
        >
          <img src={Start} />
          <img src={Start} />
        </div>
        <div className="lable flex">
          <img src={Start} />
        </div>
      </div>
      <div>
        {hotlist.length > 0 &&
          hotlist.map((e, index) => {
            return (
              <div className="hot" key={index + '1'}>
                <div className="name" style={{ backgroundColor: e.color }}>
                  {e.name}
                </div>
                <div className={classNameFilter(e.lable1)}>{e.lable1}</div>
                <div
                  className={classNameFilter(e.lable2)}
                  style={{
                    backgroundColor: '#f1f2f3',
                  }}
                >
                  {e.lable2}
                </div>
                <div className={classNameFilter(e.lable3)}>{e.lable3}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
