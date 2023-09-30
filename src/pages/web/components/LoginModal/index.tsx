import React, { useEffect, useState } from 'react';
import { Drawer, Button, Space, Radio } from 'antd';
import './index.less';

export default ({ visible }: { visible: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list] = useState([
    {
      title: '安徽 · 安庆',
      des: '有图',
      link: 'http://merchant.yc.aq.18985.com/',
    },
    {
      title: '安徽 · 东至',
      des: '有图',
      link: 'http://merchant.yc.dz.18985.com/',
    },
    {
      title: '安徽 · 濉溪',
      des: '无',
      link: 'http://merchant.yc.sx.18985.com/',
    },
    {
      title: '安徽 · 歙县',
      des: '有图',
      link: 'http://merchant.yc.shx.18985.com/',
    },
    {
      title: '福建 · 漳州',
      des: '无',
      link: 'http://merchant.yc.zz.18985.com/',
    },
    {
      title: '贵州 · 铜仁',
      des: '有图',
      link: 'http://merchant.yc.tr.18985.com/',
    },
    {
      title: '河北 · 灵寿',
      des: '有图',
      link: 'http://merchant.yc.ls.18985.com/',
    },
    {
      title: '河北 · 张家口',
      des: '有图',
      link: 'http://merchant.yc.zjk.18985.com/',
    },
    {
      title: '黑龙江 · 大庆',
      des: '有图',
      link: 'http://merchant.yc.dq.18985.com/',
    },
    {
      title: '湖北 · 荆门',
      des: '无',
      link: 'http://merchant.yc.jm.18985.com/',
    },
    {
      title: '湖北 · 武汉',
      des: '有图',
      link: 'http://merchant.yc.wh.18985.com/',
    },
    {
      title: '湖北 · 襄阳',
      des: '有图',
      link: 'http://merchant.yc.xy.18985.com/',
    },
    {
      title: '江苏 · 江阴',
      des: '无',
      link: 'http://merchant.yc.jy.18985.com/',
    },
    {
      title: '江苏 · 盐城',
      des: '有图',
      link: 'http://merchant.yc.yc.18985.com/',
    },
    { title: '江西 · 九江', des: '无', link: 'http://merchant.jj.18985.com/' },
    {
      title: '辽宁 · 本溪',
      des: '无',
      link: 'http://merchant.yc.bx.18985.com/',
    },
    {
      title: '辽宁 · 沈阳',
      des: '无',
      link: 'http://merchant.yc.sy.18985.com/',
    },
    {
      title: '山东 · 东营',
      des: '有图',
      link: 'http://merchant.yc.dy.18985.com/',
    },
    {
      title: '山东 · 济南',
      des: '无',
      link: 'http://merchant.yc.jn.18985.com/',
    },
    {
      title: '山东 · 金乡',
      des: '有图',
      link: 'http://merchant.yc.jx.18985.com/',
    },
    {
      title: '山东 · 临沂',
      des: '有图',
      link: 'http://merchant.yc.ly.18985.com/',
    },
    {
      title: '山东 · 栖霞',
      des: '无',
      link: 'http://merchant.yc.qx.18985.com/',
    },
    {
      title: '山东 · 青岛',
      des: '有图',
      link: 'http://merchant.yc.qd.18985.com/',
    },
    {
      title: '山东 · 莘县',
      des: '无',
      link: 'http://merchant.yc.shenxian.18985.com/',
    },
    {
      title: '山东 · 泰安',
      des: '无',
      link: 'http://merchant.yc.ta.18985.com/',
    },
    {
      title: '山东 · 沾化',
      des: '有图',
      link: 'http://merchant.yc.zh.18985.com/',
    },
    {
      title: '山东 · 淄博',
      des: '无',
      link: 'http://merchant.yc.zb.18985.com/',
    },
    {
      title: '山东 · 邹城',
      des: '有图',
      link: 'http://merchant.yc.zc.18985.com/',
    },
    {
      title: '山东 · 邹平',
      des: '无',
      link: 'http://merchant.yc.zp.18985.com/',
    },

    {
      title: '山西 · 长治',
      des: '有图',
      link: 'http://merchant.yc.cz.18985.com/',
    },
    {
      title: '陕西 · 合阳',
      des: '有图',
      link: 'http://merchant.yc.hy.18985.com/',
    },
    {
      title: '四川 · 青白江',
      des: '无',
      link: 'http://merchant.yc.qbj.18985.com/',
    },
    {
      title: '浙江 · 瓯江口',
      des: '有图',
      link: 'http://merchant.yc.ojk.18985.com/',
    },
    {
      title: '浙江 · 平湖',
      des: '有图',
      link: 'http://merchant.yc.ph.18985.com/',
    },
  ]);
  const onClose = () => setIsModalVisible(false);
  const gotoreg = (item: { link: string }) =>
    (window.location.href = item.link + 'CustomerRegister.aspx');
  const gotologin = (item: { link: string }) =>
    (window.location.href = item.link);
  useEffect(() => {
    if (visible === undefined) return;
    setIsModalVisible(true);
  }, [visible]);
  return (
    <Drawer
      className="login-app"
      placement="top"
      onClose={onClose}
      visible={isModalVisible}
    >
      <div className="login-body">
        {list.map((item) => (
          <div className="area_drawer">
            <div className="left">
              <img
                src={
                  item.des === '有图'
                    ? require(`@/assest/web/case/sucai/${item.title}.png`)
                    : require('@/assest/web/case/sucai/无图片放logo.png')
                }
              />
            </div>
            <div className="right">
              <p className="title">{item.title}</p>
              <div>
                <Button
                  type="primary"
                  shape="round"
                  onClick={() => gotoreg(item)}
                >
                  注册
                </Button>
                <Button
                  type="default"
                  shape="round"
                  style={{ marginLeft: '10px' }}
                  onClick={() => gotologin(item)}
                >
                  登陆
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sub-title">
        找不到所属区域？请<span style={{ color: '#EF8200' }}>联系我们</span>
      </div>
    </Drawer>
  );
};
