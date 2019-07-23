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
                meta: {auth: false, title: 'formRules 表单验证封装'},
            },
            {
                path: 'clipboard',
                component: () => import('@/pages/tool-test/clipboard/clipboard.vue'),
                meta: {auth: false, title: 'clipboard 剪切板'},
            },
            {
                path: 'vue-waterfall',
                component: () => import('@/pages/tool-test/vue-waterfall/vue-waterfall.vue'),
                meta: {auth: false, title: 'vue-waterfall 瀑布流'},
            },
            {
                path: 'Animate',
                component: () => import('@/pages/tool-test/Animate/Animate.vue'),
                meta: {auth: false, title: 'Animate.css库'},
            },
            {
                path: 'transition',
                component: () => import('@/pages/tool-test/transition/transition.vue'),
                meta: {auth: false, title: 'vue transition组件'},
            },
            {
                path: 'js-base64',
                component: () => import('@/pages/tool-test/js-base64/js-base64.vue'),
                meta: {auth: false, title: 'js-base64加密解密'},
            },
            {
                path: 'mySwiper',
                component: () => import('@/pages/tool-test/mySwiper/swiper.vue'),
                meta: {auth: false, title: 'mySwiper自己写的'},
            },
        ]
    },
];