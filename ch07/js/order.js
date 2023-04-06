// 체크 박스 속성에 이벤트 처리하기
window.onload = function(){
    let check = document.querySelector("#shippingInfo");

    // 체크 이벤트
    check.addEventListener("click", checkBox);

    let billingName = document.getElementById("billingName");
    let billingTel = document.getElementById("billingTel");
    let billingAddr = document.getElementById("billingAddr");

    let shippingName = document.getElementById("shippingName");
    let shippingTel = document.getElementById("shippingTel");
    let shippingAddr = document.getElementById("shippingAddr");

    function checkBox(){
        if(check.checked == true){
            shippingName.value = billingName.value;
            shippingTel.value = billingTel.value;
            shippingAddr.value = billingAddr.value;
        }else{
            // 체크해제시 check.checked == false 입력상자 공백 초기화
            shippingName.value = ""
            shippingTel.value = ""
            shippingAddr.value = ""
        }
    } //checkBox 닫기
} //onload 닫기