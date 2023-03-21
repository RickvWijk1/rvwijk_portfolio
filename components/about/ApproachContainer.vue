<template>
  <section class="main-wrapper">
    <h3 class="subtitle">My approach</h3>
    <div class="about-icon-wrapper">
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="speedometer" />
        </div>
        <h3>Fast</h3>
        <p>Fast load times and lag free
          interaction, my highest priority.</p>
      </div>
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="responsive" />
        </div>
        <h3>Accessibility</h3>
        <p>Apps should be usable for anyone, on
          any device, big or small.</p>
      </div>
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="lightbulb" />
        </div>
        <h3>Intuitive</h3>
        <p>Strong preference for
          easy to use, intuitive UX/UI.</p>
      </div>
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="rocket" />
        </div>
        <h3>Dynamic</h3>
        <p>Apps don't have to be static, I love
          making screens come to life.</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/aboutContent.css';

  .main-wrapper {
    gap: 2rem;
    padding-bottom: 3em;
  }

  .about-icon-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  .about-icon-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: .5rem;
  }

  .about-icon-cont p {
    font-weight: 300;
    /* font-family: louis_george_cafelight; */
  }

  .about-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    padding: .75rem;
    border-radius: 50%;
    background-color: #4758fc;
  }

  .about-icon-svg {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 4rem;
    fill: #fff;
  }

  @media (max-width: 300px) {
    .about-icon-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {
    .about-icon-wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
