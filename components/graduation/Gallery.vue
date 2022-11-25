<template>
  <div class="gallery-wrapper">
    <client-only>
      <LightGallery :images="images" :index="index" :disable-scroll="false" @close="index = null" />
    </client-only>
    <ul class="gallery-cont">
      <li class="img-gallery-grid" v-for="(img_src, img_thumbnail_index) in [
        'img/graduation/leeswijzer/bbd_tiger_zoomed_in.jpeg',
        'img/graduation/leeswijzer/bbd_tiger_zoomed_out.jpeg',
        'img/graduation/leeswijzer/handpicked_kantine.jpeg',
            'img/graduation/leeswijzer/dev_event1.jpg',
            'img/graduation/leeswijzer/dev_event2.jpg',

          ]" :key="img_thumbnail_index" @click="index = img_thumbnail_index">

        <div class="img-overlay-cont">
          <img :src="img_src">
          <div class="img-overlay"></div>
        </div>


      </li>
      <!-- <img :src="img_src"> -->
    </ul>
  </div>
</template>

<script>
  import {
    LightGallery
  } from 'vue-light-gallery';

  export default {
    components: {
      LightGallery,
    },
    data() {
      return {
        images: [{
            title: `Miauw! De keuken!`,
            url:   'img/graduation/leeswijzer/bbd_tiger_zoomed_in.jpeg',

          },
          {
            title: "Nog eentje :)",
            url: 'img/graduation/leeswijzer/bbd_tiger_zoomed_out.jpeg',
          },
          {
            title: 'De receptie en kantine van de Handpicked Agencies in Breda',
            url: 'img/graduation/leeswijzer/handpicked_kantine.jpeg',
          },
          {
            title: 'E-commerce Dev Event: Vue Storefront - 30 Juni, 2022',
            url: 'img/graduation/leeswijzer/dev_event1.jpg',
          },
          {
            title: 'E-commerce Dev Event: Vue Storefront - 30 Juni, 2022',
            url: 'img/graduation/leeswijzer/dev_event2.jpg',
          },

        ],
        index: null,
      };
    },
  }

</script>

<style lang="css" scoped>
  /* IMAGE GALLERY */

  .img-overlay-cont {
    display: none;
    position: relative;
    cursor: pointer;
  }

  .img-gallery-grid .img-overlay-cont:first-child {
    display: flex;
  }

  .img-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(2, 0, 36, .4) 0%, rgba(0, 0, 15, .3) 71%, rgba(255, 255, 255, .0) 100%);
  }

  .img-overlay:hover {
    background: rgba(0, 0, 0, .5);
  }

  .img-overlay::after {
    content: "Bekijk de foto's";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
  }

  ul li {
    display: none;
  }

  .gallery-cont li:first-child {
    display: flex;
  }



  @media (min-width: 300px) {}

  @media (min-width: 640px) {
    .gallery-cont li {
      display: flex;
      aspect-ratio: 1 / 1;
    }

    .gallery-cont {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .img-overlay-cont {
      display: flex;
      position: relative;
      cursor: pointer;
    }
    .img-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(2, 0, 36, .2) 0%, rgba(0, 0, 15, .3) 71%, rgba(255, 255, 255, .0) 100%);
  }

    .img-overlay::after {
      content: unset;
    }


    .img-overlay-cont img {
      object-fit: cover;
      max-height: 300px;
    }

    .gallery-cont li:nth-child(3) {
      grid-column: 2 span;
      object-fit: contain;
      /* grid-row: 2/3 span; */
      aspect-ratio: 23/9;
      /* width: 100%; */
    }
    .gallery-cont li:nth-child(3) img{

      aspect-ratio: 23/9;

    }

  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>

</style>
