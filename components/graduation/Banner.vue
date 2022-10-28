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
    </div>
    <div class="hero-images-wrapper">
        <div class="bbd-wrapper">
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

  .banner-wrapper h2 {
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.2;
    padding-bottom: 1em;
  }

  .banner-cont{
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

  .hero-images-wrapper{
    display: flex;
    padding: 0 0 0 1em;
  }

  .bbd-wrapper{
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
    .banner{
      justify-content: unset;
    }
    .banner-wrapper{
      padding: 2em;
    }

    .quote-text{
    font-size: 1.2rem;
    }

    .quote-quoter{
      font-size: 1rem;
    }

    .hero-images-wrapper{
      padding: 0 0 0 2em;
      flex: 2;
    }

    .bbd-wrapper{
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
    height: 50px;
  }

  .rick-wrapper {
  }
  
  .rick {
    min-height: 300px;
    height: 100%;
  }

  }

  @media (min-width: 640px) {
    .banner-wrapper h2 {
    font-size: 2.2rem;
  }

  .quote-text{
    font-size: 1.7rem;
  }
  .quote-quoter{
    font-size: 1.5rem;
  }
    .bbd-logo {
    height: 100px;
  }
    .rick {
    min-height: 700px;
  }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
