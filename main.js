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