const routers = [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['../components/Home.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/Login.vue'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: (resolve) => require(['../components/Register.vue'], resolve),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/home',
      name: 'user_home',
      component: (resolve) => require(['../components/Home_login.vue'], resolve),
      meta: {
        title: '用户主页'
      }
    },
    {
      path: '/testlist',
      name: 'test_list',
      component: (resolve) => require(['../components/TestList.vue'], resolve),
      meta: {
        title: '测试列表'
      }
    }
  ];
  export default routers;

