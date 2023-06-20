// var audioPlayer = document.getElementById('backgroundMusic');
// audioPlayer.play();

function onclickSound(link) {
    const clickMusic = document.getElementById("clickSound");
    clickMusic.play();

    // 소리 재생 후 링크로 이동
    setTimeout(function () {
        window.location.href = link;
    }, clickMusic.duration * 670); // 소리의 재생 시간(초)에 따라 지연 시간 설정
}