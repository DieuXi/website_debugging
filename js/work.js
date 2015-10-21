// JavaScript Document
var activeprojectid;
var openprojectid = 0;
var projectcount = 13;

var imagearray = ['img/work/project4/Prj4_Gal1.jpg','img/work/project4/Prj4_Gal2.jpg','img/work/project4/Prj4_Gal3.jpg','img/work/project4/Prj4_Gal4.jpg','img/work/project4/Prj4_Gal5.jpg','img/work/project4/Prj4_Gal6.jpg',
'img/work/project4/Prj4_Gal7.jpg','img/work/project4/Prj4_Gal8.jpg','img/work/project4/Prj4_Gal9.jpg','img/work/project4/Prj4_Gal10.jpg','img/work/project4/Prj4_Gal11.jpg','img/work/project4/Prj4_Gal12.jpg','img/work/project4/Prj4_Gal13.jpg',
'img/work/project4/Prj4_Gal14.jpg','img/work/project4/Prj4_Gal15.jpg','img/work/project4/Prj4_Gal16.jpg'];
var imagecount = 16;
var imageindex = 0;
var nextimageindex;
var previmageindex;
var gallerylock = 0;

var imagearray2 = ['img/work/project7/Prj7_Img1.jpg','img/work/project7/Prj7_Img2.jpg','img/work/project7/Prj7_Img3.jpg','img/work/project7/Prj7_Img4.jpg','img/work/project7/Prj7_Img5.jpg','img/work/project7/Prj7_Img6.jpg',
'img/work/project7/Prj7_Img7.jpg','img/work/project7/Prj7_Img8.jpg','img/work/project7/Prj7_Img9.jpg','img/work/project7/Prj7_Img10.jpg','img/work/project7/Prj7_Img11.jpg','img/work/project7/Prj7_Img12.jpg','img/work/project7/Prj7_Img13.jpg',
'img/work/project7/Prj7_Img14.jpg','img/work/project7/Prj7_Img15.jpg','img/work/project7/Prj7_Img16.jpg','img/work/project7/Prj7_Img17.jpg','img/work/project7/Prj7_Img18.jpg'];
var imagecount2 = 18;
var imageindex2 = 0;
var nextimageindex2;
var previmageindex2;
var gallerylock2 = 0;

var imagearray3 = ['img/work/project8/Prj8_Img1.jpg','img/work/project8/Prj8_Img2.jpg','img/work/project8/Prj8_Img3.jpg','img/work/project8/Prj8_Img4.jpg','img/work/project8/Prj8_Img5.jpg','img/work/project8/Prj8_Img6.jpg',
'img/work/project8/Prj8_Img7.jpg','img/work/project8/Prj8_Img8.jpg'];
var imagecount3 = 8;
var imageindex3 = 0;
var nextimageindex3;
var previmageindex3;
var gallerylock3 = 0;

var imagearray4 = ['img/work/project9/Prj9_Img1.jpg','img/work/project9/Prj9_Img2.jpg','img/work/project9/Prj9_Img3.jpg','img/work/project9/Prj9_Img5.jpg','img/work/project9/Prj9_Img6.jpg'];
var imagecount4 = 5;
var imageindex4 = 0;
var nextimageindex4;
var previmageindex4;
var gallerylock4 = 0;

