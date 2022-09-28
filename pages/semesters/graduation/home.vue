<template>
  <div class="grad-wrapper">
    <!-- <template>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template> -->
    <div class="content-wrapper">
      <GraduationHero />
      <GraduationBanner />
    </div>

  </div>
</template>

<script>
  export default {
    layout: "BottomNav",
  }

</script>

<style lang="css">
  body {
    background-color: #166ECC;
    color: #fff;
    overflow: hidden;
  }


  .grad-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    justify-content: space-between;
    align-self: center;
    max-width: 100%;
    width: 100%;
    height: 100%;
    gap: 2em;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 300px) {}

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
