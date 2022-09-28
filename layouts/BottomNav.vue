<template>
    <div class="layout-body">
  
        <Nuxt />
        <GraduationBottomNav />
    </div>
</template>

<script>

</script>

<style scoped>
  @import '~/assets/css/global.css';
  @import '~/assets/css/font.css';
  .layout-body{
    position: relative;
    gap: unset;
  }

  

/* home route and active route will show in bold as it matches / and /about */
span{
  color: #fff;
}
</style>
