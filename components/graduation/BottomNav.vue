<template>
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
</template>

<script>
  export default {
    data: () => ({
      value: 0
    }),
  }

</script>

<style>
  .bottom-nav {
    display: flex;
    justify-self: flex-end;
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

  .nav-item span {
    font-size: .5rem;
    color: #fff !important;
  }

  .nav-item-label::after {
    height: 2px;
    width: 100%;
  }

  a.nuxt-link-active {
    color: #fff;
  }

  /* exact link will show the primary color for only the exact matching link */
  a.nuxt-link-exact-active {
    color: #fff;
  }

  /* .nav-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 3.5em;
    width: 100%;
    height:1.1rem;
    transition: all .5s ease;
    background-color: orange;
  } */

</style>
