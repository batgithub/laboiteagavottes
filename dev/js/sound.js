// Init var
var pathSounds = "./src/audio/"
var animationDuration = 300
var sounds = [
    //GROUP 1
    {name:'oui',file:'MAG-oui',team:'1'},
    {name:'🎤 tu me plaiiiiiiiiiiiiiiiiiit',file: 'MAG-tu-me-plait',team:'1'},
    {name:'😂 Haaaaa ha',file: 'MAG-rire-ha-ha',team:'1'},
    {name:'aaaaaheeeuuuu',file: 'MAG-aaaaaheeeuuuu',team:'1'},
    // {name:'rire aspiré',file: 'MAG-rire-aspire',team:'1'},
    {name:'🤔 J\'ai changé de raie',file: 'MAG-jai-change-de-raie',team:'1'},
    {name:'Ça change tout',file: 'MAG-ça-change-tout',team:'1'},
    {name:'Voilaaaaa hahaha',file: 'MAG-voilaaaaa-hahaha',team:'1'},
    {name:'😂 Rire gorge deployée',file: 'MAG-rire-gorge-deployee',team:'1'},
    {name:'Jme baladerais à poils...',file: 'MAG-jme-baladerais-a-poils-toute-la-journee',team:'1'},
    {name:'😂 heu hein ha ha',file: 'MAG-heu-hein-ha-ha',team:'1'},
    {name:'Dégage dégage dégage',file: 'MAG-degage-x-3',team:'1'},
    {name:'mpop mpop hgne',file: 'MAG-mpop-mpop-hgne',team:'1'},
    {name:'🐱 Oooooooohhhhhh',file: 'MAG-oooooooohhhhh',team:'1'},
    {name:'Rire gras',file: 'MAG-rire-gras',team:'1'},
    {name:'🔥 Plaiiiiisiiiiiir',file: 'MAG-plaiisiiiiiir',team:'1'},
    {name:'Heu ba ouiii',file: 'MAG-euh-ba-ouiiiii',team:'1'},
    {name:'🤩 Jsuis manageuze de staar',file: 'MAG-manageuze-de-star',team:'1'},
    {name:'🇩🇪 Mais chaimerais tellement !!!',file: 'MAG-jaimerais-tellement',team:'1'},
    {name:'J\'ai un talent...',file: 'MAG-talent-beyonce',team:'1'},
    {name:'J\'aimerais trop qu\il te chie dans la bouche💩 ',file: 'MAG-chie-dans-la-bouche',team:'1'},
    {name:'👳🏾‍ Wall street english ',file: 'MAG-walstreet-english',team:'1'},
    {name:'Le mystere du ...🥝 ',file: 'MAG-le-mystere-kiwi',team:'1'},
    {name:'😂 HI hi hi hi hi',file: 'MAG-hi-hi-hi-hi-hi',team:'1'},
    {name:'galocher la win',file: 'MAG-galocher-la-win',team:'1'},
    {name:'Call me Bcrigitte',file: 'MAG-call-me-brigitte',team:'1'},
    {name:'Pouuuuhouuuuu tu va faire quoi !!!',file: 'MAG-pouuuhouuu-91',team:'1'},
    {name:'Vengeaaaaaance!!!',file: 'MAG-vengeance',team:'1'},
    {name:'MOI j\'ai fait du judo! 🥋',file: 'MAG-moi-fait-judo',team:'1'},

    //GROUP 2
    {name:'🤔 mmmmmmmmm',file: 'SEB-mmmmmmmmm',team:'2'},
    {name:'Trois quatre',file: 'SEB-trois-quatre',team:'2'},
    {name:'Jle lache aaaaaap!',file: 'SEB-je-le-lache-Ap-aspire',team:'2'},
    {name:'Quoiiiiii !!!',file: 'SEB-quoiiiiii',team:'2'},
    {name:'heuuuummm',file: 'SEB-heuuuummm',team:'2'},
    {name:'🦆ça va mon bebe',file: 'SEB-ça-va-mon-bebe',team:'2'},

    //GROUP 3
    {name:'💩 Jsuis pas une merde!!',file: 'SEB-jsuis-pas-une-merde',team:'3'},
    {name:'Toujours deux versions différentes..',file: 'SEB-toujours-deux-versions-differentes',team:'3'},
    {name:'Le micro onde c\'est pour les défis personnels',file: 'SEB-le-micro-onde-invention',team:'3'},
    {name:'🕵️ C\'est un agent que j\'ai retourné',file: 'SEB-agent-retourne',team:'3'},
    {name:'Régine, y\'a q\'toi qui me comprend',file: 'SEB-regine',team:'3'},
    {name:'🤑Moi jsuis chaud mais on fait payer!',file: 'SEB-on-fait-payer',team:'3'},
    {name:'Où est mon émission!',file: 'SEB-mon-emission',team:'3'},
    {name:'J\'ai attrapé le sida💝',file: 'SEB-attrape-le-sida',team:'3'},
    {name:'Les gens à qui il manque une jambe',file: 'SEB-jai-rien-contre-les-gens',team:'3'},
    {name:'🍆🍆🍆 Du sexe à en revendre',file: 'SEB-du-sexe',team:'3'},
    {name:'Le fuuutuuuurr',file: 'SEB-le-futur',team:'3'},
    {name:'🥝 La vie c\'est pas un kiwi ',file: 'SEB-la-vie-cest-pas-un-kiwi',team:'3'},
    {name:'😂 ha ha hi ha hein',file: 'SEB-ha-ha-hi-ha-hein',team:'3'},
    {name:'T\'es comme une soeur pour moi',file: 'SEB-une-soeur-pour-moi',team:'3'},
]



var imgStop = new Image();
imgStop.src = './src/imgs/stop.svg';

var imgPlay = new Image();
imgPlay.src = './src/imgs/play.svg';


//generate DOM buttons
for (var i = 0, len = sounds.length; i < len; i++) {
  switch (sounds[i].team) {
    case "1":
      createButtonSound(i, "#1 .sounds")
      break
    case "2":
      createButtonSound(i, "#2 .sounds")
      break
    case "3":
      createButtonSound(i, "#3 .sounds")
      break
  }
}


function createButtonSound(iT, idContainer){
  var idSound = "sound-"+iT
  var buttonStart = '<button class="button" onclick="playSound(\''+idSound+'\')">'
  var buttonEnd = '</button>'
  var file = pathSounds+sounds[iT].file
  var audio = '<audio preload="auto" id="'+idSound+'"><source src="'+ file +'.mp3"></audio>';
  $(idContainer).append(buttonStart+sounds[iT].name+audio+buttonEnd)
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

