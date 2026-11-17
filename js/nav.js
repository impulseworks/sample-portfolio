(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setOpen(false); });
  });
})();
