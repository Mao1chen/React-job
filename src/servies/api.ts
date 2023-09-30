import request from '@/utils/request';

export const getServiceAddress = () => request('/getServiceAddress');

export const getServiceCase = () => request('/getServiceCase');

export const getServiceHotList = () => request('/getServiceHotList');

export const getServiceCountryList = () => request('/getServiceCountryList');

export const getServiceHotReal = () => request('/getServiceHotReal');

export const hosturl = '/api/';
export const reUrl = 'http://www.18985.com/';
export const _isMobile = () => {
  let navReg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
  let flag = navReg.test(navigator.userAgent);
  return flag;
};
