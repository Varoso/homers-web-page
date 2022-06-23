window.onload = function() {
  openBackdrop();
}

function openBackdrop() {
  setTimeout(function () {
    backdropStatus = document.getElementById("backdrop-status");
    backdropStatus.checked = false;
  }, 1500);
}
