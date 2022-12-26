/**
 * 注册功能模块
 */
$(function() {
    //调用验证插件
    $('#registerForm').validate({
        //验证规则
        rules: {
            //用户名验证
            username: {
                required: true, //非空验证
                rangelength: [3, 6] //长度 
            },
            //密码验证
            password: {
                required: true, //非空验证
                isPassword: true //自定义密码验证
            },
            //确认密码
            checkPassword: {
                required: true, //非空验证
                equalTo: "#password" //密码一致性验证
            },
            //手机号
            tel: {
                required: true, //非空验证
                isTel: true //自定义号码验证
            }
        },
        //提示信息
        messages: {
            //用户名提示信息
            username: {
                required: '用户名不能为空哦!', //非空提示
                rangelength: '用户名长度3~6位哦' //长度提示
            },
            //密码提示信息
            password: {
                required: '密码不能为空哦!', //非空提示
                isPassword: '亲!请输入5~10为，以字母开头、可带数字、“_”、“.”的字符串哟!' //密码格式提示
            },
            //确认密码提示信息
            checkPassword: {
                required: "请再次输入密码!", //非空验证
                equalTo: "两次密码不一致" //密码一致性提示
            },
            //电话号码提示信息
            tel: {
                required: '电话号码不得为空', //非空提示
                isTel: '电话号码格式不正确' //手机号格式提示
            }
        }
    })

    //密码自定义验证
    jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });
    //手机号自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg = /^[1]+[3,8,5,7,9]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });
})