<template>
  <section>
    <input type="radio" id="int_all" name="int_semester6" value="int_all" checked>
    <input type="radio" id="int_analyse_advise" name="int_semester6" value="int_analyse_advise">
    <input type="radio" id="int_exec_validate" name="int_semester6" value="int_exec_validate">
    <input type="radio" id="int_software" name="int_semester6" value="int_software">
    <input type="radio" id="int_problem" name="int_semester6" value="int_problem">
    <input type="radio" id="int_leadership" name="int_semester6" value="int_leadership">
    <input type="radio" id="int_organisation" name="int_semester6" value="int_organisation">
    <input type="radio" id="int_oriented" name="int_semester6" value="int_oriented">
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
        <label for="int_all">All</label>
      </li>
      <li>
        <label for="int_analyse_advise">User Interaction - Analyse & Advise</label>
      </li>
      <li>
        <label for="int_exec_validate">User Interaction - Execution & Validation</label>
      </li>
      <li>
        <label for="int_software">Software Design</label>
      </li>
      <li>
        <label for="int_organisation">Future-oriented Organisation</label>
      </li>
      <li>
        <label for="int_problem">Investigative Problem Solving</label>
      </li>
      <li>
        <label for="int_leadership">Personal Leadership</label>
      </li>
      <li>
        <label for="int_oriented">Goal-oriented Interaction</label>
      </li>
    </ol>
      <div class="row-grid">
        <NuxtLink class="modal-link" to="/modals/semesterSix/prepweek" data_category="int_analyse_advise int_oriented">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/metaverse1.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Preparation Week</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/metaconcept" data_category="int_oriented">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/metaverse2.jpeg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Metaverse Concepting</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/metavideo" data_category="int_oriented">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/metaverse3.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Metaverse Prototyping</p>
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
