(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll("[data-chp-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.elements.namedItem(name);
        return el && el.value ? el.value.trim() : "";
      };
      var lines = [
        "Name: " + get("name"),
        "Email: " + get("email"),
        "Phone: " + get("phone"),
        "COLO DL #: " + get("dl"),
        "Date of birth: " + get("dob"),
        "Class date: " + get("classdate")
      ];
      window.location.href = "mailto:wdn.firearms.training@gmail.com?subject=" +
        encodeURIComponent("CHP class sign up — WDN Firearms Training") +
        "&body=" + encodeURIComponent(lines.join("\n"));
    });
  });
})();
