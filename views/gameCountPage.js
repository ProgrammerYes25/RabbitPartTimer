// const TimeCnt = document.getElementById("T"); //ejs에 있는 id와 연결


var time = 3; //기준시간 작성
var sec = ""; //초

//setInterval(함수, 시간) : 주기적인 실행
var x = setInterval(function () {
   //parseInt() : 정수를 반환
   sec = time % 60; //나머지를 계산

   document.getElementById("T").innerHTML = sec;
   time--;

   //타임아웃 시
   if (time < 0) {
      clearInterval(x); //setInterval() 실행을 끝냄
      document.getElementById("T").innerHTML = "";
      // location.href = "/gamePlayPage?count=" + count; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<타이머 끝나면 화면 넘어가는 코드
      location.href = "/gamePlayPage"; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<타이머 끝나면 화면 넘어가는 코드
      // 겜 화면 수정하느라 주석달아놓음 / 나중에 풀것!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   }
}, 1000);
