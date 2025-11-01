const video1 = document.querySelector(".arch-frame1 video")

video1.addEventListener("mouseenter", () => {
    video1.play();
})

video1.addEventListener("mouseleave", () => {
    video1.pause();
})

const video2 = document.querySelector(".arch-frame2 video")

video2.addEventListener("mouseenter", () => {
    video2.play();
})

video2.addEventListener("mouseleave", () => {
    video2.pause();
})

const video3 = document.querySelector(".arch-frame3 video")

video3.addEventListener("mouseenter", () => {
    video3.play();
})

video3.addEventListener("mouseleave", () => {
    video3.pause();
})

 
  window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '#dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          // screens smaller than 775px show fewer slides
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          // screens smaller than 480px show one slide
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
  
  const moonPath = "M14.5 27.5C14.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14.5 12.3122 14.5 27.5Z" ;

  const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"

  const darkMode = document.querySelector('#darkmode');

  let toggle = false;

  darkMode.addEventListener('click', ()=>{
    const timeline = anime.timeline({ //setting up the timeline
        duration : 750,
        easing : "easeOutExpo"
    })

        timeline.add({ //adding different animations to the timeline
            targets: ".sun", 
            d: [{value: toggle ? sunPath : moonPath}]
        })

        .add({
            targets: "#darkmode",
            rotate: 320

        })

        .add({
            targets: "section",
            backgroundColor: toggle ? "rgb (225, 215, 199)" : "rgb(105, 115, 106"
        });

        if (!toggle) {
        toggle = true;
        } else{
        toggle = false;
        }

  });
  
  gsap.to(".box", {
    scrollTrigger: ".box",
    x: 550,
    duration: 2
  });

  gsap.from(".about-text",{
    scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play play play reverse",
    },
    x: -200,
    duration: 2
  });

  gsap.from(".about-images",{
    scrollTrigger: {
    trigger: ".about-images",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play play play reverse",
    },
    x: 1200,
    duration: 2,
  });

  gsap.from(".hero-arch",{
    scrollTrigger: ".hero-arch",
    x: -200,
    duration: 2,
  });

  gsap.from(".team-section",{
    scrollTrigger: ".team-section",
    x: -200,
    duration: 2
  });

  gsap.from(".team-container",{
    scrollTrigger: ".team-container",
    x: -200,
    duration: 2
  });

  const bgMusic = new Audio('music/lofi.mp3')

  const buttons = document.querySelector('.play')
  buttons.addEventListener('click', ()=> {

    if (bgMusic.paused) {
      bgMusic.play()
      buttons.name = 'play-circle-fill'
    }
    else{
      bgMusic.pause()
      buttons.name = 'pause-circle-fill'
    } 

  })