(function () {
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  var backTop = document.getElementById("backTop");
  var year = document.getElementById("year");
  var navAnchors = links ? links.querySelectorAll("a") : [];
  var sections = document.querySelectorAll("section[id]");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }

  function closeMenu() {
    if (!links || !toggle) return;
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navAnchors.forEach(function (anchor) {
      anchor.addEventListener("click", closeMenu);
    });
  }

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Animate skill bars when visible
  var progressBars = document.querySelectorAll(".progress");
  if ("IntersectionObserver" in window) {
    var progressObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var bar = entry.target;
          var value = bar.getAttribute("data-progress") || "0";
          var fill = bar.querySelector("span");
          if (fill) fill.style.width = value + "%";
          progressObserver.unobserve(bar);
        });
      },
      { threshold: 0.4 }
    );
    progressBars.forEach(function (bar) {
      progressObserver.observe(bar);
    });
  } else {
    progressBars.forEach(function (bar) {
      var value = bar.getAttribute("data-progress") || "0";
      var fill = bar.querySelector("span");
      if (fill) fill.style.width = value + "%";
    });
  }

  // Active nav link
  function setActiveNav() {
    var scrollPos = window.scrollY + 120;
    var current = "top";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navAnchors.forEach(function (anchor) {
      var href = anchor.getAttribute("href") || "";
      var id = href.replace("#", "");
      anchor.classList.toggle("is-active", id === current || (current === "home" && id === "top"));
    });
  }

  window.addEventListener("scroll", function () {
    onScroll();
    setActiveNav();
  }, { passive: true });

  onScroll();
  setActiveNav();
})();
