<template>
  <section>
    <input type="radio" id="ind_all" name="semester6" value="ind_all" checked>
    <input type="radio" id="ind_analyse_advise" name="semester6" value="ind_analyse_advise">
    <input type="radio" id="ind_exec_validate" name="semester6" value="ind_exec_validate">
    <input type="radio" id="ind_software" name="semester6" value="ind_software">
    <input type="radio" id="ind_problem" name="semester6" value="ind_problem">
    <input type="radio" id="ind_leadership" name="semester6" value="ind_leadership">
    <input type="radio" id="ind_organisation" name="semester6" value="ind_organisation">
    <input type="radio" id="ind_oriented" name="semester6" value="ind_oriented">
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
        <label for="ind_all">All</label>
      </li>
      <li>
        <label for="ind_analyse_advise">User Interaction - Analyse & Advise</label>
      </li>
      <li>
        <label for="ind_exec_validate">User Interaction - Execution & Validation</label>
      </li>
      <li>
        <label for="ind_software">Software Design</label>
      </li>
      <li>
        <label for="ind_organisation">Future-oriented Organisation</label>
      </li>
      <li>
        <label for="ind_problem">Investigative Problem Solving</label>
      </li>
      <li>
        <label for="ind_leadership">Personal Leadership</label>
      </li>
      <li>
        <label for="ind_oriented">Goal-oriented Interaction</label>
      </li>
    </ol>
      <div class="row-grid">
        <NuxtLink class="modal-link" to="/modals/semesterSix/indProject" data_category="ind_problem">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/project.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Project</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/techResearch" data_category="ind_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/ind_tech_research.png')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Technical Research</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/indDesign" data_category="ind_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/ind_design.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Design & Testing</p>
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
