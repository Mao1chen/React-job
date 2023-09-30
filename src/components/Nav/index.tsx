import { useEffect, useState } from 'react';
import './index.less';
import MenuIcon from '@/assest/service-center/menu.png';
import OrangeLogo from '@/assest/service-center/orange-logo.png';
import { Menu, Dropdown } from 'antd';
import routes from '@/routes';
import { history } from 'umi';
import LoginModal from "@/components/LoginModal";

export default () => {
  const menus = routes[0].routes;
  const [loginVisible, setLoginVisible] = useState<any>()

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={OrangeLogo} style={{ width: '2.24rem', height: '0.672rem' }} onClick={() => history.push("/")} />
          <span className="desc">足不出户 · 做天下生意</span>
        </div>

        <Dropdown trigger={['click']}
          overlay={
            <Menu theme="dark" className="after-arrow">
              {menus.map((item: any) => {
                return (
                  <Menu.Item
                    key={item.key}
                    onClick={() => history.push(item.path)}
                  >
                    {item.name}
                  </Menu.Item>
                );
              })}
              <Menu.Item key="login" onClick={() => setLoginVisible(!loginVisible)}>
                登录/注册
              </Menu.Item>
            </Menu>
          }
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img
              src={MenuIcon}
              style={{
                width: '0.37rem',
                height: '0.3rem',
                marginRight: '0.2rem',
              }}
            />
          </a>
        </Dropdown>
      </div>
      <LoginModal visible={loginVisible} />
    </div>
  );
};
