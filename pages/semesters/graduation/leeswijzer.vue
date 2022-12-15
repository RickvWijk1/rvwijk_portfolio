<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <a class="bbd-btn" target="_blank" href="./pdf/semester6/reading_guide2.0.pdf"><button>
          Leeswijzer in PDF</button>
        <svg-icon class="svg-external-link" name="external_link" /></a>
      <GraduationExpansionPanel />
    </div>
    <GraduationBottomNavWhite />
  </div>
</template>

<script>
  export default {
    layout: "BottomNav",
  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/graduation.css';


  body {
    background-color: #fff !important;
  }

  .grad-wrapper{
    background-color: #fff !important;
  }

  .content-wrapper {
    background-color: #fff;
    color: #fff;
  }

  .page-wrapper {
    height: unset;
  }

  .content-wrapper {
    gap: 2em;
    padding: 2em 1em;
  }

  .bbd-btn {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-self: center;
    max-width: 250px;
    padding: 20px 28px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    border-radius: 50px;
    border: none;
    color: #FFFFFF;
    background-color: #166ECC;
    -webkit-box-shadow: 0 2px 2px 0 #10100e2e;
    box-shadow: 0 2px 2px 0 #10100e2e;
  }

  @media (min-width: 300px) {}

  @media (min-width: 640px) {

    .bbd-btn {
      align-self: flex-start;
    }

    .img-gallery-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .img-overlay-cont {
      display: flex;
      position: relative;
      cursor: pointer;
    }

    .img-overlay::after {
      content: unset;
    }

    .img-overlay-cont img {
      object-fit: cover;
      max-height: 200px;
    }

  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {
    .page-wrapper {
      margin-bottom: 120px;
    }

    .content-wrapper {
      padding: 2em 1em;
      height: calc(100% - 120px);
    }

    .nav-wrapper {
      background-color: #fff !important;
    }
  }

  @media (min-width: 1280px) {

    .content-wrapper {
      padding: 3em 6em;
      height: calc(100% - 152px);
    }

  }

  @media (min-width: 1536px) {
    .page-wrapper {
      margin-bottom: 152px;
    }

    .content-wrapper {
      padding: 3em 16em;
    }
  }

</style>
