// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

// the link to your model provided by Teachable Machine export panel
const URL = "/my_model/";
let model, webcam, ctx, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // Note: the pose library adds a tmPose object to your window (window.tmPose)
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const size = 300; //카메라 크기 지정 변수
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop(timestamp) {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}


var status = "stand"; //클래스
var count = 0; // 점수
async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);

    const basketimageContainer = document.getElementById("basket-image");    
    const imageContainer = document.getElementById("image-container");
    const countTextContainer = document.getElementById("count-text-container");     // YS- ejs에 있는 id가 'count-text-container'인 <h1>태그와 연결 (점수가 들어갈 <h1>태그이다.)
    let basketimageURL;
    let imageURL;

    if (prediction[0].probability.toFixed(2) == 1) {
        if (status == "sit") {
            count++;//YS- 앉았을 때 점수 추가 
            countTextContainer.innerHTML=count+"점";    //YS- 점수 바꿔서 띄우기 (innerHTML은 텍스트를 넣거나 들어가 있는 텍스트를 바꿀을 수 있다.)
        }
        status = "stand";
        imageURL = "./image/img_rabbit1.png";
    } else if (prediction[1].probability.toFixed(2) == 1) { 
        status = "sit";
        imageURL = "./image/img_rabbit2.png";
    }
    console.log(count);

    if(count < 5){
        basketimageURL = "./image/img_basket.png";
    } else if(count >= 5 && count < 10){
        basketimageURL = "./image/img_basket2.png";
    } else if(count >= 10 && count < 15){
        basketimageURL = "./image/img_basket3.png";
    } else if(count >= 15 && count < 20){
        basketimageURL = "./image/img_basket4.png";
    } else if(count >= 20 && count < 25){
        basketimageURL = "./image/img_basket5.png";
    } else if(count >= 25){
        basketimageURL = "./image/img_basket6.png";
    }

   // 이미지 요소 생성 및 속성 설정
   const imageElement = new Image();
   imageElement.src = imageURL;

   const basketimageElement = new Image();
   basketimageElement.src = basketimageURL; 

   const textElement = new Text();

  // 이미지 로드 완료 후 이미지 컨테이너에 이미지 추가
  imageElement.onload = function() {
    imageContainer.innerHTML = ""; // 이미지 컨테이너 초기화
    imageContainer.appendChild(imageElement);
  };

  basketimageElement.onload = function() {
    basketimageContainer.innerHTML = ""; // 이미지 컨테이너 초기화
    basketimageContainer.appendChild(basketimageElement);
  };

    //stand sit 분석 수치 나타내는 코드
    // for (let i = 0; i < maxPredictions; i++) {
    //     const classPrediction =
    //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //     labelContainer.childNodes[i].innerHTML = classPrediction;
    // }

    
    // finally draw the poses
    drawPose(pose);
}

var time = 30; //기준시간 작성
   var sec = ""; //초

   //setInterval(함수, 시간) : 주기적인 실행
   var x = setInterval(function() {
      //parseInt() : 정수를 반환
      sec = time%60; //나머지를 계산

      document.getElementById("timer").innerHTML = sec + "초";
      time--;

      //타임아웃 시
      if (time < 0) {
         clearInterval(x); //setInterval() 실행을 끝냄
         document.getElementById("timer").innerHTML = "0초";
            // location.href = "/gameTimeoutPage"; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<타이머 끝나면 화면 넘어가는 코드
            // 겜 화면 수정하느라 주석달아놓음 / 나중에 풀것!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
   }, 1000);


function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        // draw the keypoints and skeleton
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}