<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Sprint 0 - Orientation</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
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
                <div class="research-tag research-active research-workshop">
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
                  <li class="list-bullet">Learned how to apply glassmorphism; when to use
                    and when not to use and how to combine it with other
                    elements correctly
                  </li>
                  <li class="list-bullet">Learned how to create glassmorphism in Adobe XD
                  </li>
                </ul>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Motivation</h3>
                <img src="~/assets/img/school/icons/motivation.png" alt="">
              </div>
              <div class="label-cont">
                <p>Designs are necessary since it can be used for testing in order to
                  improve the app. This type of iterating is a lot quicker than first
                  developing and then adjusting the app. Designs also make sure everything
                  is clear for the developers so that development takes considerably less
                  time.
                </p>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <p>Insert research output/products</p>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>Because of lack of time I have abandoned this project. Instead, I
                  combined the Freaky Friday assignment and iOS assignment into one
                  project. From now on I will work together with Angel Hadzhiev, Raymond
                  Hildering and Marco Ketelaars and come up with a new concept.</p>
                <p>I think it's a shame that I had to abandon this project, because it
                  seems like the concept offers a solution to a problem I myself have
                  experienced and it would have also given me plenty of opportunities to
                  learn to develop with AR.</p>
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
