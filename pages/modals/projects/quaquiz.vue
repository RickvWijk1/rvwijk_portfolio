<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
          <h1>QuaQuiz</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <i>An interactive quiz app that keeps you and your family fit during quarantine!
            </i>
            <img src="~/assets/img/projects/quaquiz/mockup1.png" width="80%" alt="">
            <div class="paddedText">
              <p>
                A lot of people have been infected with the Corona virus and had to go into
                quarantine. Even more people have been forced to live and work at home while
                their local gyms closed. This caused people to fail to do their required
                amount of excercise. Another problem is that tensions within a family can
                run high
                when you're constantly at home together.
                With the QuaQuiz app young families can relieve their stress by running
                around the house answering questions as quick as possible.
              </p>
              <div class="paddedTextLine-white"></div>
            </div>
          </div>
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <i>How It Works</i>
              <img src="~/assets/img/projects/quaquiz/Quarantine_Explanation.jpg" style="" width="100%" alt="">
              <p>Some screenshots of the app.</p>
              <img src="~/assets/img/projects/quaquiz/screen1.png" style="" width="45%" alt="">
              <img src="~/assets/img/projects/quaquiz/screen2.png" style="margin-left: 1.2em;" width="45%" alt="">
              <img src="~/assets/img/projects/quaquiz/screen3.png" style="margin-top: 1.2em;" width="45%" alt="">
              <i>Technology Behind The App</i>
              <p>The app uses React-Native to make the app cross-platform.
                The react-native NFC library 'react-native-nfc-manager' makes the
                interaction possible.</p>
              <img src="~/assets/img/projects/quaquiz/react-native2.png" style="" width="80%" alt="">
              <a target="_blank" href="https://git.fhict.nl/I404350/Quarantine-Quiz">
                <div class="paddedText">
                  <p>View the repo for more information here</p>
                  <!-- <img src="~/assets/img/projects/quaquiz/github.svg" style="width: 10%;" alt="Github"> -->
                </div>
              </a>
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

  }

</script>

<style>
  @import '~/assets/css/modal.css';

</style>

