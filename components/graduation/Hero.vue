<template>
  <div class="hero">
    <div class="hero-title-wrapper">
      <h1>Rick</h1>
      <h1>van Wijk</h1>
    </div>
    <GraduationHeroContClouds class="clouds" />
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  .hero {}

  .hero-title-wrapper {
    display: flex;
    flex-direction: column;
  }

  .hero-title-wrapper h1 {
    font-family: louis_george_cafebold;
    line-height: 1.2;
    font-size: 3rem;
  }

  .clouds {
    display: none;
  }

  @media (max-width: 300px) {}

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
