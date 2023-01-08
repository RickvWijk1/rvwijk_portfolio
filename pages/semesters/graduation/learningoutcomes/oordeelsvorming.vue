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
                  <h2>Oordeelsvorming</h2>
                </v-list-item>
              </div>
              <div class="sidepanel-item-cont">
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/oordeelsvorming/#projectplan">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Projectplan</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/oordeelsvorming/#requirements">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Requirements</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/oordeelsvorming/#npm">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Testing NPM & GitLab</p>
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
            <h3 id="projectplan">Projectplan</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Bevat een plan waarin passende onderzoeksstrategieën, patterns en methodes worden ingezet om het
                probleem op te lossen.</p>
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
                bedrijf, er een duidelijker beeld kan worden geschetst van de huidige situatie en de verwachtingen/het
                doel van het bedrijf.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Hoofdvraag</h4>
            <p>Hoe zorg ik dat BBD front-end developers een middel hebben om hun componenten te kunnen hergebruiken
              zodat de kwaliteit van BBD’s projecten gewaarborgd kan blijven?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
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
            <h3 id="requirements">Requirements</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Er is bij het ontwerpen en realiseren van de oplossing rekening gehouden met het feit dat het platform
                privé moet zijn voor de organisatie, maar er ook een optie moet zijn om het platform in de toekomst te
                kunnen delen met derde partijen.</p>
            </div>
          </div>
          <div class="content-cont">
            <div class="learned-cont">
              <h4>Aanpak</h4>
              <img src="~/assets/img/school/icons/approach.png" alt="">
            </div>
            <div class="research-tags-cont">
              <div class="research-tag research-active research-showroom">
                <p>Showroom</p>
                <img src="~/assets/img/school/research_strats/showroom.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Showroom research is toegepast,</b> wordt toegepast. De
                ‘Co-reflection’ methode wordt ingezet. Samen met de front-end lead developer en bedrijfsbegeleider wordt
                er gediscussieerd waaraan het platform moet voldoen. Resources die gebruikt zullen worden om
                requirements op te stellen zijn het BBD beleid (bijv. beveiliging en coding standaard regels) en de
                conclusies uit de eerdere onderzoeksresultaten.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Wat zijn de requirements voor het ontwikkelen en onderhouden van de front-end componenten library?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie</h4>
            <div class="text-columns">
              <p>De requirements zijn het hebben van een privé/beveiligde omgeving/systeem en het hebben van test en
                documentatie guidelines om de library te kunnen onderhouden met daarnaast ruimte voor
                uitbreiding/support mochten er andere package types nodig zijn.</p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>De oplossing kan nu gerealiseerd en getest worden.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/requirements.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/requirements.pdf" class="bbd-btn"><button>Bekijk requirements
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>

        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="npm">Testing NPM & GitLab</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Dit onderzoek vereiste meer aandacht/diepte dan ander onderzoek. Dit komt omdat dit de kern van de
                oplossing is. Als de kern niet zou voldoen aan de behoeften van de stakeholders, zou de oplossing niet
                geschikt zijn.</p>
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
              <p><b>Desktop en workshop research is toegepast,</b> omdat als de functionaliteiten van NPM bekend zijn,
                er beslist kan worden of NPM voldoet aan de opstelde requirements. NPM wordt getest door een package
                privé te uploaden naar NPM. Om dit uit te voeren moet
                er eerst kennis opgedaan worden door de NPM docs te bekijken</p>
              <p>
              </p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Hoe werken de functionaliteiten die NPM aanbiedt om packages te kunnen beheren?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>In combinatie met GitLab biedt NPM een omgeving aan waarin packages beheerd kunnen
                worden d.m.v van Git version control. Het uploaden van packages wordt gedaan door te
                authenticeren met de package registry van GitLab, een npm endpoint te zetten in je GitLab
                repo en deze te publishen met ‘npm publish’.
                Het beheren van packages wordt grotendeels door GitLab gedaan. Features zoals het
                opzoeken/filteren van packages en automatische documentatie zijn allemaal te vinden in de
                GitLab repo. Wel ben je er als developer verantwoordelijk voor dat je repo structuur op orde
                blijft en dat zelfgemaakte packages geoptimaliseerd zijn (door de packages te ‘minifyen’ met
                rollup.js bijvoorbeeld).
              </p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Support voor PHP moet getest worden aangezien Magento PHP gebruikt en Magento in de
                  toekomst nog regelmatig gebruikt zal worden door BBD.
                  Verder is het verstandig een repo structuur te creëren wat ervoor moet zorgen dat BBD
                  front-end developers makkelijk packages kunnen uploaden en vinden. Denk hierbij aan
                  package benamingen en folder structuur.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/literatuuronderzoek_npm.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/literatuuronderzoek_npm.pdf" class="bbd-btn"><button>Bekijk
                  literatuuronderzoek in
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/beheren/" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar 'Beheren'</p>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/communicatie/" class="desktop-next-page" exact>
            <p>Ga naar 'Communicatie'</p>
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
