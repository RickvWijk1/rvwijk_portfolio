<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>User story - Plan of Action</h1>
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
                <p>The target audience has been defined, so now user stories can be formulated. The user stories will be
                  helpful, because in a way they set the criteria for your design.
                  PSV has also delivered their criteria after I advised them to make a (MoSCoW) list of app features
                  they would like us to explore. Picking a problem/feature, formulating a user story based on it and
                  making a Plan
                  of Action to organize the way the user story will be executed, ensures each of us will produce
                  high-quality results for PSV.
                </p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Approach</h3>
                <img src="~/assets/img/school/icons/approach.png" alt="">
              </div>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-field">
                  <p>Desktop</p>
                  <img src="~/assets/img/school/research_strats/field.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont text spacing">
                <p><b>Field research was applied,</b> because by talking to PSV we learned about their long term goals
                  in regard to the PSV app. This information was used to formulate user stories.</p>
                <div class="text">
                  <p>Each project member picked out one or two user stories that they
                    wanted to work on.
                    I decided to work on the user stories: "As a user I want to receive notifications on my phone so
                    that I can
                    get realtime updates from the club" and "As a user I want to assign tunes to notifications so that I
                    know
                    what kind of notification I received before I have even seen them". I reformulated these user
                    stories into
                    one since the first one was too generic and not concrete while the other was too limited.
                    The new user story became: <i>"As a PSV fan I want to receive notifications that give a more clear
                      context when
                      something happens that's related to a (PSV football) game so that I can keep up with what's
                      happening and be
                      more invested in the game".</i></p>
                </div>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question & Design Challenge</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <div class="text spacing">
                  <p>How can I let the PSV fans experience a more 'immersive'/atmospheric match experience via the PSV
                    app
                    by means of notifications?
                  </p>
                  <p>Design a notification system to provide PSV fans, who follow matches via the PSV app, with more
                    match
                    information, so that they get an immersive/atmospheric match experience.</p>
                </div>
              </div>
            </div>
              <div class="text">
                <b>Sub questions</b>
                  <ul class="list">
                    <li class="list-bullet">What is PSV's current approach in regard to match-related notifications?</li>
                    <li class="list-bullet">What are other football apps doing regarding notifications to improve the atmosphere/immersion? (is there perhaps an app that offers audio commentary?)</li>
                    <li class="list-bullet">What does the target audience think about match-related notifications? What are the experiences of the target group with regard to competition-related notifications? (irritations, needs, wishes, etc.)</li>
                    <li class="list-bullet">What kind of notifications are there?
                In terms of notifications, what is possible with Flutter?</li>
                  </ul>
              </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Why this user story?</h3>
              </div>
              <div class="label-cont">
                <p>
                  The reason I picked up this user story, is because PSV fans I interviewed stated that they sometimes
                  don't
                  know what's going on when there's a complicated situation in a game and are relying on textual
                  notifications. They feel like they're missing information and feel the need for visual context (a
                  video or
                  images). This includes the PSV app, but also other football score apps.
                </p>
                <p>In addition, PSV marked having a future-proof notification system as one of their main priorities.
                </p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Hypothesis</h3>
                <img src="~/assets/img/school/icons/hypothesis.png" alt="">
              </div>
              <div class="label-cont">
                <p>I expect to be able to improve the immersion for PSV fans by providing them with more visual and
                  audio information about what's happening before, during and after the game. Using video, gifs or
                  images in notifications might be an option, but I will have to research if this is possible on a
                  technical level and whether there's copyright issues.</p>
              </div>
            </div>
<a target="_blank" href="./pdf/semester6/user_story.pdf"><button
                  class="btnModalClose bntModalClose-bg-color">View plan of action</button></a>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>It took some time before I had my final main question and design challenge formulations. By asking
                  others to read it I got a good indication on whether they were concrete/clear enough.</p>
              </div>
            </div>
            <div class="text">
              <h3>What's next?</h3>
              <p>Now that I've my user story plan of action, I will research the formulated sub questions so that I will eventually be able to answer the main question.</p>
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
