<template>

  <div class="main-wrapper">
    <div class="main-nav-wrapper">

      <nav>
        <v-app-bar class="nav-app-bar" color="#fff">
          <v-icon @click.stop="drawer = !drawer">mdi-chevron-right</v-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app light temporary class="sidepanel">
          <v-list class="v-list-cont" nav dense>
            <v-list-item-group>
              <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren#projectplan">
                <v-list-item>
                  <v-list-item-title>Projectplan</v-list-item-title>
                </v-list-item>
              </a>

              <v-list-item>
                <v-list-item-title>Trend-analyse</v-list-item-title>
              </v-list-item>

            </v-list-item-group>
            <v-list-item-group>
              <div class="pagination-mobile pagination">
                <NuxtLink class="pagination-next" to="/semesters/graduation/leeruitkomsten">
                  <v-btn class="prev-chevron-left" icon elevation="6" dark>
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <p>Vorige</p>
                </NuxtLink>
                <NuxtLink class="pagination-next" to="/semesters/graduation/learningoutcomes/adviseren">
                  <p>Volgende</p>
                  <v-btn class="prev-chevron-right" icon elevation="6" dark>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </NuxtLink>
              </div>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </nav>

      <div class="page-wrapper">
        <div class="content-cont">
          <h3>Analyseren</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit voluptas vel cupiditate quisquam
          accusantium numquam, consequuntur expedita labore sint delectus animi sapiente natus maiores possimus
          perspiciatis aliquam maxime praesentium dolor aliquid saepe laborum quidem? Modi accusantium commodi, et error
          tenetur maiores nulla repudiandae, labore voluptates molestias ut numquam magni hic repellendus omnis! Numquam
          illum atque sequi reprehenderit, nobis quia illo cumque at dolorum autem, eius fugiat! Praesentium neque ut quis
          voluptates, accusamus deserunt accusantium ab eos distinctio perspiciatis. Labore quae non tempore magni
          officia, dolorum quia iure amet perferendis. Quibusdam aperiam expedita deserunt quia ut facilis suscipit
          officia est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fuga necessitatibus impedit
          doloribus deleniti! Facilis et, illo corrupti ducimus dignissimos pariatur inventore. Aperiam voluptatum vero
          alias rerum commodi ad nihil aut delectus earum similique molestiae, praesentium perferendis. Repellat hic
          perferendis laboriosam asperiores? Deserunt exercitationem dolore blanditiis consectetur, doloremque adipisci
          corrupti commodi? Ex quidem quos eius iure,
        </div>
        <div class="content-cont">
          <h4>Analyseren</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit voluptas vel cupiditate quisquam
          accusantium numquam, consequuntur expedita labore sint delectus animi sapiente natus maiores possimus
          perspiciatis aliquam maxime praesentium dolor aliquid saepe laborum quidem? Modi accusantium commodi, et error
          tenetur maiores nulla repudiandae, labore voluptates molestias ut numquam magni hic repellendus omnis! Numquam
          illum atque sequi reprehenderit, nobis quia illo cumque at dolorum autem, eius fugiat! Praesentium neque ut quis
          voluptates, accusamus deserunt accusantium ab eos distinctio perspiciatis. Labore quae non tempore magni
          officia, dolorum quia iure amet perferendis. Quibusdam aperiam expedita deserunt quia ut facilis suscipit
          officia est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fuga necessitatibus impedit
          doloribus deleniti! Facilis et, illo corrupti ducimus dignissimos pariatur inventore. Aperiam voluptatum vero
          alias rerum commodi ad nihil aut delectus earum similique molestiae, praesentium perferendis. Repellat hic
          perferendis laboriosam asperiores? Deserunt exercitationem dolore blanditiis consectetur, doloremque adipisci
          corrupti commodi? Ex quidem quos eius iure,
        </div>
        <div class="content-cont">
          <h4>Analyseren</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit voluptas vel cupiditate quisquam
          accusantium numquam, consequuntur expedita labore sint delectus animi sapiente natus maiores possimus
          perspiciatis aliquam maxime praesentium dolor aliquid saepe laborum quidem? Modi accusantium commodi, et error
          tenetur maiores nulla repudiandae, labore voluptates molestias ut numquam magni hic repellendus omnis! Numquam
          illum atque sequi reprehenderit, nobis quia illo cumque at dolorum autem, eius fugiat! Praesentium neque ut quis
          voluptates, accusamus deserunt accusantium ab eos distinctio perspiciatis. Labore quae non tempore magni
          officia, dolorum quia iure amet perferendis. Quibusdam aperiam expedita deserunt quia ut facilis suscipit
          officia est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fuga necessitatibus impedit
          doloribus deleniti! Facilis et, illo corrupti ducimus dignissimos pariatur inventore. Aperiam voluptatum vero
          alias rerum commodi ad nihil aut delectus earum similique molestiae, praesentium perferendis. Repellat hic
          perferendis laboriosam asperiores? Deserunt exercitationem dolore blanditiis consectetur, doloremque adipisci
          corrupti commodi? Ex quidem quos eius iure,
          <h4 id="projectplan">Projectplan</h4>
        </div>
        <div class="content-cont">
          <h4>Analyseren</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit voluptas vel cupiditate quisquam
          accusantium numquam, consequuntur expedita labore sint delectus animi sapiente natus maiores possimus
          perspiciatis aliquam maxime praesentium dolor aliquid saepe laborum quidem? Modi accusantium commodi, et error
          tenetur maiores nulla repudiandae, labore voluptates molestias ut numquam magni hic repellendus omnis! Numquam
          illum atque sequi reprehenderit, nobis quia illo cumque at dolorum autem, eius fugiat! Praesentium neque ut quis
          voluptates, accusamus deserunt accusantium ab eos distinctio perspiciatis. Labore quae non tempore magni
          officia, dolorum quia iure amet perferendis. Quibusdam aperiam expedita deserunt quia ut facilis suscipit
          officia est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fuga necessitatibus impedit
          doloribus deleniti! Facilis et, illo corrupti ducimus dignissimos pariatur inventore. Aperiam voluptatum vero
          alias rerum commodi ad nihil aut delectus earum similique molestiae, praesentium perferendis. Repellat hic
          perferendis laboriosam asperiores? Deserunt exercitationem dolore blanditiis consectetur, doloremque adipisci
          corrupti commodi? Ex quidem quos eius iure,
          <h4 id="projectplan">Projectplan</h4>
        </div>
        <div class="content-cont">
          <h4>Analyseren</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit voluptas vel cupiditate quisquam
          accusantium numquam, consequuntur expedita labore sint delectus animi sapiente natus maiores possimus
          perspiciatis aliquam maxime praesentium dolor aliquid saepe laborum quidem? Modi accusantium commodi, et error
          tenetur maiores nulla repudiandae, labore voluptates molestias ut numquam magni hic repellendus omnis! Numquam
          illum atque sequi reprehenderit, nobis quia illo cumque at dolorum autem, eius fugiat! Praesentium neque ut quis
          voluptates, accusamus deserunt accusantium ab eos distinctio perspiciatis. Labore quae non tempore magni
          officia, dolorum quia iure amet perferendis. Quibusdam aperiam expedita deserunt quia ut facilis suscipit
          officia est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fuga necessitatibus impedit
          doloribus deleniti! Facilis et, illo corrupti ducimus dignissimos pariatur inventore. Aperiam voluptatum vero
          alias rerum commodi ad nihil aut delectus earum similique molestiae, praesentium perferendis. Repellat hic
          perferendis laboriosam asperiores? Deserunt exercitationem dolore blanditiis consectetur, doloremque adipisci
          corrupti commodi? Ex quidem quos eius iure,
          <h4 id="projectplan">Projectplan</h4>
        </div>
        <div class="pagination">
          <NuxtLink class="pagination-next" to="/semesters/graduation/leeruitkomsten">
            <v-btn class="prev-chevron-left" icon elevation="6" dark>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <p>Vorige</p>
          </NuxtLink>
          <NuxtLink class="pagination-next" to="/semesters/graduation/learningoutcomes/adviseren">
            <p>Volgende</p>
            <v-btn class="prev-chevron-right" icon elevation="6" dark>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </NuxtLink>
        </div>

        <!-- <v-pagination v-model="page" :length="2" light color="#166ECC"></v-pagination> -->
      </div>
    </div>
    <GraduationBottomNavWhite />

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
      page: 1,
    }),

    watch: {
      group() {
        this.drawer = false
      },
    },
  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/graduation.css';

  .main-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
  }

  .main-nav-wrapper{
    display: flex;
    justify-content: row;
  }

  .nav-app-bar {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 100% !important;
  }

  .sidepanel {
    position: absolute;
    width: 200px !important;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important;
    color: #fff;
  }

  .v-list-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: -moz-calc(100% - 56px);
    height: -webkit-calc(100% - 56px);
    height: calc(100% - 56px);
  }

  .page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    height: 100%;
    color: #000;
    padding: 2em 1em;
  }

  .content-cont {
    display: flex;
    flex-direction: column;
  }

  .pagination {
    z-index: 1;
    display: flex;
    justify-content: space-between;
  }

  .pagination p {
    font-size: .8rem;
  }

  .pagination-prev,
  .pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }

  .pagination-prev {}

  .pagination-next {}

  .prev-chevron-left,
  .prev-chevron-right {
    background-color: #166ECC;
  }


  @media (min-width: 300px) {}


  @media (min-width: 640px) {
    .pagination-mobile {
      display: none;
    }
  }


  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
