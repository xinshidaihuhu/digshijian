$(function() {
    getUserInfo()

    function getUserInfo() {
        $.ajax({
            url: '/my/userinfo',
            // headers: {
            //     Authorzation: localStorage.getItem('token') || ''
            // },
            success: function(res) {}
        })

    }

    $('secede').on('click', function() {
        layer.confirm('确定退出？', { icon: 3, title: '提示' }),
            function(index) {
                localStorage.removeItem('token')
                localStorage.href = '/login.html'
                layer.close(index)
            }
    })
})