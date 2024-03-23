<template>

  <div class="wrapper">
    <div class="title-wrapper">
      <div class="page-title">
        <h1>Rick</h1>
        <h1>van Wijk</h1>
      </div>
      <div class="home-icon-section">
        <p>Front-end developer</p>
        <div class="home-icon-wrapper">
          <a target="__blank" href="https://github.com/RickvWijk1"
            aria-label="The GitHub profile page of Rick van Wijk">
            <p class="home-icon-name">Github</p>
            <svg-icon class="home-icon-svg" name="github" />
          </a>
          <a target="__blank" href="https://www.linkedin.com/in/rick-van-wijk-2b06821a0"
            aria-label="The LinkedIn profile page of Rick van Wijk">
            <p class="home-icon-name">LinkedIn</p>
            <svg-icon class="home-icon-svg" name="linkedin" />
          </a>
          <a href="mailto:rick_van_wijk@hotmail.com" aria-label="Email Rick van Wijk">
            <p class="home-icon-name">Email</p>
            <svg-icon class="home-icon-svg" name="email" />
          </a>
          <a target="__blank" href="./pdf/cv.pdf" aria-label="The Curriculum Vitae of Rick van Wijk in PDF view">
            <p class="home-icon-name">CV</p>
            <svg-icon class="home-icon-svg" name="cv" />
          </a>
        </div>
      </div>
    </div>
    <div class="home-photo-wrapper">
      <img src="~/assets/img/ik/me_black_white_portrait.webp" width="769" height="687"
        alt="Portrait image of Rick van Wijk">
      <!-- <nuxt-picture class="picture-home" src="/BlackWhiteInHuis.png" /> -->
    </div>
  </div>

</template>

<script></script>
<style lang="css" scoped>
@import '~/assets/css/global.css';
@import '~/assets/css/homeContent.css';

@media (min-width: 640px) {
  .layout-body {
    width: 100%;
    height: 100%;
    /* justify-content: space-between; */
  }
}

@media (min-width: 640px) {
  .wrapper {
    width: 100%;
    padding: 0em 4em 0em;
  }
}
</style>
