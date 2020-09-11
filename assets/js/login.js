$(function() {
$('#sign_in').on('click', function() {
    $(this).parents('#enroll').hide()
    $('#enter').show()
})
$('#ring_up').on('click', function() {
    $(this).parents('#enter').hide()
    $('#enroll').show()
})
var form = layui.form
form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        // 校验两次密码是否一致
        repwd: function(value) {
            var pwd = $('#enter [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致'
            }
        }
    })
    // 监听注册表单的提交条件
$('#form_down').on('click', function(e) {
        e.preventDefault()
        var data = {
            username: $('#enter [name="username"]').val(),
            password: $('#enter [name="password"]').val()
        }
        $.post({
            url: '/api/reguser',
            data: data,
            success: function(res) {
                console.log(res)
                    // if ($('#enter [name="username"]').val() == xxxx) {
                    //     return layer.msg('你三天之内必心想事成');
                    // }
                    // layer.msg('注册成功')
                    // $('#sign_in').click()
            }
        })
    })
    // 监听登录表单的提交条件
$('#form_login').on('click', function(e) {
    e.preventDefault()

})

})
























})