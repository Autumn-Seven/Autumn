import {CODE_KEY, MESSAGE_KEY, RESULT_KEY, SUCCESS_CODE, FAILD_CODE ,LOGIN_CODE} from '@/dim/ajaxStruct';


let bMessaged = false;

export default function(vm, fnAjax) {
	return new Promise(function(resolve, reject) {
		fnAjax().then(oAjax => {
			let resultData = oAjax.data || {};
			let nCode = resultData[CODE_KEY];
			let r = resultData[RESULT_KEY];
			let message = resultData[MESSAGE_KEY] ||　resultData[RESULT_KEY];

			let newData = {r:r,m:message,c:nCode,original:oAjax};        // 把接口数据 改为自己习惯的格式， 方便自己使用，  又保留原先的数据，防止有特殊的。

			if (nCode === undefined) {
				// vm.$Message.error('接口格式不对！');
				return resolve(newData);
			}else if(nCode === LOGIN_CODE) {
                vm.$message({
                    message:message,
                    type:'error',
                });
				vm.$router.push({
					name: 'login'
				});
				return reject(newData);
			}else if (nCode !== SUCCESS_CODE) {
				if(message === null){
					vm.$message({
                        message:'接口返回 null  ！',
                        type:'error',
                    });
				}else {
                    vm.$message({
                        message:message,
                        type:'error',
                    });
				}

				return reject(resultData);
			}

			resolve && resolve(newData);
		}).catch(reject);
	});
};
