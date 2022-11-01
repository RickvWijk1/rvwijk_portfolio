<template>
  <div class="main-wrapper">
    <v-navigation-drawer v-model="drawer" permanent app expand-on-hover class="sidepanel">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-btn @click.stop="drawer = !drawer" icon>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>

          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="content-cont">
      <p>sdfewfwef</p>
    </div>

  </div>
  <!-- <v-app-bar class="" dense min-height="100vh" width="100px">
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
    </v-app-bar> -->


</template>

<script>
  export default {
    layout: 'BottomNav',
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group() {
        this.drawer = false
      },
    },
  }

</script>

<style lang="css" scoped>
  .main-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }

  .sidepanel {
    position: relative;
  }

  .content-cont{
    display: flex;
    padding: 2em 1em;
    color: #000;
  }

</style>
