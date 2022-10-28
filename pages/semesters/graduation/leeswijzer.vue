<template>
  <div class="content-wrapper">
    <GraduationExpansionPanel />
  </div>
</template>

<script>
  export default {
    layout: 'BottomNav',
  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/graduation.css';

  .content-wrapper {
    background-color: #fff;
    color: #fff;
  }

  .content-wrapper {
    padding: 2em 1em;
  }

  @media (min-width: 300px) {}

  @media (min-width: 640px) {

    /* .gallery-cont{
        max-height: 2em;
      }
      .gallery-cont li{
        max-height: 2em;
      } */
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

    .about-filter-school {
      align-items: center;
    }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
