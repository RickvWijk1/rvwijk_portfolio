<template>
    <div class="layout-body">
      <div class="grad-wrapper">
        <Nuxt />
        <GraduationBottomNav />
      </div>
        
    </div>
</template>

<script>

</script>

<style scoped>
  @import '~/assets/css/global.css';
  @import '~/assets/css/font.css';
  html, body{
    background-color: #fff;
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
