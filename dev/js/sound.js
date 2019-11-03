// Init var
var pathSounds = "./src/audio/"
var animationDuration = 300
var soundsGroups = [
  {
    id:"1",
    sounds: [
      {
        name: 'ah ah ah',
        file: 'ah ah ah'
      },
      {
        name: 'Allééééééééé',
        file: 'Allééééééééé'
      },
      {
        name: 'beuuuuuarrrrhhh',
        file: 'beuuuuuarrrrhhh'
      },
      {
        name: 'ça mfait peter un cable',
        file: 'ça mfait peter un cable'
      },
    ]
  },
  {
    id: "2",
    sounds: [
      {
        name: '2zefedfetgrzef',
        file: 'MArthrG-oui'
      },
    ]
  },
  {
    id: "3",
    sounds: [
      {
        name: '2zefedfetgrzef',
        file: 'MArthrG-oui'
      },
    ]
  },
   
   
]


soundsGroups.forEach(function (group) {

  groupID = group.id
  for (var i = 0, len = group.sounds.length; i < len; i++) {
     createButtonSound(i, groupID , "#"+groupID+" .sounds", group.sounds[i])
  }
  
})

var imgStop = new Image();
imgStop.src = './src/imgs/stop.svg';

var imgPlay = new Image();
imgPlay.src = './src/imgs/play.svg';




function createButtonSound(iT, groupID, idContainer, sound){
  var idSound = "sound-"+"G"+groupID+"-N"+iT
  var buttonStart = '<button class="button" onclick="playSound(\''+idSound+'\')">'
  var buttonEnd = '</button>'
  var file = pathSounds+sound.file
  var audio = '<audio preload="auto" id="'+idSound+'"><source src="'+ file +'.mp3"></audio>';
  $(idContainer).append(buttonStart+sound.name+audio+buttonEnd)
}

function playSound(id) {

    var audioClick = $('#'+ id)[0];
    var duration = (audioClick.duration)*1000;
    var timer

    if (audioClick.paused == false) {
        audioClick.pause()
        audioClick.currentTime = 0;
        $(audioClick).parent().removeClass( "active" )
        clearTimeout(timer)

    } else {
      clearTimeout(timer)
      audioClick.play()
      audioClick.onplaying=function(){
          $(audioClick).parent().addClass( "active" );
      };
      timer = setTimeout(
        function(){
          $(audioClick).parent().removeClass( "active" )
        }, duration)


    }

}

