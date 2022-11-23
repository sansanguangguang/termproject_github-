// 返回顶部功能函数封装
// 页面加载完成
$(function() {
    // 把函数挂在window上 暴露出去
    window.gotoTop = function(options) {
        console.log(options)
            // 准备结构
        var $gotoTopHtml = $(`<div class="backToTop">
        <img src="${options.imgUrl}" alt="">
        </div>`);
        // 样式定位
        $gotoTopHtml.css({
                width: '30px',
                height: '50px',
                backgroundColor: 'red',
                position: 'fixed',
                bottom: options.bottom,
                left: '610px',
                marginLeft: '50%',
                // display: 'none',
            })
            // 返回顶部的js效果
            // 返回顶部
            // 绑定滚动事件
        $(document).scroll(function() {
                // 获取距离顶部的位置
                var topDistance = $('html,body').scrollTop();
                if (topDistance > 500) {
                    $('.backToTop').fadeIn();
                } else {
                    $('.backToTop').fadeOut();
                }
            })
            // 返回顶部功能（动态添加的元素 需要使用事件委托 才能绑定事件）
        $('body').on('click', '.backToTop', function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 300)
            })
            // 追加到页面的尾部
        $('body').append($gotoTopHtml)
    }
})