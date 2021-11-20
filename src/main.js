footerPosition();
function footerPosition() {
    $(".globefooter").removeClass("fixed-bottom");

    let contentHeight = document.body.scrollHeight, //网页正文全文高度
        winHeight = window.innerHeight; //可视窗口高度，不包括浏览器顶部工具栏

    if (contentHeight <= winHeight) {
        //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
        $(".globefooter").addClass("fixed-bottom");
    }
}
$(window).resize(footerPosition);

const data = localStorage.getItem("data");
const xObject = JSON.parse(data);
const hashMap = xObject || [
    { logo: "V", url: "https://www.vuejs.org/" },
    { logo: "W", url: "https://wangdoc.com/" },
    { logo: "J", url: "https://www.jquery123.com/" },
];
const simplifyUrl = (url) => {
    return url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .replace(/\/.*/, ""); // 删除 / 开头的内容
};

const render = () => {
    $(".webclt").find("li:not(#addwebclt)").remove();
    hashMap.forEach((node, index) => {
        const $li = $(`
                <li>
                    <a href="${node.url}">
                        <svg class="icon">
                            <use xlink:href="#icon-16gl-${node.logo}"></use>
                        </svg>
                        <span>${simplifyUrl(node.url)}</span>
                    </a>
                    <div class="close">
                <svg class="iconclose">
                <use xlink:href="#icon-16gl-cross"></use>
                </svg>
                </div>
                </li>
      `).insertBefore($("#addwebclt"));
        footerPosition();
        $li.on("click", ".close", (e) => {
            e.stopPropagation(); // 阻止冒泡
            hashMap.splice(index, 1);
            render();
            window.scrollTo(e.pageX + e.clientX, e.pageY + e.clientY);
            const string = JSON.stringify(hashMap);
            localStorage.setItem("data", string);
        });
    });
};

render();

dayjs.locale("zh-cn");
setInterval(() => {
    $("#rlTime").text(dayjs().format("YYYY年MM月DD日HH时mm分ss秒 dddd"));
}, 1000);

$("#addwebclt").on("click", function () {
    //计算cover的高度
    $(".cover").height(
        window.innerHeight - document.body.scrollHeight >= 0
            ? window.innerHeight
            : document.body.scrollHeight
    );
    stop();
    $("#addmodal").removeClass("modaldisabled");
    $("#addweburl").focus();
});

$("#cancel").on("click", function () {
    move();
    $("#addweburl").val("");
    $("#addmodal").addClass("modaldisabled");
    window.scroll(0, document.body.scrollHeight);
});

$("#confirm").on("click", function () {
    let url = $("#addweburl").val();
    if (url.indexOf("http") !== 0) {
        url = "https://" + url;
    }
    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url,
    });
    render();
    const string = JSON.stringify(hashMap);
    localStorage.setItem("data", string);
    $("#cancel").click();
});
function stop() {
    let mo = function (e) {
        passive: false;
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", mo, false); //禁止页面滑动
}
//取消滚动限制
function move() {
    let mo = function (e) {
        passive: false;
    };
    document.body.style.overflow = ""; //出现滚动条
    document.removeEventListener("touchmove", mo, false);
}

$(document).on("keypress", (e) => {
    const { key } = e;
    console.log(key);
    //实现添加时回车即确认功能
    if (key === "Enter" && !$("#addmodal").hasClass("modaldisabled")) {
        $("#confirm").click();
    }
});
