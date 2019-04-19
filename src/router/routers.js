/**
 * Created by Seven on 2019/4/19.
 * project: Autumn-Blog
 * email: fighting20xx@126.com
 */


export default [
    {
        path: '/',
        name: '/',
        redirect: '/login',
        meta: {
            hideInMenu: true,
            notCache: true,
        },

    },
    {
        path: '/login',
        name: 'login',
        meta: {
            hideInMenu: true,
            notCache: true,
        },
        component: () => import('@/view/login.vue')
    },
    // {
        // path: '/inventory',
        // name: 'inventory',
        // meta: {
        //     icon: 'md-grid',
        //     title: '库存管理',
        // },
        // component: Main,
        // children: [
        //     {
        //         path: 'inventoryQuery',
        //         name: 'inventoryQuery',
        //         meta: {
        //             icon: 'md-grid',
        //             title: '库存查询',
        //         },
        //         component: () => import('@/view/inventory/inventoryQuery.vue'),
        //     },
        // ],
    // },
];