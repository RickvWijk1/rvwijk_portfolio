    <template>
      <v-expansion-panels popout v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Bedrijf</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <div class="expansion-cont">
              <div class="text-cont">
                <img loading="lazy" src="~/assets/img/school/graduation/leeswijzer/logo.png" alt=""
                  class="bbd-logo image-zoom">
                <p><a target="__blank" href="https://www.bluebirdday.nl/" class="txt-link">Bluebird Day</a> is de
                  Nederlandse #1 op het gebied van e-commerce en is één van de 9 <a target="__blank"
                    href="https://www.handpickedagencies.com/nl/" class="txt-link">Handpicked Agencies</a>.
                  Bluebird Day helpt A-merken met strategie, design, development en optimalisatie in e-commerce.
                  Samen met 5 andere Handpicked Agencies bevindt Bluebird Day zich op het hoofdkantoor in Breda, op 20
                  minuten loopafstand vanaf het station.
                </p>
                <div class="video-wrapper">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/GJsQjPdqJXs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
              <div class="img-cont">
                <GraduationGallery />
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Huidige Situatie & Probleem</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="expansion-cont">
              <div class="text-cont">
                <div class="text-title">
                  <h4>Huidige Situatie</h4>
                </div>
                <div class="text-p-cont">
                  <p>Bluebird Day werkt aan verschillende projecten tegelijkertijd. Deze projecten worden verdeeld over
                    drie teams
                    (Team 1, 2, 3). In ieder project wordt gekeken naar de wensen van de klant. Als de klant een banner
                    component wilt, of een ticketsysteem voor een website, wordt hier aan gewerkt.
                  </p>
                  <p>
                    De developers van Bluebird Day werken samen door kennis en resources te delen met elkaar. Een type
                    resource dat
                    regelmatig gedeeld wordt tussen de developers zijn front-end componenten. Een component is een
                    onderdeel
                    dat abstract is en kan worden hergebruikt binnen andere projecten. Denk hierbij aan een banner
                    component
                    dat door elke Bluebird Day developer kan worden gebruikt.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Probleem</h4>
                </div>
                <div class="text-p-cont">
                  <p>Binnen Bluebird Day wordt er regelmatig gesproken over het 'wow' effect en 'award winning cases'.
                    Dit
                    zijn projecten waarbij je denkt, wow dit is tof gemaakt en dit zijn projecten waar klanten en
                    gebruikers ook happy van worden. In de praktijk blijkt het behalen en creëren van deze cases toch
                    lastig te zijn. Één van de factoren die Bluebird Day vaak terug ziet is tijd en geld. Vaak is er
                    binnen de
                    offerte niet genoeg ruimte om de puntjes op de i te zetten die voor het 'wow' effect zorgen bij een
                    nieuwe case.
                  </p>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Opdracht & Doel</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="expansion-cont">
              <div class="text-cont">
                <div class="text-title">
                  <h4>Opdracht</h4>
                </div>
                <div class="text-p-cont">
                  <p>Door het inzetten van een front-end componenten library wordt er
                    verwacht meer tijd te besparen om meer aandacht te kunnen besteden aan het 'wow' effect.
                  </p>
                  <i>Hoe zorg ik dat BBD front-end developers een middel hebben om hun componenten te kunnen
                    hergebruiken
                    zodat de kwaliteit van BBD’s projecten gewaarborgd kan blijven?</i>
                </div>
              </div>
              <div class="text-cont">
                <img src="~/assets/img/school/graduation/leeswijzer/library.png" alt="">
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Doel</h4>
                </div>
                <div class="text-p-cont">
                  <p>Dit project wordt uitgevoerd, zodat BBD front-end developers in de toekomst hun front-end
                    componenten hergebruiken. Het beoogde resultaat is een platform tot beschikking te hebben waarop
                    front-end developers elkaars componenten kunnen delen en gebruiken.</p>
                  <p>
                    De meerwaarde van het gewenste eindproduct, is dat de kwaliteit van de projecten gewaarborgd blijft.
                    Zo is er meer zekerheid dat klanten hun product(en) geleverd krijgen met de hoge kwaliteit die ze
                    gewend zijn van BBD.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <img src="~/assets/img/school/graduation/leeswijzer/boerschappen.gif" alt="">
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Aanpak & Uitvoering</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="expansion-cont">
              <div class="aanpak-cont text-cont">
                <div class="text-title">
                  <h4>Aanpak</h4>
                  <div class="text-p-cont">
                    <p>Gedurende het project is er zoveel mogelijk gewerkt met de tools waarmee Bluebird Day werkt. Jira
                      is gebruikt om te plannen in combinatie met de Scrum projectmethodiek.
                      GitLab is gebruikt als version control systeem. De Google suite is gebruikt voor email, agenda,
                      online meetings en documentatie. Slack is gebruikt als communicatiemiddel om collega's te
                      bereiken.
                    </p>
                    <p>
                      Het Design Thinking proces is gebruikt om het probleem methodisch op te lossen. Verder zijn er
                      onderzoekspatronen toegepast om het probleem in stappen op te lossen.
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-cont">
                <img src="~/assets/img/school/graduation/leeswijzer/jira.png" alt="">
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Analyseren</h4>
                </div>
                <div class="text-p-cont">
                  <p>Gedurende de eerste 3 weken is er een projectplan opgesteld. De informatie die nodig was om het
                    <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#projectplan"
                      class="txt-link">projectplan</a> op te stellen, is verkregen door het uitvoeren van <a
                      target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#interviews1"
                      class="txt-link">interviews</a>. De doelgroep, front-end
                    developers, werden o.a. geïnterviewed. Door het uitvoeren van een <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#trendanalyse"
                      class="txt-link">trendanalyse</a>, vond ik bestaande oplossingen voor front-end component
                    libraries.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Empathize/Define</h4>
                </div>
                <div class="text-p-cont">
                  <p>Na het opstellen van het projectplan is er m.b.v. meer <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#interviews2"
                      class="txt-link">interviews</a> en de <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#immersion"
                      class="txt-link">immersion</a> methode een beter beeld van de doelgroep ontstaan. Door deel te
                    nemen aan het 'Boerschappen' project als front-end developer, kon ik de dagelijkse irritaties,
                    behoeftes en goals van de BBD developers beter begrijpen.
                    De vondsten zijn in beeld gebracht door <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#interviews2"
                      class="txt-link">empathy mapping</a> toe te passen. Met deze informatie en de eisen vanuit
                    Bluebird Day, kon er een lijst met <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#requirements"
                      class="txt-link">requirements</a> voor de front-end component library opgesteld worden.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Ideate/Prototype/Testen</h4>
                </div>
                <div class="text-p-cont">
                  <p>
                    In de orienterende fase wilde ik weten of wat ik in gedachten had overeenkwam met de gedachtengang
                    van het bedrijf/de bedrijfsbegeleider en wat de doelgroep van mijn ideeën zou vinden. Daarom heb ik
                    een aantal <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/ontwerpen/#sketching"
                      class="txt-link">schetsen/low-fidelity
                      prototypes</a> gemaakt. Daarnaast ben ik de bestaande front-end component library oplossingen
                    verder gaan verkennen d.m.v. <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/oordeelsvorming/#npm"
                      class="txt-link">literatuuronderzoek en POC's</a>. Hieruit bleek dat GitLab's Package Registry
                    voldoet aan de opgestelde requirements om te gebruiken als frontend component library voor Bluebird
                    Day. Daarnaast is er
                    onderzocht welke documentatie/guidelines er nodig zijn zodat de front-end developers de library
                    kunnen onderhouden. Hieruit bleek dat het inzetten van MkDocs om documentatie te genereren en
                    makkelijker te schrijven zou helpen de libary te onderhouden.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <img loading="lazy" src="~/assets/img/school/graduation/leeswijzer/sketch.jpg" alt=""
                  class="image-zoom">
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Realiseren/Testen</h4>
                </div>
                <div class="text-p-cont">
                  <p>Om een eerste versie van de library op te leveren als eindproduct, ben ik aan de slag gegaan met
                    het optimaliseren van de library. Dit houdt in dat ik bepaalde settings heb ingesteld en
                    features heb gebruikt om het onderhouden van de library makkelijker te maken.
                    Voorbeelden hiervan zijn het inzetten van GitLab Pages om de documentatie te hosten, het neerzetten
                    van een logische repo structuur en het opzetten van de documentatie structuur en features met
                    MkDocs.
                  </p>
                  <p>Toen de eerste versie er stond, was het tijd om de oplossing te verfijnen. Er stond namelijk wel
                    een library klaar, maar deze was helemaal leeg en dus niet nuttig voor de BBD front-end developers.
                    Dit werd gedaan door een <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#coreflection"
                      class="txt-link">co-creation meeting</a> op te zetten waarin ik aan een aantal front-end
                    developers uitlegde
                    hoe de oplossing in elkaar zit en werd er gediscussieerd wat voor componenten er nodig zijn om het
                    werk van de front-end developers op de lange termijn efficiënter te kunnen maken. Vervolgens zijn er
                    componenten ontwikkeld en geupload naar de library door de front-end developers. Hierdoor werd er
                    meteen getest of de documentatie duidelijk genoeg was en is er een begin gemaakt aan het vullen van
                    de library.
                  </p>
                  <p>Uit de co-creation meeting bleek dat Mkdocs nuttig was, maar dat er mogelijk betere alternatieven
                    zouden zijn om de documentatie te kunnen onderhouden. Daarom ben ik onderzoek gaan doen naar <a
                      target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#designdocu"
                      class="txt-link">design-documentatie systemen</a> en <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#codeeditor"
                      class="txt-link">online code editors en heb ik geconcludeerd dat GitBook aan meer requirements
                      voldoet dan MkDocs.</a></p>
                </div>
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Afronden/Opleveren/Evalueren</h4>
                </div>
                <div class="text-p-cont">
                  <p>Om de kennis niet alleen op papier over te dragen, heb ik een <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#kennissessie"
                      class="txt-link">kennissessie</a> gehouden tijdens de
                    'Front-end Monthly'. Dit is een online
                    meeting die maandelijks plaatsvindt en dient als update/nieuws moment en als moment om nieuwe
                    frontend kennis te delen met elkaar. In de kennissessie heb ik uitgelegd hoe de library op technisch
                    vlak in elkaar steekt, hoe de front-end developers hun eigen packages/componenten kunnen uploaden en
                    gebruiken, en welke guidelines gevolgd moeten worden om de library te onderhouden.
                  </p>
                  <p>Deze informatie is digitaal terug te vinden in de documentatie die in de repo overgedragen is. Mijn
                    onderzoeken zijn in de Google Drive van Bluebird Day overgedragen.</p>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Competentiematrix</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <div class="expansion-cont">
              <table>
                <tr>
                  <th class="col-goals">ICT Competentie</th>
                  <th class="col-proof">Bewijs</th>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Kennis en Inzicht</b>
                      <p>Kennis en inzicht met juiste breedte en diepte van de ICT life cycle fases: beheer, analyse,
                        advies, ontwerp en realisatie.</p>
                      <br>
                      <p>Mate van complexiteit van de opdracht en zelfstandigheid en eigen inbreng die de opdracht
                        vergt.</p>
                      <br>
                      <div class="group-project-proof">
                        <b><i>Additional explanation</i></b>
                        <i>An above-average complex assignment, an assignment in a complex setting, or an assignment
                          where the student has shown more than average independence leads to a higher assessment.</i>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/leeruitkomsten/"
                          class="txt-link">
                          Alle documenten en producten
                        </a>
                        <span>-></span>
                        <p>Alle documenten en producten op mijn portfolio site tonen de vereiste kennis en inzicht.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Beheer</b>
                      <p>
                        Werkwijze en tooling ingericht om tot professionele uitvoering te komen, passend bij opdracht
                      </p>
                      <p>
                        Gewerkt volgens ingerichte werkwijze en tooling
                      </p>
                    </div>
                    <div class="group-project-proof">
                      <b><i>Additional explanation</i></b>
                      <i>This concerns both the design and implementation of the IT process from a management
                        perspective (for example with a scrum approach) and more technical processes such as version
                        management.</i>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/beheren/#planning"
                          class="txt-link">
                          Scrum planning
                        </a>
                        <span>-></span>
                        <p>gebruikgemaakt van Jira, een Scrum planning tool, om het project te managen.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/beheren/#sketching"
                          class="txt-link">
                          Sketching/low-fi-prototype
                        </a>
                        <span>-></span>
                        <p>gebruikgemaakt van Figma, een tool om designs te maken en te beheren.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/beheren/#confluence"
                          class="txt-link">
                          Testing Confluence
                        </a>
                        <span>-></span>
                        <p>gebruikgemaakt van Confluence, een tool om kennis te beheren (in de vorm van documenten).</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/beheren/#npm"
                          class="txt-link">
                          Testing NPM & GitLab Features
                        </a>
                        <span>-></span>
                        <p>gebruikgemaakt van NPM en GitLab features (Package Registry, CI & Pages). Dit zijn tools die
                          het bedrijf ook gebruikt en features die aansluiten op de tools van het bedrijf.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/beheren/#immersion"
                          class="txt-link">
                          Immersion
                        </a>
                        <span>-></span>
                        <p>gebruikgemaakt van PHPstorm, Shopware en Jira om inzichten te verzamelen over de werkwijze
                          van de front-end developers.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/beheren/#architectuur"
                          class="txt-link">
                          Architectuursdiagram
                        </a>
                        <span>-></span>
                        <p>gebruikgemaakt van Visio om diagrammen te maken die ik kan gebruiken om mijn oplossing uit te
                          leggen.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Analyse</b>
                      <p>Duidelijke definitie en afbakening van context, probleem of uitdaging.</p>
                      <br>
                      <p>Probleemanalyse met juiste breedte en diepte.</p>
                      <br>
                      <div class="group-project-proof">
                        <b><i>Additional explanation</i></b>
                        <i>Student can argue who the stakeholders are and how they are involved in his project.</i>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#projectplan"
                          class="txt-link">
                          Projectplan
                        </a>
                        <span>-></span>
                        <p>analyse van de opdracht & wie de stakeholders zijn.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#trendanalyse"
                          class="txt-link">
                          Trendanalyse
                        </a>
                        <span>-></span>
                        <p>analyse van de bestaande middelen en hoe deze mogelijk ingezet/overgenomen kunnen worden door
                          het bedrijf met betrekking tot de belangen van het bedrijf.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#immersion"
                          class="txt-link">
                          Immersion
                        </a>
                        <span>-></span>
                        <p>de doelgroep is geanalyseerd door aan een project te werken als front-end developer en samen
                          te werken met andere front-end developers.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#interviews1"
                          class="txt-link">
                          Interviews
                        </a>
                        <span>-></span>
                        <p>analyse van de huidige situatie en doelgroep.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#designdocu"
                          class="txt-link">
                          Design & documentatie systems
                        </a>
                        <span>-></span>
                        <p>analyse van bestaande design & documentatie systemen.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren/#codeeditor"
                          class="txt-link">
                          Code editors & preview editors
                        </a>
                        <span>-></span>
                        <p>analyse van bestaande code & preview editors.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Advies</b>
                      <p>
                        Juiste afweging van belangen, mogelijkheden, kosten en baten
                      </p>
                      <p>
                        Vorm en inhoud passend bij opdracht en context
                      </p>
                    </div>
                    <div class="group-project-proof">
                      <b><i>Additional explanation</i></b>
                      <i>The project plan provides advice on project approach, scope and design.</i>

                      <i>Advice can be given throughout the internship or graduation project and be recorded in various
                        professional products. For example in a research report, blog, or as minutes of a sprint
                        review.</i>

                      <i>Regarding the thesis or internship report: the chapter “Recommendations” contains advices for
                        after the project.</i>

                      <i>Regarding portfolio: the reading guide clarifies which professional products have an advice
                        component.</i>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#projectplan"
                          class="txt-link">
                          Projectplan
                        </a>
                        <span>-></span>
                        <p>scoping van de opdracht en de aanpak van het project.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#architectuur"
                          class="txt-link">
                          Architectuursdiagram
                        </a>
                        <span>-></span>
                        <p>ik heb geadviseerd een ander platform te gebruiken dan Confluence aangezien Confluence niet
                          genoeg aanbiedt voor technische documentatie.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#requirements"
                          class="txt-link">
                          Requirements
                        </a>
                        <span>-></span>
                        <p>er zijn requirements voor de oplossing opgesteld. De requirements zijn geformuleerd op basis
                          van mijn onderzoek.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#coreflection"
                          class="txt-link">
                          Co-creation
                        </a>
                        <span>-></span>
                        <p>ik heb de bedrijfsbegeleider geadviseerd samen een meeting in te plannen waarin de
                          Co-creation methode zou worden toegepast om samen met de stakeholders effectief tot een
                          passende oplossing te komen.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#kennissessie"
                          class="txt-link">
                          Kennissessie
                        </a>
                        <span>-></span>
                        <p>het geven van uitleg aan de stakeholders over hoe het platform op een technisch niveau werkt
                          en waarom het nuttig is voor de stakeholders.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/adviseren/#adviesrapport"
                          class="txt-link">
                          Adviesrapport
                        </a>
                        <span>-></span>
                        <p>het advies geven aan de stakeholders over het bereiken van het uiteindelijke doel met het oog
                          op de toekomst.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Ontwerp</b>
                      <p>Vorm en inhoud passend bij opdracht en context.</p>
                      <br>
                      <p>Aansluitend bij advies en voldoende uitgewerkt voor realisatie.</p>
                      <br>
                      <div class="group-project-proof">
                        <b><i>Additional explanation</i></b>
                        <i>The most important design decisions are substantiated.</i>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/ontwerpen/#sketching"
                          class="txt-link">
                          Sketching/low-fi-prototype
                        </a>
                        <span>-></span>
                        <p>ontwerpen gemaakt om de ideeën die ik en de bedrijfsbegeleider in gedachten hadden in kaart
                          te brengen en te delen met de doelgroep.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/ontwerpen/#architectuur"
                          class="txt-link">
                          Architectuursdiagram
                        </a>
                        <span>-></span>
                        <p>de oplossing in kaart gebracht door de C4-model guidelines te gebruiken.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Realisatie</b>
                      <p>
                        Aansluitend bij ontwerp.
                      </p>
                      <p>
                        In omvang en kwaliteit passend bij de probleemdefinitie en context.
                      </p>
                      <p>
                        Bruikbaar voor opdrachtgever.
                      </p>
                    </div>
                    <div class="group-project-proof">
                      <b><i>Additional explanation</i></b>
                      <i>In all cases, a (partially) functioning IT product was realised within the project. This can be
                        as a prototype (for more complex problems) or a working (partial) product.</i>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/realiseren/#eindproducten"
                          class="txt-link">
                          Eindproducten
                        </a>
                        <span>-></span>
                        <p>de gerealiseerde producten bevatten elementen die in de schetsen/het low-fi prototype
                          voorkwamen. Bijv. de navigatiestructuur en bepaalde informatie over componenten. De
                          eindproducten passen bij de probleemdefinitie en zijn van een hoge kwaliteit (zie de
                          ‘Requirements’)</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/realiseren/#overdracht"
                          class="txt-link">
                          Overdracht
                        </a>
                        <span>-></span>
                        <p>alle kennis met betrekking tot de oplossing is digitaal overgedragen en d.m.v. een
                          kennissessie ook mondelings.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Oordeelsvorming</b>
                      <p>
                        Draws up appropriate research and sub-questions from an unstructured practical problem for all
                        phases of design-oriented / practice-oriented research.
                      </p>
                      <p>
                        Independently selects research methodology, sets up and carries out research methods
                        independently, and justifies these with reference to research strategies and can demonstrate the
                        robustness of his research.
                      </p>
                      <p>
                        Involves social, international, scientific and ethical themes in the judgement process.
                      </p>
                    </div>
                    <div class="group-project-proof">
                      <b><i>Additional explanation</i></b>
                      <i>The student shows investigative attitude during the entire project and this is not limited to a
                        certain project phase or aspect.</i>

                      <i>Research questions can be dynamic during the course of the research project.</i>

                      <i>Not every choice requires the same degree of thoroughness of research; the student must be able
                        to argue which aspects require more in-depth research and which less.</i>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/leeruitkomsten/"
                          class="txt-link">
                          Alle onderzoeksproducten
                        </a>
                        <span>-></span>
                        <p>alle onderzoeksproducten in het portfolio bevatten een bepaalde onderzoek structuur met een
                          plan van aanpak.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/oordeelsvorming/#projectplan"
                          class="txt-link">
                          Projectplan
                        </a>
                        <span>-></span>
                        <p>bevat een plan waarin passende onderzoeksstrategieën, patterns en methodes worden ingezet om
                          het probleem op te lossen.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/oordeelsvorming/#requirements"
                          class="txt-link">
                          Requirements
                        </a>
                        <span>-></span>
                        <p>er is bij het ontwerpen en realiseren van de oplossing rekening gehouden met het feit dat het
                          platform privé moet zijn voor de organisatie, maar er ook een optie moet zijn om het platform
                          in de toekomst te kunnen delen met derde partijen.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/oordeelsvorming/#npm"
                          class="txt-link">
                          Testing NPM & GitLab Features
                        </a>
                        <span>-></span>
                        <p>dit onderzoek vereiste meer aandacht/diepte dan ander onderzoek. Dit komt omdat dit de kern
                          van de oplossing is. Als de kern niet zou voldoen aan de behoeften van de stakeholders, zou de
                          oplossing niet geschikt zijn.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Communicatie</b>
                      <p>
                        Justifies and defends the implementation of an extensive professional assignment, both verbally
                        and in writing, and adapts the writing style to the intended audience, in Dutch or English.
                      </p>
                      <p>
                        Collaborates effectively in the independent implementation of a professional assignment.
                      </p>
                    </div>
                    <div class="group-project-proof">
                      <b><i>Additional explanation</i></b>
                      <i>With thesis or internship report, the thesis or report must be independently understandable and
                        meet the usual document standards (including structure, table of contents, summary,
                        references).</i>
                      <i>For portfolio grading, the reading guide must be independently understandable and meet all
                        document standards.</i>
                      <i>The other professional products must be sufficiently comprehensible for the reader who is
                        familiar with the relevant domain.</i>
                      <i>The student can compensate for a lesser documentation competence through an oral explanation. A
                        minimum level of written communication remains necessary (text must be unambiguous for peers in
                        the relevant domain).</i>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/communicatie/#coreflection"
                          class="txt-link">
                          Co-reflection/Co-creation
                        </a>
                        <span>-></span>
                        <p>ik heb mondeling verdedigt waarom de ‘co-reflection & co-creation’ meeting van belang was en
                          waarom ik het op mijn voorgestelde manier ging uitvoeren. Ook schriftelijk heb ik dit
                          verdedigt. Daarnaast heb ik in de meeting samengewerkt en de vergaarde informatie zelfstandig
                          gebruikt voor verder onderzoek.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/communicatie/#resultaat"
                          class="txt-link">
                          Resultaat
                        </a>
                        <span>-></span>
                        <p>ik verdedig schriftelijk waarom het resultaat van mijn opdracht antwoordt geeft op de
                          hoofdvraag en hoe er bijgedragen is aan het behalen van het doel.</p>
                      </div>
                      <div>
                        <p>Wekelijkse standup meeting met de bedrijfsbegeleider.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Leervermogen</b>
                      <p>
                        Describes professional talents and development ambitions in relation to the IT profession.
                      </p>
                      <p>
                        Uses self-reflection and received feedback to improve own functioning in the IT profession.
                      </p>
                      <p>
                        Takes initiatives, takes an independent position, and works independently and result-oriented on
                        the professional assignment.
                      </p>
                    </div>
                    <div class="group-project-proof">
                      <b><i>Additional explanation</i></b>
                      <i>In thesis or internship report, evaluation should reflect on learning experiences during the
                        project.</i>
                      <i>For portfolio grading, reflection and learning capacity must be demonstrated in the reading
                        guide or in a separate product referred to.</i>
                    </div>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/leeswijzer/"
                          class="txt-link">
                          Reflectie
                        </a>
                        <span>-></span>
                        <p>in de reflectie beschrijf ik mijn ontwikkelingsambities binnen het vakgebied, reflecteer ik
                          op mijn acties binnen de opdracht en vertel ik hoe ik zelfstandig heb gewerkt.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/leeswijzer/"
                          class="txt-link">
                          Professionele ontwikkeling
                        </a>
                        <span>-></span>
                        <p>er wordt beschreven hoe ik mij ontwikkeld heb en wat mijn ontwikkelingsambities binnen het
                          ICT vakgebied zijn.</p>
                      </div>
                    </div>
                  </td>
                </tr>



              </table>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Reflectie</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="expansion-cont">
              <div class="aanpak-cont text-cont">
                <div class="text-title">
                  <h4>Opdracht</h4>
                </div>
                <div class="text-p-cont">
                  <p>Over de afloop van de opdracht ben ik tevreden. Ik heb het gevoel dat ik een oplossing heb
                    aangeboden waar Bluebird Day iets mee kan. Het verloop van de opdracht was niet heel
                    ‘straightforward’, het was soms lastig te bepalen hoe ik het beste iets specifieks kon
                    onderzoeken. Gelukkig waren mijn stagebegeleiders goede ‘sparringpartners’ om dit soort problemen
                    te kunnen tackelen.
                  </p>
                  <p>
                    Ook het plannen was soms lastig, omdat ik op een gegeven moment zoveel
                    richtingen had om te onderzoeken dat ik soms vergat dit op te delen in kleinere stukken/sprints.
                    Vermoedelijk gebeurde dit doordat het nog niet duidelijk was welke ricthing het project opging
                    waardoor ik niet wist hoe ik de sprints concreet kon krijgen. De volgende keer ben ik daarom van
                    plan af en toe een stap terug te doen en tijd te besteden aan het maken van een concrete planning.
                    Wat ik wel goed vond gaan was de communicatie tussen mijzelf en mijn collega’s. Hierdoor werden
                    onduidelijkheden snel opgelost en werd er efficiënt informatie voor de opdracht vergaard.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Professionele ontwikkeling</h4>
                </div>
                <div class="text-p-cont">
                  <p>Tijdens de stage heb ik veel moeten communiceren. Aangezien een groot deel mijn collega's ook de
                    doelgroep was, was het makkelijk de doelgroep te bereiken. In het verleden heb ik veel projecten
                    gehad waarbij het niet mogelijk was om de doelgroep te bereiken (of er was beperkt contact). Dat was
                    in dit semester niet het geval. Daarom voel ik dat ik nu meer heb kunnen werken aan deze competentie
                    en op dit gebied vooruitgang heb geboekt. Elke week waren er wel afspraken te maken, meetings in te
                    plannen en kennis te delen met collega's.</p>
                  <p>Ook heb ik de kans aangegrepen mee te draaien als front-end developer in een klantenproject van
                    Bluebird Day. Dit gaf mij veel nuttige inzichten in de werkwijze van Bluebird Day en voor mijn
                    front-end developer ambities was dit ook een nuttige ervaring. Voor dit project heb ik kennisgemaakt
                    met technologieën waar ik nog niet bekend of ervaren mee was (bijv. Twig, DDEV, Docker, GitLab
                    features, SASS). Daarnaast heb ik een aantal tips gekregen tijdens code reviews waardoor ik met
                    zekerheid kan zeggen dat ik gegroeid ben als front-end developer.</p>
                  <p>Als 'personal development goal' wilde ik ook meer ervaring opdoen op het gebied van design
                    iteraties testen. Tijdens de afstudeeropdracht heb ik hier helaas niet veel aan kunnen werken. Dit
                    komt voornamelijk omdat mijn oplossing gebruikmaakt van bestaande systemen en er dus niet veel
                    ruimte was voor eigen designs te maken en te testen. De oplossing heb ik wel kunnen testen, maar
                    niet heel uitgebreid.</p>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <script>
      export default {
        data: () => ({
          panel: [0, 1],
          disabled: false,
          readonly: false,
        }),
      }

    </script>

    <style lang="css" scoped>
      @import '~/assets/css/graduation.css';

      .row {
        margin: 0 -10px;
      }

      .v-expansion-panels {
        align-content: flex-start;
        gap: 1em;
        border-radius: 0;
        z-index: unset;
      }

      .v-expansion-panel {}

      .v-expansion-panels--popout>.v-expansion-panel--active {
        /* max-height: unset; */
      }

      .v-expansion-panel-header {
        justify-content: space-between;
        padding: 16px 16px;
      }

      .v-expansion-panel-header h3 {
        font-size: 1.2rem;
        text-align: left;
        font-weight: bold;
      }

      .v-expansion-panel-header>*:not(.v-expansion-panel-header__icon) {
        flex: unset;
      }

      .expansion-cont {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 100%;
        padding: 1em 0em 0em;
      }

      table {
        background-color: #fff;
        border-collapse: separate;
        border-spacing: 0px;
        border: 1px solid #000;
      }

      tr td:first-child {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      tr {
        display: flex;
      }

      td,
      th {
        flex: 1;
        border: 1px solid #000;
        text-align: left;
        padding: 8px;
        text-align: left;
        vertical-align: top
      }

      .col-goals {
        width: 50%;
      }

      .col-proof {
        width: 50%;
      }

      .col-goals,
      .col-proof {
        font-size: 1.1rem;
      }

      .group-project-proof {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .expansion-cont {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .text-cont {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .text-title {}

      .text-p-cont {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .video-wrapper {
        position: relative;
        height: 0;
        padding-top: calc(var(--aspect-ratio, .5625)*100%);
      }

      .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      @media (min-width: 300px) {
        .bbd-logo {
          width: 300px;
        }

        .expansion-cont {}

        .img-cont {
          max-width: 400px;
        }

      }

      @media (min-width: 640px) {
        .v-expansion-panels {
          /* max-width: 1200px; */
        }

        .text-cont {
          gap: 2rem;

        }

        .text-cont,
        .img-cont {
          max-width: 600px;
        }

        .expansion-cont {
          align-items: flex-start;
        }

      }

      @media (min-width: 768px) {}

      @media (min-width: 1024px) {
        .expansion-cont {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          padding: 3em 1em;

        }


        .expansion-cont .aanpak-cont {
          display: flex;
          width: 100%;

          flex-direction: column;
        }

        .expansion-cont table {
          display: flex;
          width: 100%;
          grid-column: 1 / 3;
          flex-direction: column;
          max-width: 1000px;
        }

      }

      @media (min-width: 1280px) {}

      @media (min-width: 1536px) {}

      @media (min-width: 2100px) {
        .expansion-cont {
          /* display: flex;
          flex-direction: row;
          justify-content: space-around; */
          place-items: flex-start center;
        }

        .expansion-cont table {
          place-self: flex-start;
        }
      }

    </style>
