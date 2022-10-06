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
    flex: 1;
    display: flex !important;
    justify-self: flex-end !important;
    background-color: #166ECC !important;
    box-shadow: unset !important;
    position: fixed !important;
    left: 0 !important;
    bottom: 0 !important;
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

  @media (min-width: 300px) {}

  @media (min-width: 640px) {
    .bottom-nav{
      height: 65px !important;
      /* display: none !important; */
    }

    .bottom-nav a span i{
      font-size: 2rem !important;
    }

    .bottom-nav a span{
      font-size: 0.8rem !important;

    }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
