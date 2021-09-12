function menu() {
  let body = document.querySelector("body");
  let nav = document.querySelector(".nav-list");
  let navIcons = document.querySelectorAll(".nav-list li");
  let l1 = document.querySelector(".menu .line1");
  let l2 = document.querySelector(".menu .line2");
  let l3 = document.querySelector(".menu .line3");

  navIcons.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade ease forwards ${index / 7 + 1}s`);
  });

  if (nav.style.display == "flex") {
    body.style.overflowY = "auto";
    nav.style.display = "none";
    l1.style.transform = "rotate(0) translate(0, 0)";
    l2.style.opacity = "1";
    l3.style.transform = "rotate(0) translate(0, 0)";
  } else if (nav.style.display == "none") {
    body.style.overflowY = "hidden";
    nav.style.display = "flex";
    l1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
    l2.style.opacity = "0";
    l3.style.transform = "rotate(45deg) translate(-5px, -7px)";
  } else if (nav.style.display == "") {
    body.style.overflowY = "hidden";
    nav.style.display = "flex";
    l1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
    l2.style.opacity = "0";
    l3.style.transform = "rotate(45deg) translate(-5px, -7px)";
  }
}

function press(id) {
  var element = document.getElementById(id);
  const c = element.innerHTML;

  // Utils
  if (id == "botinfo") {
    element.innerHTML = "&botinfo";
  } else if (id == "ping") {
    element.innerHTML = "&ping";
  } else if (id == "convite") {
    element.innerHTML = "&convite";
  }
  setTimeout(() => {
    element.innerHTML = c;
  }, 10000);
}
