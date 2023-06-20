document.addEventListener('DOMContentLoaded', function() {
    var backAudio = new Audio('music/titlemusic.mp3');
    backAudio.loop = true;
    backAudio.play();
  });

function onclickSound(link) {
    const clickMusic = document.getElementById("clickSound");
    clickMusic.play();

    // 소리 재생 후 링크로 이동
    setTimeout(function () {
        window.location.href = link;
    }, clickMusic.duration * 670); // 소리의 재생 시간(초)에 따라 지연 시간 설정
}

function submitClickSound() {
    var clickMusic = document.getElementById("clickSound");
    clickMusic.play();

    // 소리 재생 후 페이지 이동
    setTimeout(function () {
        var form = document.querySelector("form");
        form.submit();
    }, clickMusic.duration * 5000); // 소리의 재생 시간(초)에 따라 지연 시간 설정
}