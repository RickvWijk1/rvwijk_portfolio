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
              <div class="sidepanel-item-cont">
                <v-list-item>
                  <h2>Analyseren</h2>
                </v-list-item>
              </div>
            <div class="sidepanel-item-cont">
              <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren#projectplan">
                <v-list-item>
                  <v-list-item-title class="v-list-item-title"><p>Projectplan</p></v-list-item-title>
                </v-list-item>
              </a>
              <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren#projectplan">
                <v-list-item>
                  <v-list-item-title class="v-list-item-title"><p>Trend-analyse</p></v-list-item-title>
                </v-list-item>
              </a>
              </div>
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
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="projectplan">Projectplan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis eos ut quos voluptas amet, aut
              incidunt! Consequuntur, eveniet nostrum!</p>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-desktop">
                <p>Desktop</p>
                <img src="~/assets/img/school/research_strats/library.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Desktop research was applied,</b> because the current situation of PSV's problem/opportunity had
                to
                be analysed in order to understand the assignment. By talking to PSV's representatives we gained
                insight
                of what PSV was working on and what stakeholders were involved.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Conclusie</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate eum et laboriosam fuga quidem
              molestiae pariatur, amet temporibus laudantium.</p>
          </div>
          <div class="content-cont">
            <h4>Wat heb ik geleerd?</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolor consectetur consequuntur
              aspernatur molestias a deleniti voluptatem beatae assumenda minus.</p>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <embed src="pdf/graduation/projectplanV3.pdf" width="100%" height="1000" type="application/pdf">
            <a target="_blank" href="./pdf/graduation/projectplanV3.pdf"><button
                class="bbd-btn">View debriefing in PDF</button></a>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="projectplan">Projectplan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis eos ut quos voluptas amet, aut
              incidunt! Consequuntur, eveniet nostrum!</p>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h3>Approach</h3>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-desktop">
                <p>Desktop</p>
                <img src="~/assets/img/school/research_strats/library.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Desktop research was applied,</b> because the current situation of PSV's problem/opportunity had
                to
                be analysed in order to understand the assignment. By talking to PSV's representatives we gained
                insight
                of what PSV was working on and what stakeholders were involved.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Conclusie</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate eum et laboriosam fuga quidem
              molestiae pariatur, amet temporibus laudantium.</p>
          </div>
          <div class="content-cont">
            <h4>Wat heb ik geleerd?</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolor consectetur consequuntur
              aspernatur molestias a deleniti voluptatem beatae assumenda minus.</p>
          </div>
        </div>

        <!-- <div class="pagination">
          <NuxtLink class="pagination-next" to="/semesters/graduation/leeruitkomsten">
            <v-btn class="prev-chevron-left" icon elevation="6" dark>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <p>Terug</p>
          </NuxtLink>
          <NuxtLink class="pagination-next" to="/semesters/graduation/learningoutcomes/adviseren">
            <p>Volgende</p>
            <v-btn class="prev-chevron-right" icon elevation="6" dark>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </NuxtLink>
        </div> -->

        <!-- <v-pagination v-model="page" :length="2" light color="#166ECC"></v-pagination> -->
      </div>
    </div>
    <div class="nav-wrapper">
      <div class="bottom-nav-mobile">
        <v-bottom-navigation grow class="bottom-nav">
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
          <NuxtLink to="/semesters/graduation/leeruitkomsten" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar 'Adviseren'</p>
          </NuxtLink>
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
            <p>Ga naar 'Adviseren'</p>
            <svg-icon class="svg-arrow-right" name="arrow-right" />
          </NuxtLink>
        </div>
      </div>
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
  @import '~/assets/css/graduationNav.css';
  @import '~/assets/css/modal.css';

</style>
