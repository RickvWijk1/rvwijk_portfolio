<template>
  <div class="row">
    <!-- Contains all semester 6 modals -->
    <button @click="openModal">hi</button>
    <SemestersixHovercard  :data_modal="hoverCard.data_modal" v-for="hoverCard in hoverCards" :key="hoverCard.id"
      :hoverCard="hoverCard" />
      <SemestersixModal v-model="modalOpen"/>
      
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalOpen: false,
        hoverCards: [{
            data_modal: 'test',
            title: 'Test',
            src:
              "https://www.cmete.com/skins/theme_cmete_2016/images/placeholders/image-placeholder.jpg"
            
          },
          {
            data_modal: 'test2',
            title: 'Test2',
            src:
              "/icon.png"
            
          },
        ],
      }
    },
        methods: {
        openModal() {
            this.modalOpen = !this.modalOpen;
        }    
    },
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
