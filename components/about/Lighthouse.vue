<template>
  <section class="main-wrapper">
    <div class="lighthouse-cont">
      <div class="label">
        <svg-icon class="svg-lighthouse" name="lighthouse" />
        <p>Google Lighthouse approves!</p>
      </div>
      <div class="content">
        <img src="~/assets/img/about/performance.png" width="950px" alt="">
      </div>
      <div class="outer-cont">
        <div class="top">
          <div class="top-left stroke"></div>
          <div class="top-right stroke"></div>
        </div>
        <div class="bottom">
          <div class="bottom-left stroke"></div>
          <div class="bottom-right stroke"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/aboutContent.css';

  .main-wrapper {
    gap: 2rem;
    padding-bottom: 3em;
  }

  .lighthouse-cont {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .label {
    z-index: 1;
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: .5rem 0rem;
    top: -20px;
    background: #4758fc;
    border-radius: .5rem;
  }

  .svg-lighthouse {
    display: flex;
    width: 19px;
    height: 19px;
    fill: #fff;
  }

  .outer-cont {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .top,
  .bottom {
    display: flex;
    gap: 4rem;
  }

  .stroke {
    position: relative;
    color: #fff;
    border-width: 2px;
    width: 6rem;
    height: 6rem;
    /* top right bottom left */
  }

  .top-left {
    border-bottom: 1px;
    border-right: 1px;
  }

  .top-right {
    border-bottom: 1px;
    border-left: 1px;
  }

  .bottom-left {
    border-top: 1px;
    border-right: 1px;
  }

  .bottom-right {
    border-top: 1px;
    border-left: 1px;
  }

  .content {
    position: absolute;
    max-width: 220px;
  }

  @media (min-width: 300px) {
    .label {
      width: unset;
    padding: .5rem 1rem;

    }

    .stroke {
      width: 8rem;
      height: 8rem;
    }

    .content {
      max-width: 300px;
    }
  }

  @media (min-width: 640px) {
    .outer-cont {
      gap: 12rem;
    }

    .label {
      padding: .5rem 5rem;
    }

    .top,
    .bottom {
      display: flex;
      gap: 12rem;
    }

    .stroke {
      width: 12rem;
      height: 12rem;
    }

    .content {
      max-width: unset;
      width: 500px;
    }
  }

  @media (min-width: 768px) {
    .outer-cont {
      gap: 12rem;
    }

    .top,
    .bottom {
      display: flex;
      gap: 15rem;
    }

    .stroke {
      width: 15rem;
      height: 15rem;
    }

    .content {
      width: 650px;
    }
  }

  @media (min-width: 1024px) {
    .outer-cont {
      gap: 20rem;
    }

    .label {
      padding: .5rem 5rem;
    }

    .top,
    .bottom {
      display: flex;
      gap: 20rem;
    }

    .stroke {
      width: 20rem;
      height: 20rem;
    }

    .content {
      width: 900px;
      min-width: 900px;
      max-width: unset;
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
