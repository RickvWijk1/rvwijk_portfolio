<template>
  <section>
    <div class="fontys-info">
      <img class="fontys-logo" src="~/assets/img/about/fontys_white_logo.png" width="228" height="137"
        alt="Logo of Fontys University of Applied Sciences">
      <i class="fontys-desc">"Fontys University of Applied Sciences offers various bachelors, masters and short term
        programmes."</i>
        <a target="__blank" href="https://fontys.edu/"><button class="btnModalClose bntModalClose-bg-color">
          <p>Learn more</p>
          <svg-icon class="svg-external-link" name="external_link" />
        </button></a>
    </div>
    <div class="location-info">
      <svg-icon class="svg-location" name="location" />
      <ol>
        <li><span>Strijp TQ:</span> 5651 GW Eindhoven</li>
        <li><span>Campus Rachelsmolen:</span> 5612 MA Eindhoven</li>
      </ol>
    </div>
    <client-only>
      <LightGallery :images="images" :index="index" :disable-scroll="false" @close="index = null" />
    </client-only>
    <ul>
      <li v-for="(img_src, img_thumbnail_index) in [
          'img/about/strijpTQ1.jpg',
          'img/about/strijpTQ2.jpg',
          'img/about/rachelsmolen1.jpg',
          'img/about/rachelsmolen2.jpg',

        ]" :key="img_thumbnail_index" @click="index = img_thumbnail_index">
        <div class="img-overlay-cont">
          <img :src="img_src">
          <div class="img-overlay"></div>
        </div>
      </li>
    </ul>
  </section>

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
            url: 'img/about/strijpTQ1.jpg'
          },
          {
            title: 'Strijp TQ study environment',
            url: 'img/about/strijpTQ2.jpg'
          },
          {
            title: 'Campus Rachelsmolen location',
            url: 'img/about/rachelsmolen1.jpg'
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
  };

</script>

<style lang="css" scoped>
  @import '~/assets/css/modal.css';

section{
  gap: 3rem;
}

  ol {
    list-style-type: decimal;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 1rem;
  }

  ol li span {
    font-weight: 600;
  }

.fontys-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
  .fontys-logo {
    display: flex;
    max-width: 60%;
  }

  .fontys-desc {
    text-align: center;
  }

  .location-info {
    display: flex;
    gap: 1rem;
  }

  .btnModalClose {
    display: flex;
    gap: .5rem;
  }

  .svg-external-link {
    display: flex;
    width: 19px;
    height: 19px;
    cursor: pointer;
    fill: #fff;
  }

  .svg-location {
    display: flex;
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: #fff;
  }

  .img-overlay-cont {
    position: relative;
  }

  .img-overlay {
    position: absolute;
    inset: 0;
    /* background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, rgba(255, 255, 255, 0.2)) */
    background: radial-gradient(circle, rgba(2, 0, 36, .4) 0%, rgba(0, 0, 15, .3) 71%, rgba(255, 255, 255, .0) 100%);
  }

  .img-overlay::after {
    content: 'View locations';
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 500;
  }


  ul li {
    display: none;
  }

  ul li:first-child {
    display: flex;
  }

  @media (max-width: 300px) {}

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
