var time = 3; //기준시간 작성
var sec = ""; //초
const countMp3 = new Audio('./music/count3.mp3');

//setInterval(함수, 시간) : 주기적인 실행
var x = setInterval(function () {
   //parseInt() : 정수를 반환
   sec = time % 60; //나머지를 계산

   document.getElementById("T").innerHTML = sec;
   time--;
   countMp3.play();
   //타임아웃 시
   if (time < 0) {
      clearInterval(x); //setInterval() 실행을 끝냄
      document.getElementById("T").innerHTML = "";
      location.href = "/gamePlayPage"

   }
}, 1000);
