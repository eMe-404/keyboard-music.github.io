$("#navToggle").click(function () {
    $(".flex-nav ul").toggleClass("open");
});


$("#img").on("click",function(){
    changeImg();
});
 setTimeout(changeImg,1000);
function changeImg() {
    var randomImg = Math.round(Math.random() * 22);
    $("#img").attr("src", "wallPaper/(" + randomImg + ").jpg");
}

