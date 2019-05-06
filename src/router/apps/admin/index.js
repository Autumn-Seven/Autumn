/**
 * Created by Seven on 2019/5/5.
 * project: Autumn
 * email: fighting20xx@126.com
 */



export default [
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
        path: '*',
        hidden: true,
        component: () => import('@/pages/error'),
    },

];