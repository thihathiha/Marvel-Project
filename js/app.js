$(document).ready(function(){

    $(".menus").click(function(){
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
        // opacity 1 for heros 
        $(".boxs").addClass("heros");

        $("#nav").show();
        $("footer").hide();

        $(window).scrollTop(0);
    });

    $(".menuitems").click(function(){
        $(this).addClass("activeitems").siblings().removeClass("activeitems");
        $(window).scrollTop(0);

        // for roles 
        let getattvalue = $(this).attr("data-filter");
        // console.log(getattvalue);

        if (getattvalue === "all"){
            $(".roles").show();
        }else{
            $(".roles").hide();
            $(".roles").filter("." + getattvalue).show();
        }
    });

});