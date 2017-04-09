// 小屏幕设备下，点击导航，自动收起导航条
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// 设置导航离开顶部特效
$('#navbar').affix({
    offset: {
        top: 1
    }
});
// 动态更换logo
$(window).scroll(function() {
    if ($('#navbar').hasClass('affix')) {
        $('.logo').attr('src', 'image/com/bf-logo.png');
        $('.navbar-inverse .navbar-toggle .icon-bar').css({ 'backgroundColor': '#000' });
    } else {
        $('.logo').attr('src', 'image/com/bf-w-logo.png');
        $('.navbar-inverse .navbar-toggle .icon-bar').css({ 'backgroundColor': '#fff' });
    }
});