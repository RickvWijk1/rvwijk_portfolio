<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Debriefing & Project Plan</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>K. Huggers, D. van Sleeuwen, S. Sodermans, M. Kroeze, R. van Wijk</i>
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
            <div class="text">
              <div class="learned-cont">
                <h3>Approach</h3>
                <img src="~/assets/img/school/icons/approach.png" alt="">
              </div>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-desktop">
                  <p>Desktop</p>
                  <img src="~/assets/img/school/research_strats/library.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Desktop research was applied,</b> because the current situation of PSV's problem/opportunity had
                  to
                  be analysed in order to understand the assignment. By talking to PSV's representatives we gained
                  insight
                  of what PSV was working on and what stakeholders were involved.</p>
              </div>
            </div>

            <div class="paddedTextLine"></div>
            <div class="text">
              <h2>Result</h2>
            <p>The research led to the following findings and products:</p>
            </div>
            <div class="text">

              <a target="_blank" href="./pdf/semester6/debriefing.pdf"><button
                  class="btnModalClose bntModalClose-bg-color">View debriefing in PDF</button></a>
            </div>
            <div class="text">
              <p><b>Problem/opportunity</b></p>
              <p>PSV is paying a lot to maintain their media platforms, especially their apps. In addition, new technologies like NFC are now well supported and can be useful to PSV's end-users.</p>
            </div>
            <div class="text">
              <p><b>Goals</b></p>
              <p>PSV told us that
                developing and maintaining their website and apps costs a lot of money. Mainly their iOS and Android
                apps which are developed by a third party. They would like a cheaper, future-proof solution to bring PSV
                fans the
                content & functions they need.</p>
            </div>
            <div class="text">
<p><b>Scoping and formulating</b></p>
              <p>When we were defining the project plan, we began to doubt whether this assignment was fitting for
                ICT & Media Design students since the client specifically asked for a cheaper technical solution and
                nothing that had something to do with users.</p>
              <p>We arranged two more meetings with PSV to see if we could reformulate the assignment and define the
                scope.

                I advised the client to not only look at
                  the technical aspect, but also to look at how to increase the value of the PSV app by letting us
                  research what features the target audience (actually) needs. I told the client that this is what
                  we as ICT & Media Design students excel in and that it's mandatory for us to do more user research.
                  The client agreed to the scoping.</p>
            </div>

            <div class="text">
              <p>We had a tough time formulating a main question and design challenge that included the technical aspect
                of the project and the app design aspect. This resulted in two main questions at first:</p>
              <i>How can we make sure the PSV app is not a copycat of the PSV website and has its own value?</i>
              <i>How can we make the PSV app future-proof and cost efficient?</i>
            </div>

            <div class="text">
              <p><b>Main question</b></p>
              <p>After a lot of thinking and reformulating, the final main question was formulated:</p>
              <i>How can we make the PSV app unique and valuable so that PSV supporters will find the app useful?</i>
              <p>As you can see the technical part was left out. The reason for this is that we formulated sub questions
                for which we would research what technologies would be most efficient if PSV were to make a new
                app.</p>
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

            <div class="pdf-btn-cont">
                <a target="_blank" href="./pdf/semester6/projectplan_v1.pdf"><button
                    class="btnModalClose bntModalClose-bg-color">View V1 project plan in PDF</button></a>
                <br>
                <a target="_blank" href="./pdf/semester6/projectplan_v3.pdf"><button
                    class="btnModalClose bntModalClose-bg-color">View final project plan in PDF</button></a>
              </div>

            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>It was difficult to get the main question/design challenge/scoping right. After each meeting with the
                  client, we slowly understood the scoping better and better.
                </p>
              </div>
            </div>
            <div class="text">
              <h3>What's next?</h3>
              <p>Answering the formulated sub questions by doing research.</p>
              <div class="label-cont">
                <ul class="list">
                  <li class="list-bullet">What's the current situation of the PSV app?</li>
                  <li class="list-bullet">What technologies meet the criteria?</li>
                  <li class="list-bullet">What are the trends? What are similar apps doing?</li>
                  <li class="list-bullet">Who is the target audience and what are their needs?</li>
                </ul>
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
    layout: 'noNav',
  }

</script>

<style>
  @import '~/assets/css/modal.css';

</style>
