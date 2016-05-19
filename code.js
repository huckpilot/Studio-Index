// http://stackoverflow.com/questions/7950184/is-there-a-client-side-way-to-detect-x-frame-options
var urlList, urls, url;

// Pulls studios from json
urlList = _.pluck(json, 'studios');
// Empty array to put plucked urls inside
urls = [];

// Pull url strings from urlList and push to urls array
for(var j = 0; j < 6; j++) {
  for (var i = 0; i < urlList[j].length; i++) {
    urls.push(urlList[j][i].url);
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
// document.write('<div class="header__container"><div class="header__section header__section--left"><a class="header__link" href><h1 class="header__content header__logo">Discover Studios</h1></a><h1 class="header__content studio-index">Powered by <a class="header__link" href="http://studio-index.co/"><span class="header__content__company">Index-Studio</span></a></h1></div><div class="header__binoculars"><img class="" src="images/binoculars.png"><div id="monstereyes"></div></div></div><div class="header__section header__section--right"><h1 class="header__content useallfive">Extension by <a class="header__link" href="http://www.useallfive.com/"><span class="header__content__company">Use All Five</span></a></h1><a class="header__link" href="#"><h1 class="header__content header__link header__close">Close</h1></a></div></div><iframe class="frame__container" src="http://www.' + urls[0] + '" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:40px;left:0px;right:0px;bottom:0px;" height="100%" width="100%"></iframe>');
document.write('<div class="header__container"><div class="header__section header__section--left"><a class="header__link" href><h1 class="header__content header__logo">Discover Studios</h1></a><h1 class="header__content studio-index">Powered by <a class="header__link" href="http://studio-index.co/"><span class="header__content__company">Index-Studio</span></a></h1></div><div class="header__binoculars"><img class="" src="images/binoculars.png"><div id="monstereyes"></div></div></div><div class="header__section header__section--right"><h1 class="header__content useallfive">Extension by <a class="header__link" href="http://www.useallfive.com/"><span class="header__content__company">Use All Five</span></a></h1><a class="header__link" href="#"><h1 class="header__content header__link header__close">Close</h1></a></div></div><iframe class="frame__container" src="http://www.dentsu.com/embed/" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:40px;left:0px;right:0px;bottom:0px;" height="100%" width="100%"></iframe>');

// setInterval(function() {
//   $('iframe').contents().find('html').on('mousemove', function (e) { 
//       var x = e.clientX ; 
//       var y = e.clientY ;
//       console.log(x + " " + y);
//   })
// }, 300);
