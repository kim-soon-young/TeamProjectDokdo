document.addEventListener("DOMContentLoaded", function () {
  // top 버튼
  const topBtn = document.getElementById("go_up_down_bt");
  const goTopImg = document.getElementById("go-top-btn-img");
  const goDownImg = document.getElementById("go-bottom-btn-img");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // 페이지를 맨 위로 스크롤하는 동안 이미지를 숨깁니다.
    goTopImg.style.display = "none";
  });
  window.addEventListener("scroll", function () {
    // 현재 스크롤 위치를 가져옵니다.
    var scrollY = window.scrollY || window.pageYOffset;
    // 현재 창의 높이를 가져옵니다.
    var windowHeight = window.innerHeight;
    // 스크롤이 맨 위에 위치하고 현재 창의 높이가 0이 아니라면
    if (scrollY !== 0 && windowHeight !== 0) {
      // 이미지를 보이도록 설정합니다.
      goTopImg.style.display = "block";
    } else {
      // 그렇지 않으면 이미지를 숨깁니다.
      goTopImg.style.display = "none";
    }
  });
// =============================================
goTopImg.addEventListener("click", function() {
  toggleImages();
});
window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
    goDownImg.remove(); // 스크롤 높이가 0일 때 "go_bottom.png" 이미지를 제거합니다.
    goTopImg.src = "images/topbt/go_top.png"; // 이미지를 다시 "go_top.png"로 변경합니다.
  } else {
    if (!document.contains(goDownImg)) {
      // "go_bottom.png" 이미지가 존재하지 않는 경우, 다시 추가합니다.
      document.querySelector('.top-button a').appendChild(goDownImg);
    }
  }
});
function toggleImages() {
  goTopImg.src = "images/topbt/go_bottom.png"; // 이미지를 "go_bottom.png"로 변경합니다.
}
  // footer와 관련된 jQuery 코드
  var $w = $(window),
    footerHei = $(".footer.inner").outerHeight(),
    $gotopbt = $(".top-button");
  $w.on("scroll", function () {
    var sT = $w.scrollTop();
    var val = $(document).height() - $w.height() - footerHei;
    if (sT >= val) $gotopbt.addClass("on");
    else $gotopbt.removeClass("on");
  });
  // =======================================
  // 스탬프 투어 팝업
  document.getElementById("openStempTopPopup").addEventListener("click", function () {
    // 팝업 창을 열고 이미지를 표시
    window.open("event2.html", "", "width=1000,height=1300");
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   top 버튼
//   const topBtn = document.getElementById("go_up_down_bt");
//   const goTopImg = document.getElementById("go-top-btn-img");
//   const goBottomImg = document.getElementById("go-bottom-btn-img");
//   topBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (window.scrollY == 0) {
//       window.scrollTo({
//         top: 9999,
//         behavior: "smooth",
//       });
//       goTopImg.style.display = "block";
//       goBottomImg.style.display = "none";
//     } else {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//       goBottomImg.style.display = "block";
//       goTopImg.style.display = "none";
//     }
//   });
//   const topBtn = document.getElementById("go_up_down_bt");
//   const goTopImg = document.getElementById("go-top-btn-img");
//   topBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//     // 페이지를 맨 위로 스크롤하는 동안 이미지를 숨깁니다.
//     goTopImg.style.display = "none";
//   });
//   window.addEventListener("scroll", function () {
//     // 현재 스크롤 위치를 가져옵니다.
//     var scrollY = window.scrollY || window.pageYOffset;
//     // 현재 창의 높이를 가져옵니다.
//     var windowHeight = window.innerHeight;
//     // 스크롤이 맨 위에 위치하고 현재 창의 높이가 0이 아니라면
//     if (scrollY !== 0 && windowHeight !== 0) {
//       // 이미지를 보이도록 설정합니다.
//       goTopImg.style.display = "block";
//     } else {
//       // 그렇지 않으면 이미지를 숨깁니다.
//       goTopImg.style.display = "none";
//     }
//   });
//   // ===============================================
//   // =====================================================
// });
// $(function () {
//   var $w = $(window),
//     footerHei = $(".footer.inner").outerHeight(),
//     $gotopbt = $(".top-button");
//   $w.on("scroll", function () {
//     var sT = $w.scrollTop();
//     var val = $(document).height() - $w.height() - footerHei;
//     if (sT >= val) $gotopbt.addClass("on");
//     else $gotopbt.removeClass("on");
//   });
// });
