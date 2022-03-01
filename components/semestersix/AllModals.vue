<template>
  <div class="row">
    <!-- Contains all semester 6 modals -->
    <SemestersixHovercard v-for="hoverCard in hoverCards" :key="hoverCard.id"
      :hoverCard="hoverCard" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hoverCards: [{
            id: 1,
            title: 'Test',
            src:
              "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png"
            
          },
          {
            id: 2,
            title: 'Test2',
            src:
              "/assets/img/ik/me_black_white_portrait.webp"
            
          },
        ]
      }
    }
  }

</script>

<style>
  .row {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    align-self: flex-start;
    max-width: 100%;
    /* min-height: 160px; */
    height: 0;
    width: 100%;
    margin: 0;
  }

  @media (min-width: 640px) {
    .row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 60rem;
      justify-content: space-between;
      min-height: 192px;
    }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {
    .row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
