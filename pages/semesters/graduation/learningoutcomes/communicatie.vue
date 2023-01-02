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
                  <h2>Communicatie</h2>
                </v-list-item>
              </div>
              <div class="sidepanel-item-cont">
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/communicatie/#coreflection">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Co-reflection/creation</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/communicatie/#resultaat">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Resultaat</p>
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
            <h3 id="coreflection">Co-reflection/creation</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Door het betrekken van stakeholders in het design proces kan er achterhaald worden welke richting het
                project op kan gaan en welke oplossing hier mogelijk bij past. Aan mijn bedrijfgsbegeleider heb ik
                daarom geadviseerd een Co-reflection/Co-creation meeting te organiseren. Dit was voor mij een manier om
                de
                oplossing die ik had te delen met de doelgroep, te testen en vervolgens te verbeteren na aanleiding van
                de feedback.
              </p>
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
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Showroom en workshop research is toegepast,</b> omdat er input nodig is van de stakeholders en er
                getest moet worden hoe de doelgroep de voorgestelde oplossing ervaart.</p>
              <p>
                Het plan is om samen met de front-end developers van BBD een aantal uur in een ruimte te zitten om te
                brainstormen hoe de front-end componenten gebruikt moet worden. Dit wordt bereikt door een korte uitleg
                d.m.v. een Use Case demo te geven om vervolgens te discussiëren wat de front-end developers hiervan
                vinden. Op basis van de feedback gaan de front-end developers componenten ontwikkelen op de manier die
                zij het beste lijken en deze uploaden naar de library met de bijbehorende documentatie.
              </p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Welke mogelijkheden zien de BBD front-end developers bij het gebruiken van de front-end componenten
              library?</p>
          </div>
          <div class="content-cont">
            <div class="pdf-cont">
              <div class="video-wrapper">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vRZgDzHvum0UNPH5y4avMZ7Q2cUdCfyIHtlzp18QXgTXB4HDvgKYG-nf7a5dhcU2Ca6TKjBTD4GeARI/embed?start=true&loop=true&delayms=3000"
                  frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"
                  webkitallowfullscreen="true"></iframe>
              </div>
              <a target="_blank"
                href="https://docs.google.com/presentation/d/e/2PACX-1vRZgDzHvum0UNPH5y4avMZ7Q2cUdCfyIHtlzp18QXgTXB4HDvgKYG-nf7a5dhcU2Ca6TKjBTD4GeARI/pub?start=false&loop=false&delayms=3000"
                class="bbd-btn"><button>Bekijk co-reflection/creation slides</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
          <div class="content-cont">
            <h4>Conclusie</h4>
            <div class="text-columns">
              <p>De developers vinden de basis van de oplossing goed. Echter zien zij mogelijkheden om de oplossing te
                verbeteren door een design system toe te passen op de omgeving om te zorgen voor een betere structuur.
                Ook voor het managen van versies is een oplossing nodig om versie problemen tussen de componenten te
                voorkomen.
                Tijdens de meeting bleek ook dat de developers in de huidige situatie niet geheel tevreden zijn over het
                gebruik van Confluence vanwege het gebrek aan technische documentatie support. Er kan dus ook
                geconcludeerd worden dat Confluence geen geschikte plaats is voor de documentatie van de componenten
                library. Tijdens mijn onderzoek naar MkDocs, ondervond ik dat MkDocs ook niet ideaal is om te gebruiken
                als documentatie platform en de developers waren het hier mee eens.
              </p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Er moet onderzoek verricht worden naar geschikte design systemen voor de oplossing.
                  Daarnaast moet onderzocht worden welke documentatie platform hierbij past.
                  Verder moet er onderzocht worden hoe de versies van nested components gemanaged kunnen worden.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/co-reflection_creation.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/co-reflection_creation.pdf" class="bbd-btn"><button>Bekijk
                  co-reflection/creation
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="resultaat">Resultaat</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Gedurende het project heb ik constant mijn acties en bevindingen gedeeld met de stagebegeleider en
                bedrijfsbegeleider. Ontvangen feedback heb ik altijd meegenomen in mijn acties.
              </p>
            </div>
          </div>

          <div class="content-cont">
            <h4>Feedback</h4>
            <div class="pdf-cont">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/feedback.png" alt=""
                class="image-zoom">
              <p>Feedback heb ik wekelijks bijgehouden en verwerkt.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Hoofdvraag</h4>
            <i>Hoe zorg ik dat BBD front-end developers een middel hebben om hun componenten te kunnen
              hergebruiken zodat de kwaliteit van BBD’s projecten gewaarborgd blijft?
            </i>
            <p>Er staat nu een middel voor de BBD front-end developers om hun componenten te kunnnen hergebruiken, namelijk de GitLab Package Registry met GitBook als mogelijke documentatie omgeving.</p>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/oordeelsvorming/" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar 'Oordeelsvorming'</p>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/leervermogen/" class="desktop-next-page" exact>
            <p>Ga naar 'Leervermogen'</p>
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
