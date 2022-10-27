<template>
  <div class="hero">
    <div class="hero-title-wrapper">
      <h1>Rick</h1>
      <h1>van Wijk.</h1>
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
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: .5em;
    padding: 1em 1em;
  }

  .hero-title-wrapper {
    display: flex;
    flex-direction: column;
  }

  .hero-title-wrapper h1 {
    /* font-family: louis_george_cafebold; */
    font-family: 'Roboto';
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: 4px;
    font-size: 2.3rem;
  }

  .hero-subtitle{
    /* font-family: louis_george_cafelight; */
    font-family: 'Roboto';
    font-weight: 300;
  }

  .clouds {
    display: none;
  }

  @media (min-width: 300px) {
    .hero{
      padding: 2em;
    }

    .hero-title-wrapper h1 {
    font-size: 2.8rem;
  }
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
