

import admins from './apps/admin/index.js'
import blog from './apps/blog/index.js'


export default [
    ...admins,
    ...blog,
    {
        path: '/',
        meta: {auth: false},
        redirect: '/login',
    },

   {
       path: '/test',
       component: () => import('@/pages/test/test.vue'),
       meta: {auth: false, title: '测试页'},
    },





    {
        path: '/login',
        meta: {auth: false, title: '登录'},
        hidden: true,
        component:  () => import('@/pages/fronted/login'),
    },
    {
        path: '*',
        hidden: true,
        component: () => import('@/pages/error'),
    },

];