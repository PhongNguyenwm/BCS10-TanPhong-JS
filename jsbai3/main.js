function convertCurrency() {
  // Lấy giá trị số tiền USD từ người dùng
  var usdAmount = parseFloat(document.getElementById("usdAmount").value) || 0;

  // Giá trị quy đổi
  var exchangeRate = 23500;

  // Tính giá trị quy đổi
  var vndAmount = usdAmount * exchangeRate;

  // Hiển thị kết quả
  document.getElementById("result").textContent =
    "Số tiền quy đổi là: " + vndAmount.toLocaleString() + " VND";
}
