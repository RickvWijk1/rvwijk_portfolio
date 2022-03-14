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
              <p>test</p>
            </div>
          </div>
          <div class="modal-footer">
            <NuxtLink to="/semesters/semesterSix"><button class="btnModalClose bntModalClose-bg-color">Close</button></NuxtLink>
          </div>
        </div>
      </div>
      
          <NuxtLink to="/semesters/semesterSix" class="close-modal" ><div class="filler"></div></NuxtLink>
  </div>

</template>

<script>
  export default {

  }

</script>

<style>

  @import '~/assets/css/modal.css';

</style>
