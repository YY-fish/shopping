// window.addEventListener('load', function () {
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var focusWidth = focus.offsetWidth;

//     focus.addEventListener('mouseenter', function () {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//         clearInterval(timer);
//         timer = null;
//     })
//     focus.addEventListener('mouseleave', function () {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//         timer = setInterval(function () {
//             //手动调用点击事件
//             arrow_r.click();
//         }, 2000);
//     })
//     //动态生成小圆圈
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     for (var i = 0; i < ul.children.length; i++) {
//         var li = document.createElement('li');
//         //把li插入到ol里面
//         li.setAttribute('index', i);
//         //添加节点
//         ol.appendChild(li);
//         li.addEventListener('click', function () {
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             this.className = 'current';
//             //点击小圆圈，移动图片，移动的是ul
//             var index = this.getAttribute('index');
//             //当我们点击了某个小li 就要把这个li 的索引号给num
//             num = index;
//             //当我们点击了某个li 就要把这个li 的索引号给circle
//             circle = index
//             // num = circle = index
//             animate(ul, -index * focusWidth);
//         })
//     }
//     ol.children[0].className = 'current';
//     //克隆第一张图片,减少一个小圆圈
//     var first = ul.children[0].cloneNode(true);
//     ul.appendChild(first);

//     var num = 0;
//     var circle = 0;
//     arrow_r.addEventListener('click', function () {
//         if (num == ul.children.length - 1) {
//             ul.style.left = 0;
//             num = 0;
//         }
//         num++;
//         animate(ul, -num * focusWidth);
//         //点击右侧按钮，小圆圈跟着一起变化
//         circle++;
//         if (circle == ol.children.length) {
//             circle = 0;
//         }
//         circleChange();
//     });

//     arrow_l.addEventListener('click', function () {
//         if (num == 0) {
//             num = ol.children.length - 1;
//             ul.style.left = -num * focusWidth + 'px';

//         }
//         num--;
//         animate(ul, -num * focusWidth);
//         //点击右侧按钮，小圆圈跟着一起变化
//         circle--;
//         // if (circle < 0) {
//         //     circle = ol.children.length - 1;
//         // }
//         circle = circle < 0 ? ol.children.length - 1 : circle;

//         circleChange();
//     });
//     function circleChange() {
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         ol.children[circle].className = 'current';
//     }
//     //自动播放轮播图
//     var timer = setInterval(function () {
//         //手动调用点击事件
//         arrow_r.click();
//     }, 2000);
// })
window.addEventListener('load', function () {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用事件
            arrow_r.click();
        }, 2000)
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');


    for (var i = 0; i < ul.children.length; i++) {

        var li = document.createElement('li');
        // ol.setAttribute(li);
        li.setAttribute('index', i); //给index属性加索引号
        ol.appendChild(li);

        li.addEventListener('click', function () {

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');//设置自定义属性

            num = index;
            circle = index;

            animate(ul, -index * focusWidth);//点击小li让图片滚动


        })

    }
    ol.children[0].className = 'current';
    var num = 0;
    var circle = 0;
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });

            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth;

            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });

            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //自动播放
    var timer = setInterval(function () {
        //手动调用事件
        arrow_r.click();
    }, 2000);

});
//固定电梯
// $(function () {
//     //节流阀
//     var flag = true;
//     var toolTop = $(".recom").offset().top;
//     function toggleTool() {

//         if ($(document).scrollTop() >= toolTop) {
//             $(".fixedtool").fadeIn();
//         } else {
//             $(".fixedtool").fadeOut();

//         }

//     }
//     toggleTool();
//     $(window).scroll(function () {
//         toggleTool();
//         if (flag) {
//             $(".floor .w").each(function (i, ele) {
//                 if ($(document).scrollTop() >= $(ele).offset().top) {
//                     $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
//                 }
//             });
//         }
//     });
//     $(".fixedtool li").click(function () {
//         flag = false;
//         var current = $(".floor .w").eq($(this).index()).offset().top;
//         $("boby, html").stop().animate({
//             scrollTop: current
//         }, function () {
//             flag = true;
//         });
//         $(this).addClass("current").siblings().removeClass();
//     });

// })
$(function () {
    var boxTool = $(".recom").offset().top;
    function toggleTool() {
        if ($(document).scrollTop() >= boxTool) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    toggleTool();
    var flag = true;
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })

        }
    });
    $(".fixedtool li").click(function () {
        //获得点击后的索引号的 距离文档的值
        flag = false;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        console.log(this);
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass();

    })
})