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
            {
                path: 'sortablejs',
                component: () => import('@/pages/tool-test/sortablejs/sortablejs.vue'),
                meta: {auth: false, title: 'sortablejs  鼠标拖拽库'},
            },
            {
                path: 'echart3D',
                component: () => import('@/pages/tool-test/echart/echart3D.vue'),
                meta: {auth: false, title: 'echart3D  '},
            },
            {
                path: 'formRules',
                component: () => import('@/pages/tool-test/formRules/formRules.vue'),
                meta: {auth: false, title: 'formRules  '},
            },
        ]
    },
];