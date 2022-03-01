<template>
  <nav>
    <div class="nav-home">
      <div class="nav-home-1">
        <svg-icon class="svg-chevron chevron-topnav" name="chevron" />
        <a href="/rvwijk_portfolio">
            <p>van-Wijk</p>
        </a>
      </div>
      <div class="nav-home-2">
        <p>{</p>
        <p>...</p>
        <p>}</p>
      </div>
    </div>
    <svg-icon v-on:click="mobileNavIsActive = !mobileNavIsActive" class="svg-menu menu-topnav" name="menu" />
    <!-- <svg-icon  class="svg-menu menu-topnav" name="menu" /> -->
    <ul>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/interests">Interests</NuxtLink>
      </li>
    </ul>
    <div v-show="mobileNavIsActive" class="nav-mobile">
      <div class="nav-mobile-cont">
        <div class="nav-mobile-header">
          <svg-icon v-on:click="mobileNavIsActive = !mobileNavIsActive" class="svg-close menu-topnav" name="close" />
        </div>

        <ul class="nav-mobile-items">
          <div class="nav-item-cont">
            <li><NuxtLink class="nav-item" to="/about">About</NuxtLink></li>
            <li><NuxtLink class="nav-item" to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink class="nav-item" to="/interests">Interests</NuxtLink></li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    setup() {
        
    },
    watch: {
      '$route' (){
        this.mobileNavIsActive = false
      }
    },
    data: () => ({
    mobileNavIsActive: false
  }),
}
</script>
<style scoped>
  @import '~/assets/css/topnav.css';

</style>
