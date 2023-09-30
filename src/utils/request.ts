import { extend } from 'umi-request';

const baseUrl: string | undefined =
  process.env.NODE_ENV === 'production' ? '' : '/api';

const request = extend({
  prefix: baseUrl,
  timeout: 3000,
  credentials: 'include',
});

request.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      ...options,
    },
  };
});

request.interceptors.response.use(async (response) => {
  const res = await response.clone().json();
  return res;
});

export default request;
