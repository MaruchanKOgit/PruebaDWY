$(document).ready(function(){
    var altura = $('.#menu').offset().top;

    $(window).on('scroll', function(){
        if ($(window).scrollTop()>altura){
          $('.menu').addClass('menu-fixed');
        }else{
          $('.menu').removeClass('menu-fixed');
        }
        });
    });      

var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100',
      width: '100',
      videoId: 'o2W3jfvZU4w',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
