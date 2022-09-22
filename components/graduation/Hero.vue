<template>
  <div class="hero">
    <div class="hero-title-wrapper">
      <h1>Rick van Wijk.</h1>
      <h1></h1>
    </div>
    <h4 class="hero-subtitle">Afstudeerportfolio</h4>
    <GraduationHeroContClouds class="clouds" />
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  .hero {
    display: flex;
    flex-direction: column;
    padding: 1em 1em 0;
  }

  .hero-title-wrapper {
    display: flex;
    flex-direction: column;
  }

  .hero-title-wrapper h1 {
    font-family: louis_george_cafebold;
    line-height: 1.2;
    font-size: 2.4rem;
  }

  .hero-subtitle{
    font-family: louis_george_cafelight;
  }

  .clouds {
    display: none;
  }

  @media (min-width: 300px) {

  }

  @media (min-width: 640px) {
    .clouds {
      display: block;
    }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
