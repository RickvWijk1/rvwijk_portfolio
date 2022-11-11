<template>
  <div class="banner">
    <div class="banner-wrapper">
      <div class="banner-cont">
        <h2>Hergebruik en beheer van componenten</h2>
        <div class="quote">
          <div class="quote-statement">
            <svg-icon class="svg-quotes svg-quotes-left" name="quote_left_solid" />
            <div class="quote-text">
              <p>There is no such thing as ‘away’.
                When we throw anything away it
                must go somewhere.</p>
            </div>
            <span class="svg-quotes-right">
              <svg-icon class="svg-quotes" name="quote_right_solid" />
            </span>
          </div>
          <div class="quote-quoter">
            <svg-icon class="svg-quotes svg-quotes-left invisible" name="quote_left_solid" />
            <i>~ Annie Leonard</i>
          </div>
        </div>
      </div>
      <div class="bbd-logo-desktop bbd-wrapper">
        <div class="bbd-logo" role="img" aria-label="Image of Bluebirdday logo" title="Image of Bluebirdday logo"></div>
      </div>
    </div>
    <div class="hero-images-wrapper">
      <div class="bbd-logo-phone bbd-wrapper">
        <div class="bbd-logo" role="img" aria-label="Image of Bluebirdday logo" title="Image of Bluebirdday logo"></div>
      </div>
      <div class="rick-wrapper">
        <div class="rick" role="img" aria-label="Image of Rick van Wijk" title="Image of Rick van Wijk"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  .banner {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 1.5rem; */
    background-color: #fff !important;
    color: #000;
  }

  .banner-wrapper {
    display: flex;
    flex-direction: column;
    /* gap: 1.5em; */
    padding: 1em 1em 0em;
  }

  .banner-cont h2 {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
    max-width: 40em;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .banner-cont {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .quote{
    display: flex;
    flex-direction: column;
    max-width: 40em;
  }

  .quote-statement {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: .5em;
    letter-spacing: 1px;
  }

  .quote-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .quote-text p {
    text-align: center;
  }

  .svg-quotes {
    display: flex;
    max-width: 19px;
    widows: 19px;
    height: 19px;
    fill: #000;
  }

  .svg-quotes-right {
    align-self: flex-end;
  }

  .quote-quoter {
    display: flex;
    width: 100%;
    flex-direction: row;
    /* gap: .5em; */
    align-content: center;
    justify-content: center;

    letter-spacing: 1px;
    font-size: .8rem;
    font-style: italic;
  }

  .invisible {
    display: none;
  }

  .hero-images-wrapper {
    display: flex;

    padding: 0 0 0 1em;
  }

  .bbd-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    background-repeat: no-repeat;
  }

  .bbd-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    width: 100%;
    height: 200px;
    background-image: url('~@/assets/img/school/graduation/home/bbd_logo.webp');
    background-size: cover;
    background-position: left;
  }

  .bbd-logo-desktop{
      display: none;
    }

  .rick-wrapper {
    max-width: 100%;
    width: 100%;
    background-repeat: no-repeat;
  }

  .rick {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    width: 100%;
    height: 200px;
    background-image: url('~assets/img/school/graduation/home/rick_bbd_photo.webp');
    background-size: cover;
  }

  @media (min-width: 300px) {
    .banner {
      justify-content: unset;
      height: 100%;
    }

    .banner-wrapper {
      padding: 2em;
    }

    .quote-text {
      font-size: 1.2rem;
    }

    .quote-quoter {
      font-size: 1rem;
    }

    .hero-images-wrapper {
      background-color: #fff;
      padding: 0 0 0 2em;
      flex: 2;
    }

    .bbd-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      width: 100%;
      height: 100%;
      min-height: 100px;
      background-repeat: no-repeat;
    }

    .bbd-logo {
      height: 60px;
    }

    .bbd-logo-desktop{
      display: none;
    }

    .rick-wrapper {}

    .rick {
      min-height: 300px;
      height: 100%;
    }

  }

  @media (min-width: 640px) {
    .banner-wrapper h2 {
      font-size: 2.2rem;
    }

    .quote-text {
      font-size: 1.5rem;
    }

    .quote-quoter {
      font-size: 1.5rem;
    }

    .bbd-logo {
      height: 70px;
    }

    .rick {
      min-height: 500px;
    }
  }

  @media (min-width: 768px) {


    .bbd-logo {
      height: 90px;
    }

    .bbd-wrapper{
      max-width: 400px;
    }
    .rick-wrapper {
      max-width: 350px;
    }
  }

  @media (min-width: 1024px) {
    .banner{
      width: 100%;
      flex-direction: row;
      background-color: #fff;
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
    }

    .banner-cont {
      z-index: 1;
    }

    .banner-wrapper{
      position: relative;
      padding: 2em 0 2em 2em;
    }

    .hero-images-wrapper{
      position: relative;
      height: 100%;
    }

    .rick-wrapper{
      width: 100%;
      max-width: unset;
      z-index: 1;
    }

    .rick{
      /* height: 682px; */
      /* min-height: unset;
      min-width: unset; */
      width: auto;
      transform: scale(1.05);
      transform-origin: 20% 100%;
    }

    .hero-images-wrapper{
      padding: 0;
    }
    .hero-images-wrapper::before{
      content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background:#166ECC;
        transform: skew(-10deg, 0deg);
    }
    .hero-images-wrapper::after{
      content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        right: -200px;
        background:#166ECC;
        transform: skew(0deg, 0deg);
    }

    .bbd-logo-desktop{
      z-index: 1;
      display: flex;
    }

    .bbd-logo-phone{
      display: none;
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
