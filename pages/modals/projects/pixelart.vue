<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
          <h1>Pixel Art</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text spacing ">
              <h3>How is pixel art made?
              </h3>

            </div>
            <div class="text spacing ">
              <p>Turns out it is very easy to make pixel art by using Adobe Illustrator! All you have to do is make a
                rasterized grid and use the bucket paint tool to fill grid squares with colour!</p>

              <p>Are you familiar with the drink 'Apple Bandit'? It's one of my favourite cider drinks, so I decided to
                make a special 'retro' edition of Apple Bandit.</p>
              <img src="~/assets/img/projects/pixel_art/pixelart.png" width="600px" alt="">
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
