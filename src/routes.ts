export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        //path: '/home',
        name: '首页',
        component: 'h5/home',
      },
      {
        path: '/case',
        component: 'h5/case',
        name: '服务案例',
      },
      {
        path: '/channels',
        component: 'h5/channels',
        name: '全球渠道',
      },
      {
        path: '/center',
        component: 'h5/center',
        name: '国内服务中心',
      },

      // {
      //   // path: '/',
      //   path: '/web/home',
      //   component: 'web/home',
      //   name: 'web-首页',
      // },
      // {
      //   path: '/',
      //   // path: '/web/case',
      //   component: 'web/case',
      //   name: 'web-案例',
      // },
    ],
  },
];
