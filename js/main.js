window.onload = function() {
  setDefaultData();
  setContent();
  openBackdrop();
};

function openBackdrop() {
  setTimeout(function () {
    backdropStatus = document.getElementById("backdrop-status");
    backdropStatus.checked = false;
  }, 1500);
}

function setDefaultData() {
  if(!window.localStorage.getItem('version')) {
    window.localStorage.setItem('version', 'v1');
  }
  if(!window.localStorage.getItem('language')) {
    window.localStorage.setItem('language', 'english');
  }
}

function setContent() {
  let language;
  switch(window.localStorage.getItem('language')) {
    case 'english':
      language = english;
      break;
    case 'spanish':
      language = spanish;
      break;
  }

  document.title = language.title;
  document.getElementById('header').textContent = language.header;
  document.getElementById('backdrop-text-left').textContent = language.backdropTextLeft;
  document.getElementById('backdrop-text-right').textContent = language.backdropTextRight;
}

var english = {
  title: "Homer's Web Page",
  backdropTextLeft: "Homer's",
  backdropTextRight: "Web Page",
  header: "Homer's Web Page",
  version: "Version",
  language: "Language"
};
  
var spanish = {
  title: "Página web de Homer",
  backdropTextLeft: "Página web",
  backdropTextRight: "de Homer",
  header: "Página web de Homer",
  version: "Versión",
  language: "Idioma"
};
