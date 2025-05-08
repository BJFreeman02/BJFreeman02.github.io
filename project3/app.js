var main = function() {
  var state;
    // Play button
    $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
    });

    // Pause button
    $('#pause').click(function(){
    $('#message').text("Track paused");
    $('#player').trigger("pause");
    });

    //Mute button
    $('#mute').click(function(){ 
    let player = $('#player');
    let isMuted = player.prop('muted');

      if (isMuted) {
          player.prop('muted', false);
          $('#message').text("Sound unmuted");
          $('#mute').text("Mute");
      } else {
          player.prop('muted', true);
          $('#message').text("Sound muted");
          $('#mute').text("Unmute");
      }
    });

    // Stop button
    $('#stop').click(function(){
    $('#message').text("Track stopped");
    $('#player').trigger("pause");
    $('#player')[0].currentTime = 0;
    });

    // Volume Up button
    $('#volUp').click(function(){
       let player = $('#player')[0];
       if (player.volume < 1) {
            player.volume = Math.min(1, player.volume + 0.1);
            $('#message').text("Volume: " + Math.round(player.volume * 100) + "%");
        }
    });

    // Volume Down button
    $('#volDown').click(function(){
      let player = $('#player')[0];
      if (player.volume > 0) {
            player.volume = Math.max(0, player.volume - 0.1);
            $('#message').text("Volume: " + Math.round(player.volume * 100) + "%");
        }
    });
}
  

$(document).ready(main);