// import Cookies from 'js-cookie';
import DIM_COOKIE_NAME from '@/dim/cookieName';

const user = {
    state: {
        /** 用户会话 token。 */
        token: '',
        /** 用户编号，未登录用户始终为 0 。 */
        userId: 0,
        /** 用户名，未登录用户始终为空。 */
        username: '',
        /** 用户昵称，未登录用户始终为空。 */
        nickname: '',
        /** 所使用的语文类型，zh-CN */
        language: 'zh-CN',
        /**
         * 会话过期时间。
         *
         * @type {Date}
         */
        expires: null,

        /** 用户是否登录过了，用于判断是未登录的还是登录超时。 */
        logined: false,
    },

    getters: {
        /**
         * 检测当前用户是否是登录状态。
         *
         * @return {Boolean}
         */
        isLogin(state) {
            return state.userId != 0;
        },
        /**
         * 从 Cookie 中获取 token 信息。
         *
         * @return {String}
         */
        tokenFromCookie() {
            return Cookies.get(DIM_COOKIE_NAME.TOKEN) || '';
        },
        /**
         * 从 Cookie 中获取用户基本信息。
         *
         * @return {Object} userId、username、nickname、language
         */
        userInfoFromCookie() {
            return {
                userId: Number(Cookies.get(DIM_COOKIE_NAME.USER_ID)) || 0,
                username: Cookies.get(DIM_COOKIE_NAME.USERNAME),
                nickname: Cookies.get(DIM_COOKIE_NAME.NICKNAME),
                language: Cookies.get(DIM_COOKIE_NAME.LANGUAGE),
            };
        },
    },

    mutations: {
        /**
         * 设备会话 token 。
         *
         * @param {Object} state
         * @param {String} sToken
         * @return {void}
         */
        setToken(state, sToken) {
            state.token = sToken;
        },

        /**
         * 设置当前用户的默认语言类型。
         *
         * @param {Object} state
         * @param {String} sLanguage 语言类型，如 cn-ZH
         */
        setLanguage(state, sLanguage) {
            state.language = sLanguage;
        },

        /**
         * 设置用户基本信息。
         *
         * @param {Object} state
         * @param {Object} oData 用户信息。
         * @return {void}
         */
        setUserInfo(state, oData) {
            ({
                userId: state.userId,
                username: state.username,
                nickname: state.nickname,
                expires: state.expires,
            } = Object.assign({
                userId: 0,
                username: '',
                nickname: '',
                expires: null,
            }, oData));

            // 设置已登录过的标记。
            if (oData.userId) {
                state.logined = true;
            }
        },

        /**
         * 更新用户昵称。
         *
         * @param {Object} state
         * @param {String} sNickname
         * @return {void}
         */
        setNickname(state, sNickname) {
            state.nickname = sNickname;
            Cookies.set(DIM_COOKIE_NAME.NICKNAME, sNickname);
        },

        /**
         * 将用户 token 信息保存到 Cookie 中。
         * @param {Object} state
         * @param {String} sToken
         * @return {void}
         */
        saveTokenToCookie(state, sToken) {
            Cookies.set(DIM_COOKIE_NAME.TOKEN, sToken);
        },

        /**
         * 将用户信息保存到 Cookie 中。
         *
         * @param {Object} state
         * @param {Object} oData userId、username、nickname、language……
         * @return {void}
         */
        saveUserInfoToCookie(state, oData) {
            Cookies.set(DIM_COOKIE_NAME.USER_ID,
                Number(oData[DIM_COOKIE_NAME.USER_ID]) || 0);
            Cookies.set(DIM_COOKIE_NAME.USERNAME,
                oData[DIM_COOKIE_NAME.USERNAME]);
            Cookies.set(DIM_COOKIE_NAME.NICKNAME,
                oData[DIM_COOKIE_NAME.NICKNAME]);
            Cookies.set(DIM_COOKIE_NAME.LANGUAGE,
                oData[DIM_COOKIE_NAME.LANGUAGE] || 'zh-CN');
        },

        /**
         * 将用户 token 信息从 Cookie 中删除。
         *
         * @return {void}
         */
        removeTokenFromCookie() {
            Cookies.remove(DIM_COOKIE_NAME.TOKEN);
        },

        /**
         * 将用户基本信息从 Cookie  删除。
         *
         * @param {Object} state
         * @return {void}
         */
        removeUserInfoFromCookie() {
            Cookies.remove(DIM_COOKIE_NAME.USER_ID);
            Cookies.remove(DIM_COOKIE_NAME.NICKNAME);
            Cookies.remove(DIM_COOKIE_NAME.NICKNAME);
        },

        /**
         * 退出后的。
         *
         * @param {Object} state
         * @param {Vue} vm
         * @return {void}
         */
        logout(state, vm) {
            // 清除 Cookie 信息。
            this.commit('removeTokenFromCookie');
            this.commit('removeUserInfoFromCookie');

            // 清除缓存变量数据。
            this.commit('setUserInfo', {
                userId: 0,
                username: '',
                nickname: '',
                expires: null,
            });

            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            // localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        },
    },
};

export default user;
