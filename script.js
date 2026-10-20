(function () {
  var items = document.querySelectorAll(".faq-item");

  function setOpen(item, open) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    item.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
  }

  items.forEach(function (item) {
    item.querySelector(".faq-q").addEventListener("click", function () {
      var willOpen = !item.classList.contains("open");
      // Optional: keep only one answer open at a time
      items.forEach(function (other) {
        if (other !== item) setOpen(other, false);
      });
      setOpen(item, willOpen);
    });
  });

  // Keep open panels the right height when the screen is resized
  window.addEventListener("resize", function () {
    items.forEach(function (item) {
      if (item.classList.contains("open")) {
        item.querySelector(".faq-a").style.maxHeight =
          item.querySelector(".faq-a-inner").scrollHeight + "px";
      }
    });
  });

  // Open the first question by default
  if (items.length) setOpen(items[0], true);
})();
