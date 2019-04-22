import Vue from 'vue';
import Vuex from 'vuex';
// import app from './module/app'
// import permission from './module/permission'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       user:{
           address: "0",
           id: "",
           job: "",
           name: "",
           password: "",
           phone: "",
           role: '',
           username: "",
       }
    },
    mutations: {
        setUser(state, user) {
            state.user.id = user.id;
            state.user.name = user.name;
            state.user.password = user.password;
            state.user.phone = user.phone;
            state.user.role = user.role;
            state.user.address = user.address;
            state.user.username = user.username;
            state.user.job = user.job;
        },
    },
    actions: {
        //
    },
    modules: {
        // app,
        // nuser,
        // permission
    },
});
