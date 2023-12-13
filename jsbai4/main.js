function calculateAreaAndPerimeter() {
  // Lấy giá trị chiều dài và chiều rộng từ người dùng
  var length = parseFloat(document.getElementById("length").value) || 0;
  var width = parseFloat(document.getElementById("width").value) || 0;

  // Tính diện tích và chu vi
  var area = length * width;
  var perimeter = 2 * (length + width);

  // Hiển thị kết quả
  document.getElementById("result").textContent =
    "Diện tích là: " + area + "m2" + " và chu vi là: " + perimeter + "m";
}
