function footerPosition(){$(".globefooter").removeClass("fixed-bottom"),document.body.scrollHeight<=window.innerHeight&&$(".globefooter").addClass("fixed-bottom")}footerPosition(),$(window).resize(footerPosition);const data=localStorage.getItem("data"),xObject=JSON.parse(data),hashMap=xObject||[{logo:"W",url:"https://wangdoc.com/"},{logo:"J",url:"https://www.jquery123.com/"},{logo:"N",url:"http://nodejs.cn/"}],simplifyUrl=o=>o.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,""),render=()=>{$(".webclt").find("li:not(#addwebclt)").remove(),hashMap.forEach(((o,e)=>{const n=$(`\n                <li>\n                    <a href="${o.url}">\n                        <svg class="icon">\n                            <use xlink:href="#icon-16gl-${o.logo}"></use>\n                        </svg>\n                        <span>${simplifyUrl(o.url)}</span>\n                    </a>\n                    <div class="close">\n                <svg class="iconclose">\n                <use xlink:href="#icon-16gl-cross"></use>\n                </svg>\n                </div>\n                <div class="mod">\n                <svg class="iconmod">\n                <use xlink:href="#icon-16gl-gear"></use>\n                </svg>\n                </div>\n                </li>\n      `).insertBefore($("#addwebclt"));footerPosition(),n.on("click",".close",(o=>{o.stopPropagation(),hashMap.splice(e,1),render(),o.pageY!==o.clientY&&window.scrollTo(o.pageX+o.clientX,o.pageY+o.clientY);const n=JSON.stringify(hashMap);localStorage.setItem("data",n)})),n.on("click",".mod",(o=>{o.stopPropagation(),$(".cover").height(window.innerHeight-document.body.scrollHeight>=0?window.innerHeight:document.body.scrollHeight),stop(),$(".mdialog").html('<span>请输入网址：</span>\n            <input type="url" id="modweburl" />\n            <span class="btn">\n                <button id="confirmmod">修改</button>\n                <button id="cancel">取消</button>\n            </span>'),$("#modweburl").val(hashMap[e].url),$("#addmodal").removeClass("modaldisabled"),$("#modweburl").focus(),$("#cancel").on("click",cancelevt),$("#confirmmod").on("click",{value:e},confirmmodevt)}))}))};function confirmmodevt(o){let e=$("#modweburl").val();index=o.data.value,0!==e.indexOf("http")&&(e="https://"+e),hashMap[index].url=e,hashMap[index].logo=simplifyUrl(e)[0].toUpperCase(),render();const n=JSON.stringify(hashMap);localStorage.setItem("data",n),$("#cancel").click()}function cancelevt(){move(),$(".mdialog").html(""),$("#addmodal").addClass("modaldisabled"),$("#cancel")&&$("#cancel").off("click",cancelevt),$("#confirm")&&$("#confirm").off("click",confirmevt),$("#confirmmod")&&$("#confirmmod").off("click",confirmmodevt),window.scroll(0,document.body.scrollHeight)}function confirmevt(){let o=$("#addweburl").val();0!==o.indexOf("http")&&(o="https://"+o),hashMap.push({logo:simplifyUrl(o)[0].toUpperCase(),url:o}),render();const e=JSON.stringify(hashMap);localStorage.setItem("data",e),$("#cancel").click()}function stop(){document.body.style.overflow="hidden",document.addEventListener("touchmove",(function(o){}),!1)}function move(){document.body.style.overflow="",document.removeEventListener("touchmove",(function(o){}),!1)}render(),$("#addwebclt").on("click",(function(o){o.preventDefault(),$(".cover").height(window.innerHeight-document.body.scrollHeight>=0?window.innerHeight:document.body.scrollHeight),stop(),$(".mdialog").html('<span>请输入网址：</span>\n    <input type="url" id="addweburl" />\n    <span class="btn">\n        <button id="confirm">确定</button>\n        <button id="cancel">取消</button>\n    </span>'),$("#addmodal").removeClass("modaldisabled"),$("#cancel").on("click",cancelevt),$("#confirm").on("click",confirmevt),$("#addweburl").focus()})),$(document).on("keyup",(o=>{const{key:e,keyCode:n}=o;"Enter"!==e||$("#addmodal").hasClass("modaldisabled")?27!==n||$("#addmodal").hasClass("modaldisabled")||$("#cancel").click():($("#confirm").click(),$("#confirmmod").click())})),dayjs.locale("zh-cn");const sctime=()=>{setTimeout((()=>{$("#rlTime").text(dayjs().format("YYYY年MM月DD日HH时mm分ss秒 dddd")),sctime()}),500)};sctime();
//# sourceMappingURL=index.ac488ecb.js.map