var imagearray5 = ['img/work/project11/slideshow1/Prj11_Img01.jpg','img/work/project11/slideshow1/Prj11_Img02.jpg','img/work/project11/slideshow1/Prj11_Img03.jpg','img/work/project11/slideshow1/Prj11_Img04.jpg','img/work/project11/slideshow1/Prj11_Img05.jpg','img/work/project11/slideshow1/Prj11_Img06.jpg','img/work/project11/slideshow1/Prj11_Img07.jpg','img/work/project11/slideshow1/Prj11_Img08.jpg','img/work/project11/slideshow1/Prj11_Img09.jpg','img/work/project11/slideshow1/Prj11_Img10.jpg','img/work/project11/slideshow1/Prj11_Img11.jpg','img/work/project11/slideshow1/Prj11_Img12.jpg','img/work/project11/slideshow1/Prj11_Img13.jpg','img/work/project11/slideshow1/Prj11_Img14.jpg','img/work/project11/slideshow1/Prj11_Img15.jpg','img/work/project11/slideshow1/Prj11_Img16.jpg','img/work/project11/slideshow1/Prj11_Img17.jpg','img/work/project11/slideshow1/Prj11_Img18.jpg','img/work/project11/slideshow1/Prj11_Img19.jpg','img/work/project11/slideshow1/Prj11_Img20.jpg','img/work/project11/slideshow1/Prj11_Img21.jpg','img/work/project11/slideshow1/Prj11_Img22.jpg','img/work/project11/slideshow1/Prj11_Img23.jpg','img/work/project11/slideshow1/Prj11_Img24.jpg','img/work/project11/slideshow1/Prj11_Img25.jpg','img/work/project11/slideshow1/Prj11_Img26.jpg','img/work/project11/slideshow1/Prj11_Img27.jpg','img/work/project11/slideshow1/Prj11_Img28.jpg','img/work/project11/slideshow1/Prj11_Img29.jpg','img/work/project11/slideshow1/Prj11_Img30.jpg','img/work/project11/slideshow1/Prj11_Img31.jpg','img/work/project11/slideshow1/Prj11_Img32.jpg','img/work/project11/slideshow1/Prj11_Img33.jpg','img/work/project11/slideshow1/Prj11_Img34.jpg','img/work/project11/slideshow1/Prj11_Img35.jpg','img/work/project11/slideshow1/Prj11_Img36.jpg','img/work/project11/slideshow1/Prj11_Img37.jpg','img/work/project11/slideshow1/Prj11_Img38.jpg','img/work/project11/slideshow1/Prj11_Img39.jpg','img/work/project11/slideshow1/Prj11_Img40.jpg','img/work/project11/slideshow1/Prj11_Img41.jpg','img/work/project11/slideshow1/Prj11_Img42.jpg','img/work/project11/slideshow1/Prj11_Img43.jpg','img/work/project11/slideshow1/Prj11_Img44.jpg','img/work/project11/slideshow1/Prj11_Img45.jpg','img/work/project11/slideshow1/Prj11_Img46.jpg','img/work/project11/slideshow1/Prj11_Img47.jpg','img/work/project11/slideshow1/Prj11_Img48.jpg','img/work/project11/slideshow1/Prj11_Img49.jpg','img/work/project11/slideshow1/Prj11_Img50.jpg','img/work/project11/slideshow1/Prj11_Img51.jpg','img/work/project11/slideshow1/Prj11_Img52.jpg','img/work/project11/slideshow1/Prj11_Img53.jpg','img/work/project11/slideshow1/Prj11_Img54.jpg','img/work/project11/slideshow1/Prj11_Img55.jpg','img/work/project11/slideshow1/Prj11_Img56.jpg','img/work/project11/slideshow1/Prj11_Img57.jpg','img/work/project11/slideshow1/Prj11_Img58.jpg','img/work/project11/slideshow1/Prj11_Img59.jpg','img/work/project11/slideshow1/Prj11_Img60.jpg','img/work/project11/slideshow1/Prj11_Img61.jpg','img/work/project11/slideshow1/Prj11_Img62.jpg','img/work/project11/slideshow1/Prj11_Img63.jpg','img/work/project11/slideshow1/Prj11_Img64.jpg','img/work/project11/slideshow1/Prj11_Img65.jpg','img/work/project11/slideshow1/Prj11_Img66.jpg','img/work/project11/slideshow1/Prj11_Img67.jpg','img/work/project11/slideshow1/Prj11_Img68.jpg'];
var imagecount5 = 68;
var imageindex5 = 0;
var nextimageindex5;
var previmageindex5;
var gallerylock5 = 0;

var imagearray6 = ['img/work/project11/slideshow2/Prj11_Img01.jpg','img/work/project11/slideshow2/Prj11_Img02.jpg','img/work/project11/slideshow2/Prj11_Img03.jpg','img/work/project11/slideshow2/Prj11_Img04.jpg','img/work/project11/slideshow2/Prj11_Img05.jpg','img/work/project11/slideshow2/Prj11_Img06.jpg','img/work/project11/slideshow2/Prj11_Img07.jpg','img/work/project11/slideshow2/Prj11_Img08.jpg','img/work/project11/slideshow2/Prj11_Img09.jpg','img/work/project11/slideshow2/Prj11_Img10.jpg','img/work/project11/slideshow2/Prj11_Img11.jpg','img/work/project11/slideshow2/Prj11_Img12.jpg','img/work/project11/slideshow2/Prj11_Img13.jpg'];
var imagecount6 = 13;
var imageindex6 = 0;
var nextimageindex6;
var previmageindex6;
var gallerylock6 = 0;


