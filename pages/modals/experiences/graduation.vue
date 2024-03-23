<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/experiences">×</NuxtLink>
          <h1>Component Management</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text centered spacing">
              <h3>A solution for e-commerce company Bluebird Day that will allow them to reuse and manage code
                components in webshop projects.
              </h3>

              <img class="centered" src="~/assets/img/projects/graduation/map.png" width="900px" height="100px" alt="">
            </div>
            <div class="paddedText">
              <a class="centered" target="__blank" href="https://bluebirdday.nl"><img
                  src="~/assets/img/projects/graduation/bbd_logo.png" width="300px" alt=""></a>
              <p>
                Bluebird Day develops webshops for clients. Bluebird Day wants to ensure each webshop is fitting and
                unique for their client. Bluebird Day often notices that the development time of just the basic
                parts of the webshops costs a occupies a big part of their time. Reusing basic parts of the webshops
                will allow the
                developers to work on the unique parts of each webshop.
                <br><br>
                Check <a target="__blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/home"
                  class="txt-link white-link">this link</a> for more information about the assignment.
              </p>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="text centered spacing">
              <div class="text">
                <div class="learned-cont">
                  <h3>My contribution</h3>
                  <img src="~/assets/img/school/icons/contribution.png" alt="">
                </div>
                <p>This was a solo graduation assignment.</p>
                <div class="label-cont">
                  <ul class="spacing list">
                    <li class="list-bullet">Analysed the current situation/the problem.</li>
                    <li class="list-bullet">Came up with a solution that fits the toolset and workflow of Bluebird Day.
                    </li>
                    <li class="list-bullet">Advised the company on how to effectively implement the solution in the
                      current workflow.</li>
                  </ul>
                </div>
              </div>
              <div class="text">
                <h3>How It Works</h3>
                <p>The solution consists out of multiple platforms/tools.
                </p>
                <ul class="spacing list">
                  <li class="list-bullet"><b>GitLab Package Registry</b>: a place to store packages of code. Bluebird
                    Day uses GitLab for their projects. This specific GitLab future will allow Bluebird Day to store
                    their webshop components. Furthermore the developers of Bluebird Day can install it as a single code
                    dependency, meaning it will be quick and easy to install for all their new projects.</li>
                  <img src="~/assets/img/projects/graduation/solution.png" width="800px" alt="">

                  <li class="list-bullet"><b>GitBook</b>: an environment designed for creating and managing tecnhical
                    documentation. With GitBook, Bluebird Day developers have a place to create information and get
                    information about components. GitBook has a sync option with GitLab so that each change a developer
                    makes gets managed by version control. This all makes GitBook a tool that will help Bluebird Day
                    upkeep their components.
                  </li>
                  <img src="~/assets/img/projects/graduation/solution2.png" width="800px" alt="">
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/experiences"><button class="btnModalClose bntModalClose-bg-color">Close</button>
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
</style>
