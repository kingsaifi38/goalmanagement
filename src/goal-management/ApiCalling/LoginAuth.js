export const LoginAuth = {
    isLogin(userid, password) {
        return axios({
            method: 'post',
            url: '/api/loginauth',
            data: {
                userid: userid,
                password: password
            }
        });
    },
    makeSignUp(name, usename, password) {
        return axios({
            method: 'post',
            url: '/api/signup',
            data: {
                name: name,
                userid: usename,
                password: password
            }
        });
    }
}
