<template>
    <div class="layout-body">
      <div class="grad-wrapper">
        <nuxt />
        <!-- <GraduationBottomNav /> -->
      </div>

    </div>
</template>

<script>
//  @import '~/assets/css/graduation.css';

</script>

<style scoped>
  @import '~/assets/css/global.css';
  @import '~/assets/css/font.css';
  html, body{
    background-color: #fff;
    /* overflow-y: scroll; */
  }
  .layout-body{
    position: relative;
    gap: unset;
  }



/* home route and active route will show in bold as it matches / and /about */
span{
  color: #fff;
}
</style>
