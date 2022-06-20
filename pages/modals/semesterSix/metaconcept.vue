<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Metaverse concepting</h1>
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
                <div class="research-tag research-active research-desktop">
                  <p>Desktop</p>
                  <img src="~/assets/img/school/research_strats/library.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Desktop research was applied,</b> because by doing research on the clients we learned what
                  products/services they offered, which gave us a more concrete direction to ideate with. Brainstorming within the project team was the method we used to ideate.
                </p>
              </div>
            </div>

            <div class="text">
              <h3>Context</h3>
              <p>Boymans is a museum in Rotterdam. This means it sells an experience. Visitors can walk around the
                museum
                and learn about artworks of all kinds. Of course, visitors can't just touch everything and have to keep
                their distance to some of the artworks. Especially for kids it can be tempting to touch everything, run
                around out of boredom or pure concentration problems. </p>
            </div>
            <div class="text">
              <h3>Concepting</h3>
              <p>What if the children can run around, get as close to artworks as they want to, touch them, even throw
                them around, smash them, getting rid off all their energy and experimenting like kids love to do. The
                metaverse makes this possible. Kids can stay home and use their VR system to visit the Boymans museum
                virtually. This way Boymans won't have to worry about kids causing chaos and damage while the kids can
                do whatever they like in the virtual museum.

                Of course the main purpose of a museum is to educate. For this reason we added another element to the
                concept; kids get to see information popup about the (hi)story behind artworks by standing in front of
                it. The information is followed by 3 interactive props. One of the props is related to the artwork and
                if chosen, the kids can destroy the artwork with the prop.</p>
                <br>
              <img src="~/assets/img/school/semester6/int_project/brainstorm.png" alt="">
              <i>The image is not from our group, but it's the same method we used.</i>
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
