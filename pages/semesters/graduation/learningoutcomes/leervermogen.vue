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
                  <h2>Leervermogen</h2>
                </v-list-item>
              </div>
              <div class="sidepanel-item-cont">
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/leervermogen/#ontwikkeling">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Professionele<br> ontwikkeling & ambities</p>
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
            <h3 id="ontwikkeling">Professionele ontwikkeling & ambities</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>De professionele ontwikkeling en ambities binnen het ICT werkveld worden besproken. Dit wordt o.a.
                gedaan door te reflecteren op de 'personal development goals' uit het project proposal.
              </p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Professionele ontwikkeling</h4>
            <br>
            <div class="pdf-cont">
              <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/kerstfoto.jpg" alt=""
                class="image-zoom">
            </div>
            <br>
            <p>Tijdens de stage heb ik veel moeten <b>communiceren</b>. Aangezien een groot deel mijn collega's ook de
              doelgroep was, was het makkelijk de doelgroep te bereiken. In het verleden heb ik veel projecten gehad
              waarbij het niet mogelijk was om de doelgroep te bereiken (of er was beperkt contact).
              Dat was in dit semester niet het geval. Daarom voel ik dat ik nu meer heb kunnen werken aan deze
              competentie en op dit gebied vooruitgang heb geboekt.
              Elke week waren er wel afspraken te maken, meetings in te plannen en kennis te delen met collega's.
            </p>
            <p>Ook heb ik de kans aangegrepen mee te draaien als <b>front-end developer</b> in een klantenproject van
              Bluebird
              Day. Dit gaf mij veel nuttige inzichten in de werkwijze van Bluebird Day en voor mijn front-end developer
              ambities was dit ook een nuttige ervaring. Voor dit project heb ik kennisgemaakt met technologieën waar ik
              nog niet bekend of ervaren mee was (bijv. Twig, DDEV, Docker, GitLab features, SASS). Daarnaast heb ik een
              aantal tips gekregen tijdens code reviews waardoor ik met zekerheid kan zeggen dat ik gegroeid ben als
              front-end developer.</p>
            <p>Als 'personal development goal' wilde ik ook meer ervaring opdoen op het gebied van design iteraties
              testen. Tijdens de afstudeeropdracht heb ik hier helaas niet veel aan kunnen werken. Dit komt voornamelijk
              omdat mijn oplossing gebruikmaakt van bestaande systemen en er dus niet veel ruimte was voor eigen
              designs te maken en te testen. De oplossing heb ik wel kunnen testen, maar niet heel uitgebreid.</p>

          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/projectproposal.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/projectproposal.pdf" class="bbd-btn"><button>Bekijk
                  Project Proposal
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h4>Ambities</h4>
            <p>Voordat ik aan mijn stage begon, had ik de ambitie om front-end developer te worden en op het gebied van
              front-end development meer ervaring op te doen. Na de afloop van de afstudeerstage als front-end developer
              kan ik zeggen dat deze ambitie er nog steeds is. Tijdens het klantenproject van Bluebird Day waaraan ik
              meewerkte heb ik ervaren dat ik front-end development nog steeds leuk vind en dit ook als werk wil doen.
              Verder ben ik van plan bij Bluebird Day te gaan werken (als front-end developer) na de afloop van mijn
              afstuderen. Dit komt omdat de e-commerce mij bevalt en er een prettige sfeer aanwezig is bij Bluebird Day. Ik hoop meer ervaring op te doen en een echte expert te worden op het gebied van front-end (performance, SEO optimalisatie, animaties, best practices, etc.).
            </p>
          </div>
        </div>
        <div class="leer-content-wrapper"></div>

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
          <NuxtLink to="/semesters/graduation/learningoutcomes/communicatie/" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar 'Communicatie'</p>
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
          <div></div>
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

  .desktop-nav-cont {
    /* justify-content: start;
  gap: 1rem; */
  }

  .desktop-nav-cont ul {
    justify-self: center;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  .desktop-next-page {
    justify-self: flex-start;
  }

</style>
