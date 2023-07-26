// số hoàn hảo : là số có tổng các ước nhỏ hơn nó =  chính nó
// số 6 : 1,2,3,6 => 1+2+3 = 6 => 6 là số hoàn hảo

// kiểm tra 1 số nhập vào có phải số hoàn hảo hay không
// B1 nhập vào 1 số 
// B2 kiểm tra từ 1 -> chinhs nó , nếu là ước của số đó
// thì thực hiện tính tổng  các ước đấy
// B3: kết thúc vòng lặp tiêns hành so sánh tổng thu
// được với sôs nhập vào và đưa ra kết luận 
let number = +prompt("Nhập vào 1 số");
let sum = 0;
for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        sum = sum + i;
    }
}

if (sum == number) {
    alert("Là sô hoàn hảo")
} else {
    alert("Không là số hoàn hảo")
}



