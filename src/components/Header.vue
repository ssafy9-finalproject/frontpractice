<template>
    <body>
  	<!-- Vendor JS Files -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>
    <!-- ======= Header ======= -->
    <header id="header" class="header d-flex align-items-center">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="@/App.vue" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1>Enjoy trip<span>.</span></h1>
        </a>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="#">지역별여행지</a></li>
            <li><a href="@/plan">나의여행계획</a></li>
            <li><a href="services.jsp">여행정보공유</a></li>
            <li><a href="projects.jsp">핫플자랑하기</a></li>
          </ul>
          	<session-tag></session-tag>
        </nav>
      </div>
    </header>
    <login-modal></login-modal>
    <div id="app"></div>
    </body>
</template>

<script>
import SessionTag from './SessionTag.vue';
import LoginModal from './LoginModal.vue';
export default{
  components: { SessionTag },
  components: { LoginModal },
}
</script>

<style scoped></style>