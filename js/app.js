$(document).ready(function(){

    $(".menus").click(function(){
        $(".ui").addClass("useri");
        $(".menus").removeClass("menuicons");
        $(".menuimgs").hide();
        $(".firstj").addClass("first");
        $(".boxs").addClass("heros");
    });

    $(".menuitems").click(function(){
        $(this).addClass("activeitems").siblings().removeClass("activeitems");
    });

});