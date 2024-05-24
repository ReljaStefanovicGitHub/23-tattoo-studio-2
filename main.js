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