function calculateSalary() {
  // Lấy giá trị số ngày từ người dùng
  var numDays = parseInt(document.getElementById("numDays").value, 10);

  // Kiểm tra xem giá trị nhập vào có hợp lệ hay không
  if (isNaN(numDays) || numDays < 0) {
    alert("Vui lòng nhập số ngày làm việc hợp lệ.");
    return;
  }

  // Mức lương 1 ngày
  var dailySalary = 100000;

  // Tính lương
  var totalSalary = numDays * dailySalary;

  // Hiển thị kết quả
  document.getElementById("result").textContent =
    "Lương của bạn là: " + totalSalary.toLocaleString() + " VND";
}
