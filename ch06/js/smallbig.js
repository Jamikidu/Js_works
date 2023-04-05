// 이미지 바꾸기
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small")
console.log(smallPics.length)

// smallPics[0].onclick = showBig;

// 클릭 이벤트 발생
for(i=0; i<smallPics.length; i++){
    // smallPics[i].onclick = showBig;
    // addEventListener 이벤트 처리기(접두어 'on'을 붙이지 않음)
    smallPics[i].addEventListener("mouseover", showBig);
    // ↓ showBig 자리에 익명함수로 바로 넣어도 가능
    function showBig(){
        console.log(this.src); // 클릭한 대상
        bigPic.setAttribute("src", this.src);
    }
}