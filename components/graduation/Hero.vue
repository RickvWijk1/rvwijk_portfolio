<template>
  <div class="hero">
    <div class="hero-title-wrapper">
        <h1>Rick</h1>
        <h1>van Wijk</h1>
    </div>
    <GraduationHeroContClouds />
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>

.hero {

  }

  .hero-title-wrapper{
    display: flex;
    flex-direction: column;
  }

  .hero-title-wrapper h1{
    line-height: 1;
    margin-block: 0;
    font-size: 3rem;
  }

</style>
