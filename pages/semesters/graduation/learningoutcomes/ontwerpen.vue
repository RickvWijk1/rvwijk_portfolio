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
                  <h2>Ontwerpen</h2>
                </v-list-item>
              </div>
              <div class="sidepanel-item-cont">
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/ontwerpen/#sketching">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Sketching/low-fi-prototype</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next"
                  href="semesters/graduation/learningoutcomes/ontwerpen/#architectuur ">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Architectuursdiagram </p>
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
            <h3 id="sketching">Sketching/low-fi-prototype</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>In de oriënterende fase was het belangrijk te begrijpen wat het bedrijf wilde/in gedachten had. Door
                het maken van ontwerpen en deze te discussiëren met de bedrijfsbegeleider kreeg ik een beter beeld van
                waar het bedrijf heen wilde. Daarnaast konden de ontwerpen getoond worden aan de doelgroep zodat er voor
                hun ook een beter beeld ontstond.</p>
            </div>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Workshop research is toegepast,</b> omdat door het maken en tonen van low-fidelity ontwerpen, de
                visie, verwachtingen en wensen van het bedrijf duidelijker worden.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Conclusie</h4>
            <div class="text-columns">
              <p>Tijdens het bespreken van de ontwerpen met de stakeholders, werd het duidelijk dat het bedrijf in de
                toekomst eventueel de componenten library open-source/deelbaar zou gaan maken. Verder werd duidelijk dat
                er onderscheid moest worden gemaakt tussen 3 typen componenten; Magento, Shopware en Vue Storefront.</p>
              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Nu bekend is wat het bedrijf wil, kan er onderzoek gedaan worden naar manieren om dit technisch mogelijk te maken en te onderzoeken wat de doelgroep nodig heeft.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <img loading="lazy" src="~/assets/img/school/graduation/leeswijzer/sketch.jpg" alt="" class="image-zoom">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/CardComponent.jpg" alt="" class="image-zoom">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/StyleGuidesVB1.jpg" alt="" class="image-zoom">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/StyleGuidesVB2.jpg" alt="" class="image-zoom">
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="architectuur">Architectuursdiagram</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Een architectuursdiagram is ontworpen om de oplossing makkelijker uit te kunnen leggen aan de
                stakeholders. Zo heb ik aan de bedrijfsbegeleider en een aantal developers uitgelegd hoe het toepassen
                van de voorgestelde software architectuur de oplossing kan zijn. Hierbij heb ik geadviseerd een ander
                documentatie platform dan Confluence te gebruiken, aangezien Confluence niet genoeg functionaliteit
                aanbiedt voor technische documentatie wat nodig is om de componenten library te onderhouden.</p>
            </div>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Workshop research is toegepast,</b> omdat het uitwerken tot een diagram nuttig is om een overzicht
                te creëren van de oplossing. De C4 model guidelines van het tweede niveau (Container diagram) worden
                toegepast. Hiernaast wordt de flow van het gebruikmaken van de oplossing gemapped zodat het gebruikmaken
                van de software architectuur stap voor stap uitgelegd kan worden aan de stakeholders.</p>
            </div>
          </div>

        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/architectuur.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/architectuur.pdf" class="bbd-btn"><button>Bekijk architectuur
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/adviseren/" class="desktop-next-page" exact>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/realiseren/" class="desktop-next-page" exact>
            <p>Ga naar 'Realiseren'</p>
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
