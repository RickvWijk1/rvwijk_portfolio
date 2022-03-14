<template>
  <nav :class="{ 'onScroll': !view.topOfPage}">
    <!-- <div class="nav-home">
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
    </div> -->
    <NuxtLink to="/" class="nav-logo">
      <p>R/</p>
    </NuxtLink>
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
          <NuxtLink to="/" class="nav-logo">
      <p>R/</p>
    </NuxtLink>
          <svg-icon v-on:click="mobileNavIsActive = !mobileNavIsActive" class="svg-close menu-topnav" name="close" />
        </div>

        <ul class="nav-mobile-items">
          <div class="nav-item-cont">
            <li><NuxtLink class="nav-item" to="/about">About</NuxtLink></li>
            <li><NuxtLink class="nav-item" to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink class="nav-item" to="/interests">Interests</NuxtLink></li>
            <li><NuxtLink class="nav-item" to="/semesters/semesterSix">Semester 6</NuxtLink></li>
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

  data () {
    return {
      mobileNavIsActive: false,
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
}
</script>
<style scoped>
  @import '~/assets/css/topnav.css';
  @import '~/assets/scss/nav.scss';

</style>
