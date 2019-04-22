import store from '@/store'

export default {
	inserted(el, binding, vnode) {
		const permissionRole = binding.value
        // console.log(permissionRole)

		const hasPermission = checkPermission(permissionRole);
		if (!hasPermission) {
			el.parentNode && el.parentNode.removeChild(el)
		}
	}
}

export function checkPermission(permissionRole) {
	let currentRole = (store.state.user && store.state.user.role);

    // console.log(currentRole);

	if (permissionRole && Array.isArray(permissionRole)) {
		return permissionRole.indexOf(currentRole) > -1;
	} else {
		throw new Error(`Error! Please Enter Array Type"`)
	}
}
