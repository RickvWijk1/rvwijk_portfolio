<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
          <h1>Modern Football Manager</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <h3 class="centered">A football management app for amateur teams!</h3>
            <img class="img-round centered" src="~/assets/img/projects/mft/trainer.jpg">
            <div class="paddedText">
              <p>
                Many amateur football coaches still use pen and paper to mark attendance
                and
                write down tactics. Some trainers don't even take notes.
                This medieval method is chaotic, unconvenient and takes too long.
                There's also trainers who take the training/matches a little too
                seriously or neglect them.
                Players often say nothing to the trainer about this, because they do not
                know any better
                or are afraid to tell the trainer.
              </p>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="text centered spacing">
              <div class="text">
                <h3>How It Works</h3>
              </div>
              <div class="text spacing">
                <p class="centered">The user chooses to log in as trainer or player</p>
                <img src="~/assets/img/projects/mft/inlog.png" width="100%" alt="">
              </div>
              <div class="justified-between spacing">
                <i>Player's view</i>
                <i>Trainer's
                  view</i>
              </div>
              <img src="~/assets/img/projects/mft/match1.png" width="100%" alt="">
              <div class="justified-between spacing">
                <p class="max-w-40">The player can edit their stats, add their club, nationality,
                  position and picture</p>
                <p class="max-w-40">The trainer has
                  an overview of all players</p>
              </div>
              <img src="~/assets/img/projects/mft/match2.png" width="100%" alt="">
              <div class="justified-between spacing">
                <p class="max-w-40">The player can send a position change and training excercise request
                  to their trainer</p>
                <p></p>
                <p class="max-w-40">The trainer can
                  keep up with the attendance of each player</p>
              </div>
              <img src="~/assets/img/projects/mft/match3.png" width="100%" alt="">
              <div class="justified-between spacing">
                <p class="max-w-40">The player gets a confirmation after sending a
                  request. As a little mini game the
                  player can shoot the ball by shaking their device as fast as they
                  can</p>
                <p></p>
                <p class="max-w-40">The trainer
                  can view the statistics of each player</p>
              </div>
            </div>

            <div class="text spacing">
              <h3>Technology Behind The App</h3>
              <p>The app is build for iOS only. It's has been build in the Xcode IDE and coded
                with
                Swift. The app uses the built-in accelerometer
                hardware from the iPhone.</p>
              <img src="~/assets/img/projects/mft/swift.jpg" width="700px" alt="">
            </div>
            <div class="text centered full-width">
              <a class="paddedText" target="_blank" href="https://git.fhict.nl/I425384/smartmobile-repo">
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
