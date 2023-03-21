<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/interests">×</NuxtLink>
          <h1>VFX Editing</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text spacing">
              <h3>During a semester I had a few days to work on a project of my own choosing.
              </h3>
              The movie series 'Harry Potter' is one of my favourite movie series and since I like video editing I
              decided to recreate some of the most known Harry Potter effects.
            </div>
            <div class="text spacing">
              <i>The 'Harry Potter intro' effect</i>

              <video style="border-style: none;" width="100%" height="auto" controls=""
                src="~/assets/vids/interests/vfx/HarryPotterWithFullTitle.mp4" data-video="0"></video>
            </div>
            <div class="text spacing">
              <i>The 'Lumos' effect</i>
              <video style="border-style: none;" width="100%" height="auto" controls=""
                src="~/assets/vids/interests/vfx/LumosWithVoiceOver.mp4" data-video="0"></video>
            </div>
            <div class="text spacing">
              <i>The 'Expecto Patronum' effect</i>
              <video controls muted style="border-style: none;" width="100%" height="auto"
                src="~/assets/vids/interests/vfx/ExpectoPatronummm.mp4" data-video="0"></video>
            </div>
            <div class="text spacing">
              <b>Result</b>
              <div class="video-section">
                <div class="about-desc-wrapper">
                  <p>View what activities me and my fellow students undertake during the bachelor 👇</p>
                </div>
                <div class="video-wrapper"><iframe width="560" height="315" style="--aspect-ratio: 3 / 4;"
                    src="https://www.youtube.com/embed/L2-a06F4e44" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe></div>
              </div>
            </div>
            <div class="text full-width">
              <a class="paddedText" target="_blank" href="https://rickvwijk1.github.io/portfolio/sprintx.html">
                <p>I made a simple tutorial on the 'Lumos' effect (this was made for
                  'TheLeakyCauldron.org') so if you are a big Harry
                  Potter/Wizarding World fan like me feel free to try it yourself.</p>
                <svg-icon name="external_link" class="svg-external-link" />
              </a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/interests"><button class="btnModalClose bntModalClose-bg-color">Close</button>
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
  @import '~/assets/css/video';

</style>
