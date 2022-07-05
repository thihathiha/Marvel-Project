$(document).ready(function(){

    $("#nav").hide();

    $(".menus").click(function(){
        // for body overflow hidden
        $("body").addClass("bodyclass");
        // for loading 
        $(".loading").show();
        // for marvellogo 
        $(".header").addClass("fheader");
        $(".headerimage").addClass("headerimg");
        // for herobg 
        $(".ui").addClass("useri");
        // remove avenger icon and text
        $(".menus").removeClass("menuicons");
        $(".menuimgs").hide();
        // add black background 
        $(".firstj").addClass("first");
        $(".firstj").addClass("first1");
        // opacity 1 for heros 
        $(".boxs").addClass("heros");
        $(".boxs").addClass("hheros");
        // remove loading 
        $(".loading").addClass("delbar");

        $("#nav").show();
        $("footer").hide();

        $(window).scrollTop(0);
    });

    $(".menuitems").click(function(){
        // for animation none 
        $(".firstj").removeClass("first1");
        $(".boxs").removeClass("hheros");

        $(this).addClass("activeitems").siblings().removeClass("activeitems");
        $(window).scrollTop(0);

        // for roles 
        let getattvalue = $(this).attr("data-filter");
        console.log(getattvalue);

        if (getattvalue === "all"){
            $(".roles").show();
        }else{
            $(".roles").hide();
            $(".roles").filter("." + getattvalue).show();
        }
    });

});