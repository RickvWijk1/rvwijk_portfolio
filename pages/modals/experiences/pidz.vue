<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/experiences">×</NuxtLink>
          <h1>PIDZ</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text centered spacing">
              <h3>Building and maintaining a digital platform which thousands of freelancers in healthcare use to
                connect
                with
                healthcare institutions.
              </h3>
              <div class="text">
                <div class="image-grid">
                  <img src="~/assets/img/projects/pidz/app1.jpg" width="300px" alt="">
                  <img src="~/assets/img/projects/pidz/app2.jpg" width="300px" alt="">
                </div>
                <i>PIDZ app</i>
              </div>
              <div class="text">
                <img src="~/assets/img/projects/pidz/web1.jpg" width="800px" alt="">
                <i>PIDZ web</i>
              </div>
            </div>
            <div class="paddedText">
              <a class="centered" target="__blank" href="https://pidz.nl/"><img
                  src="~/assets/img/projects/pidz/pidz.webp" width="300px" alt=""></a>
              <p>
                PIDZ connects healthcare professionals to healthcare institutions. Through their software the healthcare
                professionals can accept assignments from the healthcare institutions. PIDZ has their own development
                team consisting out of Product Owners, Scrum Masters, Front-end & Back-end developers. Check <a
                  target="__blank" href="https://pidz.nl/over-pidz/" class="txt-link white-link">this link</a> for more
                information about
                PIDZ.
              </p>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="text centered spacing">
              <div class="text">
                <div class="learned-cont">
                  <h3>My contribution</h3>
                  <img src="~/assets/img/school/icons/contribution.png" alt="">
                </div>
                <p>Together with a team of front-end developers I worked on the development of a new web platform and
                  maintained the existing app and web platform.</p>
                <div class="label-cont">
                  <ul class="spacing list">
                    <li class="list-bullet">Helped shape a new way of working; previously the PIDZ development team were
                      not optimally making use of components. At the start of my employment at PIDZ, I noticed that
                      components
                      were often not reused properly or too specific to be used multiple times. As a team we worked on
                      setting up a component library with a set of rules/guidelines on how they should be used. I
                      suggested that we should apply an atomic design structure for the component library and
                      communicated with UX that they should adopt the same structure in their Sketch project so that UX
                      and Development would be working in the same flow.
                      <p>Now PIDZ can reuse their components across all their platforms reducing development time and
                        improving consistency.</p>
                    </li>
                    <div class="text">
                      <img src="~/assets/img/projects/pidz/histoire.png" alt="">
                      <i>An example of a Vue 3 component library</i>
                    </div>
                    <li class="list-bullet">Helped build the new MijnPIDZ calendar; PIDZ wanted to renew their calendar
                      feature. The key aspects I developed are the responsivity of the calendar and adding
                      validation to the
                      calendar item forms. The majority of this page consists out of components from the component
                      library (e.g. the buttons, dropdowns, form fields and calendar items).</li>
                    <div class="text">
                      <img src="~/assets/img/projects/pidz/webAgenda.jpg" width="800px" alt="">
                      <i>The new calendar made with Vue 3</i>
                    </div>
                    <li class="list-bullet">Aside from the big features mentioned above, I also contributed to a number
                      of smaller yet very much needed aspects:
                      <ul class="list">
                        <li class="list-bullet">Adding Google Analytics to the new web platform.</li>
                        <li class="list-bullet">Fixing bugs in the app and on the old web platform.</li>
                        <li class="list-bullet">Adding a GitLab integration to ClickUp to improve the ticket workflow.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text spacing">
                <h3>Technologies used</h3>
                <div class="image-grid">
                  <img src="~/assets/img/projects/technologies/html_logo.png" width="100px" alt="">
                  <img src="~/assets/img/projects/technologies/css_logo.png" width="100px" alt="">
                  <img src="~/assets/img/projects/technologies/typescript.png" width="180px" alt="">
                  <img src="~/assets/img/projects/technologies/sass.png" width="180px" alt="">
                  <img src="~/assets/img/projects/technologies/vue.png" width="180px" alt="">
                  <img src="~/assets/img/projects/technologies/histoire.png" width="180px" alt="">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/experiences"><button class="btnModalClose bntModalClose-bg-color">Close</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {

}

</script>

<style>
@import '~/assets/css/modal.css';
</style>
