/**
 * Created by Seven on 2019/4/16.
 * project: wms-client
 * email: fighting20xx@126.com
 */

import {AJAX_WMS} from '@/dim/ajaxSource';
import {CODE_KEY, MESSAGE_KEY, RESULT_KEY, SUCCESS_CODE, FAILD_CODE} from '@/dim/ajaxStruct';

const importMixin = Vue => {
	/**
	 * 通用的函数，获取字典的值
	 *
	 * }
	 */
	Vue.mixin({
		methods:{
			/**
			 * 获取字典类型
			 *
			 * */
			getDictionary:function (type, result) {
				let self = this;
				this.$ajax(AJAX_WMS).get('dictionary/items?typeCode='+ type).then(({r}) => {
					result.push(...r);
				});
			},

			/***
			 * 获取url数据， 主要是针对 获取所有数据的下拉框类型的，
			 *
			 * **/

			getURLList:function (url, result, method = 'get',postOption = {}) {
				let self = this;
				this.$ajax(AJAX_WMS)[method](url,postOption).then(({r}) => {
					result.splice(1,result.length);

					if(Array.isArray(r)){
						result.push(...r);
					}else if(Array.isArray(r.list)){
						result.push(...r.list);
					}
				});
			},
		}
	});
};



/**
 获取URL参数， 或者字典的用法。

 mounted: function () {
    this.getURLList('warehouseareas/listTableDetails', this.select3List, 'post')
    this.getURLList('product-type', this.select1List, 'post')
    this.getURLList('supplier', this.select2List, 'post')

    this.getDictionary('ValidateType', this.select3List)
},
**/
export default importMixin