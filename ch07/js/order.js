// 체크 박스 속성에 이벤트 처리하기
let check = document.querySelector("#shippingInfo");

// 체크 이벤트
check.addEventListener("click", checkBox);

let billingName = document.getElementById("billingName");

let shippingName = document.getElementById("shippingName");

function checkBox(){
    if(check.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
        shippingName.value = ""
        shippingTel.value = ""
        shippingAddr.value = ""
    }
}