const tabs = document.querySelectorAll(".tabs");
const workType = document.querySelector(".work-type");

workType.addEventListener("mouseover", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    e.target.classList.add("active");
  }
});

const edit = document.querySelector(".editing");
const packaging = document.querySelector(".packaging");
const editVid = document.querySelectorAll(".edit-video");
const wordD = document.querySelector(".work3d");
const threeD = document.querySelectorAll(".threeD");

edit.addEventListener("mouseover", function (e) {
  e.preventDefault();

  editVid.forEach((eVid) => {
    eVid.style.height = "100%";
  });
  threeD.forEach((thd) => {
    thd.style.height = "0";
  });
});

packaging.addEventListener("mouseover", function (e) {
  e.preventDefault();
  editVid.forEach((eVid) => {
    eVid.style.height = "0";
  });

  threeD.forEach((thd) => {
    thd.style.height = "0";
  });
});

wordD.addEventListener("mouseover", function (e) {
  e.preventDefault();
  threeD.forEach((thd) => {
    thd.style.height = "100%";
  });
});

const workFull = document.querySelectorAll(".work-fullDisplay-img");
const workDis = document.querySelectorAll(".work-fullDisplay");
const workBtn = document.querySelector(".workBtn");
const workmycro = document.querySelectorAll(".work-fullDisplay-img-microlyscs");
const workproti = document.querySelectorAll(".work-fullDisplay-img-protiGum");
const worksun = document.querySelectorAll(".work-fullDisplay-img-sunrise");
const workVesta = document.querySelectorAll(".work-fullDisplay-img-vestapet");
const slideWork = document.querySelectorAll(".workSlide");

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

if(window.innerWidth === 1920) {
a = 0;
workDis.forEach((dis) => {
  dis.addEventListener("wheel", function (e) {
    e.preventDefault();
    // e.stopPropagation();
    // dis.scrollBy({
    //   left: e.deltaY < 0 ? -1200 : 1200,
    //   behavior: "smooth",
    // });

    if (e.deltaY > 0) {
      console.log("Cursor Down");
      console.log("a", Math.abs(a));
      slideWork.forEach((slide) => {
        if (Math.abs(a) >= 6000) return;
        slide.style.transform = `translateX(${(a -= 35)}px)`;
        const workSlidePos = slide.getBoundingClientRect().x;
        console.log("Cursor Down WorkSlide", Math.abs(workSlidePos));
      });
    }

    if (e.deltaY < 0) {
      console.log("Cursor UP");
      slideWork.forEach((slide) => {
        const workSlidePos = slide.getBoundingClientRect().x;
        console.log("Cursor UP WorkSlide", Math.abs(workSlidePos));
        console.log("a", Math.abs(a));
        if (a === 0) {
          slide.style.marginLeft = `65px`; 
          return;
        } 
        slide.style.transform = `translateX(${(a += 35)}px)`;
        
        
      });
    }
  });
});
}

if(window.innerWidth === 2560) {
  a = 0;
  workDis.forEach((dis) => {
    dis.addEventListener("wheel", function (e) {
      e.preventDefault();
      // e.stopPropagation();
      // dis.scrollBy({
      //   left: e.deltaY < 0 ? -1200 : 1200,
      //   behavior: "smooth",
      // });
  
      if (e.deltaY > 0) {
        console.log("Cursor Down");
        console.log("a", Math.abs(a));
        slideWork.forEach((slide) => {
          if (Math.abs(a) >= 9950) return;
          // slide.style.transform = `translateX(${(a -= 100)}px)`;
          slide.style.transform = `translate3d(${(a -= 50)}px,0,0)`;
          const workSlidePos = slide.getBoundingClientRect().x;
         
        });
      }
  
      if (e.deltaY < 0) {
        console.log("Cursor UP");
        slideWork.forEach((slide) => {
          const workSlidePos = slide.getBoundingClientRect().x;
          console.log("Cursor UP WorkSlide", Math.abs(workSlidePos));
          console.log("a", Math.abs(a));
          if (a === 0) {
            slide.style.marginLeft = `65px`; 
            return;
          } 
          // slide.style.transform = `translateX(${(a += 100)}px)`;
          slide.style.transform = `translate3d(${(a += 50)}px,0,0)`;          
          
        });
      }
    });
  });
  }

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
    const id = e.target.dataset.id;

    if (id) {
      const vid = document.getElementById(id);
      vid.classList.remove("hide");
      vid.play();
      clsBtn.classList.remove("hide");
      backDrop.classList.remove("hide");
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

const workSelectBlur = document.querySelector(".work-selected-blur");

imgOverlay.forEach((overlay) => {
  overlay.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // workFullDisplay.classList.remove("hide");

      const activeEle = document.getElementById(id);
      activeEle.classList.remove("hide");
      workSelectBlur.classList.remove("hide");
    }
  });
});

workFullDisplayArrow.forEach((arr) => {
  arr.addEventListener("click", function (e) {
    e.preventDefault();
    workFullDisplay.forEach((workdis) => {
      workdis.classList.add("hide");
      workSelectBlur.classList.add("hide");
    });
  });
});

console.log(window.innerWidth);
