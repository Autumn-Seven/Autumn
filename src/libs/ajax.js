import axios from 'axios';
import AJAX_SOURCE from '@/dim/ajaxSource';
import utiljs from '@/util/util.js';
import {CODE_KEY, MESSAGE_KEY, RESULT_KEY, SUCCESS_CODE, FAILD_CODE} from '@/dim/ajaxStruct';


// axios.defaults.withCredentials = true;//让ajax携带cookie
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

const Ajax = {
	/**
	 * Vue 注册方法。
	 * 
	 * @param {Vue} Vue 
	 */
	install(Vue) {
		/**
		 * Ajax 全局引用。
		 * 如 this.$ajax('oauth').get('user/getList');
		 * 
		 * @param {String} sSource 使用的接口源，oauth、vs、iot……
		 * @param {Object|undefined} oOptions {token, timeout}
		 *	<ol>
		 *		<li>token: 使用特定的 token。</li>
		 *		<li>timeout: 请求超时时间。</li>
		 *	</ol>
		 * 
		 * @return {Axios} 返回的是一个伪 Axios 对象。
		 */
		Vue.prototype.$ajax = function(sSource, oOptions = {}) {
			let _this = this;
			// 超时时间。
			let nTimeout = oOptions.timeout || 30 * 1000;
			// token。
			let oStore = _this.$store;
			let sToken = oOptions.token || (oStore && (oStore.state.nuser.token || oStore.getters.tokenFromCookie));


			// 接口源基础地址。
			let sBaseUrl = AJAX_SOURCE[sSource];


			let oAgents = {};
			let fnAgentDo = function(sAction, aoArguments) {
				if (sToken) {
					let bFirstParamIsString = typeof aoArguments[0] === 'string';

					if (['delete', 'get', 'head', 'options'].indexOf(sAction) != -1) {
						// 在 params 对象中设置参数。

						let oArg;
						if (bFirstParamIsString) {
							if (!aoArguments[1]) {
								aoArguments[1] = {};
							}
							oArg = aoArguments[1];
						} else {
							oArg = aoArguments[0];
						}
						if (!oArg.params) {
							oArg.params = {};
						}
						
		
						// 强制设置 token 参数。
						Object.assign(oArg.params, {
							token: sToken
						});
					} else {
						// post, put, patch 请求类型，在 URL 中设置参数。

						if (bFirstParamIsString) {
							aoArguments[0] = utiljs.setParam('token', sToken, aoArguments[0]);
						} else {
							aoArguments[1].url = utiljs.setParam('token', sToken, aoArguments[1].url);
						}
					}
				}

				// 创建一个 axios 实例。
				let oAxios = axios.create({
					baseURL: sBaseUrl,
					timeout: nTimeout
				});

				_this.$store.commit('setLoadingAnimation', true);
				// 调用 axios 实例对应的方法。
				return oAxios[sAction].call(oAxios, aoArguments[0], aoArguments[1]).then(function (response) {
					_this.$store.commit('setLoadingAnimation', false);
					return response;
				});
			};


			// 为各个动作绑定代理的动作函数。
			['request', 'get', 'delete', 'head', 'options', 'post', 'put', 'patch'].forEach(sAction => {
				oAgents[sAction] = function() {
					let aoArguments = arguments;
					// if (ajaxIntercept) {
					// 	// 使用接口拦截器。
					// 	return ajaxIntercept(_this, function() {
					// 		return fnAgentDo(sAction, aoArguments);
					// 	});
					// } else {
						return fnAgentDo(sAction, aoArguments);
					// }
				};
			});
			return oAgents;
		};
	}
};


export default Ajax;
