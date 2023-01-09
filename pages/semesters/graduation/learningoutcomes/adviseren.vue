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
                  <h2>Adviseren</h2>
                </v-list-item>
              </div>
              <div class="sidepanel-item-cont">
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/adviseren/#projectplan">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Projectplan</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/adviseren/#architectuur">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Architectuursdiagram</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/adviseren/#requirements">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Requirements</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/adviseren/#coreflection">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Co-reflection/creation</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/adviseren/#kennissessie">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Kennissessie</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/adviseren/#adviesrapport">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Adviesrapport</p>
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
              <p>Een projectplan is opgesteld om alles van de huidige situatie tot de scoping vast te stellen en een
                plan
                te creëren om het einddoel te bereiken. Het projectplan is gebruikt als middel om mijn blik op de
                opdracht
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
                het bedrijf.</p>
              <p>Allereerst heb ik vragen gesteld aan mijn bedrijfgsbegeleider over de huidige situatie en het doel. Om
                meer informatie te krijgen heb ik hierna interviews gehouden.</p>
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
              <p>Requirements zijn opgesteld om een lijst van criteria te hebben waaraan het platform moet voldoen.
                Hierdoor is er een grotere kans dat er een passende oplossing ontworpen en gerealiseerd wordt. De
                requirements zijn gebaseerd op de conclusies van eerder verricht onderzoek. In dit onderzoek is rekening
                gehouden met de doelgroep, maar ook met de bedrijfsregels en belangen (e.g. de beveiliging en ambities).
                De requirements hiervoor
                zijn overlegd met de bedrijfsbegeleider.</p>
            </div>
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
              <div class="research-tag research-active research-field">
                <p>Field</p>
                <img src="~/assets/img/school/research_strats/field.png" alt="">
              </div>
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Showroom researchh is toegepast,</b> wordt toegepast. De
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
            <h3 id="kennissessie">Kennissessie</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Elke maand is er een meeting voor front-end developers waarin front-end kennis wordt gedeeld met
                elkaar. Hier heb ik aan deelgenomen door een kennissessie te geven over hoe je componenten kunt managen
                met mijn voorgestelde oplossing, hoe dit op een technisch niveau werkt en waarom het voordelig is om te
                gebruiken.</p>
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
              <p><b>Showroom research is toegepast,</b> mijn voorgestelde oplossing wordt gedeeld met experts op het
                gebied van front-end development. Zij kunnen feedback geven op de voorgestelde oplossing.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Feedback</h4>
            <div class="text-columns">
              <p>De algemene feedback die ik ontving van de developers, is dat dit een goed initiatief is waar ze nu de
                waarde van inzien. Verder werd er aangeraden om een CHANGELOG.md toe te voegen om de versie updates bij
                te houden.</p>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <div class="video-wrapper">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTOglyR00XRbH6oqACSAuJECkt9PeOlMi29tXsdia7GKEpFXuPHV5XBL8tyEyuHXwH26DwKJpnqpB1l/embed?start=false&loop=false&delayms=3000"
                  frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"
                  webkitallowfullscreen="true"></iframe>
              </div>
              <a target="_blank"
                href="https://docs.google.com/presentation/d/e/2PACX-1vTOglyR00XRbH6oqACSAuJECkt9PeOlMi29tXsdia7GKEpFXuPHV5XBL8tyEyuHXwH26DwKJpnqpB1l/embed?start=false&loop=false&delayms=3000"
                class="bbd-btn"><button>Bekijk kennissessie slides</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="adviesrapport">Adviesrapport</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Om het bedrijf te adviseren is een adviesrapport opgesteld. In dit rapport wordt uitgelegd wat er
                bekend is geworden uit mijn onderzoek en geadviseerd wat er nog meer onderzocht moet worden om tot een
                definitieve oplossing te komen. In het adviesrapport wordt rekening gehouden met de toekomst.</p>
                <p style="color: red;">Let op! Het adviesrapport kan nog veranderd worden als er in de laatste weken van de afstudeerstage nieuwe vondsten gedaan worden.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Advies</h4>
            <p>In het adviesrapport wordt een definitief advies gegeven, maar ook advies over de vervolgstappen omtrent
              de componenten library (zie PDF voor al het advies).</p>
            <div class="text-columns">
              <p>De belangrijkste adviespunten:</p>
              <p>- De GitLab Package Registry feature is het meest geschikte middel om front-end
                componenten op te slaan en op te kunnen halen. Er wordt dus geadviseerd de Gitlab
                Package Registry te gebruiken. Ook voor andere soorten componenten (bijv.
                back-end componenten) wordt geadviseerd de Gitlab Package Registry te gebruiken.</p>
              <p>- Testen design systeem; de structuur van de library moet voor developers duidelijk
                zijn en uitbreidbaar zijn. Uit onderzoek bleek dat veel developers van Bluebird Day
                bekend zijn met ‘Atomic design’. Daarom wordt aangeraden het Atomic design
                systeem te gebruiken in de structuur van de library. Ook moet er rekening gehouden
                worden met de verschillende type componenten (Magento, Shopware, Vue
                Storefront). Er wordt aangeraden te testen hoe de library het beste gestructureerd
                kan worden.
              </p>
              <p>-
                Confluence en/of GitBook; maak een afweging of het mogelijk is van Confluence
                over te stappen naar GitBook vanuit een financieel perspectief en vanuit een
                organisatieperspectief. Het advies is om de huidige documentatie op Confluence te
                exporteren naar GitBook. GitBook wordt dan gebruikt voor technische en
                niet-technische documentatie binnen Bluebird Day. Een mogelijk probleem is dat
                GitBook duurder is d
              </p>
              <p>- Motiveer de developers; zorg voor een basisset van componenten. De meest
                gebruikte componenten in de projecten moeten in de componenten library komen te
                staan, zodat de developers meer motivatie hebben om het te gebruiken. Zodra
                developers het gaan gebruiken en merken dat het handig is, zullen zij ook meer
                motivatie hebben tijd te besteden aan het toevoegen van nieuwe componenten. Zo
                krijgt de componenten library steeds meer waarde voor de developers en zullen zij
                de library vaker gaan gebruiken.</p>

            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/advies.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/advies.pdf" class="bbd-btn"><button>Bekijk adviesrapport
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/analyseren/" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar 'Analyseren'</p>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/ontwerpen/" class="desktop-next-page" exact>
            <p>Ga naar 'Ontwerpen'</p>
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
