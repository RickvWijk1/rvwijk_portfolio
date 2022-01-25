<template>
  <nav>
    <div class="nav-home">
      <div class="nav-home-1">
        <svg-icon class="svg-chevron chevron-topnav" name="chevron" />
        <a>
          <NuxtLink to="/">
            <p>van-Wijk</p>
          </NuxtLink>
        </a>
      </div>
      <div class="nav-home-2">
        <p>{</p>
        <p>...</p>
        <p>}</p>
      </div>
    </div>
    <svg-icon v-on:click="menuToggle()" class="svg-menu menu-topnav" name="menu" />
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
    <div class="nav-mobile">
      <div class="nav-mobile-cont">
        <div class="nav-mobile-header">
          <svg-icon v-on:click="menuToggle()" class="svg-close menu-topnav" name="close" />
        </div>

        <ul class="nav-mobile-items">
          <div class="nav-item-cont">
            <NuxtLink class="nav-item" to="/about"><li>About</li></NuxtLink>
            <li class="nav-item">People</li>
            <li class="nav-item">People</li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    methods: {
      menuToggle() {
        let getHamburgerMenu = document.querySelectorAll('.menu-topnav');
        getHamburgerMenu.forEach((toggleMenu) => {
          toggleMenu.onclick = () => {
       let getMenu = document.querySelector(".nav-mobile");
            getMenu.classList.toggle("hamburger");
          };
        });
      },
      
    }
  }
</script>
<style scoped>
  @import '~/assets/css/topnav.css';

</style>
