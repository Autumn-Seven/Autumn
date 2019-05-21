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
        component: () => import('@/pages/blog/mian/mian.vue'),
        hidden: true,
        children: [
            {
                path: 'home',
                component: () => import('@/pages/blog/home.vue'),
                meta: {auth: false, title: '首页'},
            },
            {
                path: 'help-me',
                component: () => import('@/pages/blog/help-me.vue'),
                meta: {auth: false, title: '帮帮我们'},
            },
            {
                path: 'go-help',
                component: () => import('@/pages/blog/go-help.vue'),
                meta: {auth: false, title: '我们帮忙'},
            },
            {
                path: 'self-driver',
                component: () => import('@/pages/blog/self-driver.vue'),
                meta: {auth: false, title: '爱心自驾'},
            },

            {
                path: 'project-manage',
                component: () => import('@/pages/blog/project-manage.vue'),
                meta: {auth: false, title: '项目管理'},
            },

            {
                path: 'project-process',
                component: () => import('@/pages/blog/project-process.vue'),
                meta: {auth: false, title: '项目追踪'},
            },
            {
                path: 'user',
                component: () => import('@/pages/blog/user.vue'),
                meta: {auth: false, title: '用户管理'},
            },


            {
                path: 'article/:id',
                component: () => import('@/pages/blog/article'),
                meta: {auth: false, title: '文章'},
            },
            {
                path: 'tag',
                component: () => import('@/pages/blog/tag'),
                meta: {auth: false, title: '文章标签'},
            },

        ],
    },


];