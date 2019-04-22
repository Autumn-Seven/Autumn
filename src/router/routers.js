

export default [


    {
        path: '/login',
        meta: {auth: false, title: '登录'},
        hidden: true,
        component:  () => import('@/pages/fronted/login'),
    },
    // {
    //     path: '/admin',
    //     meta: {
    //         auth: true,
    //         flagName: '管理面板',
    //         title: '后台首页',
    //     },
    //     component: () => import('@/pages/backEnd/admin'),
    //     flagName: '管理面板',
    //     children: [
    //         {
    //             path: 'articleList',
    //             component: () => import('@/pages/backEnd/articleList'),
    //             meta: {
    //                 auth: true, flagName: '文章列表', title: '文章管理',
    //             },
    //             flagName: '文章列表',
    //         },
    //         {
    //             path: 'addArticle',
    //             component: () => import('@/pages/backEnd/addArticle'),
    //             meta: {auth: true, flagName: '添加文章', title: '添加文章'},
    //             flagName: '添加文章',
    //         }, {
    //             path: 'editArticle/:id',
    //             component: () => import('@/pages/backEnd/editArticle'),
    //             hidden: true,
    //             meta: {auth: true, flagName: '修改文章', title: '修改文章'},
    //             flagName: '修改文章',
    //         }, {
    //             path: 'classList',
    //             component:  () => import('@/pages/backEnd/classList'),
    //             meta: {auth: true, flagName: '分类列表', title: '分类列表'},
    //             flagName: '分类列表',
    //         },
    //     ],
    // },



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



    {
        path: '*',
        hidden: true,
        component: () => import('@/pages/error'),
    },

];