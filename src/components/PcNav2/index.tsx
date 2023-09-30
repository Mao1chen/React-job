import './index.less';
import { history } from 'umi';
export default () => {
  return (
    <div>
      <div className="pc_nav2">
        <div className="nav-item">
          <span onClick={() => history.push('/pc/home')}>首页</span>
          <span>服务产品</span>
          <span
            onClick={() =>
              window.open('http://www.18985.com/Information/SuccessCase')
            }
          >
            服务案例
          </span>
          <span onClick={() => window.open('http://www.18985.com/Channel')}>
            全球渠道
          </span>
          <span onClick={() => history.push('/pc/service-center')}>
            国内服务中心
          </span>
        </div>
        <div>Buyer Home</div>
      </div>
    </div>
  );
};
