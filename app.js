let menu=document.getElementById('menu');
let drop=document.getElementById('drop');
menu.addEventListener("click", function(){
   
    if(drop.style.display=='flex')
    {
        drop.style.display="none";
    }
    else{
        drop.style.display="flex"
    }
    // drop.classList.toggle("flex")
});

document.addEventListener('click', function outside(event) {
  // console.log("x")
  if (!menu.contains(event.target)) {
    drop.style.display='none';
  }
});

// navbar drop dwon


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 50,
    // spaceBetween: 10,
    // effect: "cards",
    loop:true,
    autoplay:{
      // delay:1000,
      delay:0,
    },
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // 340: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });


  // let valueDispay = document.querySelectorAll('.num');
  // let interval=5000;

  // valueDispay.forEach((valueDispay)=>{
  //   let startValue =0;
  //   let endValue = parseInt(valueDispay.getAttribute("data-val"));
  //   console.log(endValue);
  //   let duration=  Math.floor(interval/endValue);
  //   let counter =setInterval(function(){
  //     startValue+=1;
  //     valueDispay.textContent=startValue;
  //     if(startValue==endValue){
  //       clearInterval(counter);
  //     }
  //   },
  //  duration);
  // })