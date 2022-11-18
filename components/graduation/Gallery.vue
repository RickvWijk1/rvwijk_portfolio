<template>
  <div class="gallery-wrapper">
    <client-only>
      <LightGallery :images="images" :index="index" :disable-scroll="false" @close="index = null" />
    </client-only>
    <ul class="gallery-cont">
      <li v-for="(img_src, img_thumbnail_index) in [
            'img/graduation/leeswijzer/handpicked_kantine.jpeg',
            'img/graduation/leeswijzer/bbd_tiger_zoomed_out.jpeg',
            'img/graduation/leeswijzer/bbd_tiger_zoomed_in.jpeg',
            'img/graduation/leeswijzer/handpicked_kantine.jpeg',

          ]" :key="img_thumbnail_index" @click="index = img_thumbnail_index">
        <div class="img-gallery-grid">
          <div class="img-overlay-cont">
            <img :src="img_src">
            <div class="img-overlay"></div>
          </div>
          <div class="img-overlay-cont">
            <img :src="img_src">
            <div class="img-overlay"></div>
          </div>
          <div class="img-overlay-cont">
            <img :src="img_src">
            <div class="img-overlay"></div>
          </div>
          <div class="img-overlay-cont">
            <img :src="img_src">
            <div class="img-overlay"></div>
          </div>
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
            title: `Strijp TQ location`,
            url: 'img/graduation/leeswijzer/handpicked_kantine.jpeg'
          },
          {
            title: 'Strijp TQ study environment',
            url: 'img/graduation/leeswijzer/bbd_tiger_zoomed_out.jpeg',
          },
          {
            title: 'Campus Rachelsmolen location',
            url: 'img/graduation/leeswijzer/bbd_tiger_zoomed_in.jpeg',
          },
          {
            title: 'Campus Rachelsmolen entrance hall',
            url: 'img/about/rachelsmolen2.jpg'
          },
          {
            title: 'Campus Rachelsmolen study environment',
            url: 'img/about/rachelsmolen3.jpg'
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
    display: block;
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
      content: 'Bekijk de locatie';
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

  ul li:first-child {
    display: flex;
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
    max-height: 300px;
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

</style>
