<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Project Plan</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>K. Huggers, D. van Sleeuwen, S. Sodermans, M. Kroeze, R. van Wijk</i>
              </div>
            </div>
            <div class="research-cont text">
              <h3>Research strategies</h3>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-desktop">
                  <p>Desktop</p>
                  <img src="~/assets/img/school/research_strats/library.png" alt="">
                </div>
                <div class="research-tag research-field">
                  <p>Field</p>
                  <img src="~/assets/img/school/research_strats/field.png" alt="">
                </div>
                <div class="research-tag research-lab">
                  <p>Lab</p>
                  <img src="~/assets/img/school/research_strats/lab.png" alt="">
                </div>
                <div class="research-tag research-showroom">
                  <p>Showroom</p>
                  <img src="~/assets/img/school/research_strats/showroom.png" alt="">
                </div>
                <div class="research-tag research-workshop">
                  <p>Workshop</p>
                  <img src="~/assets/img/school/research_strats/workshop.png" alt="">
                </div>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>What have I learned?</h3>
                <img src="~/assets/img/school/icons/learn_more.png" alt="">
              </div>
              <div class="label-cont">
                <ul class="list">
                  <li class="list-bullet">Learned what the context of the assignment is</li>
                  <li class="list-bullet">Learned what the client's problem is by asking</li>
                  <li class="list-bullet">Learned what opportunities the assignment offers</li>
                  <li class="list-bullet">Learned what the scope of the project is</li>
                </ul>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>My contribution</h3>
                <img src="~/assets/img/school/icons/contribution.png" alt="">
              </div>
              <div class="label-cont">
                <ul class="list">
                  <li class="list-bullet">Analysed the briefing (debriefed)</li>
                  <li class="list-bullet">Learned what the client's problem is</li>
                  <li class="list-bullet">Learned what opportunities the assignment offers</li>
                  <li class="list-bullet">Learned what the scope of the project is</li>
                </ul>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Motivation</h3>
                <img src="~/assets/img/school/icons/motivation.png" alt="">
              </div>
              <div class="label-cont">
                <p>It's important to understand what the client's problem is within the context and to communicate what
                  the scoping of the project will be so that both parties will know what to expect.</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>

            <div class="text">
              <h3>Debrief Document</h3>
              <p>My contribution to this document:</p>
              <ol class="list">
                <li>Helped formulate the problem & context</li>
                <li>Helped formulate the main question and sub questions.</li>
              </ol>
            </div>
            <div class="image-description">
              
              <i>Click <a style="color: #4758fc;" target="_blank" href="./pdf/semester6/debriefing.pdf">here</a>
                to open
                the
                PDF in a new tab.</i>
            </div>
            <div class="text">
              <h3>Project Plan</h3>
              <p>My contribution to this document:</p>
              <ol class="list">
                <li>Worked on everything that's in the project plan together with Dary van Sleeuwen. The rest of the
                  team helped formulate the questions and design challenge.</li>
              </ol>
            </div>
            <div class="image-description">
              
              <i>Click <a style="color: #4758fc;" target="_blank" href="/pdf/semester6/projectplan_v3.pdf">here</a>
                to open
                the
                PDF in a new tab.</i>
            </div>
            <div class="text">
              <h3>Result</h3>
            </div>
            <div class="paddedText">
              <h3>Design Challenge</h3>
              <i>
                NL: Ontwerp een oplossing voor de PSV app om de gebruikers/fans van PSV in staat te stellen om
                de functionaliteiten waar zij behoeften aan hebben te gaan gebruiken.
              </i>
              <i>EN: Design a solution for the PSV app to enable the users/fans of PSV
                to use the functionalities they need.</i>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="paddedText">
              <h3>Technical Challenge</h3>
              <i>
                NL: Hoe moeten al deze nieuwe of toekomstige functionaliteiten technisch werken en welke
                systemen gaan hiermee gemoeid?
              </i>
              <i>EN: How should all these new or future functionalities work technically and which systems are
                involved?</i>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>It was difficult to get the main question/design challenge/scoping right. After each meeting with the
                  client, we slowly understood the scoping better and better. I advised the client to not only look at
                  the technical aspect, but also to look at how to increase the value of the PSV app by letting us
                  research what features the target audience (actually) needs. I told the client that this is what
                  we as ICT & Media Design students excel in and that it's mandatory for us to do more user research.
                  The client understood this and agreed to adding this to the scope.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/semesters/semesterSix"><button class="btnModalClose bntModalClose-bg-color">Close</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <NuxtLink to="/semesters/semesterSix" class="close-modal">
      <div class="filler"></div>
    </NuxtLink>
  </div>

</template>

<script>
  export default {

  }

</script>

<style>
  @import '~/assets/css/modal.css';

</style>
