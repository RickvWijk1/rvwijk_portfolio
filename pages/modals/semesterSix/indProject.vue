<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Project Plan</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>R. van Wijk</i>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Motivation</h3>
                <img src="~/assets/img/school/icons/motivation.png" alt="">
              </div>
              <div class="label-cont">
                <p>It's important to define the problem within the context and to define a stakeholder. In addition a
                  good strategy and planning is needed.
                </p>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Main Question & Design Challenge</h3>
                <img src="~/assets/img/school/icons/question.png" alt="">
              </div>
              <div class="label-cont">
                <div class="text spacing">
                  <p>How can I allow F1 fans to view the F1 schedule on their Android smartphones in an efficient/quick
                    way through the use of widgets?</p>
                  <p>Design and develop a widget that allows F1 fans to view the F1 schedule on their Android
                    smartphones so that they can quickly see at what time F1 events are taking place.</p>
                </div>
              </div>
            </div>
            <div class="text">
              <b>Sub questions</b>
              <ul class="list">
                <li class="list-bullet">What schedule information is the most crucial for F1 fans?</li>
                <li class="list-bullet">What technologies will be most efficient to use for creating widgets for Android
                  smartphones?</li>
                <li class="list-bullet">How do the existing iOS F1 widgets display the schedule information?</li>
              </ul>
            </div>
            <div class="text">
              <h3>Stakeholders</h3>
              <p>The party that has an interest in the project is the Formula 1 Twitter community. The main stakeholder
                for this project, however, should ideally be an expert on the subject Android widgets and/or data
                management.</p>
            </div>
            <table>
              <tr>
                <th class="col-goals">Inside scope (must have):</th>
                <th class="col-proof">Outside scope (should, could, won’t have):</th>
              </tr>
              <tr>
                <td>
                  <div class="grouped">
                    1. Design an F1 widget app for Android that gives F1 fans the needed schedule information for the
                    upcoming race weekend.
                  </div>
                </td>
                <td>
                  <p>2. Develop an F1 widget app for Android that gives F1 fans the needed schedule information for the
                    upcoming race weekend.</p>
                </td>
                <td>
                  <p>1. Publish the app on the Play Store</p>
                  <br>
                  <p>2. Design and develop a widget that shows the current teams championship standings.</p>
                </td>
                <td>
                  <p>3. Design and develop a widget that shows the current drivers championship standings.</p>
                </td>
              </tr>
            </table>
            <a target="_blank" href="./pdf/semester6/ind_projectplan.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View project plan</button></a>
            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>It took some time before I defined my stakeholders. This is because I was looking for one that also
                  had knowledge of the subject 'widgets for Android'. Sadly I couldn't find an expert on Android so I
                  had to do a lot of technical research myself which meant that I didn't have time to develop the app.
                </p>
              </div>
            </div>
            <div class="text">
              <h3>What's next?</h3>
              <p>Now that I've my plan laid out, I will research the formulated sub questions so that I will
                eventually be able to answer the main question.</p>
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
    </NuxtLink>
  </div>

</template>

<script>
  export default {
    layout: 'noNav',
  }

</script>

<style>
  @import '~/assets/css/modal.css';

</style>
