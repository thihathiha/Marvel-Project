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

        $(".skilltexttext5").hide();
        $(".skillicon5").removeClass("skillbtn");
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

        $(".skilltexttext5").hide();
        $(".skillicon5").removeClass("skillbtn");
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

        $(".skilltexttext5").hide();
        $(".skillicon5").removeClass("skillbtn");
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

        $(".skilltexttext5").hide();
        $(".skillicon5").removeClass("skillbtn");
    });

    // return home 
    $(".skilltexttext4").click(function(){
        $(this).hide();
        $(".skillicon4").removeClass("skillbtn");
    });    

     // Skill-5 icon 
     $(".skillicon5").click(function(){
        $(this).addClass("skillbtn");
        $(".skilltexttext5").removeClass("skilltextcontrol");

        $(".skilltexttext5").show();  

         // change from other icons 
         $(".skilltexttext1").hide();
         $(".skillicon1").removeClass("skillbtn");

         $(".skilltexttext2").hide();
        $(".skillicon2").removeClass("skillbtn");

        $(".skilltexttext3").hide();
        $(".skillicon3").removeClass("skillbtn");

        $(".skilltexttext4").hide();
        $(".skillicon4").removeClass("skillbtn");
    });

    // return home 
    $(".skilltexttext5").click(function(){
        $(this).hide();
        $(".skillicon5").removeClass("skillbtn");
    });

    // 3 skills Heroes

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

     // Groot Profile
     $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#grootprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros11").click(function(){
        $("#grootprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Scarlet Witch Profile
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#scarletwitchprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros13").click(function(){
        $("#scarletwitchprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });
    
    // Vision Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#visionprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros14").click(function(){
        $("#visionprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Thor Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#thorprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros15").click(function(){
        $("#thorprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

     // Winter Soldier Profile 
     $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#wintersoldierprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros16").click(function(){
        $("#wintersoldierprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Ronan Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#ronanprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros18").click(function(){
        $("#ronanprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Deadpool Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#deadpoolprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros20").click(function(){
        $("#deadpoolprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

     // Colossus Profile 
     $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#colossusprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros21").click(function(){
        $("#colossusprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Captain Marvel Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#captainmarvelprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros24").click(function(){
        $("#captainmarvelprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Iron Fist Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#ironfistprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros26").click(function(){
        $("#ironfistprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Yondu Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#yonduprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros28").click(function(){
        $("#yonduprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

     // Hawkeye Profile 
     $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $("#hawkeyeprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros30").click(function(){
        $("#hawkeyeprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // 4 skills Heroes

    // Dr Strange Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $(".skilltexttext5").hide();
        $("#drstrangeprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros3").click(function(){
        $("#drstrangeprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Loki Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $(".skilltexttext5").hide();
        $("#lokiprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros9").click(function(){
        $("#lokiprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Black Widow Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $(".skilltexttext5").hide();
        $("#blackwidowprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros12").click(function(){
        $("#blackwidowprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

     // Ant Man Profile 
     $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $(".skilltexttext5").hide();
        $("#antmanprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros17").click(function(){
        $("#antmanprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Black Panther Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $(".skilltexttext5").hide();
        $("#blackpantherprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros19").click(function(){
        $("#blackpantherprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

    // Mysterio Profile 
    $(".backbtn").click(function(){
        $(".skilltexttext1").hide();
        $(".skilltexttext2").hide();
        $(".skilltexttext3").hide();
        $(".skilltexttext4").hide();
        $(".skilltexttext5").hide();
        $("#mysterioprofile").hide();  
        $("header").show();
        $(".header").show();
        $(".firstj").show();
    });

    $(".heros22").click(function(){
        $("#mysterioprofile").show();   
        $("header").hide();
        $(".header").hide();
        $(".firstj").hide();
    });

});