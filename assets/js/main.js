/**
* Template Name: ZenBlog
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/zenblog-bootstrap-blog-template/
* Author: BootstrapMade.com
* License: https:///bootstrapmade.com/license/
*/
// document.addEventListener('DOMContentLoaded', () => {
//   "use strict";

//   /**
//    * Sticky header on scroll
//    */
//   const selectHeader = document.querySelector('#header');
//   if (selectHeader) {
//     document.addEventListener('scroll', () => {
//       window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
//     });
//   }

//   /**
//    * Mobile nav toggle
//    */

//   const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

//   if (mobileNavToogleButton) {
//     mobileNavToogleButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       mobileNavToogle();
//     });
//   }

//   function mobileNavToogle() {
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     mobileNavToogleButton.classList.toggle('bi-list');
//     mobileNavToogleButton.classList.toggle('bi-x');
//   }

//   /**
//    * Hide mobile nav on same-page/hash links
//    */
//   document.querySelectorAll('#navbar a').forEach(navbarlink => {

//     if (!navbarlink.hash) return;

//     let section = document.querySelector(navbarlink.hash);
//     if (!section) return;

//     navbarlink.addEventListener('click', () => {
//       if (document.querySelector('.mobile-nav-active')) {
//         mobileNavToogle();
//       }
//     });
//   });

//   /**
//    * Toggle mobile nav dropdowns
//    */
//   const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

//   navDropdowns.forEach(el => {
//     el.addEventListener('click', function(event) {
//       if (document.querySelector('.mobile-nav-active')) {
//         event.preventDefault();
//         this.classList.toggle('active');
//         this.nextElementSibling.classList.toggle('dropdown-active');

//         let dropDownIndicator = this.querySelector('.dropdown-indicator');
//         dropDownIndicator.classList.toggle('bi-chevron-up');
//         dropDownIndicator.classList.toggle('bi-chevron-down');
//       }
//     })
//   });

  /**
   * Scroll top button
   */
  // const scrollTop = document.querySelector('.scroll-top');
  // if (scrollTop) {
  //   const togglescrollTop = function() {
  //     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  //   }
  //   window.addEventListener('load', togglescrollTop);
  //   document.addEventListener('scroll', togglescrollTop);
  //   scrollTop.addEventListener('click', window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   }));
  // }

  /**
   * Hero Slider
   */
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  /**
   * Open and close the search form.
   */
//   const searchOpen = document.querySelector('.js-search-open');
//   const searchClose = document.querySelector('.js-search-close');
//   const searchWrap = document.querySelector(".js-search-form-wrap");

//   searchOpen.addEventListener("click", (e) => {
//     e.preventDefault();
//     searchWrap.classList.add("active");
//   });

//   searchClose.addEventListener("click", (e) => {
//     e.preventDefault();
//     searchWrap.classList.remove("active");
//   });

//   /**
//    * Initiate glightbox
//    */
//   const glightbox = GLightbox({
//     selector: '.glightbox'
//   });

//   /**
//    * Animation on scroll function and init
//    */
//   function aos_init() {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }
//   window.addEventListener('load', () => {
//     aos_init();
//   });

// });
/**
* Template Name: Yummy
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


// --------------------------------------------------------
// js for discover section

const quiz = [
            {
                question: "What does 'e-waste' stand for?",
                options: ["Electric Waste", "Electronic Waste", "Eco Waste"],
                correctAnswer: "B"
            },
            {
                question: "Which metal is commonly found in e-waste?",
                options: ["Silver", "Gold", "Platinum"],
                correctAnswer: "B"
            },
            {
                question: "What is the term for the responsible recycling and disposal of e-waste?",
                options: ["Eco-friendliness", "Green Computing", "E-waste Management"],
                correctAnswer: "B"
            },
        {
                question: "What is the primary goal of e-waste recycling?",
                options: ["To extract valuable metals", "To increase electronic device lifespans", "To reduce energy consumption"],
                correctAnswer: "A"
            },
            {
                question: "Which of the following is an example of e-waste legislation?",
                options: ["The Electronic Gadget Act", "The Digital Device Decree", "The Waste Electrical and Electronic Equipment Directive (WEEE)"],
                correctAnswer: "C"
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        function displayQuestion() {
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");
            const resultElement = document.getElementById("result");
          

            questionElement.textContent = quiz[currentQuestion].question;
            optionsElement.innerHTML = "";

            quiz[currentQuestion].options.forEach((option, index) => {
                const button = document.createElement("button");
                button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
                button.onclick = () => checkAnswer(String.fromCharCode(65 + index));
                optionsElement.appendChild(button);
            });

            resultElement.textContent = "";
            document.getElementById("next-button").style.display = "none";
        }

        function checkAnswer(selectedOption) {
            const correctAnswer = quiz[currentQuestion].correctAnswer;

            if (selectedOption === correctAnswer) {
                score++;
                document.getElementById("options").style.display="none";
                document.getElementById("result").textContent = "Correct!";
            } else {
              document.getElementById("options").style.display="none";
                document.getElementById("result").textContent = "Incorrect.";
                document.getElementById("correct").textContent = "Correct Answer: "+correctAnswer;
                    

            }

            document.getElementById("next-button").style.display = "block";
        }

        function nextQuestion() {
            currentQuestion++;
            document.getElementById("options").style.display="block";
            document.getElementById("correct").textContent = "";
            if (currentQuestion < quiz.length) {
                displayQuestion();
            } else {
                const quizContainer = document.getElementById("quiz-container");
                quizContainer.innerHTML = `<h1>Quiz Complete</h1>
                <p>You scored ${score} out of ${quiz.length} questions correctly.</p>`;
            }
  }

        displayQuestion();