    <template>
      <v-expansion-panels popout v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header color="#eee" ripple>
            <h3>Bedrijf</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <div class="expansion-cont">
              <div class="text-cont">
                <nuxt-img class="bbd-logo" src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
                <p><a target="__blank" href="https://www.bluebirdday.nl/" class="txt-link">Bluebird Day</a> is de
                  Nederlandse #1 op het gebied van e-commerce en is één van de 9 <a target="__blank"
                    href="https://www.handpickedagencies.com/nl/" class="txt-link">Handpicked Agencies</a>.
                  Bluebird Day helpt A-merken met strategie, design, development en optimalisatie in e-commerce.
                  Samen met 5 andere Handpicked Agencies bevindt Bluebird Day zich op het hoofdkantoor in Breda, op 20
                  minuten loopafstand vanaf het station.
                </p>
                <div class="video-wrapper">
                  <iframe frameborder="0" allowfullscreen="1"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    title="Bluebird Day Brand Movie" width="440" height="280"
                    src="https://www.youtube-nocookie.com/embed/twjco4FJHHg"></iframe>
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
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">projectplan</a> op te stellen, is verkregen door het uitvoeren van <a
                      target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">interviews</a>. De doelgroep, front-end
                    developers, werden o.a. geïnterviewed. Door het uitvoeren van een <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
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
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">interviews</a> en de <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">immersion</a> methode een beter beeld van de doelgroep ontstaan. Door deel te
                    nemen aan het 'Boerschappen' project als front-end developer, kon ik de dagelijkse irritaties,
                    behoeftes en goals van de BBD developers beter begrijpen.
                    De vondsten zijn in beeld gebracht door <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">empathy mapping</a> toe te passen. Met deze informatie en de eisen vanuit
                    Bluebird Day, kon er een lijst met <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
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
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">schetsen/low-fidelity
                      prototypes</a> gemaakt. Daarnaast ben ik de bestaande front-end component library oplossingen
                    verder gaan verkennen d.m.v. <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
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
                <img loading="lazy" src="~/assets/img/school/graduation/leeswijzer/sketch.jpg" alt="" class="image-zoom">
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
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">co-creation meeting</a> op te zetten waarin ik aan een aantal front-end developers uitlegde
                    hoe de oplossing in elkaar zit en werd er gediscussieerd wat voor componenten er nodig zijn om het
                    werk van de front-end developers op de lange termijn efficiënter te kunnen maken. Vervolgens zijn er
                    componenten ontwikkeld en geupload naar de library door de front-end developers. Hierdoor werd er
                    meteen getest of de documentatie duidelijk genoeg was en is er een begin gemaakt aan het vullen van
                    de library.
                  </p>
                </div>
              </div>
              <div class="text-cont">
                <div class="text-title">
                  <h4>Afronden/Opleveren/Evalueren</h4>
                </div>
                <div class="text-p-cont">
                  <p>Om de kennis niet alleen op papier over te dragen, heb ik een kennissessie gehouden tijdens de
                    'Front-end Monthly'. Dit is een online
                    meeting die maandelijks plaatsvindt en dient als update/nieuws moment en als moment om nieuwe
                    frontend kennis te delen met elkaar. In de kennissessie heb ik uitgelegd hoe de library op technisch
                    vlak in elkaar steekt, hoe de front-end developers hun eigen packages/componenten kunnen uploaden en
                    gebruiken, en welke guidelines gevolgd moeten worden om de library te onderhouden.
                  </p>
                  <p>Deze informatie is digitaal terug te vinden in de documentatie die in de repo overgedragen is. Mijn onderzoeken zijn in de Google Drive van Bluebird Day overgedragen.</p>
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
                  <th class="col-goals">Learning Outcome</th>
                  <th class="col-proof">Proof</th>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>User interaction (analysis & advice)</b>
                      <p>You analyse the user, the interaction, and the user experience, also taking state of the art
                        interactive technologies into account. You select a suitable design process to be able to advise
                        on
                        UX interventions based on a validated UX design.</p>
                    </div>
                    <i>By analyse, we mean that you carry out research and record the conclusions.</i>
                    <i>By state of the
                      art interactive technologies, we mean that you investigate the latest technologies that may be
                      relevant to the project.</i>
                    <i>By a suitable design process, we mean that you make a justified choice for your design process
                      and
                      describe the different phases of this process for your project.</i>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <p><b>PSV Group Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/interviews"
                          class="txt-link">
                          Target Audience Interviews
                        </a>
                        <span>-></span>
                        <p>Together with the other project members I helped define the target audience so that we could
                          find
                          the right people to interview. This was part of the empathize phase, which is part of the
                          Design
                          Thinking process we used.</p>
                      </div>
                      <div>
                        <a target="_blank" href="#" class="txt-link">
                          Flutter Notifications
                        </a>
                        <span>-></span>
                        <p>I investigated the possibilities of notifications with a relatively new hybrid framework,
                          Flutter. This included research into what public libraries/widgets would be usable and in what
                          ways they could be beneficial.</p>
                      </div>

                      <div>
                        <p><b>Individual Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/techResearch"
                          class="txt-link">
                          Software Architecture
                        </a>
                        <span>-></span>
                        <p>I did research into what technologies are most efficient at creating Android widgets.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/indInterviews"
                          class="txt-link">
                          Target Audience
                        </a>
                        <span>-></span>
                        <p>I did research into the target audience by interviewing and creating a survey.</p>
                      </div>
                      <div>
                        <p><b>International Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/prepweek"
                          class="txt-link">
                          Preperation Week
                        </a>
                        <span>-></span>
                        <p>I researched the metaverse on a technical and ethical level.</p>
                      </div>

                      <div>
                        <p><b>PSV Group Project, Individual project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/portfolio-abstract"
                          class="txt-link">
                          Design Thinking
                        </a>
                        <span>-></span>
                        <p>In the reading guide I describe the different phases of the project process and why we chose
                          design thinking.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>User interaction (execution & validation)</b>
                      <p>
                        You execute and evaluate the user experience of an interactive product. You document the
                        development
                        process for the stakeholders.
                      </p>
                    </div>
                    <i>By execute, we mean that you produce a high-fidelity prototype you can present to users. </i>
                    <i>By evaluate user experience, we mean that you not only put forward the user friendliness of a
                      product, but map the total user experience. </i>
                    <i>By document, we mean that you can explain the choices you make in relation to user experience to
                      stakeholders effectively. </i>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <p><b>PSV Group Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/designTesting"
                          class="txt-link">
                          High-fidelity Prototype
                        </a>
                        <span>-></span>
                        <p>I made a high-fidelity prototype so that I could test if/how well the users can accomplish
                          their goals. Furthermore, I explain how my design choices support user friendliness.
                        </p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/interviews"
                          class="txt-link">
                          Interviews
                        </a>
                        <span>-></span>
                        <p>I mapped what the user experience is like for the current PSV app users by interviewing them.
                        </p>
                      </div>

                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/flutterNotifications"
                          class="txt-link">
                          Flutter Notifications
                        </a>
                        <span>-></span>
                        <p>I researched what the best Flutter practices are in relation to the development/maintaining
                          process of the notification system, but also in relation to how it affects the user
                          experience.
                        </p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/indDesign"
                          class="txt-link">
                          Design & Testing
                        </a>
                        <span>-></span>
                        <p>I documented why I made certain design choices in relation to the user experience.
                        </p>
                      </div>

                      <div>
                        <p><b>Individual Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/indDesign"
                          class="txt-link">5 second A/B testing
                        </a>
                        <span>-></span>
                        <p>I mapped what the user experience is like with different kinds of widget designs.
                        </p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/indInterviews"
                          class="txt-link">
                          Target Audience
                        </a>
                        <span>-></span>
                        <p>I mapped what the target audience currently experiences (how they currently get info)</p>
                      </div>

                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Software design</b>
                      <p>
                        You design and evaluate a software system with existing components or libraries using
                        predetermined
                        quality criteria.
                      </p>
                    </div>
                    <i>By you design, we mean that you provide a schematic representation of the whole software system
                      (for example ER diagram, architecture, flowcharts, UML diagram). </i>
                    <i>By you evaluate, we mean that you determine the quality of the (software) design using
                      established
                      quality criteria and a predetermined test design. </i>
                    <i>By existing components or libraries, we mean that you have investigated which of those is best
                      suited to the project.</i>
                    <i>By quality criteria, we mean that you have predetermined the criteria the system must meet in
                      consultation with stakeholders. For example, scalability in the event of increased data and/or
                      use,
                      security aspects and different types of devices.</i>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <p><b>PSV Group Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/architecture"
                          class="txt-link">
                          Software Architecture
                        </a>
                        <span>-></span>
                        <p>I researched an existing software system and based on the findings I created an architecture
                          diagram.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/notificationSystem"
                          class="txt-link">
                          Current Notification System
                        </a>
                        <span>-></span>
                        <p>I investigated what the current notification system looks like. I talked to the stakeholders
                          to
                          get more information about the system and their wishes.</p>
                      </div>
                      <div>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/flutterNotifications"
                          class="txt-link">
                          Flutter Notifications
                        </a>
                        <span>-></span>
                        <p>I investigated the possibilities of what public libraries/widgets would be usable and in what
                          ways they could be beneficial.</p>
                      </div>
                      <div>
                        <p><b>Individual Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/techResearch"
                          class="txt-link">
                          Software Architecture
                        </a>
                        <span>-></span>
                        <p>I researched what components were needed based on set criteria, designed the software diagram
                          based on the C4 (level 2) diagram criteria.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Future-oriented organisation</b>
                      <p>
                        You carry out a problem analysis and on that basis, you determine the definitive problem and
                        elaborate
                        on this in a project plan.
                      </p>
                    </div>
                    <i>By problem analysis, we mean that you identify the stakeholders and the context of the assignment
                      based on methodical research.</i>
                    <i>By definitive problem, we mean that you ascertain the question behind the question and formulate
                      the primary question. </i>
                    <i>By project plan, we mean that you describe in a document how you are going to answer the primary
                      question, documenting your sub-tasks, planning, quality and budget, amongst others.</i>
                  </td>
                  <td>
                    <div class="group-project-proof">
                      <div>
                        <p><b>PSV Group Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan"
                          class="txt-link">
                          Project Plan
                        </a>
                        <span>-></span>
                        <p>The problem was determined by planning multiple debriefing meetings, asking questions and
                          researching the media platforms of PSV. In addition, the primary
                          question and sub-questions were formulated. A planning was made, risks were noted down, etc.
                        </p>
                      </div>
                      <div>
                        <p><b>Individual Project</b></p>
                        <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan"
                          class="txt-link">
                          Project Plan
                        </a>
                        <span>-></span>
                        <p>The problem was determined by monitoring F1 Twitter. The primary
                          question and sub-questions were formulated. A planning and delivery plan were made.</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b> Investigative problem solving</b>
                      <p>
                        You formulate sub-questions pertaining to the primary question and answer these using relevant
                        research methods. You use the conclusions of the sub-questions to justify (design) choices.
                      </p>
                    </div>
                    <i>By formulating sub-questions, we mean that you split your primary question into a number of
                      sub-questions in order to answer the primary question step-by-step. </i>
                    <i>By research methods, we mean that you make a substantiated choice of DOT framework/CMD methods,
                      using triangulation through relevant research patterns.</i>
                  </td>
                  <td>
                    <div>
                      <p><b>PSV Group Project</b></p>
                      <a target="_blank"
                        href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan"
                        class="txt-link">
                        Project Plan
                      </a>
                      <span>-></span>
                      <p>I formulated fitting sub-questions that helped answer the primary question.</p>
                    </div>
                    <div>
                      <a target="_blank"
                        href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/userstories"
                        class="txt-link">
                        User Story - Plan of Action
                      </a>
                      <span>-></span>
                      <p>I formulated a primary question and fitting sub-questions that helped answer the primary
                        question.</p>
                    </div>
                    <br>
                    <div>
                      <p><b>Individual Project</b></p>
                      <a target="_blank"
                        href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan"
                        class="txt-link">
                        Project Plan
                      </a>
                      <span>-></span>
                      <p>I formulated fitting sub-questions that helped answer the primary question.</p>
                    </div>
                    <div>
                      <a target="_blank"
                        href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/indDesign"
                        class="txt-link">
                        Design & Testing
                      </a>
                      <span>-></span>
                      <p>I applied multiple research strategies (workshop, lab, field research) and methods (interviews,
                        5-second A/B testing) to discover what type of design the target audience needed.</p>
                      <p>'Why' I used a specific research pattern is explained in the <a target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan"
                          class="txt-link">
                          Project Plan
                        </a></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Personal leadership</b>
                      <p>You methodically reflect on your professional identity and personal development.</p>
                    </div>
                    <i>By reflect, we mean that you look back on your own work and actions and subsequently look at
                      possibilities and opportunities you can utilise in your future career.</i>
                    <i>By methodical, we mean that you select and use a reflection methodology to shape your reflection
                      and on which basis you subsequently carry out a good analysis for follow-up steps. </i>
                    <i>By professional identity, we mean the role you envisage for yourself in the media landscape and
                      what role you play in a team, and that you document this in your portfolio. </i>
                    <i>By develop, we mean that you consciously look at what you still want to learn. </i>
                  </td>
                  <td>
                    <div>
                      <p><b>PSV Group Project, International project, Individual project</b></p>
                      <a target="_blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/semesterSix"
                        class="txt-link">
                        Products
                      </a>
                      <span>-></span>
                      <p>I reflected upon each piece of research.</p>
                    </div>
                    <div>
                      <a target="_blank"
                        href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/portfolio-abstract"
                        class="txt-link">
                        Reading Guide
                      </a>
                      <span>-></span>
                      <p>I reflected upon my work and actions during and after the projects and what impact these
                        actions
                        would have on my future career. </p>
                    </div>
                    <div>
                      <a target="_blank" href="http://localhost:3000/rvwijk_portfolio/modals/semesterSix/delivery"
                        class="txt-link">
                        Delivery & Peer Feedback
                      </a>
                      <span>-></span>
                      <p>Applied peer feedback, the retrospective method (starfish-method) and reflected upon the role
                        each project member played within the project.</p>
                    </div>
                    <br>
                    <div>
                      <p><b>Individual project</b></p>
                      <a target="_blank" href="http://localhost:3000/rvwijk_portfolio/modals/semesterSix/delivery"
                        class="txt-link">
                        Project Plan
                      </a>
                      <span>-></span>
                      <p>In the project plan I described what I wanted to learn during the project and why (in regard to
                        my ambitions).</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="grouped">
                      <b>Goal-oriented interaction</b>
                      <p>
                        You communicate with different stakeholders and team members about the ICT assignment, taking
                        into
                        account an international context.
                      </p>
                    </div>
                    <i>By communicate, we mean that you ensure the desired impact and execution.</i>
                    <i>By stakeholders, we mean that you consider various collaboration partners.</i>
                    <i>By international context, we mean that you are able to work with and consider people from diverse
                      cultures.</i>
                  </td>
                  <td>
                    <div>
                      <p><b>International project</b></p>
                      <a target="_blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/semesterSix"
                        class="txt-link">
                        Preparation Week
                      </a>,
                      <a target="_blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/semesterSix"
                        class="txt-link">
                        Metaverse concepting
                      </a>,
                      <a target="_blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/semesterSix"
                        class="txt-link">
                        Metaverse prototyping
                      </a>
                      <span>-></span>
                      <p>I got to know international students and worked together with them when ideating valuable
                        concepts for potential stakeholders and prototyping
                        a concept for
                        stakeholder Boymans museum</p>
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
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">projectplan</a> op te stellen, is verkregen door het uitvoeren van <a
                      target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">interviews</a>. De doelgroep, front-end
                    developers, werden o.a. geïnterviewed. Door het uitvoeren van een <a target="__blank"
                      href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/learningoutcomes/analyseren#projectplan"
                      class="txt-link">trendanalyse</a>, vond ik bestaande oplossingen voor front-end component
                    libraries.
                  </p>
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
      .row {
        margin: 0 -10px;
      }

      .v-expansion-panels {
        align-content: flex-start;
        gap: 1em;
        border-radius: 0;
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

      @media (min-width: 1280px) {
       
      }

      @media (min-width: 1536px) {}
      @media (min-width: 2100px) {
        .expansion-cont{
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
