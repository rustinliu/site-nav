dayjs.locale("zh-cn");
setInterval(() => {
    $("#rlTime").text(dayjs().format("YYYY年MM月DD日HH时mm分ss秒 dddd"));
}, 1000);

function footerPosition() {
    console.log("1");
    $(".globefooter").removeClass("fixed-bottom");

    let contentHeight = document.body.scrollHeight, //网页正文全文高度
        winHeight = window.innerHeight; //可视窗口高度，不包括浏览器顶部工具栏

    if (!(contentHeight > winHeight)) {
        //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
        $(".globefooter").addClass("fixed-bottom");
    }
}
footerPosition();
$(window).resize(footerPosition);
