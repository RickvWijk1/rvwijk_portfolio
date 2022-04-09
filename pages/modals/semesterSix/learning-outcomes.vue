<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Learning Outcomes</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <p>View the learning outcomes I had to meet for this semester and
                see how I prove that I have met the required learning outcomes.</p>
            </div>
          </div>
            <div class="pdf-padding">
              <div class="image-description">
                <i>Click <a style="color: #4758fc;" target="_blank"
                    href="./pdf/learning_outcomes.pdf">here</a>
                  to open
                  the
                  PDF in a new tab.</i>
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
