// const slides = document.querySelectorAll(".slide");
// const leftbtn = document.querySelector(".previous");
// const rightbtn = document.querySelector(".next");
// const slider = document.querySelector(".slider");

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const homeNextArrow = document.querySelector(".home-box-light-Arrow");
const workNextArrow = document.querySelector(".work-light-Arrow");
const aboutNextArrow = document.querySelector(".about-light-Arrow");
const rotate = document.querySelector(".rotate");
const home = document.querySelector(".home");
const shah = document.querySelector(".home-box-shahrukh");

let curSlide = 0;
const maxSlide = slides.length;

const gotToSlide = function (slide) {
  slides.forEach((slides, index) => {
    slides.style.transform = `translateX(${106 * (index - slide)}%)`;
  });
};

gotToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotToSlide(curSlide);
};

homeNextArrow.addEventListener("click", nextSlide);
workNextArrow.addEventListener("click", nextSlide);
aboutNextArrow.addEventListener("click", nextSlide);

//

let cursl = 0;
const slideLen = slides.length;

function gotwoSlide(mySlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${106 * (index - mySlide)}%)`;
  });
}



slider.addEventListener("wheel", function (e) {
  e.preventDefault();

  // slider.scrollBy({
  //   left: e.deltaY < 0 ? -500 : 500,
  //   behavior: "smooth",
  // });

  // cursl++;
  // if (cursl === slideLen) {
  //   cursl = 0;
  // }  


  // gotwoSlide(0)

  // if (e.deltaY > 0) {
   
  //   gotwoSlide(cursl)
  // }

  // console.log(cursl)
// });

// slider.addEventListener("wheel", function (e) {
//   e.preventDefault();

//   slides.forEach((slide) => {
//     slipos = parseInt(slide.getBoundingClientRect().left / 1000);
//   });

  slider.scrollBy({
    left: e.deltaY < 0 ? -500 : 500,
    behavior: "smooth",
  });

// slides.forEach((slide) => {
//   const val = (slide.getBoundingClientRect().left / 100) * 6;
//   const val2 = val / 19;
//   const homesize = home.offsetWidth / 4;

//   if (val < homesize) {
//     rotate.style.transform = `rotate(${val}deg)`;
//   }
// });
});

const navbar = document.querySelectorAll(".href");
const logo = document.querySelector(".logo");

navbar[0].addEventListener("click", function () {
  gotToSlide(0);
});

navbar[1].addEventListener("click", function () {
  gotToSlide(1);
});

navbar[2].addEventListener("click", function () {
  gotToSlide(2);
});

navbar[3].addEventListener("click", function () {
  gotToSlide(3);
});

logo.addEventListener("click", function () {
  gotToSlide(0);
});

const obsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
  }
};

const obsOptions = {
  root: slider,
  threshold: 0.2,
};

const obs = new IntersectionObserver(obsCallBack, obsOptions);

obs.observe(slides[1]);

//--- SelectedWork Page --- //

// const workType = document.querySelector(".work-type");
const tabs = document.querySelectorAll(".tabs");

// workType.addEventListener("mouseover", function (e) {
//   const id = e.target.dataset.id;

//   if (id) {
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });

//     e.target.classList.add("active");
//   }
// });

const edit = document.querySelector(".editing");
const packaging = document.querySelector(".packaging");
const editVid = document.querySelectorAll(".edit-video");
const wordD = document.querySelector(".work3d");
const threeD = document.querySelectorAll(".threeD");

// edit.addEventListener("mouseover", function (e) {
//   e.preventDefault();

//   editVid.forEach((eVid) => {
//     eVid.style.height = "100%";
//   });
//   threeD.forEach((thd) => {
//     thd.style.height = "0";
//   });
// });

// packaging.addEventListener("mouseover", function (e) {
//   e.preventDefault();
//   editVid.forEach((eVid) => {
//     eVid.style.height = "0";
//   });

//   threeD.forEach((thd) => {
//     thd.style.height = "0";
//   });
// });

// wordD.addEventListener("mouseover", function (e) {
//   e.preventDefault();
//   threeD.forEach((thd) => {
//     thd.style.height = "100%";
//   });
// });

// edit.addEventListener('mouseout', function(e) {
//   e.preventDefault();
//   editVid.forEach((eVid) => {
//     eVid.style.height = '0';
//   })
// })

//-- work-full display --//

const workFull = document.querySelectorAll(".work-fullDisplay-img");
const workDis = document.querySelectorAll(".work-fullDisplay");
const workBtn = document.querySelector(".workBtn");
const workmycro = document.querySelectorAll(".work-fullDisplay-img-microlyscs");
const workproti = document.querySelectorAll(".work-fullDisplay-img-protiGum");
const worksun = document.querySelectorAll(".work-fullDisplay-img-sunrise");
const workVesta = document.querySelectorAll(".work-fullDisplay-img-vestapet");

let currSlide = 0;
const workSlide = workFull.length;

const workGoToSlide = function (slide) {
  workFull.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const workGotomycro = function (slide) {
  workmycro.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const workGoToproti = function (slide) {
  workproti.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const workGoToSun = function (slide) {
  worksun.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const workGoToVesta = function (slide) {
  workVesta.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

workGoToVesta(0);

workGoToSun(0);

workGoToproti(0);

workGotomycro(0);

workGoToSlide(0);

function nxtSlide() {
  if (currSlide === workSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  workGoToVesta(curSlide);
  workGoToSlide(currSlide);
  workGotomycro(currSlide);
  workGoToproti(currSlide);
  workGoToSun(curSlide);
}

// workBtn.addEventListener("click", nxtSlide);

workDis.forEach((dis) => {
  dis.addEventListener("wheel", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dis.scrollBy({
      left: e.deltaY < 0 ? -500 : 500,
      behavior: "smooth",
    });
  });
});

// workDis.addEventListener("wheel", function (e) {
//   e.preventDefault();

//   e.stopPropagation();
//   workDis.scrollBy({
//     left: e.deltaY < 0 ? -500 : 500,
//     behavior: "smooth",
//   });
// });

/* Vide-Editing Page */

const clkBtn = document.querySelectorAll(".fas");
const editFull = document.querySelectorAll(".edit-video-full");
const clsBtn = document.querySelector(".clsBtn");
const myVideo = document.querySelectorAll(".myVideo");
const backDrop = document.querySelector(".backDrop");
const editVideo = document.querySelectorAll(".edit-video");
const miniVideo = document.querySelector(".miniVideo");

editVideo.forEach((edit) => {
  edit.addEventListener("mouseover", function (e) {
    const id = e.target.id;
    const minvid = document.getElementById(id);
    e.preventDefault();
    minvid.play();
    minvid.muted = true;
  });
});

editVideo.forEach((edit) => {
  edit.addEventListener("mouseout", function (e) {
    e.preventDefault();
    const id = e.target.id;
    const minvid = document.getElementById(id);
    minvid.pause();
  });
});

editVideo.forEach((cBtn) => {
  cBtn.addEventListener("click", function (e) {
    console.log(e.target.dataset.id);

    const id = e.target.dataset.id;

    if (id) {
      const vid = document.getElementById(id);
      vid.classList.remove("hide");
      vid.play();
      clsBtn.classList.remove("hide");
      backDrop.classList.remove("hide");
      console.log(backDrop);
    }

    clsBtn.addEventListener("click", function () {
      clsBtn.classList.add("hide");

      myVideo.forEach((myVid) => {
        myVid.classList.add("hide");
        myVid.pause();
      });

      backDrop.classList.add("hide");
    });
  });
});

const imgOverlayText = document.querySelector(".imgOverlay-text");
const workFullDisplay = document.querySelectorAll(".work-fullDisplay");
const workFullDisplayArrow = document.querySelectorAll(
  ".work-fullDisplay-arrow"
);
const imgOverlay = document.querySelectorAll(".imgOverlay");

// imgOverlayText.forEach((full, index) => {
//   full.addEventListener("click", function () {
//     e.preventDefault();
//     console.log(e.target.dataset.id);
//     workFullDisplay.classList.remove("hide");
//   });
// });

imgOverlay.forEach((overlay) => {
  overlay.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // workFullDisplay.classList.remove("hide");

      const activeEle = document.getElementById(id);
      activeEle.classList.remove("hide");
    }
  });
});

// imgOverlay.addEventListener("click", function (e) {
//   console.log(e.target.dataset.id);
//   id = e.target.dataset.id;
//   if (id) {
//     workFullDisplay.classList.remove("hide");
//   }
// });

workFullDisplayArrow.forEach((arr) => {
  arr.addEventListener("click", function (e) {
    e.preventDefault();
    workFullDisplay.forEach((workdis) => {
      workdis.classList.add("hide");
    });
  });
});
// workFullDisplayArrow.addEventListener("click", function (e) {
//   e.preventDefault();
//   workFullDisplay.classList.add("hide");
// });

//--- Contact me Page --

const contactBack = document.querySelector(".contact-me-back");

contactBack.addEventListener("click", function () {
  gotToSlide(0);
});

/* Home Background Change */

const videoBack = document.querySelector(".what-i-do-video");
const homeBack = document.querySelector(".home");

videoBack.addEventListener("mouseover", function (e) {
  e.preventDefault();

  // homeImg.style.display = "block";
});

// videoBack.addEventListener('mouseout', function(e) {
//   e.preventDefault()

//   homeImg.style.display = 'none';
// })

/* Mobile-Tab*/

//Packaging-Click
const mpackagingBox = document.querySelectorAll(".mobile-packaging-box");
const mobilePackagingBlur = document.querySelector(".mobile-packaging-blur");
const mobilePackagingFull = document.querySelectorAll(".mobile-packaging-full");
const mobClsBtn = document.querySelector(".mob-clsBtn");

// const mpackagingBoxArray = Array.from(mpackagingBox);

mpackagingBox.forEach((box) => {
  box.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.target.dataset.id;

    mobilePackagingBlur.classList.remove("mob-hide");
    mobClsBtn.classList.remove("mob-hide");

    if (id) {
      const mobactive = document.getElementById(id);
      mobactive.classList.remove("mob-hide");
    }
  });
});

mobClsBtn.addEventListener("click", function (e) {
  mobilePackagingBlur.classList.add("mob-hide");
  mobClsBtn.classList.add("mob-hide");

  mobilePackagingFull.forEach((box) => {
    box.classList.add("mob-hide");
  });
});
