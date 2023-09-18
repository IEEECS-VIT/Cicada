var video = document.getElementById("myVideo");

var inspect = document.getElementById('inspect');
inspect.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        var inspectParagraph = document.getElementById('inspectParagraph');
        if (inspectParagraph) {
            inspectParagraph.style.display = 'block';
        }
    }
});

var toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        toggleButton.textContent = "Pause";
    } else {
        video.pause();
        toggleButton.textContent = "Play";
    }
});
