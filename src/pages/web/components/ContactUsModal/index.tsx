import { useEffect, useState } from 'react';
import { Input, Button, Modal } from 'antd';

import './index.less';

export default ({ visible }: { visible: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (visible === undefined) return;
    setIsModalVisible(true);
  }, [visible]);

  return (
    <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <div className='main-container'>
        <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold',marginBottom: '15px' }}>留下您的联系方式</p>
        <Input className='contact_input' placeholder='姓名'></Input>
        <Input className='contact_input' placeholder='电话'></Input>
        <Input className='contact_input' placeholder='公司名称'></Input>
        <Input className='contact_input' placeholder='所在城市'></Input>
        <div style={{ width: '100%', padding: '0 30px', display: 'flex', justifyContent: 'center' }}>
          <Button className='submit' type="primary" shape="round">
            提交
          </Button>
        </div>
      </div>
    </Modal>
  );
};
