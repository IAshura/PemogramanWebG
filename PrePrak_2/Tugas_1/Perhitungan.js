document.getElementById("Jumlah").addEventListener("click", function () {
  var B1 = parseFloat(document.getElementById("A_1").value);
  var B2 = parseFloat(document.getElementById("A_2").value);

  var result = B1 + B2;
  alert("Hasil Penjumlahan = " + result);
});

document.getElementById("Clear").addEventListener("click", function () {
  document.getElementById("A_1").value = "";
  document.getElementById("A_2").value = "";
});
