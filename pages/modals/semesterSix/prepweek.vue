<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Preparation Week</h1>
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
                <h3>Context</h3>
              </div>
              <div class="label-cont">
                <p>In</p>
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
                <p><b>Workshop research was applied,</b> because</p>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <h3>First contact</h3>
             <p>After the teams were announced, I sought contact by making a Teams group and sending the international guest student an invite.</p>
                <img src="~/assets/img/school/semester6/int_project/teams.png" alt="">
            </div>
            <div class="text">
              <h3>Assigment 1</h3>
              <p>The first assignment was about getting to know each other and diving into the metaverse by answering
                the following questions:</p>
                <ul class="list">
                    <li class="list-bullet">Research the question “What is the Metaverse?”.</li>
                    <li class="list-bullet"> Find best practices of brands that are already “into the Metaverse”.</li>
                    <li class="list-bullet">What is your opinion on the Metaverse? Is it a good idea or not? Why? Why not? Do you like it, Does it scare you, does it make you uncomfortable, is it progress?</li>
                  </ul>
                  <p>Each of us answered these questions and we discussed our answers afterwards.</p>
            </div>
            <div class="text">
              <h3>Assigment 2</h3>
              <p>Make your own digital Avatar. For this you can do whatever you want, but make sure that your avatar is a reflection of your personality or a reflection of what you would like your personality to be in a virtual world.</p>
            </div>
            <div class="text">
              <h3>Assigment 3</h3>
              <p>D</p>
            </div>
            <div class="paddedTextLine"></div>
            <a target="_blank" href="./pdf/semester6/architecture.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View software architecture research in PDF</button></a>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>
                  It was
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
