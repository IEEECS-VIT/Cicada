var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");
var inspect = document.getElementById('inspect');
inspect.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        var inspectParagraph = document.getElementById('inspectParagraph');
        if (inspectParagraph) {
            inspectParagraph.style.display = 'block';
        }
    }
});

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    }
});