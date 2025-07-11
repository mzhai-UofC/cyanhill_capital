document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");

  // 检查是否已关闭过
  if (!localStorage.getItem("modalClosed")) {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden"; // 防止页面滚动
  }

  closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
    document.body.style.overflow = ""; // 恢复页面滚动
    localStorage.setItem("modalClosed", "true");
    console.log("JS loaded!");
  });
});


// 品牌图片自适应切换（网页/平板用 images，手机用 images/390）
function updateBrandImages() {
  var isMobile = window.innerWidth <= 809;
  document.querySelectorAll('.brand-img').forEach(function(div) {
    // 提取原图片名
    var bg = div.style.backgroundImage;
    var match = bg.match(/images\/([a-zA-Z0-9_-]+\.(png|jpg|jpeg|webp))/i);
    if (match) {
      var imgName = match[1];
      if (isMobile) {
        div.style.backgroundImage = "url('./images/390/" + imgName + "')";
      } else {
        div.style.backgroundImage = "url('./images/" + imgName + "')";
      }
    }
  });
}


