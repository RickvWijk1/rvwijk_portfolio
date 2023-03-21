<template>
  <section>
    
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/interests/vfx">
        <div class="overview-grid" data_category="grp_advise" :style="{ backgroundImage: `url('./img/interests/vfx.jpg')`}">
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
      <NuxtLink class="modal-link" to="/modals/interests/p5">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('./img/interests/p5.jpeg')`}">
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
      <NuxtLink class="modal-link" to="/modals/interests/pixelart">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('./img/interests/pixelart.png')`}">
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
