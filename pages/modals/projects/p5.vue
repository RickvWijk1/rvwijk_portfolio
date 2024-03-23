<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
          <h1>p5.js</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text spacing ">
              <h3>How does one draw shapes in web development?
              </h3>

            </div>
            <div class="text spacing ">
              <p>This is a question that occured to me when I wanted to make a login form that had an interesting
                design.</p>
              <img src="~/assets/img/projects/p5/p5.png" width="800px" alt="">
            </div>

            <div class="text spacing ">
              <p>p5.js is a JavaScript library that allows us to draw whatever you want to the canvas.</p>
              <img src="~/assets/img/projects/p5/p5logo.png" width="200px" alt="">
              <p>Of course I could have simply used an image to get the shape design, but what's the fun in that?</p>

            </div>
            <div class="text spacing ">
            </div>

            <div class="text spacing ">
              <p>To get an understanding of how p5 works and what I can use, I started experimenting with the basics.
              </p>

              <div class="image-grid">
                <img src="~/assets/img/projects/p5/house.png" width="800px" alt="">
                <img src="~/assets/img/projects/p5/houseCode.png" width="800px" alt="">
              </div>

            </div>
            <div class="text spacing ">
              After some practice, I started developing the login form, with this being the end result:
              <img src="~/assets/vids/projects/p5/form1.gif" width="800px" alt="">
            </div>
            <div class="text centered full-width">
              <a class="paddedText" target="_blank" href="https://github.com/RickvWijk1/p5_Login">
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

.image-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
