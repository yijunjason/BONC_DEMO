import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { exact: true, path: '/', component: '@/pages/index', title: 'ceshi' },
  //   { exact: true, path: '/user', component: '@/pages/user/user' , wrappers: ['@/pages/userAuth/userAuth'], title: 'ceshi222'},
  //   {
  //     // exact: true, //子路由配置中，父层级无法使用exact:true，否则会导致404
  //     path: '/list', //同时，如果父层级路径使用其他，也会导致访问404。比如设置path:"/a"，此时直接访问/list为404，直接访问/a/list导致list页面无法正确传入props
  //     component: '@/pages/layouts/index',
  //     routes: [
  //       { exact: true, path: '/list/list', component: '@/pages/list/list' }, // 子路由需要配置包含父层级路径的完整路径，配置拼接路径的规则暂未知
  //     ]
  //   },
  //   { exact: true, path: '/goto', redirect: '/user'},//此处优先寻找了路径'/'导致渲染了/pages/layouts/index
  //   { exact: true, path: '/async', component: '@/pages/asyncHugeA/index'},
  //
  //   { exact: true, path: '/table', component: '@/pages/table/table'},
  //   { component: '@/pages/404'},
  // ],
  routes: [
    { path: '/', component: '@/pages/index', title: '首页',
      routes: [
        { exact: true, path: '/user', component: '@/pages/user/user' , wrappers: ['@/pages/userAuth/userAuth'], title: 'ceshi222' },
        { exact: true, path: '/list', component: '@/pages/list/list' },
        { exact: true, path: '/goto', redirect: '/user' },
        { exact: true, path: '/async', component: '@/pages/asyncHugeA/index' },
        { exact: true, path: '/table', component: '@/pages/table/table' },
        { exact: true, path: '/echarts', component: '@/pages/echarts/echarts' },
        { exact: true, path: '/context', component: '@/pages/context/context' },
        { exact: true, path: '/reducer', component: '@/pages/reducer/reducer' },
        { exact: true, path: '/echartsMap', component: '@/pages/echartsMap/echartsMap' },
        { component: '@/pages/404' },
      ]
    },

  ],
  fastRefresh: {},// 热刷新
  dynamicImport: {},// 按需加载
  mfsu:{}, // 预编译，开启时会一定程度上干扰某些全局变脸的设置，比如ConfigProvider的locale值无法正确的从antd/es/locale/zh_CN路径读取，可以通过删除src/.umi之后重新启动即可
  antd: {},
});
