// select 태그 이름에 폼 이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){
    let selectedText = document.getElementById("major").value;
    alert(selectedText + "가 선택되었습니다.");
}