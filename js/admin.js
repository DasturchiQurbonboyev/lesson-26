let isLogin = localStorage.getItem("token")


function checkIsLogin() {
    if (!isLogin) {
        window.location.replace("../index.html")
    }
}

checkIsLogin()
