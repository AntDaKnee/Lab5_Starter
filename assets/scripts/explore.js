// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //initialize speech synthesis
  const synth = window.speechSynthesis;

  //initializing voice select list
  const voiceSelect = document.querySelector("select");

  //get image
  let smiley = document.querySelector("img");
  
  //initialize voices dropdown list
  let voices = [];

  //initializing textarea
  let textBox = document.querySelector('textarea');
  
  //initializing button
  let talkButton = document.querySelector('button');
  //populate voices dropdown list from browser api
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  //check if browser has synthesis support
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  
  // on button click, speak words using correlating voice
  talkButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    
    // Make face open its mouth to talk
    smiley.src = "assets/images/smiling-open.png";
    //back to closed once done speaking
    utterThis.onend = function() {
      smiley.src = "assets/images/smiling.png";
    }
  })
}