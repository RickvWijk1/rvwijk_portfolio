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
        <NuxtLink to="/semesters/graduation/leeruitkomsten" class="desktop-next-page" exact>
          <p>Ga naar de leeruitkomsten</p>
          <svg-icon class="svg-arrow-right" name="arrow-right" />
        </NuxtLink>
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
  .nav-wrapper {
    z-index: 1;
    position: relative;
    display: flex;
    height: 56px;
  }

  .bottom-nav {
    flex: 1;
    display: flex !important;
    justify-self: flex-end !important;
    background-color: #166ECC !important;
    box-shadow: unset !important;
    position: fixed !important;
    left: 0 !important;
    bottom: 0 !important;
    color: #fff;
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

  .theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
    color: #fff !important;
  }

  .bottom-desktop-nav {
    position: fixed;
    bottom: 0;
    display: none;
    -webkit-box-shadow: 0px -12px 51px -21px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -12px 51px -21px rgba(0, 0, 0, 0.75);
    box-shadow: 0px -12px 51px -21px rgba(0, 0, 0, 0.75);
  }

  .desktop-nav-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

  .desktop-next-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #000;
    font-weight: bold;
    letter-spacing: .05rem;
  }

  .svg-arrow-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    max-height: 2.5rem;
    fill: #000;
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
    .nav-wrapper{
      height: unset;
    }
    .bottom-nav-mobile {
      display: none;
    }

    .bottom-desktop-nav {
      display: flex;
      width: 100%;
      padding: 2em 2em;
      background-color: #fff;
      color: #000;
    }

    .nuxt-link-active {
      position: relative;
      border-bottom: 6px solid #000;
      padding: 0 0 .1em 0;
      height: 100%;
    }
  }

  @media (min-width: 1280px) {
    .bottom-desktop-nav {
      padding: 3em 6em;
    }
  }

  @media (min-width: 1536px) {
    .bottom-desktop-nav {
    /* position: relative; */
      padding: 3em 16em;
    }
  }

</style>
