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
                  <h2>Realiseren</h2>
                </v-list-item>
              </div>
              <div class="sidepanel-item-cont">
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/realiseren/#eindproducten">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Eindproducten</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/realiseren/#overdracht">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Overdracht</p>
                    </v-list-item-title>
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
            <h3 id="eindproducten">Eindproducten</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>De eindproducten laten zien aan te sluiten op de gemaakte ontwerpen en opgestelde criteria.</p>
            </div>
          </div>

          <div class="content-cont">
            <h4>Eindproduct; Componenten opslag omgeving</h4>
            <div class="pdf-cont">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/gitlab_packageregistry.png" alt=""
                class="image-zoom">
                <p>Deze omgeving zorgt ervoor dat Bluebird Day een plaats heeft om de front-end componenten op te slaan.
                  Requirements waarmee rekening gehouden is, zijn o.a. het aanbieden van een beveiligde omgeving, en het
                  kunnen installeren van de library met 1 command.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Eindproduct; Componenten documentatie omgeving</h4>
            <div class="pdf-cont">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/gitbook.png" alt=""
                class="image-zoom">
                <p>Deze omgeving zorgt ervoor dat Bluebird Day front-end developers een plaats hebben om informatie over de front-end componenten te kunnen vinden.
                  Requirements waarmee rekening gehouden is, zijn o.a. het aanbieden van een beveiligde omgeving, en het
                  kunnen syncen met GitLab.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>Met deze producten kan Bluebird Day een eigen componenten library met up-to-date documentatie bouwen.</p>
            </div>
          </div>
        </div>

        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="overdracht">Overdracht</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Alle kennis met betrekking tot de oplossing is digitaal overgedragen en d.m.v. een co-reflection/creation sessie en kennissessie, ook mondelings.</p>
            </div>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-lab">
                <p>Lab</p>
                <img src="~/assets/img/school/research_strats/lab.png" alt="">
              </div>
              <div class="research-tag research-active research-showroom">
                <p>Showroom</p>
                <img src="~/assets/img/school/research_strats/showroom.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Lab & Showroom research is toegepast,</b> omdat de kennis overdracht tijdens de co-reflection/creation sessie, kennissessie en de wekelijkse updates aan mijn bedrijfbegeleider heeft plaatsgevonden.</p>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
            </div>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/ontwerpen/" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar 'Ontwerpen'</p>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/beheren/" class="desktop-next-page" exact>
            <p>Ga naar 'Beheren'</p>
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
