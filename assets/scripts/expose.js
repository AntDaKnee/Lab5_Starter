// expose.js

//add confetti
const jsConfetti = new JSConfetti()

window.addEventListener('DOMContentLoaded', init);

function init() {
  //getting dropdown box
  let hornSelect = document.querySelector('#horn-select');
  
  //getting volume slider
  let volumeLevel = document.querySelector('#volume-controls #volume');
  let volumeImg = document.querySelector('#volume-controls img');
  //getting button
  let playButton = document.querySelector('button');
  
  //getting audio
  let sound = document.querySelector('audio');

  
  //let pickImg = document.querySelectorAll("img");
  
  //after selecting item in dropdown, change image and audio
  hornSelect.addEventListener('change', function() {
    let pickImg = document.querySelector("header + img");
    

    pickImg.src = './assets/images/' + hornSelect.value + '.svg';
    //pickImg[0].src = '/assets/images/' + hornSelect.value + '.svg';
    
    sound.src = './assets/audio/' + hornSelect.value + '.mp3';
  })
  
  //changing volume images and sound for each level
  volumeLevel.addEventListener('change', function() {
    if(volumeLevel.value == 0) {
      volumeImg.src = 'assets/icons/volume-level-0.svg'
    }
    else if(volumeLevel.value < 33){
      volumeImg.src = 'assets/icons/volume-level-1.svg'
    }
    else if(volumeLevel.value < 67){
      volumeImg.src = 'assets/icons/volume-level-2.svg'
    }
    else {
      volumeImg.src = 'assets/icons/volume-level-3.svg'
    }
    //volume conversion
    sound.volume = volumeLevel.value / 100;
  })

  //play button functionality 
  playButton.addEventListener('click', function() {
    sound.play();
    jsConfetti.addConfetti()
  })
}
