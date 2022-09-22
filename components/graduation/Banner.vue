<template>
  <div class="banner">
    <div class="banner-wrapper">
      <h2>Hergebruik van componenten</h2>
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
          <i>- Annie Leonard</i>
        </div>
      </div>
      <div class="hero-images-wrapper">
        <div class="bbd-logo"></div>
        <div class="rick-wrapper">
            <div class="rick"></div>
        </div>
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
    display: flex;
    justify-self: center;
    background-color: #fff;
    color: #000;
  }

  .banner-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
  }

  .banner-wrapper h2 {
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.2;
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
    gap: .5em;
    letter-spacing: 1px;
    font-size: .8rem;
    font-style: italic;
  }

  .invisible {
    visibility: hidden;
  }

  .bbd-logo{
    background-image: url('~@/assets/img/school/graduation/home/bbd_logo.png');
    background-size: cover;
  }


  .rick-wrapper{
    max-width: 100%;
  width: 300px;
  height: 200px;
  }

  .rick{
    background-image: url('~@/assets/img/school/graduation/home/rick_bbd_photo.webp');
    background-size: cover;
  }


  @media (max-width: 300px) {}

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
