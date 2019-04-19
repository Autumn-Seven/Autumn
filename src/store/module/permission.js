import utiljs from '@/libs/util.min';
import { AJAX_OAUTH } from '@/dim/ajaxSource';
import {
	CODE_KEY,
	MESSAGE_KEY,
	RESULT_KEY,
	SUCCESS_CODE
} from '@/dim/ajaxStruct';
import  {generateRoutesFromBackData, staticRoutes}  from "@/router/apps/dev-wms";
import wmsStaticRoutes from '@/router/apps/dev-wms.js';
import { getMenuByRouter } from '@/libs/util'


const permission = {
	state: {
		/** 角色列表。 */
		roleList: [],

		/** 权限项列表。 */
		permissionList: JSON.parse(localStorage.getItem('permissionList')) || [],
	},


	getters: {
		/**
		 * 获取指定编号的角色数据项。
		 * 
		 * @param {Object} state
		 * @return {void}
		 */
		role(state) {
			/**
			 * @param {Number} nRoleId
			 * @return {Object}
			 */
			return (nRoleId) => state.filter(oItem => oItem.roleId === nRoleId)[0];
		},


		/**
		 * 获取权限组标记列表。
		 * 
		 * @param {Object} state 
		 * @return {Array}
		 */
		permissionGroupKeys(state) {
			let oGropuKeys = {};
			state.permissionList.forEach(oItem => {
				oGropuKeys[oItem.groupKey] = true;
			});

			return Object.keys(oGropuKeys).sort();
		},


		/**
		 * 获取权限类型列表。
		 * 
		 * @param {Object} state 
		 * @return {Array}
		 */
		permissionTypes(state) {
			let oTypes = {};
			state.permissionList.forEach(oItem => {
				oTypes[oItem.type] = true;
			});

			return Object.keys(oTypes).sort();
		},


		routesFromBack(state) {
			return generateRoutesFromBackData(state.permissionList);
		},

		wmsBusinessRoutes(state ,getter) {
			if(state.permissionList.length > 0){
				return getter.routesFromBack
			}
			return staticRoutes;
		},

		menuList(state,getter) {
			return getMenuByRouter(getter.wmsBusinessRoutes);
		},
	},


	mutations: {
		/**
		 * 更新角色列表。
		 * 
		 * @param {Object} state 
		 * @param {Array} aoList
		 * @return {void}
		 */
		setRoleList(state, aoList) {
			state.roleList = aoList;
		},


		/**
		 * 更新指定角色项。
		 * 
		 * @param {Object} state
		 * @param {Object} oRole
		 * @return {void}
		 */
		setRole(state, oRole) {
			let oItem = utiljs.getArrayItemByKey(state.roleList, 'roleId', oRole.roleId);

			if (oItem !== null) {
				Object.assign(oItem, oRole);
			} else {
				state.roleList.push(oRole);
			}
		},


		/**
		 * 更新指定角色项。
		 * 
		 * @param {Object} state
		 * @param {Number} nRoleId
		 * @return {void}
		 */
		removeRole(state, nRoleId) {
			let nIndex = utiljs.getArrayItemIndexByKey(state.roleList, 'roleId', nRoleId);

			if (nIndex !== -1) {
				state.roleList.splice(nIndex, 1);
			}
		},


		/**
		 * 更新权限项列表。
		 * 
		 * @param {Object} state 
		 * @param {String} aoList
		 * @return {void}
		 */
		setPermissionList(state, aoList) {
			state.permissionList = aoList;
			localStorage.setItem('permissionList',JSON.stringify(aoList))
		},


		/**
		 * 更新指定权限项。
		 * 
		 * @param {Object} state 
		 * @param {Object} oPermission 
		 * @return {void}
		 */
		setPermission(state, oPermission) {
			let oItem = utiljs.getArrayItemByKey(state.permissionList, 'permissionId', oPermission.permissionId);

			if (oItem !== null) {
				Object.assign(oItem, oPermission);
			} else {
				state.permissionList.push(oPermission);
			}
		},


		/**
		 * 更新指定角色项。
		 * 
		 * @param {Object} state
		 * @param {Number} permissionId
		 * @return {void}
		 */
		removePermission(state, permissionId) {
			let nIndex = utiljs.getArrayItemIndexByKey(state.permissionList, 'permissionId', permissionId);

			if (nIndex !== -1) {
				state.permissionList.splice(nIndex, 1);
			}
		},
	},


	actions: {
		/**
		 * 动态拉取角色列表记录，如果已存在则会跳过。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @returnl {void}
		 */
		pullRoleList({
			commit,
			state
		}, {
			vm
		}) {
			return new Promise((resolve, reject) => {
				if (state.roleList && state.roleList.length) {
					resolve && resolve();
					return;
				}

				vm.$ajax(AJAX_OAUTH).get('user/role/getList')
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							commit('setRoleList', oAjaxData[RESULT_KEY]);
							resolve && resolve();
						} else {
							vm.$Message.error('获取角色列表失败，' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 修改指定角色信息。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		createRole({
			commit
		}, {
			vm,
			data: oRole
		}) {
			return new Promise((resolve, reject) => {
				vm.$ajax(AJAX_OAUTH).post('user/role/create', oRole)
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							let nRoleId = oAjaxData[RESULT_KEY];

							oRole.roleId = nRoleId;
							commit('setRole', oRole);
							resolve && resolve(nRoleId);
						} else {
							vm.$Message.error('新增角色失败' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 修改指定角色信息。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		modifyRole({
			commit
		}, {
			vm,
			data: oRole
		}) {
			return new Promise((resolve, reject) => {
				vm.$ajax(AJAX_OAUTH).post('user/role/modify', oRole)
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							commit('setRole', oRole);
							resolve && resolve();
						} else {
							vm.$Message.error('修改角色失败' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 删除指定角色。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		deleteRole({
			commit
		}, {
			vm,
			data: nRoleId
		}) {
			return new Promise((reslove, reject) => {
				vm.$ajax(AJAX_OAUTH).get('user/role/delete', {
						params: {
							roleId: nRoleId
						}
					})
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							commit('removeRole', nRoleId);
							reslove && reslove();
						} else {
							vm.$Message.error('删除角色失败' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 动态摘取权限列表记录，如果已存在则会跳过。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		pullPermissionList({
			commit,
			state
		}, {
			vm
		}) {
			return new Promise((reslove, reject) => {
				if (state.permissionList && state.permissionList.length) {
					reslove && reslove();
					return;
				}


				vm.$ajax(AJAX_OAUTH).get('user/permission/getList')
					.then(oAjax => {
						let oAjaxData = oAjax.data;
						let nCode = oAjaxData[CODE_KEY];

						if (nCode == SUCCESS_CODE) {
							commit('setPermissionList', oAjaxData[RESULT_KEY]);
							reslove && reslove();
						} else if (nCode == 2002001) {
							vm.$store.commit('logout', vm);
						} else {
							vm.$Message.error('获取角色列表失败，' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 修改指定角色信息。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		createPermission({
			commit
		}, {
			vm,
			data: oPermission
		}) {
			return new Promise((resolve, reject) => {
				vm.$ajax(AJAX_OAUTH).post('user/permission/create', oPermission)
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							let nPermissionId = oAjaxData[RESULT_KEY];

							oPermission.permissionId = nPermissionId;
							commit('setPermission', oPermission);
							resolve && resolve(nPermissionId);
						} else {
							vm.$Message.error('新增角色失败' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 修改指定角色信息。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		modifyPermission({
			commit
		}, {
			vm,
			data: oPermission
		}) {
			return new Promise((resolve, reject) => {
				vm.$ajax(AJAX_OAUTH).post('user/permission/modify', oPermission)
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							commit('setPermission', oPermission);
							resolve && resolve();
						} else {
							vm.$Message.error('修改角色失败' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},


		/**
		 * 删除指定角色。
		 * 
		 * @param {Object}
		 * @param {Object} {vm, data}
		 * @return {void}
		 */
		deletePermission({
			commit
		}, {
			vm,
			data: nPermissionId
		}) {
			return new Promise((reslove, reject) => {
				vm.$ajax(AJAX_OAUTH).get('user/permission/delete', {
						params: {
							permissionId: nPermissionId
						}
					})
					.then(oAjax => {
						let oAjaxData = oAjax.data;

						if (oAjaxData[CODE_KEY] == SUCCESS_CODE) {
							commit('removePermission', nPermissionId);
							reslove && reslove();
						} else {
							vm.$Message.error('删除角色失败' + oAjaxData[MESSAGE_KEY]);
							reject && reject();
						}
					})
					.catch(reject);
			});
		},
	}
};

export default permission;
