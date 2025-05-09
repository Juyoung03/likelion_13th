function addPrice() {
    // id가 price인 광진구 집 가격을 price에 저장하기
    const price = document.getElementById("price");
    let str_price = price.textContent; // price의 텍스트를 변수에 저장
    
    // 문자열로 되어 있는 가격 num으로 바꾸기기
    let int_price = Number(str_price.replace(",", "").replace("₩", ""));
    
    int_price += 10000; // 금액 인상

    // toLocalString => 1000단위로 끊어주기 위해
    price.textContent = `₩${int_price.toLocaleString()}`;
}

function subPrice() {
    // id가 price인 광진구 집 가격을 price에 저장하기
    const price = document.getElementById("price");
    let str_price = price.textContent; // price의 텍스트를 변수에 저장
    
    // 문자열로 되어 있는 가격 num으로 바꾸기기
    let int_price = Number(str_price.replace(",", "").replace("₩", ""));
    
    // 가격이 음수가 되지 않게
    if (int_price - 10000 >= 0) {
        int_price -= 10000; // 금액 감소
    }

    // toLocalString => 1000단위로 끊어주기 위해
    price.textContent = `₩${int_price.toLocaleString()}`;
}

const IncBtn = document.getElementById("inc");
const DecBtn = document.getElementById("dec");

IncBtn.addEventListener('click', function() {
    addPrice();
})

DecBtn.addEventListener('click', function() {
    subPrice();
})