<template>
  <section>
    <input type="radio" id="grp_all" name="grp_semester6" value="grp_all" checked>
    <input type="radio" id="grp_analyse_advise" name="grp_semester6" value="grp_analyse_advise">
    <input type="radio" id="grp_exec_validate" name="grp_semester6" value="grp_exec_validate">
    <input type="radio" id="grp_software" name="grp_semester6" value="grp_software">
    <input type="radio" id="grp_organisation" name="grp_semester6" value="grp_organisation">
    <input type="radio" id="grp_problem" name="grp_semester6" value="grp_problem">
    <input type="radio" id="grp_leadership" name="grp_semester6" value="grp_leadership">
    <input type="radio" id="grp_oriented" name="grp_semester6" value="grp_oriented">
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
        <label for="grp_analyse_advise">User Interaction - Analyse & Advise</label>
      </li>
      <li>
        <label for="grp_exec_validate">User Interaction - Execution & Validation</label>
      </li>
      <li>
        <label for="grp_software">Software Design</label>
      </li>
      <li>
        <label for="grp_organisation">Future-oriented Organisation</label>
      </li>
      <li>
        <label for="grp_problem">Investigative Problem Solving</label>
      </li>
      <li>
        <label for="grp_leadership">Personal Leadership</label>
      </li>
      <li>
        <label for="grp_oriented">Goal-oriented Interaction</label>
      </li>
    </ol>
      <div class="row-grid">
        <NuxtLink class="modal-link" to="/modals/semesterSix/projectPlan" data_category="grp_organisation grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/project_plan.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Debriefing & Project Plan</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/architecture" data_category="grp_analyse_advise grp_software grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/architecture.jpg')`}">
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
        <NuxtLink class="modal-link" to="/modals/semesterSix/interviews" data_category="grp_analyse_advise grp_exec_validate grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/target_audience.png')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Target Audience</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/userstories" data_category="grp_analyse_advise grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/plan_action.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>User story - Plan of Action</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/notificationSystem" data_category="grp_analyse_advise grp_software grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/notification_system.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Current notification system</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/trends" data_category="grp_analyse_advise grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/trends.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Trend analysis notifications</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/flutterNotifications" data_category="grp_analyse_advise grp_exec_validate grp_software grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/notifications.jpg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Flutter notifications</p>
                    <svg-icon name="external_link" class="svg-external-link" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink class="modal-link" to="/modals/semesterSix/designTesting" data_category="grp_exec_validate grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/design.jpg')`}">
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
        <NuxtLink class="modal-link" to="/modals/semesterSix/delivery" data_category="grp_problem grp_leadership">
          <div class="overview-grid" :style="{ backgroundImage: `url('./img/semester6/peerFeedback.jpeg')`}">
            <div>
              <a class="a-ghostbtn">
                <div id="hover-box" class="hover-box">
                  <div class="ghostbutton">
                    <p>Delivery & Peer Feedback</p>
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
