/**
 * Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */



export default [
    {
        path: '/tool-test/',
        component: () => import('@/pages/tool-test/index.vue'),
        children: [
            {
                path: 'keymaster',
                component: () => import('@/pages/tool-test/keymaster/keymaster.vue'),
                meta: {auth: false, title: 'keymaster 键盘事件库'},
            },
        ]
    },
];