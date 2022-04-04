<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Portfolio Abstract</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="project-h1-section">
              <div class="project-h1-wrapper">
                <div class="project-h1-content">
                  <h1>PSV <span>👉</span> Media Platforms</h1>
                  <div class="collab-cont">
                    <svg-icon class="svg-collab" name="collab" />
                    <i>K. Huggers, D. van Sleeuwen, S. Sodermans, M. Kroeze, R. van Wijk</i>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Sprint 0 - Project Kickoff</h2>
                    <p>d</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>Context</h3>
                      <p>d</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="project-h1-section">
              <div class="project-h1-wrapper">
                <div class="project-h1-content">
                  <h1>International project</h1>
                 <div class="collab-cont">
                    <svg-icon class="svg-collab" name="collab" />
                    <i>R. van Wijk</i>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>H2</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam cum quia quos fugit provident
                      voluptates facere incidunt? Laboriosam esse, quibusdam optio, tempore, eius deserunt modi ut
                      voluptate sint inventore eum nisi corrupti fugit. Dolores enim, veniam quam impedit quod magnam
                      nesciunt sint repellat fugit corrupti sit dolorem! Qui accusantium odit numquam accusamus quis
                      assumenda laborum id amet culpa? Exercitationem ipsa neque architecto officia nemo?</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>H3</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam odio quasi quaerat
                        veritatis ipsum nihil suscipit, a culpa aliquid, eveniet quod animi recusandae saepe beatae
                        voluptates sint ullam tempore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="project-h1-section">
              <div class="project-h1-wrapper">
                <div class="project-h1-content">
                  <h1>Individual project</h1>
                  <div class="collab-cont">
                    <svg-icon class="svg-collab" name="collab" />
                    <i>R. van Wijk</i>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>H2</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam cum quia quos fugit provident
                      voluptates facere incidunt? Laboriosam esse, quibusdam optio, tempore, eius deserunt modi ut
                      voluptate sint inventore eum nisi corrupti fugit. Dolores enim, veniam quam impedit quod magnam
                      nesciunt sint repellat fugit corrupti sit dolorem! Qui accusantium odit numquam accusamus quis
                      assumenda laborum id amet culpa? Exercitationem ipsa neque architecto officia nemo?</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>H3</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam odio quasi quaerat
                        veritatis ipsum nihil suscipit, a culpa aliquid, eveniet quod animi recusandae saepe beatae
                        voluptates sint ullam tempore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/semesters/semesterSix"><button class="btnModalClose bntModalClose-bg-color">Close</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <NuxtLink to="/semesters/semesterSix" class="close-modal">
      <div class="filler"></div>
    </NuxtLink>
  </div>

</template>

<script>
  export default {

  }

</script>

<style>
  @import '~/assets/css/modal.css';

  .collab-cont{
    display: flex;

    gap: .5em;
    padding: 1em 0 0 0;
  }

.svg-collab{
  display: flex;
    width: 38px;
    height: 23px;
    fill: #4758FB;
}
</style>
