// Bài1.  Viết 1 đoạn mã cho phép người chơi dùng nhập vào 1 số n.
// Tiến hành kiểm tra xem đó có phải là 1 số nguyên dương hợp lệ hay không?
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức A = 0 + 1 + 2 + 3 + ... + n

// Phân tích bài toán
// Bước 1: Nhập vào 1 số n;
// Bước 2: Kiểm tra n > 0 có đúng hay không?
// Bước 3: Nếu bước 2 đúng, dùng vòng lặp tính tổng (tính từ 1 đến số nhập n)

// CODE
// b1.
// let n = +prompt("Mời bạn nhập 1 số:");
// let sum = 0;
// // b2.
// if (n > 0) {
//     // b3.
//     for (i = 1; i <= n; i++) {
//         sum = sum + 1;
//     }
//     console.log(sum);
// }

// Bài 2. Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n.
// Tiến hành kiểm tra xem đó có phải là 1 số nguyên hợp lệ hay không?
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 x 2 x 3 x ... x n

// CODE

// let m = +prompt("Mời bạn nhập 1 số: ");
// let abc = 1;
// if (m > 0) {
//     for (i = 1; i <= m; i++) {
//         abc = abc * 1;
//     }
//     console.log(abc);
// }

// Bài 3. Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n.
// Tiến hành kiểm tra xem đó có phải là 1 số nguyên hợp lệ hay không?
// Nếu đó là số hợp lệ, tiến hành tính tổng quát của biểu thức C = 1 + 1/2 + 1/3 + ... + 1/n

// CODE
// let a = +prompt("Mời bạn nhập 1 số:")
// let cbd = 0;
// if (a > 0) {
//     for (i = 1; i <= a; i++) {
//         sum = sum + (1 / a)
//     }
//     console.log(cbd);
// }

// Bài 4. Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n.
// Tiến hành kiểm tra xem đó có phải là 1 số nguyên hợp lệ hay không?
// Nếu đó là số hợp lệ, tiến hành tính tổng quát của biểu thức A = 1 x 1/2 + 1/2 x 1/3 + 1/3 x 1/4 + ... +1/(n-1) x 1/n

// CODE
// let n = +prompt("Mời bạn nhập 1 số:");
// let sum = 0;
// if (n > 1) {
//     for (i = 2; i <= n; i++) {
//         sum = sum + (1 / (i - 1)) * (1 / i);
//     }
//     console.log(sum);
// }

// Bài 5. Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n.
// Tiến hành kiểm tra xem đó có phải là 1 số nguyên hợp lệ hay không? (1 <= n <= 9)
// Nếu không hợp lệ thì nhập lại
// Nếu đó là số hợp lệ, tiến hành in ra bảng cửu chương của số đó
// Input : n = 8
// Expected output : 8 x 1 = 8
//                   8 x 2 = 16
//                   ...
//                   8 x 10 = 80

// Phấn tích đề bài
// b1. Nhập vào 1 số
// b2. Tiến hành kiểm tra với điều kiện 0<n<10
// b3. Nếu không thỏa mãn bước 2 thì nhập lại
// b4. Thỏa mãn thì in ra bảng cửu chương của số đó

// CODE:

// let a;
// do {
//     a = +prompt("Mời bạn nhập 1 số từ 1 -> 9");
// } while (a < 1 || a > 9);
// let b;
// for (i = 1; i <= 10; i++){
//     b = a * 1;
//     console.log(`${a} x ${i} = ${b}`);
// }


// Bài 6. Viết 1 đoạn mã cho phép người dùng nhập vào 1 số n.
// Tiến hành kiểm tra xem đó có phải là 1 số nguyên hợp lệ hay không?
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console dãy số fibonacci n phần tử

// Input: n = 13
// Expected ouput: 0, 1, 1, 2, 3, 5, 8, 13, ..., 144 (13 số)

// CODE
// let n = +prompt("Mời bạn nhập số n:");
// let a = 0;
// let b = 1;
// let x;
// for (let i = 0; i < n; i++){
//     if (i == 0) {
//        console.log(a);
//     } else if (i == 1) {
//         console.log(b);
//     } else {
//         x = a + b
//         a = b
//         b = x
//         console.log(x);
//    }
// }

// Bài 7. Viết 1 đoạn mã cho phép người dùng nhập vào 1 số nguyên dương n.
// Tiến hành kiểm tra xem đó có phải là 1 số hợp lệ hay không?
// Nếu không hợp lệ thì phải cho nhập lại

// Input: n = 5
// Expected output:
// 0 - chẵn
// 1 - lẻ
// 2 - chẵn
// 3 - lẻ
// 4 - chẵn
// 5 - lẻ

// CODE
// let n;
// do {
//     n = +prompt("Hãy nhập vào 1 số n")
// } while (n <= 0);
// for (i = 0; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i}:chẵn`);
//     } else {
//         console.log(`${i}:lẻ`);
//     }
// }

// Bài 8. Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n.
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console các số chẵn trước, sau đó in ra các số lẻ sau

// Input: n = 5
// 	Expected output:
// 0
// 2
// 4
// 1
// 3
// 5

// CODE
// let n;
// do {
//     n = +prompt("Hãy nhập vào 1 số n:")
// } while (n <= 0);
// for (i = 1; i <= n; i++){
//         console.log(i);
// }
// for (i = 1; i <= n; i += 2){
//     console.log(i);
// }

// Bài 9. Viết một đoạn mã mô phỏng máy ATM. Cho người dùng nhập vào số tiền cần rút.
// Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá.
// Biết máy ATM chỉ rút được 3 loại mệnh giá là 500.000, 200.000, 100.000, 50.000.Biết số tiền tối thiểu rút một lần là 50.000


// Input: n = 550.000
// 	Expected output:
// 500.000 - 1
// 50.000 - 1


// Input: n = 2.850.000
// 	Expected output:
// 500.000 - 5
// 200.000 - 1
// 100.000 - 1
// 50.000 - 1

// Input: n = 2.855.000
// 	Expected output:
// Số tiền bạn rút phải là bội số của 50.000

// CODE
let tien = 0; // khai báo biến lưu trữ số tiền nhập vào
let a = b = c = d = 0; // khai báo lần lượt các biến đếm số lượng các tờ tiền 500, 200, 100, 50; let a = 0; let b = 0....


// vòng lặp nhập tiền
do {
    tien = prompt("Nhap so tien ban muon rut")
} while (tien <= 0 || tien % 50000 !== 0); // không được nhập tiền âm, tiền = 0 và không chia hết cho 50.000

// vòng lặp khi còn tiền thì sẽ tính toán trừ tiền
while (tien > 0) {
    //nếu tiền lớn hơn 500.000 thì sẽ rút được 1 tờ 500.000 và khi nhỏ hơn thì tương tự cho các tờ tiền khác
    if (tien >= 500000) {
        tien -= 500000
        a++
    } else if (tien >= 200000) {
        tien -= 200000
        b++
    } else if (tien >= 100000) {
        tien -= 100000
        c++
    } else {
        tien -= 50000
        d++
    }
}

// kiểm tra xem có tờ nào và có bao nhiêu tờ thì in ra
if (a > 0) {
    console.log(`500000 - ${a}`)
}
if (b > 0) {
    console.log(`200000 - ${b}`)
}
if (c > 0) {
    console.log(`100000 - ${c}`)
}
if (d > 0) {
    console.log(`50000 - ${d}`)
}