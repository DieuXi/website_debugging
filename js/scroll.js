$( document ).ready(function() {
// $(".container_3").scroll(function() {
//     if($(this).scrollTop()  > 0) {
//     	alert("Hello! I am an alert box!!");
//         $(".hlogo").css("width","50%");    
//     } else {
//         $(".hlogo").css("width","100%");    
//     }

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 0 || openprojectid != 0) {
        $(".hlogo").css("width","50%");    
        $("#tagline").css("font-size","18px");  
        $("#tagline").css("left","130px");
        $("#tagline").css("top","45px");
        $("#navcontainer").css("top","81px");
        $("#main").css("margin-top","180px");
        $("#headerbackground").css("height","100px");
        $(".contact_info").css("display","none");

    }else{
    	$(".hlogo").css("width","100%");    
        $("#tagline").css("font-size","26px");  
        $("#tagline").css("left","240px");
        $("#tagline").css("top","85px");
        $("#navcontainer").css("top","161px");
        $("#main").css("margin-top","261px");
        $("#headerbackground").css("height","261px");
        $(".contact_info").css("display","block");



    }
});





// window.onscroll = function (e) {  

//     	alert("Hello! I am an alert box!!");

//     };



    });