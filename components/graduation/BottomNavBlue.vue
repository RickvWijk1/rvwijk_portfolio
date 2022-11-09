<template>


  <div class="nav-wrapper">
    <div class="bottom-nav-mobile">
      <v-bottom-navigation :value="value" color="green" grow class="bottom-nav">
        <NuxtLink to="/semesters/graduation/home">
          <v-btn class="nav-item">
            <span>HOME</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/semesters/graduation/leeswijzer">
          <v-btn class="nav-item">
            <span class="nav-item-label">LEESWIJZER</span>
            <v-icon>mdi-lightbulb</v-icon>
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/semesters/graduation/leeruitkomsten">
          <v-btn class="nav-item">
            <span>UITKOMSTEN</span>
            <v-icon>mdi-school</v-icon>
          </v-btn>
        </NuxtLink>
      </v-bottom-navigation>
    </div>
    <div class="bottom-desktop-nav">
      <div class="desktop-nav-cont">
        <ul>
          <li>
            <NuxtLink to="/semesters/graduation/home" exact>Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/semesters/graduation/leeswijzer" exact>Leeswijzer</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/semesters/graduation/leeruitkomsten" exact>Leeruitkomsten</NuxtLink>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      value: 0
    }),
  }

</script>

<style lang="css" scoped>
.nav-wrapper{
  position: relative;
  display: flex;
}
  .bottom-nav {
    flex: 1;
    display: flex !important;
    justify-self: flex-end !important;
    background-color: #166ECC !important;
    color: #fff !important;
    box-shadow: unset !important;
    position: fixed !important;
    left: 0 !important;
    bottom: 0 !important;
    z-index: 99;
    /* z-index: 5; */
  }

  .nav-item {
    padding: 0 0.5em !important;
    background-color: #166ECC !important;
  }

  .bottom-nav a {
    display: flex;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    flex: 0 1 auto;
    font-size: 0.75rem;
    height: inherit;
    max-width: 168px;
    min-width: 80px;
    position: relative;
    text-transform: none;
    width: 100%;
  }

  .nav-item {
    height: inherit !important;
  }

  .nav-item span {
    display: flex;
    flex-direction: column;
    gap: .25em;
    font-size: .5rem;
    color: #fff !important;
  }

  .bottom-desktop-nav {
    display: none;
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  ul li {
    letter-spacing: .1rem;
    padding: 1em 0em;
    font-weight: bold;
  }

  .nuxt-link-active {
    position: relative;
    border-bottom: 6px solid #fff;
    padding: 0 0 .1em 0;
    height: 100%;
  }

  @media (min-width: 300px) {
    .bottom-nav {
      height: 65px !important;
      /* display: none !important; */
    }

    .bottom-nav a span i {
      font-size: 2rem !important;
    }

    .bottom-nav a span {
      font-size: 0.8rem !important;

    }
  }


  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {
    .bottom-nav-mobile {
      display: none;
    }

    .bottom-desktop-nav {
      display: flex;
      width: 100%;
      padding: 2em 2em;
      background-color: #166ECC;
      color: #fff;
    }

    .nuxt-link-active {
      position: relative;
      border-bottom: 6px solid #fff;
      padding: 0 0 .1em 0;
      height: 100%;
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
