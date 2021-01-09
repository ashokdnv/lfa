const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
console.log(navLinks);

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navLinks.forEach((link, i) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.5s ease forwards ${i / 7 + 0.2}s`;
    }
  });
});

// Images

const images = ["bg-1", "bg-2", "bg-3", "bg-4"];

// setInterval(() => {
//   const header = document.querySelector(".header");
//   const i = Math.floor(Math.random() * 4 + 1);
//   console.log(i);

//   header.style.background = `url(../image/bg-${i}.jpg), linear-gradient(rgba(#000, 0.4), rgba(#000, 0.5))`;
// }, 2000);

// const infoImgs = ["img-1", "img-2", "img-3"];
// const infoImagesBox = document.querySelector(".info-images__img");
// setInterval(() => {
//   const num = Math.floor(Math.random() * 2 + 1);

//   infoImagesBox.src = `image/img-${num}.jpg`;
// }, 2000);

// Events adding

const evntBtn = document.getElementById("addEvent");
console.log(evntBtn);

evntBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Reading Values

  const evntName = document.querySelector(".input-eventname");
  const eventDesc = document.querySelector(".input-eventdesc");
  const evntTime = document.querySelector(".input-eventtime");

  if (evntName.value && evntTime.value && eventDesc.value) {
    const event = document.querySelector(".event-main");
    const html = `<div class="col-md-6 col-sm-12">
  <div class="event-details">
    <h3 class="event-title">${evntName.value}</h3>
    <p class="event-desc">${eventDesc.value}</p>
    <p class="event-date">${evntTime.value}</p>
    <img src="image/class-1.jpg" alt="event" class="event-img" />
  </div>
</div>`;

    // clearing Fields
    evntName.value = "";
    evntTime.value = "";
    eventDesc.value = "";

    event.insertAdjacentHTML("afterbegin", html);
  } else {
    alert("Enter Valid Details!");
  }
});

// Gallery Local Storage

const form = document.getElementById("form");
const imgGallery = document.getElementById("result");
const removeBtn = document.getElementById("remove-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const reader = new FileReader();
  const name = document.getElementById("image").files[0].name;
  console.log(name);

  reader.addEventListener("load", function () {
    if (this.result && localStorage) {
      window.localStorage.setItem(name, this.result);
      imgGallery.innerHTML = "";
      showImages();
      alert("Img Stored!");
    } else {
      alert("Not Stored!");
    }
  });

  reader.readAsDataURL(document.getElementById("image").files[0]);
});

function showImages() {
  for (let i = 0; i < window.localStorage.length; i++) {
    const res = window.localStorage.getItem(window.localStorage.key(i));
    // const image = new Image();
    // image.src = res;

    const newHtml = `
    <img
      src="${res}"
      alt="image"
    />`;

    imgGallery.insertAdjacentHTML("afterbegin", newHtml);
  }
}

removeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  window.localStorage.clear();
  imgGallery.innerHTML = "";
});

showImages();
