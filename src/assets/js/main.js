/**
* Template Name: UpConstruction - v1.3.0
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
//로그인 상태에 따른 navbar 버튼
let localcurLogIn = localStorage.getItem("curLogin");
localcurLogIn = JSON.parse(localcurLogIn);
const beforeLogin = document.querySelectorAll("#beforelogin");
const afterLogin = document.querySelectorAll("#afterlogin");
if (localcurLogIn) {
  document.getElementById("userName").innerHTML = localcurLogIn.id;
  beforeLogin.forEach(value => {
    value.style.display = 'none';
  });
  afterLogin.forEach(value => {
    value.style.display = 'block';
  });
} else { 
  beforeLogin.forEach(value => {
    value.style.display = 'block';
  });
  afterLogin.forEach(value => {
    value.style.display = 'none';
  });
}

//회원가입 버튼
let a = document.querySelector("#btn-user-create");
if (a !== null) { 
  document.querySelector("#btn-user-create").addEventListener("click", function () {
    let id = document.querySelector("#signup-id").value;
    let password = document.querySelector("#signup-password").value;
  
    if (isExist(id)) { //id 유효성 검사
      alert("중복된 아이디입니다❗❗❗");
      return;
    }; 
    if (!id) {
      alert("아이디를 입력하세요❗");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력하세요❗");
      return;
    }
    let userInfo = {
      id: id,
      password: password,
    };
  
    let localUserInfos = localStorage.getItem("users");
    if (localUserInfos === null) {
      localUserInfos = [userInfo];
    } else {
      localUserInfos = JSON.parse(localUserInfos);
      localUserInfos.push(userInfo);
    }
    const usersJson = JSON.stringify(localUserInfos);
    localStorage.setItem("users", usersJson);
    alert("회원가입 되었습니다😉");
    location.reload();
  });
}


function isExist(id) {
  let localUserInfos = localStorage.getItem("users");
  if (localUserInfos != null) {
    localUserInfos = JSON.parse(localUserInfos);
    for (let i = 0; i < localUserInfos.length; i++) {
      if (localUserInfos[i].id === id) {
        return true;
      }
    }
  }
  return false;
}


//로그인 버튼
let b = document.querySelector("#btn-user-login");
if (b !== null) { 
  document.querySelector("#btn-user-login").addEventListener("click", function () {
    let id = document.querySelector("#signin-id").value;
    let password = document.querySelector("#signin-password").value;
  
    if (!id) {
      alert("아이디를 입력하세요❗");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력하세요❗");
      return;
    }
    let userInfo = {
      id: id,
      password: password,
    };
  
    let localUserInfos = localStorage.getItem("users");
    if (localUserInfos === null) {
      alert("❗일치하는 회원 정보가 없습니다❗");
      return;
    } else {
      localUserInfos = JSON.parse(localUserInfos);
      for (let i = 0; i < localUserInfos.length; i++) {
        if (localUserInfos[i].id === userInfo.id && localUserInfos[i].password === userInfo.password ) {
          alert(`로그인 성공! ${userInfo.id}님 환영합니다😊`);
          localStorage.setItem("curLogin", JSON.stringify(userInfo));
          location.reload();
          return;
        }
      }
    }
    alert("❗일치하는 회원 정보가 없습니다❗");
  });
}


//로그아웃 버튼
let c = document.querySelector("#btn-user-logout");
if (c !== null) { 
  document.querySelector("#btn-user-logout").addEventListener("click", function () {
    localStorage.removeItem("curLogin");
    alert("로그아웃 되었습니다❗");
    location.reload();
  });
}


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
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

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
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
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
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});