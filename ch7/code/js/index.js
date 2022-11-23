/**
 * 乐购商城首页js
 * 2022/20/23 李鸿
 */
//当页面加载完毕
$(function() {
    /* 首页大图轮播 */
    $('#banner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 5, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    // 电子书轮播
    $('#ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    // 电子书轮播2
    $('#ebooks-banner2').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });

    // 电子书轮播3
    $('#ebooks-banner3').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });

    // 新书列表手风琴效果
    $('.ebooks .right-box ul > li').mouseenter(function() {
        // 所有:隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); //隐藏详情
        $(this).siblings().find('.ebooks-title').show(); //显示标题
        // 当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情
    });

    //tab内容切换效果
    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();
    var $lis = $('.ebooks .ebooks-nav > li');
    $lis.mouseenter(function() {
            $(this).addClass('active').siblings('li').removeClass('active');
            var index = $(this).index();
            var $ebookslist = $('.ebooks-list');
            $ebookslist.eq(index).show().siblings('.ebooks-list').hide();
        })
        // 服装轮播
    $('#clothes-banner').tyslide({
        boxh: 340, //盒子的高度
        w: 430, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    //tab内容切换效果
    $('.clothes .left-box .top .fr li').mouseenter(function() {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('clothes .left-box  div').eq(index).show().removeClass().hide();
        })
        // 运动服装轮播
    $('#sprot-banner').tyslide({
        boxh: 340, //盒子的高度
        w: 430, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    // 儿童服装轮播
    $('#children-clothes-banner').tyslide({
        boxh: 340, //盒子的高度
        w: 430, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    // 推广切换
    $('.promotion .promotion-title ul li').mouseenter(function() {
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active');
        // 内容切换
        // 获取对应的索引
        var index = $(this).index(); //0=>left:0 * 1170, 1 => left: -1 * 1170, 3=> left: -2 * 1170
        // 左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left': -index * 1170
        }, 500)
    });
    // 二维码滑出
    $('.qr-code .ticket').hover(function() {
            // 让二维码滑出来
            $('.qr-code div').stop(true).animate({
                left: "-100px"
            })
        }, function() {
            // 二维码回去
            $('.qr-code div').stop(true).animate({
                left: 0
            })
        })
        // 顶部搜索框
    $(document).scroll(function() {
            // 获取到顶部的距离
            var topDistance = $('html,body').scrollTop();
            // 判断
            if (topDistance > 500) {
                // 如果滚动距离大于500，出现
                $('.top-search-box').slideDown()
            } else {
                // 没有就不出来
                $('.top-search-box').slideUp()
            }
        })
        // 楼层跳转
    $('.floor li').click(function() {
        // 获取索引
        var index = $(this).index();
        // 选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;
        // 让滚动条滚到对应位置
        $('html,boy').animate({
            scrollTop: topOffset - 50
        })
    })
})