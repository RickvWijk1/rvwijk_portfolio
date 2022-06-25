<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Design & Testing</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>R. van Wijk</i>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Motivation</h3>
                <img src="~/assets/img/school/icons/motivation.png" alt="">
              </div>
              <div class="label-cont">
                <p>By doing the interviews I gained insights of widgets. The target audience uses widgets, because
                  widgets let you see information instantly. This is why the goal of the testing is to understand which
                  widget design is most efficient (in terms of time and what feel it gives the user) at communicating
                  information.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Approach</h3>
                <img src="~/assets/img/school/icons/approach.png" alt="">
              </div>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-workshop">
                  <p>Workshop</p>
                  <img src="~/assets/img/school/research_strats/workshop.png" alt="">
                </div>
                <div class="research-tag research-active research-lab">
                  <p>Lab</p>
                  <img src="~/assets/img/school/research_strats/lab.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Workshop and lab research were applied,</b> because by making design iterations I can test what
                  designs are most effective.</p>
                <p>The method that will be applied for the testing of the prototypes, is 5 second A/B testing, because
                  we need to know what and how well the
                  widget designs communicates information and feeling, and within 5 seconds the user typically gets
                  their
                  first impression.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <p>Which widget design is the most efficiënt at communicating the information the user needs?
                </p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Test plan</h3>
              </div>
              <div class="label-cont">
                <p>Two widget designs will be tested. 4-5 people of the target audience will get to see widget A for 5
                  seconds .4-5 different people will test widget B in the same way. Afterwards, the user can look at the
                  widget again for as long as they like to see if they have anything else to share about the widget.
                  The two designs will be put on an Android smartphone homescreen. When the participant is holding the
                  smartphone, the widget will be revealed for 5 seconds.</p>
              </div>
            </div>
            <div class="image-grid">
              <img src="~/assets/img/school/semester6/ind_project/designA.jpg" alt="">
              <img src="~/assets/img/school/semester6/ind_project/designB.jpg" alt="">
            </div>
            <div class="text">
              <b>Questions</b>
              <ul class="list">
                <li class="list-bullet">What did you see?</li>
                <li class="list-bullet">Did you see at what time the race starts?</li>
                <li class="list-bullet">Did you see at what time qualifying starts?</li>
                <li class="list-bullet">Did you notice anything else? What did you like or dislike?</li>
              </ul>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Hypothesis</h3>
                <img src="~/assets/img/school/icons/hypothesis.png" alt="">
              </div>
              <div class="label-cont">
                <p>I expect design B to be the most effective, because it’s the most straightforward since it contains
                  simple text that’s also used on the F1 and F1TV media platforms.</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <h3>Result</h3>
              <p>The research led to the following findings and products:</p>
            </div>
            <div class="text spacing">
              <p>I applied basic design principles/guidelines and the
                branding style of F1. The basic principles/guidelines were; layouts, icons, content alignment
                and content management. The applied branding guidelines were; typography, color palette, icons, shapes.
                Figma
                was used to create the designs below.</p>
              <img src="~/assets/img/school/semester6/ind_project/figma_widgets.jpg" alt="">
              <p>From the interviews and survey I concluded that a lot of people don't even think or know how to add a
                widget to their homescreen.
                This is why I made a tutorial in the widget app.</p>
              <div class="image-grid">
                <img src="~/assets/img/school/semester6/ind_project/widget_app.jpg" alt="">
              </div>
            </div>
            <div class="text">
              <b>Testing</b>
              <ul class="list">
                <li class="list-bullet">Participants thought design A had buttons you could click.
                </li>
                <li class="list-bullet">Participants found the styling of design B very similar to the style F1 media
                  platforms have
                </li>
                <li class="list-bullet">
                  Participants noticed the red button on both designs.
                </li>
              </ul>
            </div>
            <a target="_blank" href="./pdf/semester6/testplan.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View test plan</button></a>

            <p>After testing, I used the new information to make the final design iteration.</p>
            <div class="image-grid">
              <img src="~/assets/img/school/semester6/ind_project/finalDesign.jpg" alt="">
            </div>

            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Conclusion</h3>
                <img src="~/assets/img/school/icons/conclusion.png" alt="">
              </div>
              <div class="label-cont">
                <p>To answer the main question: <span><b>Which widget design is the most efficiënt at communicating the
                      information the user needs?</b></span></p>
                <div class="text">
                  <p>Design B had the most positive results. Participants liked that it was simplistic. One of the
                    participants said he read the information from the top to the bottom. This is most likely what makes
                    it easier/more simple to read. Participants also liked the overall look.</p>
                  <p>Other conclusions:</p>
                  <ul class="list">
                    <li class="list-bullet">Red button attracted too much attention while it’s not an important element.
                      Should get a different color or a stroke only.
                    </li>
                    <li class="list-bullet">Widgets could contain more abbreviations. This will allow for a bigger font
                      size which will help the user notice and read the most important information.
                    </li>
                    <li class="list-bullet">
                      The pre-race qualifying show, post-race qualifying show, pre-race show and post-race show are
                      exclusive to F1TV and Skysports. This means a lot of F1 fans don’t know what this means,
                      especially the abbreviations.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>
                  I didn’t manage to find 10 participants/5 participants for each design. This makes the test results
                  not as trustful as they could have been. However, I was happy about the test method I chose, it really
                  helped me find out what the users notice first and what they like/dislike.
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
