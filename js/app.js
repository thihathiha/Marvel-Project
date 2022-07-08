$(document).ready(function(){

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


    // heroprofile html 

    // Skill-1 icon
    $(".skillicon1").click(function(){
        $(this).addClass("skillbtn");
        $(".skilltexttext1").removeClass("skilltextcontrol");

        $(".skilltexttext1").show();  

        // change from other icons 
        $(".skilltexttext2").hide();
        $(".skillicon2").removeClass("skillbtn");

        $(".skilltexttext3").hide();
        $(".skillicon3").removeClass("skillbtn");

        $(".skilltexttext4").hide();
        $(".skillicon4").removeClass("skillbtn");
    });

     // return home 
     $(".skilltexttext1").click(function(){
        $(this).hide();
        $(".skillicon1").removeClass("skillbtn");
    });


    // Skill-2 icon 
    $(".skillicon2").click(function(){
        $(this).addClass("skillbtn");
        $(".skilltexttext2").removeClass("skilltextcontrol");

        $(".skilltexttext2").show();  

         // change from other icons 
         $(".skilltexttext1").hide();
         $(".skillicon1").removeClass("skillbtn");

         $(".skilltexttext3").hide();
        $(".skillicon3").removeClass("skillbtn");

        $(".skilltexttext4").hide();
        $(".skillicon4").removeClass("skillbtn");
    });

    // return home 
    $(".skilltexttext2").click(function(){
        $(this).hide();
        $(".skillicon2").removeClass("skillbtn");
    });

     // Skill-3 icon 
     $(".skillicon3").click(function(){
        $(this).addClass("skillbtn");
        $(".skilltexttext3").removeClass("skilltextcontrol");

        $(".skilltexttext3").show();  

         // change from other icons 
         $(".skilltexttext1").hide();
         $(".skillicon1").removeClass("skillbtn");

         $(".skilltexttext2").hide();
        $(".skillicon2").removeClass("skillbtn");

        $(".skilltexttext4").hide();
        $(".skillicon4").removeClass("skillbtn");
    });

    // return home 
    $(".skilltexttext3").click(function(){
        $(this).hide();
        $(".skillicon3").removeClass("skillbtn");
    });

     // Skill-4 icon 
     $(".skillicon4").click(function(){
        $(this).addClass("skillbtn");
        $(".skilltexttext4").removeClass("skilltextcontrol");

        $(".skilltexttext4").show();  

         // change from other icons 
         $(".skilltexttext1").hide();
         $(".skillicon1").removeClass("skillbtn");

         $(".skilltexttext2").hide();
        $(".skillicon2").removeClass("skillbtn");

        $(".skilltexttext3").hide();
        $(".skillicon3").removeClass("skillbtn");
    });

    // return home 
    $(".skilltexttext4").click(function(){
        $(this).hide();
        $(".skillicon4").removeClass("skillbtn");
    });    

    // Iron Man Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#ironmanprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros1").click(function(){
        $("#ironmanprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Captain America Profile
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#captainamericaprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros2").click(function(){
        $("#captainamericaprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Hulk Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#hulkprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros4").click(function(){
        $("#hulkprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Mantis Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#mantisprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros5").click(function(){
        $("#mantisprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Rocket Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#rocketprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros6").click(function(){
        $("#rocketprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    }); 

    // Spider Man Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#spidermanprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros8").click(function(){
        $("#spidermanprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Starlord Profile
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#starlordprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros10").click(function(){
        $("#starlordprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });
   


   

});