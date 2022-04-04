<template>
  <section>
    <input type="radio" id="grp_all" name="semester6" value="grp_all" checked>
    <input type="radio" id="grp_analyse" name="semester6" value="grp_analyse">
    <input type="radio" id="grp_advise" name="semester6" value="grp_advise">
    <input type="radio" id="grp_design" name="semester6" value="grp_design">
    <input type="radio" id="grp_realise" name="semester6" value="grp_realise">
    <input type="radio" id="grp_personal" name="semester6" value="grp_personal">
    <input type="radio" id="grp_oriented" name="semester6" value="grp_oriented">
    <input type="radio" id="grp_manage" name="semester6" value="grp_manage">
    <ol class="filters">
      <li class="tooltip">
        <img class="info-png" src="~/assets/img/school/icons/info.png" alt="">
        <div class="right">
          <div class="text-content">
            <p>Want to see the project in chronological order? The products are in order by
              default. Make sure the 'All' filter is selected.</p>
            <p>The filters are the learning outcomes I had to fullfill.</p>
          </div>
        </div>
      </li>
      <li>
        <label for="grp_all">All</label>
      </li>
      <li>
        <label for="grp_analyse">User Interaction - Analyse & Advise</label>
      </li>
      <li>
        <label for="grp_design">User Interaction - Execution & Validation</label>
      </li>
      <li>
        <label for="grp_realise">Software Design</label>
      </li>
      <li>
        <label for="grp_manage">Future-oriented Organisation</label>
      </li>
      <li>
        <label for="grp_advise">Investigative Problem Solving</label>
      </li>
      <li>
        <label for="grp_personal">Personal Leadership</label>
      </li>
      <li>
        <label for="grp_oriented">Goal-oriented Interaction</label>
      </li>
    </ol>
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/semesterSix/projectPlan" data_category="grp_design">
        <div class="overview-grid" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Project Plan</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/semesterSix/architecture" data_category="grp_realise">
        <div class="overview-grid" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Software architecture</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/semesterSix/interviews" data_category="grp_advise grp_design">
        <div class="overview-grid" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Target Audience Interviews</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/semesterSix/userstories" data_category="grp_analyse">
        <div class="overview-grid" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>User stories - Plan of Action</p>
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
  @import '~/assets/css/buttonFilter';
  @import '~/assets/css/productCards';

  section {
    justify-content: center;
    align-items: center;
  }

  .filters li:nth-child(odd),
  .filters li:nth-child(even) {
    justify-self: center;
  }

  .filters label {
    font-size: 1rem;
    padding: 0.5em 1em;
  }

</style>
