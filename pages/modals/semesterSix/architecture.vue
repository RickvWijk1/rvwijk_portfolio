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
                  <li class="list-bullet">Learned what data the PSV app uses</li>
                  <li class="list-bullet">Learned from what third parties the PSV app gets data</li>
                  <li class="list-bullet">Learned that PSV uses a CMS for their website</li>
                  <li class="list-bullet">Learned that PSV doesn't use a CMS for their app, but instead let TDE develop
                    it.</li>
                  <li class="list-bullet">Learned that PSV has got their own editorial office to produce content for the
                    website and app.</li>
                </ul>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Motivation</h3>
                <img src="~/assets/img/school/icons/motivation.png" alt="">
              </div>
              <div class="label-cont">
                <p>In order to be able to give PSV advice, there must first be investigated what the current ICT
                  architecture system that PSV uses for its media platforms looks like. Making an architecture diagram
                  will enable us to understand the current architecture better so that we can take it into account when
                  we design/redesign the media platforms.</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>

            <div class="image-description">
              <embed src="/pdf/semester6/architecture.pdf" width="100%" height="1000" type="application/pdf">
              <i>Click <a style="color: #4758fc;" target="_blank" href="/pdf/semester6/architecture.pdf">here</a>
                to open
                the
                PDF in a new tab.</i>
            </div>
            <div class="text">
              <h3>Result</h3>
              <p>The diagram below shows the flow of updating/maintaining the media platforms and what parties are
                involved in this process.</p>
            </div>
            <img src="~/assets/img/school/semester6/architecture.webp" alt="">
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>
                  It was quite difficult to get a good overview of all the architecture entities. This is probably
                  because half the information that was given to me by PSV was through email paragraphs and the other
                  half was verbally given. Summing everything up with bullet points helped. After that it was a lot
                  easier to visualize everything into an architecture diagram. I also had to ask PSV some extra
                  questions. One of them was about the role of Simac since they're PSV's IT partner. Apparently Simac
                  only provided IT facilities to PSV and had nothing to do with the developing/maintaining of their
                  media platforms.
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
