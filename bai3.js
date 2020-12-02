let input = document.querySelector("input");
let button = document.querySelector("button");
let a = 0;
button.onclick = function() {
    let so = 8;
    let nhap = input.value;
    a++;
    if (nhap < 0 || nhap > 10) {
        input.value = "";
        alert("Bạn đã nhập sai mời bạn nhập lại số từ 0 đến 10");
        a = 0;
    } else {
        if (nhap == so) {
            alert("chúc mừng bạn đã đoán đúng");
        }
        if (nhap != so) {
            input.value = "";
            if (a < 3) {
                nhap = "";
                alert(`kết quả sai`);
            }
            if (a >= 3) {
                alert(`Bạn đã đoán sai 3 lần kết quả là ${number}`);
            }
        }
    }
};