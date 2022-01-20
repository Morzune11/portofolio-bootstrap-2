$(".page-scroll").on("click", function () {
  const tujuan = $(this).attr("href");
  const elemenTujuan = $(tujuan);

  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 55,
    },
    1300,
    "easeInOutExpo"
  );
});
