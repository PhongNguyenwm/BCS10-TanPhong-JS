function calculateDigitSum() {
  // Lấy giá trị số có 2 chữ số từ người dùng
  var twoDigitNumber =
    parseInt(document.getElementById("twoDigitNumber").value, 10) || 0;

  // Kiểm tra xem số nhập vào có phải là số có 2 chữ số hay không
  if (twoDigitNumber < 10 || twoDigitNumber > 99) {
    alert("Vui lòng nhập số có 2 chữ số.");
    return;
  }

  // Tách chữ số hàng đơn vị và hàng chục
  var unitDigit = twoDigitNumber % 10;
  var tenDigit = Math.floor(twoDigitNumber / 10);

  // Tính tổng hai chữ số
  var digitSum = unitDigit + tenDigit;

  // Hiển thị kết quả
  document.getElementById("result").textContent =
    "Tổng của hai chữ số là: " + digitSum;
}
