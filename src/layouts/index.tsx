import { IRouteComponentProps } from 'umi';
import { Layout } from 'antd';
import './index.less';

const { Content } = Layout;

export default ({ children }: IRouteComponentProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        className="site-layout-background"
        style={{ overflow: 'initial' }}
      >
        {children}
      </Content>
    </Layout>
  );
};
