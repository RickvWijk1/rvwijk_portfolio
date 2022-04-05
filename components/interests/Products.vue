<template>
  <section>
    
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/semesterSix/orientation">
        <div class="overview-grid" data_category="grp_advise" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Hi</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/semesterSix/orientation">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Hi</p>
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
