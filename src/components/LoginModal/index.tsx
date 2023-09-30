import React, { useEffect, useState } from 'react';
import { Drawer, Button } from 'antd';
import ContactUsModal from '@/components/ContactUsModal';
import './index.less';

export default ({ visible }: { visible: any }) => {
  const [contactUsModal, setContactUsModal] = React.useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list] = useState([
    {
      title: '安徽 · 安庆',
      des: '有图',
      link: 'http://merchant.aq.18985.com/',
    },
    {
      title: '安徽 · 东至',
      des: '有图',
      link: 'http://merchant.dz.18985.com/',
    },
    {
      title: '安徽 · 歙县',
      des: '有图',
      link: 'http://merchant.shx.18985.com/',
    },
    {
      title: '贵州 · 贵阳',
      des: '有图',
      link: 'http://merchant.gy.18985.com/',
    },
    {
      title: '福建 · 漳州',
      des: '有图',
      link: 'http://merchant.zz.18985.com/',
    },
    {
      title: '河北 · 灵寿',
      des: '有图',
      link: 'http://merchant.ls.18985.com/',
    },
    {
      title: '河北 · 张家口',
      des: '有图',
      link: 'http://merchant.zjk.18985.com/',
    },
    {
      title: '河北 · 昌黎',
      des: '有图',
      link: 'http://merchant.cl.18985.com/',
    },
    {
      title: '河北 · 孟村',
      des: '有图',
      link: 'http://merchant.mc.18985.com/',
    },
    {
      title: '湖北 · 荆门',
      des: '有图',
      link: 'http://merchant.jm.18985.com/',
    },
    {
      title: '湖北 · 襄阳',
      des: '有图',
      link: 'http://merchant.xy.18985.com/',
    },
    {
      title: '江苏 · 江阴',
      des: '有图',
      link: 'http://merchant.jy.18985.com/',
    },
    {
      title: '江苏 · 盐城',
      des: '有图',
      link: 'http://merchant.yc.18985.com/',
    },
    {
      title: '江苏 · 阜宁',
      des: '有图',
      link: 'http://merchant.fn.18985.com/',
    },
    {
      title: '江西 · 九江',
      des: '有图',
      link: 'http://merchant.jj.18985.com/',
    },
    {
      title: '辽宁 · 沈阳',
      des: '有图',
      link: 'http://merchant.sy.18985.com/',
    },
    {
      title: '山东 · 东营',
      des: '有图',
      link: 'http://merchant.dy.18985.com/',
    },
    {
      title: '山东 · 济南',
      des: '有图',
      link: 'http://merchant.jn.18985.com/',
    },
    {
      title: '山东 · 金乡',
      des: '有图',
      link: 'http://merchant.jx.18985.com/',
    },
    {
      title: '山东 · 青岛',
      des: '有图',
      link: 'http://merchant.qd.18985.com/',
    },
    {
      title: '山东 · 莘县',
      des: '有图',
      link: 'http://merchant.shenxian.18985.com/',
    },
    {
      title: '山东 · 泰安',
      des: '有图',
      link: 'http://merchant.ta.18985.com/',
    },
    {
      title: '山东 · 沾化',
      des: '有图',
      link: 'http://merchant.zh.18985.com/',
    },
    {
      title: '山东 · 淄博',
      des: '无',
      link: 'http://merchant.zb.18985.com/',
    },
    {
      title: '山东 · 邹城',
      des: '有图',
      link: 'http://merchant.zc.18985.com/',
    },
    {
      title: '山东 · 邹平',
      des: '有图',
      link: 'http://merchant.zp.18985.com/',
    },
    {
      title: '陕西 · 合阳',
      des: '有图',
      link: 'http://merchant.hy.18985.com/',
    },
    {
      title: '浙江 · 瓯江口',
      des: '有图',
      link: 'http://merchant.ojk.18985.com/',
    },
    {
      title: '浙江 · 平湖',
      des: '有图',
      link: 'http://merchant.ph.18985.com/',
    },
  ]);
  const gotoreg = (item: { link: string }) =>
    (window.location.href = item.link + 'CustomerRegister.aspx');
  const gotologin = (item: { link: string }) =>
    (window.location.href = item.link);
  const onClose = () => setIsModalVisible(false);
  const onCloseAndOpen = () => {
    setIsModalVisible(false);
    setContactUsModal(true);
  };
  useEffect(() => {
    if (visible === undefined) return;
    setIsModalVisible(true);
    setContactUsModal(false);
  }, [visible]);
  return (
    <>
      {contactUsModal ? (
        <div className="cao">
          <ContactUsModal visible={contactUsModal} />
        </div>
      ) : null}
      <Drawer
        className="login-app"
        placement="bottom"
        onClose={onClose}
        visible={isModalVisible}
      >
        <div>
          <div className="parent-title">登录/注册</div>
          <div className="sub-title">
            找不到所属区域？请
            <span style={{ color: '#EF8200' }} onClick={onCloseAndOpen}>
              联系我们
            </span>
          </div>
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
      </Drawer>
    </>
  );
};