function preloadimages(arr){
    var newimages=[], loadedimages=0
    var postaction=function(){}
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done:function(f){
            postaction=f || postaction //remember user defined callback functions to be called when images load
        }
    }
}

$(document).ready(function () {

  if (location.href.indexOf('?w=') != -1){
    activeprojectid = gup('w');

    if (openprojectid == 0)
    {
        openprojectid = activeprojectid;
        $('#prevproj').fadeIn('fast');
        $('#nextproj').fadeIn('fast');
        $('#headline').slideUp('slow', function(){
            $('#secondaryheadline').slideUp(1500, function(){
                $("html, body").animate({scrollTop: '0'}, 'slow', function () {
                    $('#activeproject' + activeprojectid).slideDown(1500);  
                });             
            });
        });
    }
    else
    {
        $("html, body").animate({scrollTop: '0'}, 'slow', function () {
            $('#activeproject' + openprojectid).slideUp(1500, function(){
                openprojectid = activeprojectid;
                $('#activeproject' + activeprojectid).slideDown(1500);  
            });
        });              
    }
  }
  

    $(".activeproject").slideUp(0, function(){
        $(".activeproject").css('opacity', '1');

    });

     preloadimages(imagearray).done();

    $(".socialbutton > a").hover(
		  function () {
		    $(this).fadeTo('fast', 0.5);
		  },
		  function () {
		    $(this).fadeTo('fast', 1);
		  });

    $(".workexample").hover(
		  function () {
		    $(this).children('.redhover').animate({'left':'-133px'}, 'fast');
		  },
		  function () {
		    $(this).children('.redhover').animate({'left':'440px'}, 'fast');
		  });

    $(".redhover").click(function(){
        activeprojectid=$(this).attr('id');

        if (openprojectid == 0)
        {
            openprojectid = activeprojectid;
            $('#prevproj').fadeIn('fast');
            $('#nextproj').fadeIn('fast');
            $("html, body").animate({scrollTop: '0'}, 'fast', function () {
				$('#headline').slideUp('slow', function(){
					$('#secondaryheadline').slideUp('slow', function(){
                        $('#activeproject' + activeprojectid).slideDown('slow');  
                    });             
                });
            });
        }
        else
        {
            $("html, body").animate({scrollTop: '0'}, 'slow', function () {
                $('#activeproject' + openprojectid).slideUp(1500, function(){
                    openprojectid = activeprojectid;
                    $('#activeproject' + activeprojectid).slideDown(1500);  
                });
            });              
        }


    });

    $(".projectclose").click(function(){
        $('#prevproj').fadeOut('fast');
        $('#nextproj').fadeOut('fast');
        $('.activeproject').slideUp('slow', function() {
            $('#secondaryheadline').slideDown('slow', function() {
                     $('#headline').slideDown('slow');  
                     openprojectid = 0;
       
            });
        });
    });

    $("#nextproj").click(function(){
        activeprojectid++;
        if (activeprojectid > projectcount)
            activeprojectid = 1;

        $("html, body").animate({scrollTop: '0'}, 'slow', function () {
            $('#activeproject' + openprojectid).slideUp(1500, function(){
                openprojectid = activeprojectid;
                $('#activeproject' + activeprojectid).slideDown(1500);  
            });
        });     
    });
    $("#prevproj").click(function(){
        activeprojectid--;
        if (activeprojectid == 0)
            activeprojectid = projectcount;

        $("html, body").animate({scrollTop: '0'}, 'slow', function () {
            $('#activeproject' + openprojectid).slideUp(1500, function(){
                openprojectid = activeprojectid;
                $('#activeproject' + activeprojectid).slideDown(1500);  
            });
        });     
    });

    $(".player").click(function(){
        $(this).css('background-image','none');
        $(this).off('click');
        var index = $(this).attr("id");
        var identifiers = index.split('_', 2);
        $(this).html('<audio id="player' + index + '" src="mp3/project' + identifiers[0] + '/' + identifiers[1] + '.mp3" type="audio/mp3" controls></audio>');
        $('#player'+ index).mediaelementplayer({
                    alwaysShowControls: true,
                    features: ['playpause', 'progress'],
                    audioVolume: 'horizontal',
                    audioWidth: 280,
                    audioHeight: 30,
                    success: function (mediaElement, domObject) { 
                        mediaElement.play(); 
                    }
        }); 
    });
    $(".playerlist").click(function(){
        $(this).css('background-image','none');
        $(this).off('click');
        var index = $(this).attr("id");
        var identifiers = index.split('_', 2);
        $(this).html('<audio id="player' + index + '" src="mp3/project' + identifiers[0] + '/' + identifiers[1] + '.mp3" type="audio/mp3" controls></audio>');
        $('#player'+ index).mediaelementplayer({
                    alwaysShowControls: true,
                    features: ['playpause', 'progress'],
                    audioVolume: 'horizontal',
                    audioWidth: 280,
                    audioHeight: 30,
                    success: function (mediaElement, domObject) { 
                        mediaElement.play(); 
                    }
        });       
    });



    var iframe1 = '<iframe src="http://player.vimeo.com/video/';
    var iframe2 = '" width="630" height="320" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    var videoids = {'vid1': '63491106', 
                    'vid2': '63491107', 
                    'vid3': '63491108', 
                    'vid4': '63491109', 
                    'vid5': '63491110', 
                    'vid3_1': '62903536', 
                    'vid3_2': '62937716', 
                    'vid3_3': '62899712', 
                    'vid3_4': '62904385', 
                    'vid3_5': '62935605', 
                    'vid3_6': '62943713', 
                      };

    $('.vidthumb').click(function(){
        var index = $(this).attr('id');
        $('.videowindow').html(iframe1 + videoids[index] + iframe2);
        $("html, body").animate({ scrollTop: 0 }, "slow");

    });
    $('.vidthumbsmall').click(function(){
        var index = $(this).attr('id');
        $('.videowindowsmall').html(iframe1 + videoids[index] + iframe2);

    });

    $("#imagespinleft").click(function () {
        if (gallerylock == 0)
        {
            gallerylock = 1;
            nextimageindex = imageindex;
            if (imageindex == 0)
                imageindex = (imagecount - 1);
            else
                imageindex--;

            previmageindex = imageindex - 1;
            if (previmageindex < 0)
                previmageindex = (imagecount - 1);

            $('#imagesliderleftcontainer').animate({ right: '0%' }, 1500, function() {

                $('#mainimage').attr('src', imagearray[imageindex]);
                setTimeout(function() {
                    $('#imagesliderleftcontainer').css('right', '100%');
                    $('#leftslideimage').attr('src', imagearray[previmageindex]);
                    $('#rightslideimage').attr('src', imagearray[nextimageindex]);
                    gallerylock = 0;
                }, 800);


            });
        }
    });

    $("#imagespinright").click(function () {
        if (gallerylock == 0)
        {
            gallerylock = 1;
            previmageindex = imageindex;
            if (imageindex == (imagecount - 1))
                imageindex = 0;
            else
                imageindex++;
            
            nextimageindex = imageindex + 1;
            if (nextimageindex == imagecount)
                nextimageindex = 0;

            $('#imagesliderrightcontainer').animate({ left: '0%' }, 1500, function() {

                $('#mainimage').attr('src', imagearray[imageindex]);
                setTimeout(function() {
                    $('#imagesliderrightcontainer').css('left', '100%');
                    $('#leftslideimage').attr('src',  imagearray[previmageindex]);
                    $('#rightslideimage').attr('src', imagearray[nextimageindex]);
                    gallerylock = 0;
                }, 800);


            });
        }
    });

    $("#imagespinleft2").click(function () {
        if (gallerylock2 == 0)
        {
            gallerylock2 = 1;
            nextimageindex2 = imageindex2;
            if (imageindex2 == 0)
                imageindex2 = (imagecount2 - 1);
            else
                imageindex2--;

            previmageindex2 = imageindex2 - 1;
            if (previmageindex2 < 0)
                previmageindex2 = (imagecount2 - 1);

            $('#imagesliderleftcontainer2').animate({ right: '0%' }, 1500, function() {

                $('#mainimage2').attr('src', imagearray2[imageindex2]);
                setTimeout(function() {
                    $('#imagesliderleftcontainer2').css('right', '100%');
                    $('#leftslideimage2').attr('src', imagearray2[previmageindex2]);
                    $('#rightslideimage2').attr('src', imagearray2[nextimageindex2]);
                    gallerylock2 = 0;
                }, 800);


            });
        }
    });

    $("#imagespinright2").click(function () {
        if (gallerylock2 == 0)
        {
            gallerylock2 = 1;
            previmageindex2 = imageindex2;
            if (imageindex2 == (imagecount2 - 1))
                imageindex2 = 0;
            else
                imageindex2++;
            
            nextimageindex2 = imageindex2 + 1;
            if (nextimageindex2 == imagecount2)
                nextimageindex2 = 0;

            $('#imagesliderrightcontainer2').animate({ left: '0%' }, 1500, function() {

                $('#mainimage2').attr('src', imagearray2[imageindex2]);
                setTimeout(function() {
                    $('#imagesliderrightcontainer2').css('left', '100%');
                    $('#leftslideimage2').attr('src',  imagearray2[previmageindex2]);
                    $('#rightslideimage2').attr('src', imagearray2[nextimageindex2]);
                    gallerylock2 = 0;
                }, 800);


            });
        }
    });
	    $("#imagespinleft3").click(function () {
        if (gallerylock3 == 0)
        {
            gallerylock3 = 1;
            nextimageindex3 = imageindex3;
            if (imageindex3 == 0)
                imageindex3 = (imagecount3 - 1);
            else
                imageindex3--;

            previmageindex3 = imageindex3 - 1;
            if (previmageindex3 < 0)
                previmageindex3 = (imagecount3 - 1);

            $('#imagesliderleftcontainer3').animate({ right: '0%' }, 1500, function() {

                $('#mainimage3').attr('src', imagearray3[imageindex3]);
                setTimeout(function() {
                    $('#imagesliderleftcontainer3').css('right', '100%');
                    $('#leftslideimage3').attr('src', imagearray3[previmageindex3]);
                    $('#rightslideimage3').attr('src', imagearray3[nextimageindex3]);
                    gallerylock3 = 0;
                }, 800);


            });
        }
    });

    $("#imagespinright3").click(function () {
        if (gallerylock3 == 0)
        {
            gallerylock3 = 1;
            previmageindex3 = imageindex3;
            if (imageindex3 == (imagecount3 - 1))
                imageindex3 = 0;
            else
                imageindex3++;
            
            nextimageindex3 = imageindex3 + 1;
            if (nextimageindex3 == imagecount3)
                nextimageindex3 = 0;

            $('#imagesliderrightcontainer3').animate({ left: '0%' }, 1500, function() {

                $('#mainimage3').attr('src', imagearray3[imageindex3]);
                setTimeout(function() {
                    $('#imagesliderrightcontainer3').css('left', '100%');
                    $('#leftslideimage3').attr('src',  imagearray3[previmageindex3]);
                    $('#rightslideimage3').attr('src', imagearray3[nextimageindex3]);
                    gallerylock3 = 0;
                }, 800);


            });
        }
    });
	
	 $("#imagespinleft4").click(function () {
        if (gallerylock4 == 0){
            gallerylock4 = 1;
            nextimageindex4 = imageindex4;
            if (imageindex4 == 0)
                imageindex4 = (imagecount4 - 1);
            else
                imageindex4--;

            previmageindex4 = imageindex4 - 1;
            if (previmageindex4 < 0)
                previmageindex4 = (imagecount4 - 1);

            $('#imagesliderleftcontainer4').animate({ right: '0%' }, 1500, function() {

                $('#mainimage4').attr('src', imagearray4[imageindex4]);
                setTimeout(function() {
                    $('#imagesliderleftcontainer4').css('right', '100%');
                    $('#leftslideimage4').attr('src', imagearray4[previmageindex4]);
                    $('#rightslideimage4').attr('src', imagearray4[nextimageindex4]);
                    gallerylock4 = 0;
                }, 800);


            });
        }
    });

    $("#imagespinright4").click(function () {
        if (gallerylock4 == 0)
        {
            gallerylock4 = 1;
            previmageindex4 = imageindex4;
            if (imageindex4 == (imagecount4 - 1))
                imageindex4 = 0;
            else
                imageindex4++;
            
            nextimageindex4 = imageindex4 + 1;
            if (nextimageindex4 == imagecount4)
                nextimageindex4 = 0;

            $('#imagesliderrightcontainer4').animate({ left: '0%' }, 1500, function() {

                $('#mainimage4').attr('src', imagearray4[imageindex4]);
                setTimeout(function() {
                    $('#imagesliderrightcontainer4').css('left', '100%');
                    $('#leftslideimage4').attr('src',  imagearray4[previmageindex4]);
                    $('#rightslideimage4').attr('src', imagearray4[nextimageindex4]);
                    gallerylock4 = 0;
                }, 800);


            });
        }
    });
   
     $("#imagespinleft5").click(function () {
        if (gallerylock5 == 0)
        {
            gallerylock5 = 1;
            nextimageindex5 = imageindex5;
            if (imageindex5 == 0)
                imageindex5 = (imagecount5 - 1);
            else
                imageindex5--;

            previmageindex5 = imageindex5 - 1;
            if (previmageindex5 < 0)
                previmageindex5 = (imagecount5 - 1);

            $('#imagesliderleftcontainer5').animate({ right: '0%' }, 1500, function() {

                $('#mainimage5').attr('src', imagearray5[imageindex5]);
                setTimeout(function() {
                    $('#imagesliderleftcontainer5').css('right', '100%');
                    $('#leftslideimage5').attr('src', imagearray5[previmageindex5]);
                    $('#rightslideimage5').attr('src', imagearray5[nextimageindex5]);
                    gallerylock5 = 0;
                }, 800);


            });
        }
    });

    $("#imagespinright5").click(function () {
        if (gallerylock5 == 0)
        {
            gallerylock5 = 1;
            previmageindex5 = imageindex5;
            if (imageindex5 == (imagecount5 - 1))
                imageindex5 = 0;
            else
                imageindex5++;
            
            nextimageindex5 = imageindex5 + 1;
            if (nextimageindex5 == imagecount5)
                nextimageindex5 = 0;

            $('#imagesliderrightcontainer5').animate({ left: '0%' }, 1500, function() {

                $('#mainimage5').attr('src', imagearray5[imageindex5]);
                setTimeout(function() {
                    $('#imagesliderrightcontainer5').css('left', '100%');
                    $('#leftslideimage5').attr('src',  imagearray5[previmageindex5]);
                    $('#rightslideimage5').attr('src', imagearray5[nextimageindex5]);
                    gallerylock5 = 0;
                }, 800);


            });
        }
    });
     $("#imagespinleft6").click(function () {
        if (gallerylock6 == 0)
        {
            gallerylock6 = 1;
            nextimageindex6 = imageindex6;
            if (imageindex6 == 0)
                imageindex6 = (imagecount6 - 1);
            else
                imageindex6--;

            previmageindex6 = imageindex6 - 1;
            if (previmageindex6 < 0)
                previmageindex6 = (imagecount6 - 1);

            $('#imagesliderleftcontainer6').animate({ right: '0%' }, 1500, function() {

                $('#mainimage6').attr('src', imagearray6[imageindex6]);
                setTimeout(function() {
                    $('#imagesliderleftcontainer6').css('right', '100%');
                    $('#leftslideimage6').attr('src', imagearray6[previmageindex6]);
                    $('#rightslideimage6').attr('src', imagearray6[nextimageindex6]);
                    gallerylock6 = 0;
                }, 800);


            });
        }
    });

    $("#imagespinright6").click(function () {
        if (gallerylock6 == 0)
        {
            gallerylock6 = 1;
            previmageindex6 = imageindex6;
            if (imageindex6 == (imagecount6 - 1))
                imageindex6 = 0;
            else
                imageindex6++;
            
            nextimageindex6 = imageindex6 + 1;
            if (nextimageindex6 == imagecount6)
                nextimageindex6 = 0;

            $('#imagesliderrightcontainer6').animate({ left: '0%' }, 1500, function() {

                $('#mainimage6').attr('src', imagearray6[imageindex6]);
                setTimeout(function() {
                    $('#imagesliderrightcontainer6').css('left', '100%');
                    $('#leftslideimage6').attr('src',  imagearray6[previmageindex6]);
                    $('#rightslideimage6').attr('src', imagearray6[nextimageindex6]);
                    gallerylock6 = 0;
                }, 800);


            });
        }
    });
    
	
	
	
});

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}