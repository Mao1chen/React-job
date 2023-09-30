import { useEffect, useState } from 'react';
import './index.less';
import FiveSteps from '@/assest/home/five-steps.png';
import SixAdvantages from '@/assest/home/six-advantages.png';
import Illustration from '@/assest/home/illustration.png';
import quanquan from '@/assest/home/quanquan.png';
export default () => {
  const sixSteps = [
    '千万买家订单',
    '跨境贸易奖励',
    '全程订单托管',
    '低息便捷贷款',
    '安全合规结汇',
    '全球无忧收付',
  ];
  // const getLIst = async () => {
  //   const res = await getServiceHotList();
  //   setList(res);
  // };
  // useEffect(() => {
  //   getLIst();
  // }, []);

  return (
    <div className="six">
      <div className="bg">
        <div className="bg-title">六大优势</div>
        <div className="desc">
          诚邀工厂、贸易商、外贸SOHO，物流商等入驻大龙渠道通开拓全球市场
        </div>
      </div>
    </div>
  );
};
