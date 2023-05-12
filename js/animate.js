function animate(obj, target, callback) {
    //当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长写到定时器里
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }
            //跟上面的一样的
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}