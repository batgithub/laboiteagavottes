// Init var
var pathSounds = "./src/audio/"
var animationDuration = 300
var soundsGroups = [
  {
    id:"1",
    sounds: [
      {
        name: 'ah ah ah',
        file: 'ah-ah-ah'
      },
      {
        name: 'Allééééééééé',
        file: 'alleee'
      },
      {
        name: 'beuuuuuarrrrhhh',
        file: 'beuuuuuarrrrhhh'
      },
      {
        name: 'ça mfait peter un cable',
        file: 'ca-mfait-peter-un-cable'
      },
       {
         name: 'On met les air guillemets',
         file: 'On met les air guillemets'
       }, {
         name: 'Prend une lingettaaaa ',
         file: 'Prend une lingettaaaa '
       }, {
         name: 'PS i love you déja',
         file: 'PS-i-love-you-deja'
       }, {
         name: 'Quel est ton avis sur la moutarde mi forte',
         file: 'Quel est ton avis sur la moutarde mi forte'
       }, {
         name: 't\'as dejas manger quelque chose de cuit',
         file: 't\'as dejas manger quelque chose de cuit'
       }, {
         name: 'ta zezettaaaa',
         file: 'ta zezettaaaa'
       }, {
         name: 'Taaaahiitiiii',
         file: 'Taaaahiitiiii'
       }, {
         name: 'tia compris ou pas',
         file: 'tia compris ou pas'
       }, {
         name: 'titre',
         file: 'titre'
       }, {
         name: 'tu prefère',
         file: 'tu-prefere'
       }, {
         name: 'Un jour j\'aimerais qu\'on anime une foire aux vins dans un carrefour',
         file: 'Un jour j\'aimerais qu\'on anime une foire aux vins dans un carrefour'
       }, {
         name: 'Whouuuaaaa j\'avoue',
         file: 'Whouuuaaaa j\'avoue'
       },
        {
          name: 'En faiiiite',
          file: 'En-faiiiite'
        }, {
          name: 'Est-ce que les problèmes ont une odeur',
          file: 'Est-ce-que-les-problemes-ont-une-odeur'
        }, {
          name: 'Est-ce que tu transpire de la moustache',
          file: 'Est-ce-que-tu-transpire-de-la-moustache'
        }, {
          name: 'Et la campagne c\'est ta chatte',
          file: 'Et la campagne c\'est ta chatte'
        }, {
          name: 'euhaiiiiheuuuohouaiii',
          file: 'euhaiiiiheuuuohouaiii'
        }, {
          name: 'gavottaaa',
          file: 'gavottaaa'
        }, {
          name: 'J\'aimerais ton avis sur le gout de l\'eau dans les gourdes',
          file: 'J\'aimerais ton avis sur le gout de l\'eau dans les gourdes'
        }, {
          name: 'J\'ai jamais tapé plastic porn',
          file: 'Jai-jamais-tape-plastic-porn'
        }, {
          name: 'generique',
          file: 'generique'
        }, {
          name: 'hein heinnnnnnn',
          file: 'hein heinnnnnnn'
        }, {
          name: 'J\'aurai du faire une terminale hitler mon gards',
          file: 'J\'aurai du faire une terminale hitler mon gards'
        }, {
          name: 'Jaaaz bebop+rire',
          file: 'Jaaaz bebop+rire'
        }, {
          name: 'je kifferai toujours des seriettes rondes',
          file: 'je kifferai toujours des seriettes rondes'
        }, {
          name: 'Je t\'asticotaaaaa',
          file: 'Je t\'asticotaaaaa'
        }, {
          name: 'la mouche c\'est une lasagne',
          file: 'la mouche c\'est une lasagne'
        }, {
          name: 'Les amis',
          file: 'Les amis'
        }, {
          name: 'Mais c\'est dégeulaaaasssss',
          file: 'Mais-cest-degeulaaaasssss'
        }, {
          name: 'Mais t\'as pas eu d\'enfance',
          file: 'Mais t\'as pas eu d\'enfance'
        },
    ]
  },
  {
    id: "1",
    sounds: [
     
     
    ]
  },
  {
    id: "1",
    sounds: [
     
     
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

