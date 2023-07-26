// Kiểm tra 1 số có phải số nguyên tố hay không
// số nguyên tố có 2 bước là là 1 và chính nó phải > 1

// cách 1 đếm số ước của 1 số;

// let number = 1024;
// let count = 0;
// for (let i = 1; i <= number;  i++){
//     if (number % i == 0) {
//         count++;
//     }
// }
// if (count == 2) {
//     console.log("là số nguyên tố");
// } else {
//     console.log("Không là số nguyên tố");
// }

// cách 2: Tìm xem có ước nào trong khoảng từ 2 - < number không
let flag = true;
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        // tồn tại 1 ước
        flag = false;
        break;
    }
}
if (flag) {
    console.log("số nguyên tố");
} else {
    console.log("không là số nguyên tố");
}


// in ra 20 số nguyên tố đầu tiên
