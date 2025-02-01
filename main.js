function clicks() {
  $("#div1").hide();
  $("#div2").show();
  $("#div2").addClass("fadeinv2");

  var typed = new Typed(".katakata", {
    strings: [
      "Cuma mau bilang",
      "Selamat ulang tahun ya Sayangku",
      "Km doa sendiri ya biar aku yang amin aja hehe",
      "I Love You Salsa",
      `<a href="https://salsa-bf.github.io/kesayangan/">Selanjutnya ...</a>`,
    ],
    typeSpeed: 70,
  });
}
