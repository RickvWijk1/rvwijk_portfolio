<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Metaverse Prototyping</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>R. van Wijk, E. Banda, V.I. Petrove, S. Sodermans, V.A. Ivanova, T. Schiavone</i>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Approach</h3>
                <img src="~/assets/img/school/icons/approach.png" alt="">
              </div>
              <div class="research-tags-cont">
                <div class="research-tag research-active research-workshop">
                  <p>Workshop</p>
                  <img src="~/assets/img/school/research_strats/workshop.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Workshop research was applied,</b> because by video prototyping we were able to pitch our concept in a relatively fast way.
                </p>
              </div>
            </div>

            <div class="text">
              <p>With the help of Photoshop me and some of the project members made scenes that would be used in the video.</p>
              <div class="text spacing">
               
                <img src="~/assets/img/school/semester6/int_project/museumEntrance.jpg" alt="">
                <img src="~/assets/img/school/semester6/int_project/museum.jpg" alt="">
                <img src="~/assets/img/school/semester6/int_project/musemPaintingCloseUp.png" alt="">
                <img src="~/assets/img/school/semester6/int_project/musemPaintingCloseUpBurn.jpg" alt="">
              </div>
                </div>
              <div class="text">
                <h3>Video prototype</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/F4rhi1sEdN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            <div class="paddedTextLine"></div>
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
