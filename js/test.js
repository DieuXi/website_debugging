
$(document).ready(function () {



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



});