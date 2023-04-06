window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");
  let currentSection = "";

  sections.forEach(function (section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  let activeLink = document.querySelector(".navbar a.active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }

  let newActiveLink = document.querySelector(
    '.navbar a[href="#' + currentSection + '"]'
  );
  if (newActiveLink) {
    newActiveLink.classList.add("active");
  }

  navbar.classList.toggle("scrolled", pageYOffset > 0);
});
