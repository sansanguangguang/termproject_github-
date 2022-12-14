// 购物车js文件
$(function() {
    // 全选
    /*
    1.点击表头的全选框 获取表头全选框选中的状态
    2.表格中的选择框状态一致
    3.结算中的反选状态一致
    */
    //    定义三个变量
    var $theadInput = $('table thead input[type=checkbox]'); //头部选择款
    var $bodyInput = $('table tbody input[type=checkbox]'); //中间选择框
    var $allPriceInput = $('.totalPrice input[type=checkbox]'); //结算选择框

    $theadInput.change(function() {
        // 获取选中状态
        var state = $(this).prop('checked');
        // 让表格中的选中框保持一致 且结算中的选择框状态保持一致
        $bodyInput.prop('checked', state);
        $allPriceInput.prop('checked', state);
        //调用计算总价函数
        clacTotalPrice();
    })

    // 结算中的选中框，也需要有相同的选中功能
    $allPriceInput.change(function() {
        // 获取选中状态
        var state = $(this).prop('checked');
        // 上面的全选 和 表格中的input 状态需要保持一致
        $bodyInput.prop('checked', state);
        $theadInput.prop('checked', state);
        //调用计算总价函数
        clacTotalPrice();
    })

    // 表单中的选中状态 反过来影响全选
    $bodyInput.change(function() {
        // 顶一个标杆
        var flag = true;

        // 循环表格中所有选中框的选中状态
        $bodyInput.each(function(i, input) {
                if (!$(input).prop('checked')) { //只要一个选择框没有选择，那么状态就变为false
                    flag = false;

                }

            })
            // 把状态用来改变全选框
        $theadInput.prop('checked', flag)
        $allPriceInput.prop('checked', flag)
            //调用计算总价函数
        clacTotalPrice();

    })

    // 数量的加减
    // 加
    $('.add').on('click', function() {
            // 下一个input节点
            var $nextInput = $(this).next();
            // 获取输入框的值
            var oldVal = parseInt($nextInput.val());
            // 自增
            oldVal++;
            // 重新赋值这个输入框
            $nextInput.val(oldVal);
            // 小计
            subTotalPrice(oldVal, $(this));
            //调用计算总价函数
            clacTotalPrice();
        })
        // 减
    $('.reduce').on('click', function() {
            // 上一个input节点
            var $prevInput = $(this).prev();
            // 获取输入框的值
            var oldVal = parseInt($prevInput.val());
            // 自增
            oldVal--;
            oldVal = oldVal < 1 ? 1 : oldVal // 如果下于1 那么就等于1 否则就等于自己
                // 重新赋值这个输入框
            $prevInput.val(oldVal);
            // 小计
            subTotalPrice(oldVal, $(this));
            //调用计算总价函数
            clacTotalPrice();

        })
        // 抽取一个小计的函数
    function subTotalPrice(val, dom) {
        // 小计
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
        // 把小计的结果放入dom对应的位置
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));

    }
    // 删除
    $('.del').click(function() {
            // 删除整行
            $(this).closest('tr').remove();
            clacGoodsCount() //调用商品总数量
        })
        //计算总价的函数
    function clacTotalPrice() {
        //定一个数量
        var count = 0;
        //定义变量 保持总价格
        var totalPrice = 0;
        //循环表格中的所有选择框 如果是选中的状态 那么计算总价
        $('table tbody input[type=checkbox]').each(function(i, input) {
            if ($(input).prop('checked')) {
                //自增
                count++;
                //累加价格
                totalPrice += parseFloat($(input).closest('tr').find('.subprice').text())
            }
        })

        //把总价渲染到对应的位置
        $('.total').text(totalPrice.toFixed(2))

        //把数量渲染到对应的dom位置
        $('.count').text(count)
    }
    //全部商品
    function clacGoodsCount() {
        $('.goodscount').text($('table tbody tr').length)
    }
    clacGoodsCount(); //进入界面 自动调用一次

    //删除选中商品
    $('.deleteChecked').on('click', function() {
        //循环单选框 如果选中就干掉自己（删除的一行）
        $bodyInput.each(function(i, input) {
            if ($(this).prop('checked')) {
                $(this).closest('tr').remove();
            }
        })

        //计算总价
        clacTotalPrice();
        //计算商品数量
        clacGoodsCount();
    })

})