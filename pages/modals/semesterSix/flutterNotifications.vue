<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Flutter notifications</h1>
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
                <p>By researching which notification functionalities Flutter offers for the target audience and finding out how this works on a
                  technical level, advice can be given to PSV.</p>
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
              </div>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-desktop">
                  <p>Desktop</p>
                  <img src="~/assets/img/school/research_strats/library.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Desktop research was applied,</b> because I needed to know what notification functionalities
                  Flutter offers. In Flutter documentation or articles about Flutter I was able to find this
                  information. I made a list that contains the general/most
                  used/popular Flutter notification functionalities. These notification functionalities have been tried
                  out to understand how they work on a technical level. The corresponding best practices have been
                  noted down.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <p>Which Flutter notification functionalities can be used to improve the atmosphere/immersion of PSV
                  fans in regard to PSV football games in the PSV app?
                </p>
              </div>
            </div>
            <div class="text">
              <b>Sub questions</b>
              <ul class="list">
                <li class="list-bullet">What notifications functionalities does Flutter offer?</li>
                <li class="list-bullet">What are the corresponding best practices for the Flutter notification
                  functionalities?</li>
              </ul>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Hypothesis</h3>
                <img src="~/assets/img/school/icons/hypothesis.png" alt="">
              </div>
              <div class="label-cont">
                <p>Flutter is expected to offer an integration with Firebase to use push notifications, as both are from
                  Google. Furthermore, I expect to be able to enable customization options for the user, such as a
                  notification sound and adding images and text to a notification message to improve the
                  atmosphere/immersion for PSV fans.</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <h3>Result</h3>
              <p>The research led to the following findings and products:</p>
            </div>

            <div class="text spacing">
              <p><b>Findings</b></p>
              <div class="text spacing">
                <i>What notifications functionalities does Flutter offer?</i>
                <div class="text">
                  <b>Types of notifications</b>
                  <p>Flutter offers support for two types of notifications; push notifications & local notifications</p>
                  <p>“Local notifications originate from the application itself, as opposed to Push notifications which
                    are triggered from a remote server.” (Tomerpacific, 2021)</p>
                  <br>
                  <p>Flutter push notifications support:</p>
                  <ul class="list">
                    <li class="list-bullet">Flutter is supported by Firebase Cloud Messaging.</li>
                    <li class="list-bullet">Firebase supports iOS, Android, JavaScript and more languages (firebase
                      documentation).</li>
                    <li class="list-bullet">Firebase Cloud Messaging lets you send custom messages from your own
                      servers.</li>
                    <li class="list-bullet">Third-party SDKs such as OneSignal (App.onesignal.com) provide Flutter
                      support.</li>
                  </ul>
                  <p>Local notifications are useful to apply when the user has opened the app or foreground.
                    Notifications
                    will still arrive in contrast to push notifications (with Cloud Messaging).</p>
                  <!-- <img src="~/assets/img/school/semester6/flutter_notifications1.png" alt=""> -->
                </div>
                <a target="_blank" href="./pdf/semester6/flutter_notifications.pdf"><button
                    class="btnModalClose bntModalClose-bg-color">View notification system research</button></a>
                <div class="text spacing">
                  <b>POC results</b>
                  <img src="~/assets/img/school/semester6/flutterPOC.png" alt="">
                </div>
                <div class="text">
                  <a style="width:24em;" target="_blank" href="https://github.com/Semester6-PSV/flutter_notifications">
                    <div class="paddedText">
                      <p>View the repo for more information here</p>
                      <svg-icon class="svg-github" name="github" />
                    </div>
                  </a>
                </div>
                <div class="text">
                  <i>What are the associated best practices for the Flutter notification functionalities?</i>
                  <ul class="list">
                    <li class="list-bullet">Local notifications are best to use when the user has opened the app or
                      foreground. Notifications will still arrive in contrast to push notifications (with Cloud
                      Messaging).</li>
                    <li class="list-bullet">For the best push notification support with Flutter, it is recommended to
                      use Firebase. Firebase offers its own dashboard/environment in which notifications can be
                      developed and managed. Firebase, for example, gives you the option to segment users and thus send
                      personalized notifications.</li>
                    <li class="list-bullet">
                      Do not use GIFs or video files for notifications. These are not supported by Flutter. Only the
                      typical static files JPG/JPEG, PNG, ICO, etc. are supported.</li>
                  </ul>
                </div>
              </div>
              <div class="paddedTextLine"></div>
              <div class="text">
                <div class="learned-cont">
                  <h3>Conclusion</h3>
                  <img src="~/assets/img/school/icons/conclusion.png" alt="">
                </div>
                <div class="label-cont">
                  <p>To answer the main question: <span><b>Which Flutter notification functionalities can be used to
                        improve the atmosphere/immersion of PSV
                        fans in regard to PSV football games in the PSV app?</b></span></p>
                  <div class="text spacing">
                    <p>The functionalities below can be used to improve the atmosphere/immersion of PSV fans in regard
                      to matches in the PSV app.</p>
                    <div class="">
                      <b>Flutterfire & Flutter_local_notifications</b>
                      <ul class="list">
                        <li class="list-bullet">Title</li>
                        <li class="list-bullet">Paragraph</li>
                        <li class="list-bullet">Timezone-based notifications</li>
                        <li class="list-bullet">Notification schedule; each week, month, year, etc.</li>
                        <li class="list-bullet">Play notification sound</li>
                        <li class="list-bullet">Images</li>
                      </ul>
                    </div>
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
                    I found this research a bit complicated, because of all the different possibilities Flutter offers
                    and especially how many steps you have to take to set everything up correctly. This experience will
                    be shared with PSV so that they'll know what to expect from Flutter.
                  </p>
                </div>
              </div>
              <div class="text">
                <h3>What's next?</h3>
                <p>The sub questions of the user story have been answered. Now it's time to use this knowledge to create
                  designs and form my advice t PSV.</p>
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
