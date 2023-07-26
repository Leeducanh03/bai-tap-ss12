// Nhập vào các số nguyên đến khi nhập số 0 thì dừng lại ,
// hiển thị tổng của các số chẵn vừa nhập

let n = 1;
let sum = 0;
// sum = undefined
while (n != 0) {
    // Nhập 1 số nguyên
    n = +prompt("Nhập 1 số nguyên:")
    if (n % 2 == 0) {
        sum += n;
    }
}

// dừng vòng lặp - hiển thị ra các tổng số vừa nhập
alert("Tổng các số vừa nhập là:" + sum);
