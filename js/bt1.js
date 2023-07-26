// Nhập vào 1 dãy số nguyên bất kì và hiển thị ra màn hình console,
// khi nhập 1 số âm thì dừng lại

// sử dụng while / do while

// tạo 1 biến trước để lưu trữ giá trị người dùng nhập vào

// cách 1: while
let n = 0;
while (n >= 0) {
    // nhập vào 1 số
    n = +prompt("Nhập vào 1 số nguyên:");
    console.log("Bạn vừa nhập số:" + n);
}

// cách 2: do ... while
let m;
do {
    m = +prompt("Nhập vào 1 số nguyên");
    console.log("Bạn vừa nhập số:" + n);
} while (m > 0);