import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});
console.log("h1");

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("mouseover", function (e) {
  e.target.style.color = "skyBlue";
});

document.querySelectorAll("h1").forEach((h1) => {
  h1.addEventListener("mouseover", handleMouseOver);
  h1.addEventListener("mouseleave", handleMouseLeave);
});

function changeRandomColor() {
  const randomColor = getRandomColor();
  document.querySelectorAll("h1").forEach((h1) => {
    h1.style.color = randomColor;
  });
}
function getRandomColor() {
  const colors = [
    "#FFD1DC",
    "#FFB6C1",
    "#FFC3A0",
    "#FFDDC1",
    "#EFDCA3",
    "#C2FECF",
    "#B3E0E0",
    "#C2C2E6",
    "#D3C2FF",
    "#FFE6C2",
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function handleMouseOver() {
  mouseOverTimer = setInterval(changeRandomColor, 2000);
}

function handleMouseLeave() {
  clearInterval(mouseOvertimer);
}

document.querySelectorAll("nav a").forEach((e) => {
  e.addEventListener("mouseover", (event) => {
    e.style.color = "red";
    e.style.backgroundColor = "yellow";
  });

  e.addEventListener("mouseleave", (event) => {
    e.style.color = "black";
    e.style.backgroundColor = "white";
  });
});

document.querySelectorAll("h2").forEach((e) => {
  e.addEventListener("mouseover", (event) => {
    e.style.fontStyle = "italic";
    e.style.fontSize = "40px";
    e.style.fontFamily = "Playfair Display";
    e.style.color = "DarkOrange";
  });
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "indigo";
    btn.style.color = "white";
  });
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseover", (event) => {
    event.preventDefault();
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.3s ease";
  });

  img.addEventListener("mouseleave", (event) => {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.3s ease";
  });
});

document.querySelectorAll("h4").forEach((e) => {
  e.addEventListener("click", (event) => {
    (e.style.fontStyle = "italic"), "underlined";
    e.style.textDecoration = "underline";
    e.style.fontSize = "30px";
    e.style.fontFamily = "Montserrat";
    e.style.color = "pink";
  });
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("event > ", e);
});
