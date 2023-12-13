function calculateAverage() {
  // Lấy giá trị từ người dùng
  var num1 = parseFloat(document.getElementById("number1").value) || 0;
  var num2 = parseFloat(document.getElementById("number2").value) || 0;
  var num3 = parseFloat(document.getElementById("number3").value) || 0;
  var num4 = parseFloat(document.getElementById("number4").value) || 0;
  var num5 = parseFloat(document.getElementById("number5").value) || 0;

  // Tính trung bình cộng
  var average = (num1 + num2 + num3 + num4 + num5) / 5;

  // Hiển thị kết quả
  document.getElementById("result").textContent =
    "Trung bình cộng là: " + average.toFixed(2);
}
