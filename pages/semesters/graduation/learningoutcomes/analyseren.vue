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
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#projectplan">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Projectplan</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#interviews1">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Interviews 1</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#trendanalyse">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Trend-analyse</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#immersion">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Immersion</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#interviews2">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Interviews 2</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#designdocu">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Design & documentatie <br> systemen</p>
                    </v-list-item-title>
                  </v-list-item>
                </a>
                <a class="pagination-next" href="semesters/graduation/learningoutcomes/analyseren/#codeeditor">
                  <v-list-item>
                    <v-list-item-title class="v-list-item-title">
                      <p>Code editors & <br> preview editors</p>
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
                over te brengen op de bedrijfsbegeleider. Hierdoor ontstond een discussie over de opdracht zodat het
                voor
                beide partijen duidelijker werd wat het doel en de scoping moest zijn. Na meerdere versies is er een
                akkoord bereikt.</p>
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
            <h3 id="interviews1">Interviews - Huidige Situatie</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Van de bedrijfsbegeleider heb ik gehoord dat er momenteel nauwelijks componenten hergebruikt worden.
                Echter, wil ik dit bevestigen en hierover meer details krijgen door het gesprek aan te gaan met de
                doelgroep, de front-end developers van BBD.
                Interviews zijn nuttig om kennis te maken met de doelgroep en poolshoogte te nemen.
              </p>
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
              <p>Minimaal 3 front-end en 3 back-end developers worden geïnterviewd. Een lijst met namen
                van de meest geschikte developers (opgesteld door de bedrijfsbegeleider) om te interviewen
                wordt opgesteld. De developers worden uitgenodigd voor het interview door ze een berichtje
                via Slack te sturen of te benaderen op kantoor. De resultaten worden genoteerd en op basis
                daarvan wordt er een conclusie geschreven.</p>
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
              <embed src="pdf/graduation/interviews_huidig.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/interviews_huidig.pdf" class="bbd-btn"><button>Bekijk interviews
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="trendanalyse">Trendanalyse</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Het hoofddoel is om een platform te vinden dat er mogelijk voor kan zorgen dat BBD Day front-end
                developers componenten vaker hergebruiken. Als een dergelijk platform bestaat, kan BBD dit platform
                gebruiken in plaats van het
                ontwerpen en ontwikkelen van een eigen platform.
                Als zo’n platform niet bestaat, kan de inspiratie gebruikt worden om een eigen platform te
                ontwerpen die de benodigde functionaliteiten bevat.</p>
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
              <p><b>Desktop, field en workshop research is toegepast,</b> omdat er gezocht wordt naar bestaande
                platformen. Aangezien er veel developers werken bij BBD, is er een grote kans dat zij al een paar
                platformen kunnen aanwijzen als inspiratiebron.
                Er wordt een lijst met inspirationele platformen opgesteld inclusief een beschrijving van de
                aangeboden functies per platform. De platformen worden uitgeprobeerd door bijvoorbeeld
                een component te uploaden en/of te installeren.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Bestaat er een platform dat er mogelijk voor kan zorgen dat front-end componenten
              hergebruikt kunnen worden door BBD front-end developers?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>Package manager NPM is een platform dat er mogelijk voor kan zorgen dat front-end
                componenten van BBD vaker hergebruikt worden dan in de huidige situatie het geval is. Het
                platform zorgt er o.a. voor dat developers componenten gebouwd met allerlei
                programmeertalen in een privé omgeving kunnen uploaden. Aangezien BBD werkt met veel
                verschillende programmeertalen/frameworks en eist dat componenten privé opgeslagen
                kunnen worden, is NPM mogelijk een platform om te gebruiken voor BBD.</p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Nu er inspiratie opgedaan is, kunnen er schetsen gemaakt worden voor een eerste iteratie. Daarnaast
                  moet er
                  ook ingeleefd worden in de doelgroep om eisen voor het platform op te kunnen stellen.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/trendanalyse.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/trendanalyse.pdf" class="bbd-btn"><button>Bekijk trendanalyse
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="immersion">Immersion</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Om me beter te kunnen inleven in de doelgroep, heb ik 2-3 weken als front-end developer gewerkt aan een
                Bluebird Day project. Tijdens de sprint heb ik samengewerkt met front-end developers. Op deze manier kon
                ik de doelgroep analyseren.</p>
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
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Field en workshop research is toegepast,</b> omdat door het deelnemen aan een Bluebird Day project
                een duidelijker beeld zal ontstaan van de goals, struggles en behoeftes van de doelgroep.</p>
              <p>Het plan is om mee te draaien in een sprint van een project. De sprint duurt een paar weken.
                Tijdens deze periode zal ik taken oppakken van het project Boerschappen. Tijdens het werken aan de
                taken, zal ik communiceren en om feedback vragen aan de BBD front-end
                developers. Hierdoor wordt er geleerd hoe de BBD front-end developers te werk gaan.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Wat zijn de goals, behoeften en irritaties die je als BBD front-end developer hebt tijdens het
              werken aan een project?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>De goals van BBD’s front-end developers zijn het afronden van tickets binnen de voorspelde
                tijd en het schrijven van duidelijke code die bijdraagt aan een goede performance.
                De behoeften van de developers zijn het hebben van de benodigde info/documentatie om
                een project klaar te zetten en om efficiënte code te schrijven.
                De irritaties zijn het niet kunnen vinden van de nodige documentatie, onduidelijke tickets en
                een trage en/of moeilijk op te zetten DEV omgeving voor een project.</p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Nu er bekend is wat je als BBD front-end developer meemaakt, is het nodig om te
                  bevestigen of deze ervaringen overeenkomen met de BBD front-end developers. Dit kan
                  door middel van de Interview methode. Door de ervaringen uit het Immersion onderzoek te
                  delen, kan dit bevestigd worden.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/immersion.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/immersion.pdf" class="bbd-btn"><button>Bekijk immersion
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="interviews2">Interviews - Empathize</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Door middel van interviews kan er meer informatie over de doelgroep achterhaald worden. Denk bij
                informatie aan de goals/behoeften/irritaties van de BBD front-end developers, maar ook wat hun mening is
                over de huidige situatie en de voorgestelde oplossing.</p>
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
              <div class="research-tag research-active research-field">
                <p>Field</p>
                <img src="~/assets/img/school/research_strats/field.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Field en showroom research is toegepast,</b> omdat door het praten met de doelgroep duidelijk wordt
                wat de goals/behoeften/irritaties zijn en wat zij vinden van de voorgestelde oplossing. Minimaal 4
                developers worden geïnterviewd waarvan er minstens 3 front-end developers
                moeten zijn. De developers worden uitgenodigd voor het interview door ze een berichtje via
                Slack te sturen of te benaderen op kantoor. De resultaten worden gemapped in een empathy map en op basis
                van de resultaten wordt er een conclusie geschreven.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Hoe ervaren de BBD front-end developers de huidige manier van werken?</p>
          </div>
          <div class="content-cont">
            <img loading="lazy" src="~/assets/img/school/graduation/leeruitkomsten/empathy_map.jpg" alt=""
              class="image-zoom">
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>De BBD front-end developers hebben niet het gevoel dat ze informatie missen. Als ze info
                nodig hebben kijken ze eerst naar de documentatie in Confluence of in de README van een
                project en anders vragen ze het aan hun collega’s.
                De BBD front-end developers hebben echter wel een aantal irritatiepunten. Zo wordt DDEV
                vaak gebruikt voor deployment, maar DDEV kan traag zijn. Verder raken de developers
                geïrriteerd als zij niet alle assets tot hun beschikking hebben die Weekend moet leveren.
                Verder kan er geconcludeerd worden dat de developers openstaan voor het gebruik van een
                component library, maar dit wel zodanig te gebruiken moet zijn dat de developers zelf niet
                veel tijd hoeven te besteden aan het onderhouden van de library</p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>Nu bekend is hoe de developers denken over de manier van werken en hoe ze denken over
                  het gebruiken van een component library, moet er getest worden hoe de componenten
                  library goed kan functioneren.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/interviews_empathize.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/interviews_empathize.pdf" class="bbd-btn"><button>Bekijk
                  interviews
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="designdocu">Design & documentatie systemen</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Na het houden van de ‘Co-reflection/Co-creation’ meeting, bleek dat MkDocs te weinig
                aanbiedt om te voldoen aan de behoeften van de stakeholders. Er wordt daarom verder
                gezocht naar een ander design-documentatie platform.
              </p>
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
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Desktop en workshop research is toegepast,</b> omdat er gezocht wordt naar een nieuw platform om
                informatie over front-end componenten te documenteren.
                De geselecteerde design-documentatie systemen worden beoordeeld op basis van een
                criterialijst dat de MoSCoW methode aanhoudt. Door literatuuronderzoek uit te voeren en de
                platformen zelf uit te proberen, kan bepaald worden of de design-documentatie systemen
                voldoen aan de criteria. Daarnaast wordt er gezocht naar de pains en gains die gebruikers
                van de design-documentatie systemen ervaren om een beter afweging te kunnen maken.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Welk design-documentatie systeem voldoet aan de opgestelde criteria/requirements en lijkt
              het beste aan te sluiten op het huidige systeem/de huidige manier van werken van het
              bedrijf?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>GitBook voldoet aan de criteria. Zeroheight voldoet ook aan alle ‘must have’ criteria, maar
                het is duidelijk dat het platform zich focust op design, en niet op development of andere
                bedrijfsprocessen. Storybook heeft een learning curve, heeft vooralsnog alleen support voor
                JavaScript frameworks en is voornamelijk een testomgeving, niet zozeer een documentatie
                tool. Carbon biedt geen documentatie tool aan, maar laat wel zien hoe je een component
                library gestructureerd houdt. Confluence biedt goede functionaliteiten aan, maar niet genoeg
                functionaliteit voor het aanmaken en onderhouden van technische documentatie.
                Er kan daarom geconcludeerd worden dat GitBook het meest geschikte
                design-documentatie systeem is voor Bluebird Day op het gebied van aangeboden
                functionaliteit. Het Carbon Design System kan gebruikt worden als inspiratie om de
                documentatie op GitBook georganiseerd te houden</p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>De conclusie van dit onderzoek moet worden meegenomen in het advies. Het bedrijf kan
                  deze informatie vervolgens afwegen tegen de financiële kosten als het wil overstappen op
                  een nieuw documentatie platform.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/design_systems.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/design_systems.pdf" class="bbd-btn"><button>Bekijk
                  design/documentatie systeem onderzoek
                  in
                  PDF</button>
                <svg-icon class="svg-external-link" name="external_link" /></a>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <h3 id="codeeditor">Code editors & preview editors</h3>
          </div>
          <div class="marked content-cont">
            <div class="proof-icon">
              <svg-icon class="svg-checkmark" name="checkmark_filled"></svg-icon>
              <b>Bewijs uitleg</b>
            </div>
            <div class="content-proof-explained">
              <p>Alle onderzochte component libraries uit de trendanalyse gebruiken een zogenaamde ‘code
                sandbox’. Dit is een essentieel onderdeel voor de developers zodat ze kunnen zien hoe de componenten
                eruit zien en met de code kunnen experimenteren. Daarom wordt er gezocht naar een
                passend middel.
              </p>
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
              <div class="research-tag research-active research-workshop">
                <p>Workshop</p>
                <img src="~/assets/img/school/research_strats/workshop.png" alt="">
              </div>
            </div>
            <div class="research-text label-cont">
              <p><b>Desktop en workshop research is toegepast,</b> omdat er gezocht wordt naar een middel waarmee de
                front-end developers code en de output van de code kunnen bekijken.
                Er wordt een lijst van criteria opgesteld. De gevonden tools worden beoordeeld op basis van
                de criterialijst dat de MoSCoW methode aanhoudt. Door literatuuronderzoek uit te voeren en
                de tools zelf uit te proberen, kan bepaald worden of de tools voldoen aan de criteria.</p>
            </div>
          </div>
          <div class="content-cont">
            <h4>Onderzoeksvraag</h4>
            <p>Welk middel zorgt ervoor dat front-end developers code kunnen bekijken, code output
              kunnen bekijken en code kunnen bewerken met live veranderingen op een efficiënte
              manier?</p>
          </div>
          <div class="content-cont">
            <h4>Conclusie & Vervolgstappen</h4>
            <div class="text-columns">
              <p>Replit voldoet als enige tool aan alle criteria. De GitLab integratie feature wordt helaas niet
                aangeboden in de UI van de omgeving, maar met de GitLab CLI kan er via de terminal nog
                wel verbonden worden met GitLab repos. Daarnaast ondersteund Replit PHP.
                Er kan daarom geconcludeerd worden dat de online code editor, Replit, de meest geschikte
                tool is voor Bluebird Day om de componenten mee te kunnen onderhouden.</p>

              <div class="vervolg-cont">
                <b>Wat nu?</b>
                <p>De conclusie van dit onderzoek moet worden meegenomen in het advies. Het bedrijf kan
                  deze informatie vervolgens afwegen tegen de financiële kosten.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="leer-content-wrapper">
          <div class="content-cont">
            <div class="pdf-cont">
              <embed src="pdf/graduation/code_editors.pdf" width="100%" height="1000" type="application/pdf">
              <a target="_blank" href="./pdf/graduation/code_editors.pdf" class="bbd-btn"><button>Bekijk
                  code editor onderzoek in PDF</button>
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
          <NuxtLink to="/semesters/graduation/leeruitkomsten" class="desktop-next-page" exact>
            <svg-icon class="svg-arrow-right" name="arrow-left" />
            <p>Ga naar de leeruitkomsten</p>
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
          <NuxtLink to="/semesters/graduation/learningoutcomes/adviseren/" class="desktop-next-page" exact>
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
