var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





      var slider = document.querySelector(".banner").children,
      sliderLen = slider.length;

    let slid = 0;

    function slides() {
      for(let i = 0; i < sliderLen; i++){
        slider[i].classList.remove("slide-play");
      }
      slider[slid].classList.add("slide-play");
      if(slid == sliderLen-1){
        slid = 0
      }
      else{
        slid++;
      }
      setTimeout(slides, 5000)
    }

    window.onload = slides();










var donars = setInterval(happyDonars, 15);
var mission = setInterval(successMission, 15);
var voluteer = setInterval(voluteerPeople, 15);
var global = setInterval(globalWork, 15);
let counter1 = 1
let counter2 = 1
let counter3 = 1
let counter4 = 1
function happyDonars(){
  counter1++
  document.querySelector(".happy-donar").innerHTML = counter1;
  if(counter1 == 900){
    clearInterval(donars)
  }
}
function successMission(){
  counter2++
  document.querySelector(".success-mission").innerHTML = counter2;
  if(counter2 == 1040){
    clearInterval(mission)
  }
}

function voluteerPeople(){
  counter3++
  document.querySelector(".voluteer").innerHTML = counter3;
  if(counter3 == 600){
    clearInterval(voluteer)
  }
}

function globalWork(){
  counter4++
  document.querySelector(".globe-work").innerHTML = counter4;
  if(counter4 == 870){
    clearInterval(global)
  }
}



// FOOTER YEAR
var NewYear = new Date().getFullYear()
document.querySelector(".footer-year").innerHTML = NewYear

// RESPONSIVE NAVIGATION BAR
var openBtn = document.getElementsByClassName("humberger")[0];
openBtn.addEventListener("click", function(){
  document.querySelector(".sideNav").style.width = "250px";
})

var closeBtn = document.getElementsByClassName("closeBtn")[0];
closeBtn.addEventListener("click", function(){
  document.querySelector(".sideNav").style.width = "0px";
})


