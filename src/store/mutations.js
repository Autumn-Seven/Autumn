const ADDCOUNT = 'ADDCOUNT';
const USER_LOGIN = 'USER_LOGIN';
const USR_LOGOUT = 'USR_LOGOUT';
const HEAD_LINE = 'HEAD_LINE';
export default{
    [ADDCOUNT](state){
        state.count ++
    },
    [USER_LOGIN](state,data){

        console.log( data );
        let username = 'xiaoli'
        let token = '13241234234'
        sessionStorage.setItem('userName',username);
        sessionStorage.setItem('userId',token )
        state.token =token;
        state.isLogin = token;
        state.userName = username;
    },
    [USR_LOGOUT](state){
        sessionStorage.clear();
        state.token = null;
        state.isLogin = null;        
    },
    [HEAD_LINE](state,headline){
        state.headline  = headline
      }
}