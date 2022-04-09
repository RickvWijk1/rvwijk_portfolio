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
            <div class="text spacing ">
              <h3 class="centered">An interactive quiz app that keeps you and your family fit during quarantine!
              </h3>
              <img class="centered" src="~/assets/img/projects/quaquiz/mockup1.png" width="600px" alt="">
            </div>
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
            <div class="text spacing">
              <h3>How It Works</h3>
              <img src="~/assets/img/projects/quaquiz/Quarantine_Explanation.jpg" width="900px" alt="">
            </div>
            <div class="text spacing">
              <p>Some screenshots of the app.</p>
              <div class="image-grid">
                <img src="~/assets/img/projects/quaquiz/screen1.png" width="500px" alt="">
                <img src="~/assets/img/projects/quaquiz/screen2.png" width="500px"  alt="">
                <img src="~/assets/img/projects/quaquiz/screen3.png" width="500px" alt="">
              </div>
            </div>
            <div class="text spacing">
              <h3>Technology Behind The App</h3>
              <p>The app uses React-Native to make the app cross-platform.
                The react-native NFC library 'react-native-nfc-manager' makes the
                interaction possible.</p>
              <img src="~/assets/img/projects/quaquiz/react-native2.png" width="500px" alt="">
            </div>
              <div class="text centered full-width">
                <a class="paddedText" target="_blank" href="https://git.fhict.nl/I404350/Quarantine-Quiz">
                    <p>View the repo for more information here</p>
                    <svg-icon class="svg-github" name="github" />
                </a>
              </div>
          </div>

        </div>
        <div class="modal-footer">
          <NuxtLink to="/projects"><button class="btnModalClose bntModalClose-bg-color">Close</button>
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
