<template>
  <section>
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/projects/frontend_mentor">
        <div class="overview-grid" data_category="grp_advise"
          :style="{ backgroundImage: `url('./img/projects/frontend_mentor.png')` }">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Front-end challenges</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/projects/vfx">
        <div class="overview-grid" data_category="grp_advise"
          :style="{ backgroundImage: `url('./img/projects/vfx.jpg')` }">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>VFX Editing</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/projects/p5">
        <div class="overview-grid" data_category="grp_analyse"
          :style="{ backgroundImage: `url('./img/projects/p5.jpeg')` }">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>p5.js</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/projects/pixelart">
        <div class="overview-grid" data_category="grp_analyse"
          :style="{ backgroundImage: `url('./img/projects/pixelart.png')` }">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Pixel Art</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
<style lang="css" scoped>
@import '~/assets/css/productCards';
</style>
