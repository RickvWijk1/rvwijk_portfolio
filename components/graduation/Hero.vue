<template>
  <div class="hero">
    <div class="hero-cont">
      <div class="hero-title-wrapper">
        <h1>Rick</h1>
        <h1>van Wijk.</h1>
      </div>
      <h4 class="hero-subtitle">Afstudeerportfolio</h4>
      <!-- <GraduationHeroContClouds class="clouds" /> -->
    </div>
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
    gap: .5em;
    padding: 1em 1em;
  }

  .hero-cont {
    display: flex;
    flex-direction: column;
    /* align-self: center;
    width: 100%;
    max-width: 1024px; */
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

  .hero-subtitle {
    /* font-family: louis_george_cafelight; */
    font-family: 'Roboto';
    font-weight: 300;
  }

  .clouds {
    display: none;
  }

  @media (min-width: 300px) {
    .hero {
      padding: 2em;
    }

    .hero-title-wrapper h1 {
      font-size: 2.8rem;
    }
    .hero-subtitle {
      font-size: 1.25rem;
    }
  }


  @media (min-width: 640px) {
    .hero-title-wrapper {
    flex-direction: row;
    gap: 1rem;
  }
    .hero-title-wrapper {

    }
    .hero-title-wrapper h1 {
      font-size: 3.3rem;
    }
    .hero-subtitle {
      display: flex;

      font-size: 1.5rem;
    }

    .clouds {
      display: block;
    }
  }

  @media (min-width: 768px) {
    .hero-cont {


    }
  }

  @media (min-width: 1024px) {


    .hero {
      padding: 3em 2em;
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
