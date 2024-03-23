<template>
  <section>
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/experiences/fect">
        <div class="overview-grid" data_category="grp_analyse"
          :style="{ backgroundImage: `url('./img/projects/fect.png')` }">
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
      <NuxtLink class="modal-link" to="/modals/experiences/graduation">
        <div class="overview-grid" data_category="grp_analyse"
          :style="{ backgroundImage: `url('./img/projects/graduation.png')` }">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Component Management</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/experiences/pidz">
        <div class="overview-grid" data_category="grp_analyse"
          :style="{ backgroundImage: `url('./img/projects/pidz.png')` }">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>PIDZ</p>
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
