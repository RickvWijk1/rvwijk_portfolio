<template>
  <section>
    
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/projects/quaquiz">
        <div class="overview-grid" data_category="grp_advise" :style="{ backgroundImage: `url('./img/projects/questionMarkArt.jpg')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>QuaQuiz</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/projects/mft">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('./img/projects/MFM.jpg')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>MFT</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/projects/solid">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('./img/projects/solid.jpeg')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>SolidSight</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/projects/solid">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('./img/projects/fect.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>FECT Toolkit</p>
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
