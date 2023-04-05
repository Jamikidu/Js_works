let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small")
console.log(smallPics.length)

// smallPics[0].onclick = showBig;

// 클릭 이벤트 발생
for(i=0; i<smallPics.length; i++){
    // addEventListener 이벤트 처리기(접두어 'on'을 붙이지 않음)
    smallPics[i].addEventListener("mouseover", function(){
        console.log(this.src); // 클릭한 대상
        bigPic.setAttribute("src", this.src);
    });
    
}


// 상세 설명 보기
let view = document.getElementById("view");
let detail = document.getElementById("detail");

// 토글 프로그래밍
let sw = true; //상태변수

view.addEventListener("click", function(){
    if(sw){
        detail.style.display = "block";
        view.innerText = "상세 설명 닫기";
        sw = false;
    }
    else{
        detail.style.display = "none";
        view.innerText = "상세 설명 보기";
        sw = true;
    }
})