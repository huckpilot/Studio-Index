// http://stackoverflow.com/questions/7950184/is-there-a-client-side-way-to-detect-x-frame-options
var studioList, urls, url;

// Pulls studios from json
studioList = _.pluck(json, 'studios');
// Empty array to put plucked urls inside
urls = [];


// Pull url strings from studioList and push to urls array
for(var j = 0; j < 6; j++) {
  for (var i = 0; i < studioList[j].length; i++) {
    urls.push([studioList[j][i].country, studioList[j][i].city, studioList[j][i].url]);
  } 
}

// shuffle function, pulls random url from urls array
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
shuffle(urls);

// Create iframe and place shuffle results inside
document.write('<div id="header__container"> <div class="header__section header__section--left"> <a class="header__info__link" href="#"> <div class="header__info-button"> <img class=""src="images/info_item.png"> </div></a> <a class="header__link header__link--no-line" href> <h1 class="header__logo"> Discover Studios </h1> </a> <a class="header__link header__link--no-line" href=http://www.' + urls[0][2] + ' target="_parent"> <h1 class="header__studio-name"> ' + urls[0][2] + ' </h1> </a> </div><div class="header__section header__binoculars"> <img class="binoculars" src="images/binoculars.png"> <div id="monstereyes"> </div></div><div class="header__section header__section--right"> <h1 class="header__studio-location"> ' + urls[0][0] + ' + ' + urls[0][1] + ' </h1> <a class="header__link header__link--no-line" href="#"> <h1 class="header__link header__close header__link--no-line"> Close </h1> </a> </div></div><div class="header__info"> <h1 class="header__useallfive"> Extension designed and developed by <a class="header__link header__useallfive__name" href="http://www.useallfive.com" target="_parent">Use All Five</a></h1> <h1 class="header__index-studio"> powered by <a class="header__link" href="http://www.studio-index.co" target="_parent"> <span class="header__index-studio__name"> Index Studio </span> </a> database </h1><h1 class="header__sharing">Sharing is caring</h1></div><iframe class="frame__container" src="http://www.' + urls[0][2] + '" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:35px;left:0px;right:0px;bottom:0px;" height="100%" width="100%"></iframe>');

$('.header__close').click(function(){
   // $(this).closest(".header__container").remove();
   $('.frame__container').animate({top: 0}, 250, function(){});
   $('.header__container').animate({top: -35}, 250, function(){});
   $('.header__info').animate({top: -120}, 250, function(){});
});

var open;
open = false;

$('.header__info__link').click(function(){
  if (!open) {
    $('.header__info').animate({top: 35}, 250, function(){});
    open = true;
  } else {
    $('.header__info').animate({top: -87}, 250, function(){});
    open = false;
  }
});

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('iframe')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('header__container', true);
    show('loading', false);
});