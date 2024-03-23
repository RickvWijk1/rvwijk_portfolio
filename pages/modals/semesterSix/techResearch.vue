<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Software Architecture</h1>
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
                <p>The widget app will eventually need to be developed, possibly published and expanded. Research into
                  what technologies are the most effective solution needs to be done. In addition, the software
                  architecture should be mapped to help maintain the project.</p>
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
                <div class="research-tag research-active research-workshop">
                  <p>Workshop</p>
                  <img src="~/assets/img/school/research_strats/workshop.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Desktop and workshop research were applied.</b> A list of the criteria will be made to judge what
                  technologies are the most effective/suited to use for developing the widget app. In addition, POC’s
                  will be made in order to get a better sense of what technologies will be most suited. The criteria
                  list is based upon the desktop and workshop research findings.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <p>What technologies are most effective/suited for developing the F1 Android widget application?</p>
              </div>
            </div>
            <div class="text">
              <b>Sub questions</b>
              <ul class="list">
                <li class="list-bullet">What technology allows you to make widgets for Android?</li>
                <li class="list-bullet">What are the criteria and what are the positives and negatives for each
                  technology?</li>
                <li class="list-bullet">What additional/third party technologies are needed?</li>
              </ul>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Hypothesis</h3>
                <img src="~/assets/img/school/icons/hypothesis.png" alt="">
              </div>
              <div class="label-cont">
                <p>My expectation is that Android will be the most effective/suited technology, since native platforms
                  typically offer more support for less significant features compared to hybrid frameworks like Flutter,
                  which are newer technologies and generally have less support for features like widgets.</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <h3>Result</h3>
              <p>The research led to the following findings and products:</p>
            </div>
            <div class="text">
              <p><b>Findings</b></p>

              <div class="label-cont">
                <i>What technology allows you to make widgets for Android?</i>
                <ul class="list">
                  <li class="list-bullet">Android</li>
                  <li class="list-bullet">Hybrid frameworks</li>
                </ul>
              </div>
              <div class="label-cont">
                <i>What are the criteria and what are the positives and negatives for each technology?</i>
                <ul class="list">
                  <li class="list-bullet">Widget support</li>
                  <li class="list-bullet">Design support</li>
                  <li class="list-bullet">Scalability</li>
                </ul>
                <ul class="list">
                  <b>Flutter</b>
                  <li class="list-bullet">Flutter has easy to use front-end components</li>
                  <li class="list-bullet">Google is committed to Flutter so you can expect Flutter to keep up the
                    support</li>
                  <li class="list-bullet">Managing a Flutter project is more difficult compared to an Android project,
                    because there’s a lot of extra files (for iOS for example)
                  </li>
                </ul>
                <ul class="list">
                  <b>Android</b>
                  <li class="list-bullet">Android Studio has an easy to use drag & drop design interface</li>
                  <li class="list-bullet">Easier to publish app to the Playstore</li>
                  <li class="list-bullet">Generating widget files + customizing widget requires Android Studio</li>
                </ul>
              </div>
              <div class="label-cont">
                <i>What additional/third party technologies are needed?</i>
                <ul class="list">
                  <li class="list-bullet">Database</li>
                  <li class="list-bullet">API</li>
                </ul>
              </div>
              <a target="_blank" href="./pdf/semester6/ind_tech.pdf"><button
                  class="btnModalClose bntModalClose-bg-color">View research in PDF</button></a>
            </div>
            <div class="text">
              <p><b>C4 Diagram</b></p>
              <p>To map the software architecture I followed the design principles of the C4 Model. This is a level 2-3
                C4 model, meaning it shows containers like a mobile app, database, but also some components like a
                widget component.</p>
            </div>
            <img src="~/assets/img/school/semester6/ind_project/architecture_diagram.jpg" alt="">
            <a target="_blank" href="_nuxt/assets/img/school/semester6/ind_project/architecture_diagram.jpg"><button
                class="btnModalClose bntModalClose-bg-color">View image in new tab</button></a>
            <div class="text">
              <p><b>POCS</b></p>
              <div class="text">
                <a style="width:24em;" target="_blank" href="https://github.com/RickvWijk1/android_widget_pocs">
                  <div class="paddedText">
                    <p>View the repo for more information here for the POCS</p>
                    <svg-icon class="svg-github" name="github" />
                  </div>
                </a>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Conclusion</h3>
                <img src="~/assets/img/school/icons/conclusion.png" alt="">
              </div>
              <div class="label-cont">
                <p>To answer the main question: <span><b>What technologies are most effective/suited for developing the
                      F1 Android widget application?</b></span></p>
                <ul class="list">
                  <li class="list-bullet">IDE: Android Studio</li>
                  <li class="list-bullet">Language: Kotlin/Java</li>
                  <li class="list-bullet">Additional tools/technologies: No third-party API will be used since there’s
                    no good option available. Instead, Android's local database with 'The Room' l ibrary will be used.
                  </li>
                </ul>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>
                  During my research I couldn't decide between choosing Kotlin or Java. Kotlin is new and will be more
                  important in the future, but Java has more community support. Luckily, Android Studio has a language
                  conversion tool so the Android project can be converted easily in the future.
                </p>
              </div>
            </div>
            <div class="text">
              <h3>What's next?</h3>
              <p>More POC”s (e.g. POC of the database) need to be made to check if the software architecture will indeed
                be effective.</p>
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
