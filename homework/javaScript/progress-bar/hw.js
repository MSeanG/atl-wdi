// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').textContent = timerValue;
  },
  drawProgressBars: function(timerValue){
   // var progressFill = 100 - timerValue;
   // document.getElementsByClassName('progress-bar')[0].style.width = progressFill + '%';
    var progress = 100 - timeerValue;
    var bars = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.width = progress + '%';
    }
  },
  drawLitFuses: function(timerValue){
    var unburntFuse = 100/timerValue;
    document.getElementsByClassName('unburnt')[0].style.width = unburntFuse*100 + '%';
    document.getElemlentByClassName('burnt')[0].style.width = (1 - unburntFuse)*100 + '%';
  },
  drawCrawlers: function(timerValue){
    var crawlerPosition = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    } else if {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (crawlerPosition*10) + 'px';
  }
};
