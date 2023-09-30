import { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { hosturl,postData } from '@/servies/api';
import {Modal} from "antd-mobile";
import './index.less';
import request from 'umi-request';

const alert = Modal.alert;

export default ({ visible }: { visible: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Uname,setUname] = useState("");
  const [Phone,setPone] = useState("");
  const [CompanyName,setCompanyName] = useState("");
  const [Address,setAddress] = useState("");

  var user_info ={
    Uname : '',
    Phone:'',
    CompanyName:'',
    Address:'',
  }
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

const changeValue=(e:any, value:any)=>{
  if(value==1)
      setUname(e.target.value);
  if(value==2)
    setPone(e.target.value);  
  if(value==3)
    setCompanyName(e.target.value);  
  if(value==4)
    setAddress(e.target.value);  
}
const addContact = async ()=>{
  await  request.post(hosturl+"Home/SaveContact", {Uname:Uname,Phone:Phone,CompanyName:CompanyName,Address:Address})
  .then(data => {
    alert("提示", data.msg)
  }) // JSON from `response.json()` call
  .catch(error => console.error(error))
  setIsModalVisible(false)
}

  return (
    <> {isModalVisible ?
      <div className='contact_app'>
        <div className='main-container'>
          <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>留下您的联系方式</p>
          <Input className='contact_input' placeholder='姓名' value={Uname} onChange={(e)=>{changeValue(e,1)}} ></Input>
          <Input className='contact_input' placeholder='电话' value={Phone} onChange={(e)=>{changeValue(e,2)}} ></Input>
          <Input className='contact_input' placeholder='公司名称' value={CompanyName} onChange={(e)=>{changeValue(e,3)}} ></Input>
          <Input className='contact_input' placeholder='所在城市' value={Address} onChange={(e)=>{changeValue(e,4)}} ></Input>
          <div style={{ width: '100%', padding: '0 30px' }}>
            <Button className='submit' type="primary" shape="round" onClick={addContact}>
              提交
            </Button>
          </div>
          <div className='cancel' onClick={()=>setIsModalVisible(false)}>+</div>
        </div>
      </div>
      : <></>}
    </>

  );
};
