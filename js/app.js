$(document).ready(function(){

    $(".headerimg").hide();

    $(".menus").click(function(){
        // for marvellogo 
        $(".header").addClass("fheader");
        $(".headerimg").show();
        // for herobg 
        $(".ui").addClass("useri");
        // remove avenger icon and text
        $(".menus").removeClass("menuicons");
        $(".menuimgs").hide();
        // add black background 
        $(".firstj").addClass("first");
        // opacity 1 for heros 
        $(".boxs").addClass("heros");
    });

    $(".menuitems").click(function(){
        $(this).addClass("activeitems").siblings().removeClass("activeitems");

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