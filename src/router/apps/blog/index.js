/**
 * Created by Seven on 2019/5/5.
 * project: Autumn
 * email: fighting20xx@126.com
 */



export default [

    {
        path: '/',
        meta: {auth: false},
        redirect: '/login',
        component: () => import('@/pages/fronted/mian/mian.vue'),
        hidden: true,
        children: [
            {
                path: 'home',
                component: () => import('@/pages/fronted/home.vue'),
                meta: {auth: false, title: '首页'},
            },
            {
                path: 'help-me',
                component: () => import('@/pages/fronted/help-me.vue'),
                meta: {auth: false, title: '帮帮我们'},
            },
            {
                path: 'go-help',
                component: () => import('@/pages/fronted/go-help.vue'),
                meta: {auth: false, title: '我们帮忙'},
            },
            {
                path: 'self-driver',
                component: () => import('@/pages/fronted/self-driver.vue'),
                meta: {auth: false, title: '爱心自驾'},
            },

            {
                path: 'project-manage',
                component: () => import('@/pages/fronted/project-manage.vue'),
                meta: {auth: false, title: '项目管理'},
            },

            {
                path: 'project-process',
                component: () => import('@/pages/fronted/project-process.vue'),
                meta: {auth: false, title: '项目追踪'},
            },
            {
                path: 'user',
                component: () => import('@/pages/fronted/user.vue'),
                meta: {auth: false, title: '用户管理'},
            },


            {
                path: 'article/:id',
                component: () => import('@/pages/fronted/article'),
                meta: {auth: false, title: '文章'},
            },
            {
                path: 'tag',
                component: () => import('@/pages/fronted/tag'),
                meta: {auth: false, title: '文章标签'},
            },

        ],
    },


];