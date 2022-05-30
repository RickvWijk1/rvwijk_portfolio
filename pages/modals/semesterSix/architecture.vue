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
                <p>In order to be able to give PSV advice, there must first be investigated what the current ICT
                  architecture system that PSV uses for its media platforms looks like. Making an architecture diagram
                  will enable us to understand the current architecture better so that we can take it into account when
                  we design/redesign the app.</p>
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
                <p><b>Desktop research was applied,</b> because this way I could get information on how PSV's media
                  platforms are set-up and maintained. How does the app receive data for example? What journey does an
                  article have to make to land up in the app viewable for users?</p>
                <p>I talked to our PSV contacts. They provided me with information about their software architecture.
                </p>
                <p><b>Workshop research was applied,</b> because an architecture diagram of PSV's current software
                  architecture would give a good overview of the situation. From this overview we could potentially
                  discover how we can improve the app or the system in general.</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <p>What does the current IT architecture system of PSV's media platforms look like?</p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Hypothesis</h3>
                <img src="~/assets/img/school/icons/hypothesis.png" alt="">
              </div>
              <div class="label-cont">
                <p>With PSV's current IT architecture system, I think they use APIs to load data and they also have a
                  database to store all the data. I mainly expect PSV to save user data and load data from matches since
                  I know you can create an account for the PSV app.</p>
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
                <i>What media platforms does PSV own?</i>
                <ul class="list">
                  <li class="list-bullet">iOS native app</li>
                  <li class="list-bullet">Android native app</li>
                  <li class="list-bullet">Web app (<a class="txt-link" target="_blank"
                      href="https://www.psv.nl/">PSV.nl</a>)</li>
                </ul>
              </div>
              <div class="label-cont">
                <i>What services/technologies do these media platforms use?</i>
                <ul class="list">
                  <li class="list-bullet">RSS feeds; to load in articles, videos and information about matches</li>
                  <li class="list-bullet">Headless CMS/headless pages; makes it easier to develop pages and makes pages
                    load faster</li>
                  <li class="list-bullet">JWPlayer; a video player that can provides video controls
                  </li>
                  <li class="list-bullet">Gracenote; provides data about the schedule, results and statistics with
                    regard to matches</li>
                  <li class="list-bullet">Sports Alliance; provides authentication (SSO and My PSV)</li>
                </ul>
              </div>
              <div class="label-cont">
                <i>What parties are involved?</i>
                <ul class="list">
                  <li class="list-bullet">PSV uses a CMS that's called XperienCentral (version 10.30.0 R30) of the
                    company GX Softwaren</li>
                  <li class="list-bullet">The Simac company is the IT partner of PSV. PSV employees work in an
                    environment that's facilitated by SImac</li>
                  <li class="list-bullet">Web app (<a class="txt-link" target="_blank"
                      href="https://www.psv.nl/">PSV.nl</a>)</li>
                </ul>
              </div>
            </div>
            <a target="_blank" href="./pdf/semester6/architecture.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View software architecture research in PDF</button></a>
            <div class="text">
              <p><b>Software Architecture Diagram</b></p>
              <p>The diagram below shows the flow of updating/maintaining the media platforms and what parties are
                involved in this process. Visio was used to create the diagram.</p>
              <p> After I created the diagram I found out about the C4 model. The C4 model is for mapping all kinds of
                entities that are involved in a software architecture system.
                My goal was to understand the current PSV software architecture as a whole, not a specific part. In
                regard to the C4 model, the diagram below shows Level 1 (Context), Level 2 (Containers) and Level 3
                (Component).
                For example, the 'PSV redactie' is part of the context, while the PSV app is a container and the Sports
                Alliance database is a component.
              </p>
            </div>
            <img src="~/assets/img/school/semester6/architecture.webp" alt="">
            <a target="_blank" href="_nuxt/assets/img/school/semester6/architecture.webp"><button
                class="btnModalClose bntModalClose-bg-color">View image in new tab</button></a>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Conclusion</h3>
                <img src="~/assets/img/school/icons/conclusion.png" alt="">
              </div>
              <div class="label-cont">
                <p>To answer the main question: <span><b>What does the current IT architecture system of PSV's media
                      platforms look like?</b></span></p>
                <ul class="list">
                  <li class="list-bullet">The XperienCentral CMS ensures that content is placed on the website.</li>
                  <li class="list-bullet">The PSV.nl website receives data from JWPlayer, Gracenote and Sports Alliance
                    in the form of
                    videos, statistics, and user data.</li>
                  <li class="list-bullet">The app retrieves this data from the website. Sometimes the app loads a
                    webview instead of the data
                    in a native view.</li>
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
            <div class="text">
              <h3>What's next?</h3>
              <p>After understanding the context of the assignment, it's time to define a target audience and get in
                touch so that it's clear for who we're designing.</p>
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
