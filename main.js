function tinhTien(event) {
  event.preventDefault();
  var tongTien = parseFloat(document.getElementById("tongTien").value);
  var tienTips = parseFloat(document.getElementById("tips").value);
  var soNguoi = parseFloat(document.getElementById("soNguoi").value);

  if (tongTien === 0 || isNaN(tongTien)) {
    alert(
      "Vui lòng nhập số tiền và thử lại. (Số tiền phải lớn hơn 0). Xin cảm ơn!"
    );
  } else if (isNaN(tienTips)) {
    alert("Vui lòng chọn mức tiền Tips");
  } else {
    var ketQua = (tongTien * tienTips) / 100 / soNguoi;

    document.getElementById("thongBao").innerHTML =
      "Mỗi người nhận được $" + ketQua;
  }
}
