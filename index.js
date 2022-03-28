const speakBtn = document.getElementById("speakBtn");
speakBtn.addEventListener("click", speakNow);

const styleSheet = document.getElementById("styleSheet");

// SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Started..");
};

recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;

  const { transcript } = e.results[resultIndex][0];
  console.log(transcript);
  speakOutLoud(transcript);
};

function speakNow() {
  recognition.start();
}

function speakOutLoud(message) {
  let whatToSpeak = message;

  // The action of saying or expressing something aloud..
  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

  const utterance = new SpeechSynthesisUtterance();

  

  // Artificial production of human speech
  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;


  if (whatToSpeak.includes("dark mode")) {
    styleSheet.setAttribute("href", "dark-mode.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to dark mode";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("light mode")) {
    styleSheet.setAttribute("href", "light-mode.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to light mode";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("lite mode")) {
    styleSheet.setAttribute("href", "light-mode.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to light mode";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("default mode")) {
    styleSheet.setAttribute("href", "star.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to default mode";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("light theme")) {
    styleSheet.setAttribute("href", "light-mode.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to light theme";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("lite theme")) {
    styleSheet.setAttribute("href", "light-mode.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to light theme";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("default theme")) {
    styleSheet.setAttribute("href", "star.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to default mode";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("dark theme")) {
    styleSheet.setAttribute("href", "dark-mode.css");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "changed to dark theme";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("open YouTube")) {
    window.open("https://youtube.com", "_blank");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "opening youtube";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("Google")){
    var search = whatToSpeak.substring(whatToSpeak.indexOf("+google")+7);
    window.open('https://www.google.com/search?q=' + search, "mywindow", "width=420, height=420, top=0,");
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "searching";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("what is your name")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I'm Edith";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("whats your name")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I'm Edith";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("what's your name")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I'm Edith";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("who created you")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I'm created by a teenage boy";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("I love you")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "so sweet. I love you too";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("marry me")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "when can we get married";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("like me")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I like you so much than anything";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("like you")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I like you so much than anything";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("kags")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I know you kalpaga, you are my friend.";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("sandy")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I know you santhosh, you are my friend.";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("raja")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I know you saravana raja, you are my friend.";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("cats")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I know you kalpaga, you are my friend.";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("Sandy")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I know you santhosh, you are my friend.";
    speechSynthesis.speak(utterance);
  } else if (whatToSpeak.includes("Raja")) {
    utterance.volume = 1; // 100%
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.text = "I know you saravana raja, you are my friend.";
    speechSynthesis.speak(utterance);
  }



}
