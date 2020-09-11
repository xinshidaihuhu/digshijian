$.ajaxPrefilter(function(options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
        // 统一为有权限的接口，设置headers请求头
    if (options.url.index('/mym') !== -1) {
        options.headers = {
            Authorzation: localStorage.getItem('token') || ''
        }
    }
    options.complete = function(res) {
        if (res.response.JSON.status == 1 && res.responseJSON.message == '身份验证失败！') {
            localStorage.removeItem('token')
            localtion.href = '/login.html/'
        }
    }
})