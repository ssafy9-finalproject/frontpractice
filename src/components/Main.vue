<template>
<section id="hero" class="hero">
      <div class="info d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <h2 data-aos="fade-down">우리나라 관광지를 <span>찾아보세요!</span></h2>
              <p data-aos="fade-up">회원가입을 하고 로그인 후 사용할 수 있습니다.</p>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                data-bs-toggle="modal"
                data-bs-target="#signInModal"
                href="#"
                class="btn-get-started"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div
          class="carousel-item active"
          style="background-image: url(assets/img/경복궁.jpg)"
        ></div>
        <div class="carousel-item" style="background-image: url(assets/img/남산타워.jpg)"></div>
        <div class="carousel-item" style="background-image: url(assets/img/창덕궁.jpg)"></div>
        <div class="carousel-item" style="background-image: url(assets/img/한옥마을.jpg)"></div>
        <div class="carousel-item" style="background-image: url(assets/img/가로수길.jpg)"></div>

        <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>
      </div>
    </section>
    <!-- End Hero Section -->
</template>

<script>
export default {
    name: 'Main',
};
</script>

<style scoped></style>