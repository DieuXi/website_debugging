// JavaScript Document
var headlineheight;
var openbioid = 0;

$(document).ready(function () {

    $(".individualbio").slideUp(0, function(){
        $(".individualbio").css('opacity', '1');

    });


    $('.individualbio > .headerbar > img').click(function() {
        $('#individualbio1').slideUp('slow', function() {
            $('#headlinecontainer').slideDown('slow');  
            openbioid = 0;
        });
    });

    $(".creativelead").hover(
          function () {
            $(this).children('.redhover').animate({'left':'-209px'}, 'fast');
          },
          function () {
            $(this).children('.redhover').animate({'left':'440px'}, 'fast');
          });
    
    $(".collaborator").hover(
          function () {
            $(this).children('.imgcontainer').children('.redhover').animate({'left':'-133px'}, 'fast');
          },
          function () {
            $(this).children('.imgcontainer').children('.redhover').animate({'left':'440px'}, 'fast');
          });
    

    $(".creativelead > .redhover").click(function() {
        var bioid = $(this).attr('id');

        if (openbioid == 0)
        {
            openbioid = bioid;
            bioindex = openbioid - 1;

            $("#individualbio1 > .headerbar > .position").text('CREATIVE LEAD');
            $("#individualbio1 > .imagecontainer > img").attr('src', 'img/about/' + bios[bioindex].Src);
            $("#individualbio1 > .biocontainer > .name").text(bios[bioindex].Name);
            $("#individualbio1 > .biocontainer > .title").text(bios[bioindex].Title);
            $("#individualbio1 > .biocontainer > .bio").html(bios[bioindex].Bio);
            var linkhtml = "";
            for (var i=0; i<bios[bioindex].Href.length; i++)
            {
                linkhtml += '<a href="http://' + bios[bioindex].Href[i] + '" target="_blank" >' + bios[bioindex].Href[i] + '</a><br />';
            }
            $("#individualbio1 > .biocontainer > .links").html(linkhtml);

            $("#headlinecontainer").slideUp(1500, function(){
                $("html, body").animate({scrollTop: '0'}, 'slow', function () {
                    $("#individualbio1").slideDown(1500);  
                });             
            });
        }
        else
        {
            $("html, body").animate({scrollTop: '0'}, 'slow', function () {
                $('#individualbio1').slideUp(1500, function(){
                    openbioid = bioid;
                    bioindex = openbioid - 1;

                    $("#individualbio1 > .headerbar > .position").text('CREATIVE LEAD');
                    $("#individualbio1 > .imagecontainer > img").attr('src', 'img/about/' + bios[bioindex].Src);
                    $("#individualbio1 > .biocontainer > .name").text(bios[bioindex].Name);
                    $("#individualbio1 > .biocontainer > .title").text(bios[bioindex].Title);
                    $("#individualbio1 > .biocontainer > .bio").html(bios[bioindex].Bio);
                    var linkhtml = "";
                    for (var i=0; i<bios[bioindex].Href.length; i++)
                    {
                        linkhtml += '<a href="http://' + bios[bioindex].Href[i] + '" target="_blank" >' + bios[bioindex].Href[i] + '</a><br />';
                    }
                    $("#individualbio1 > .biocontainer > .links").html(linkhtml);

                    $('#individualbio1').slideDown(1500);  
                });
            });    
        }
    });

    $(".collaborator > .imgcontainer > .redhover").click(function(){
        var bioid = $(this).attr('id');

        if (openbioid == 0)
        {
            openbioid = bioid;
            bioindex = openbioid - 1;

            $("#individualbio1 > .headerbar > .position").text('COLLABORATOR');
            $("#individualbio1 > .imagecontainer > img").attr('src', 'img/about/' + bios[bioindex].Src);
            $("#individualbio1 > .biocontainer > .name").text(bios[bioindex].Name);
            $("#individualbio1 > .biocontainer > .title").text(bios[bioindex].Title);
            $("#individualbio1 > .biocontainer > .bio").html(bios[bioindex].Bio);
            var linkhtml = "";
            for (var i=0; i<bios[bioindex].Href.length; i++)
            {
                linkhtml += '<a href="http://' + bios[bioindex].Href[i] + '" target="_blank" >' + bios[bioindex].Href[i] + '</a><br />';
            }
            $("#individualbio1 > .biocontainer > .links").html(linkhtml);

            $("#headlinecontainer").slideUp(1500, function(){
                $("html, body").animate({scrollTop: '0'}, 'slow', function () {
                    $("#individualbio1").slideDown(1500);  
                });             
            });
        }
        else
        {
            $("html, body").animate({scrollTop: '0'}, 'slow', function () {
                $('#individualbio1').slideUp(1500, function(){
                    openbioid = bioid;
                    bioindex = openbioid - 1;

                    $("#individualbio1 > .headerbar > .position").text('COLLABORATOR');
                    $("#individualbio1 > .imagecontainer > img").attr('src', 'img/about/' + bios[bioindex].Src);
                    $("#individualbio1 > .biocontainer > .name").text(bios[bioindex].Name);
                    $("#individualbio1 > .biocontainer > .title").text(bios[bioindex].Title);
                    $("#individualbio1 > .biocontainer > .bio").html(bios[bioindex].Bio);
                    var linkhtml = "";
                    for (var i=0; i<bios[bioindex].Href.length; i++)
                    {
                        linkhtml += '<a href="http://' + bios[bioindex].Href[i] + '" target="_blank" >' + bios[bioindex].Href[i] + '</a><br />';
                    }
                    $("#individualbio1 > .biocontainer > .links").html(linkhtml);

                    $('#individualbio1').slideDown(1500);  
                });
            });    
        }
    });




});