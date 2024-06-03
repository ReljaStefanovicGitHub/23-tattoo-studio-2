document.addEventListener("fullscreenchange", function () {
var video = document.getElementById("video1");
if (!document.fullscreenElement) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
});

document.addEventListener("webkitfullscreenchange", function () {
var video = document.getElementById("video1");
if (!document.webkitIsFullScreen) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
});

document.addEventListener("mozfullscreenchange", function () {
var video = document.getElementById("video1");
if (!document.mozFullScreen) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
});

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll('.zoom');
images.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// JavaScript to handle popup open/close
document.querySelectorAll('.card button').forEach(function(button) {
  button.addEventListener('click', function() {
    var popup = this.nextElementSibling;
    popup.style.display = 'block';
  });
});

document.querySelectorAll('.popup .close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    this.closest('.popup').style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
});
function filter(type) {
var galleryItems = document.querySelectorAll('.gallery a');

galleryItems.forEach(function(item) {
    if (type === 'all') {
        item.style.display = 'block';
    } else if (type === 'photos' && item.classList.contains('photo')) {
        item.style.display = 'block';
    } else if (type === 'videos' && item.classList.contains('video')) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});
}
document.addEventListener("fullscreenchange", function () {
var video = document.getElementById("video1");
if (!document.fullscreenElement) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
});

document.addEventListener("webkitfullscreenchange", function () {
var video = document.getElementById("video1");
if (!document.webkitIsFullScreen) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
});

document.addEventListener("mozfullscreenchange", function () {
var video = document.getElementById("video1");
if (!document.mozFullScreen) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
});