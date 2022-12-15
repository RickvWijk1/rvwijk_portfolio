<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <GraduationHero />
      <GraduationBanner />
    </div>
    <GraduationBottomNavBlue />
  </div>
</template>

<script>
  export default {
    layout: "BottomNav",
  }

</script>

<style lang="css">
 @import '~/assets/css/graduation.css';

  body {
    /* background-color: #166ECC; */
    color: #fff;
    margin: 0 auto;
  }

  .grad-wrapper {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    justify-content: space-between;
    align-self: center;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background: #fff;
    /* gap: 2em; */
    overflow-y: auto;
    /* height: calc(100% - 56px); */
  }

  .page-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* height: 100%;  */
    height: calc(100% - 62px);
    overflow-y: auto;
    overflow-x: hidden;
    /* margin: 0 0 56px 0; */
  }

  @media (min-width: 300px) {}

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
