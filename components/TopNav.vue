<template>
    <nav>
      <div class="nav-home">
        <div class="nav-home-1">
          <svg-icon class="svg-chevron chevron-topnav" name="chevron" />
          <a>
            <NuxtLink to="/"><p>van-Wijk</p></NuxtLink>
          </a>
        </div>
        <div class="nav-home-2">
          <p>{</p>
          <p>...</p>
          <p>}</p>
        </div>
      </div>
      <svg-icon class="svg-menu menu-topnav" name="menu" />
      <ul>
        <li><a>
            <NuxtLink to="/about"><p>About</p></NuxtLink>
          </a></li>
        <li><a>
            <NuxtLink to="/about"><p>Projects</p></NuxtLink>
          </a></li>
        <li><a>
            <NuxtLink to="/about"><p>Interests</p></NuxtLink>
          </a></li>
      </ul>
    </nav>
</template>

<style scoped>
  @import '~/assets/css/topnav.css';
</style>
