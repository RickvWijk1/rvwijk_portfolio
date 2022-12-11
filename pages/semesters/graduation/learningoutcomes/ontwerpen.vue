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
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/ontwerpen/#architectuursdiagram ">
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
            <h3 id="projectplan">Sketching/low-fi-prototype</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Een projectplan is opgesteld om alles van de huidige situatie tot de scoping vast te stellen en een plan
                te creëren om het einddoel te bereiken. Het projectplan is gebruikt als middel om mijn blik op de opdracht
                over te brengen op de bedrijfsbegeleider. Zo heb ik o.a. advies gegeven over hoe we het beste (welke
                strategieën & methoden) de opdracht kunnen aanpakken.</p>
            </div>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-field">
                <p>Field</p>
                <img src="~/assets/img/school/research_strats/field.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Field research is toegepast,</b> omdat door het aangaan van het gesprek met de doelgroep en het
                bedrijf,
                er een duidelijker beeld kan worden geschetst van de huidige situatie en de verwachtingen/het doel van
                het bedrijf.</p> <p>Allereerst heb ik vragen gesteld aan mijn bedrijfgsbegeleider over de huidige situatie en het doel. Om meer informatie te krijgen heb ik hierna interviews gehouden.</p>
            </div>
          </div>
          <div class=" content-cont">
            <h4>Hoofdvraag</h4>
            <p>Hoe zorg ik dat BBD front-end developers een middel hebben om hun componenten te kunnen hergebruiken
              zodat de kwaliteit van BBD’s projecten gewaarborgd kan blijven?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie</h4>
            <div class="text-columns">
              <p>Het doel van het bedrijf is om meer componenten te gaan hergebruiken zodat de front-end developers van
                BBD meer tijd over hebben om te kunnen werken aan het creëren van het 'Wow!' effect voor projecten.</p>
              <p>In de huidige situatie is er vaak te weinig tijd om voor dit effect te kunnen zorgen. Het hergebruiken
                van componenten wordt zelden gedaan en als het gebeurt, niet efficiënt genoeg. Daarom is het aan mij om
                de BBD front-end developers te voorzien van een middel waarmee zij hun
                componenten kunnen hergebruiken.</p>
              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Nu het plan is vastgesteld, kan er gefocust worden op het uitvoeren van onderzoek/het
                  toepassen van methoden om tot een passende oplossing te komen.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/projectplanV3.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/projectplanV3.pdf" class="bbd-btn"><button>Bekijk projectplan in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="interviews">Architectuursdiagram</h3>
            </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Een projectplan is opgesteld om alles van de huidige situatie tot de scoping vast te stellen en een plan
                te creëren om het einddoel te bereiken. Het projectplan is gebruikt als middel om mijn blik op de opdracht
                over te brengen op de bedrijfsbegeleider. Zo heb ik o.a. advies gegeven over hoe we het beste (welke
                strategieën & methoden) de opdracht kunnen aanpakken.</p>
            </div>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-field">
                <p>Field</p>
                <img src="~/assets/img/school/research_strats/field.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Field research is toegepast,</b> omdat het kennismaken met de doelgroep ervoor zorgt dat ik weet hoe
                de doelgroep de huidige situatie ziet en zij mij meer details kunnen geven over de manier waarop zij
                momenteel werken.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Hoe worden componenten momenteel hergebruikt door developers van BBD?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>Momenteel worden front-end componenten alleen hergebruikt door naar repo’s van oude
                projecten te gaan en daar stukken code te kopiëren. Soms worden er ook stukken code
                gekopieerd van Codepens of officiële documentatie van de gebruikte talen. Dit komt volgens
                de developers, omdat er project gericht gewerkt wordt en er gebruikgemaakt wordt van vele
                verschillende technologieën, waardoor het managen van de componenten en de
                verschillende versies, lastig wordt.</p>
              <p>
                Voor back-end componenten, wordt er gebruikgemaakt van een package manager tool, dat
                gehost wordt door Bluebird Day. De back-end developers gebruiken dan een command om
                een bepaalde component te installeren voor een project. Deze componenten zijn al eens
                eerder gebruikt in oude projecten en geupload naar de package manager. Echter wordt hier
                ook niet altijd gebruik van gemaakt, want sommige componenten maken gebruik van een
                oudere versie (van Magento bijv.) Daarnaast moeten sommige back-end onderdelen van
                een project speciaal voor een specifiek project ontwikkeld worden en wordt het dus niet
                geupload naar de package manager.</p>
              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Nu er meer bekend is over de huidige situatie, wordt het tijd om inspiratie op te doen door te
                  onderzoeken welke huidige platformen bestaan waarmee je frontend componenten kunt managen.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/projectplanV3.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/projectplanV3.pdf" class="bbd-btn"><button>Bekijk projectplan in
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/adviseren" class="desktop-next-page" exact>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/realiseren" class="desktop-next-page" exact>
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
