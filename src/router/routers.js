

import admins from './apps/admin/index.js'
import blog from './apps/blog/index.js'
import kanban from './apps/kanban/index.js'


export default [
    ...admins,
    ...blog,
    ...kanban,
    {
        path: '/',
        meta: {auth: false},
        redirect: '/login',
    },

   {
       path: '/test',
       component: () => import('@/pages/common/test.vue'),
       meta: {auth: false, title: '测试页'},
    },
    {
       path: '/nav',
       component: () => import('@/pages/common/nav.vue'),
       meta: {auth: false, title: '导航页面'},
    },





    {
        path: '/login',
        meta: {auth: false, title: '登录'},
        hidden: true,
        component:  () => import('@/pages/common/login.vue'),
    },
    {
        path: '*',
        hidden: true,
        component: () => import('@/pages/error'),
    },

];