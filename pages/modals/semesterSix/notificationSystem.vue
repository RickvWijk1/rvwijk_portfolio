<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Current notification system</h1>
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
                <p>Researching the current notification system of PSV's app helps see what features are already in place
                  and how the user experience currently is. With that information I can look for ways to improve the
                  current system. On a technical level this is also useful research.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Approach</h3>
                <img src="~/assets/img/school/icons/approach.png" alt="">
              </div>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-lab">
                  <p>Lab</p>
                  <img src="~/assets/img/school/research_strats/lab.png" alt="">
                </div>
                <div class="research-tag research-active research-field">
                  <p>Field</p>
                  <img src="~/assets/img/school/research_strats/field.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Lab research was applied,</b> because by testing the notifications system of PSV I got a good
                  understanding of what I experience as a PSV fan.</p>
                <p>I tested the PSV app by turning on all notifications and experiencing how the system works/makes you
                  feel on match days. The strengths, weaknesses, opportunities and threats were noted down.</p>
              </div>
              <div class="research-text label-cont">
                <p><b>Field research was applied,</b> because by talking to PSV I learned a few extra things about the
                  way notifications are handled on a technical level.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <p>What does the current notification system of the PSV app look like on a technical and visual level?
                </p>
              </div>
            </div>
            <div class="text">
              <b>Sub questions</b>
              <ul class="list">
                <li class="list-bullet">What functionalities does the notification system have? What options does the
                  user have?</li>
                <li class="list-bullet">Which notification functionalities contribute to improving the
                  atmosphere/immersion for the fans around matches?</li>
                <li class="list-bullet">What are the strengths, weaknesses, opportunities and threats of the
                  notification system?</li>
              </ul>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Hypothesis</h3>
                <img src="~/assets/img/school/icons/hypothesis.png" alt="">
              </div>
              <div class="label-cont">
                <p>PSV's app notification system is expected to have standard notification features such as push
                  notifications for when a match starts, ends, when a goal has been scored and when red cards are
                  dropped. It has already become known in a previous study that competition data is retrieved from the
                  Gracenote database. Visually, I expect a setting page for notifications in the PSV app and I expect
                  notification messages to contain only text.</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <h3>Result</h3>
              <p>The research led to the following findings and products:</p>
            </div>
            <div class="text spacing">
              <p><b>Findings</b></p>
              <div class="text">
                <i>What functionalities does the notification system have? What options does the user have?</i>
                <img src="~/assets/img/school/semester6/notification_options.png" alt="">
              </div>
              <div class="text">
                <i>Which notification functionalities contribute to improving the atmosphere/immersion for the fans
                  around matches?</i>
                <img src="~/assets/img/school/semester6/notification_functions.png" alt="">
              </div>
              <i>What are the strengths, weaknesses, opportunities and threats of the notification system?</i>
              <img src="~/assets/img/school/semester6/notification_swot.png" alt="">
              <a target="_blank" href="./pdf/semester6/PSV_notificatiesysteem.pdf"><button
                  class="btnModalClose bntModalClose-bg-color">View notification system research</button></a>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Conclusion</h3>
                <img src="~/assets/img/school/icons/conclusion.png" alt="">
              </div>
              <div class="label-cont">
                <p>To answer the main question: <span><b>What does the current PSV app notification system look like on
                      a technical and visual level?</b></span></p>
                <div class="text">
                  <p>The notification system consists of four categories:</p>
                  <ul class="list">
                    <li class="list-bullet">News notifications</li>
                    <li class="list-bullet">Match notifications</li>
                    <li class="list-bullet">Personalized notifications</li>
                    <li class="list-bullet">Video notifications</li>
                  </ul>
                </div>
                <div class="text">
                  <p>The match notification system works as follows:</p>
                  <ul class="list">
                    <li class="list-bullet">Users can choose to turn on notifications for kick-off, goals, cards,
                      halftime, var decisions and final score.</li>
                    <li class="list-bullet">Every minute the app checks for new match data in a Gracenote database</li>
                    <li class="list-bullet">As soon as the app has retrieved new data, push notifications are sent to
                      the users who have the appropriate settings on.</li>
                    <p>45-54 years old will be prioritized over other ages if needed. This depends on the user stories.
                    </p>
                  </ul>
                </div>
                <div class="text">
                  <p>The viewer can:</p>
                  <ul class="list">
                    <li class="list-bullet">view an overview of the notification options</li>
                    <li class="list-bullet">turn each individual notification option on and off</li>
                    <li class="list-bullet">view notification messages that contain a header and paragraph text in their
                      notifications centre</li>
                    <li class="list-bullet">view set extra settings in their phone's notification settings</li>
                    <p>45-54 years old will be prioritized over other ages if needed. This depends on the user stories.
                    </p>
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
                  I gained a lot of new insights that will help me watch out for threats, but keep the strengths when
                  designing a new notification system.
                  Testing the current notification system myself was interesting and helped me immerse myself in the
                  experience of a PSV app user. </p>
              </div>
            </div>
            <div class="text">
              <h3>What's next?</h3>
              <p>The first sub question is answered. Now the rest of the sub questions require research to be answered.</p>
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
