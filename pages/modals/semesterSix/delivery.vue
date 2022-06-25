<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Delivery & Peer Feedback</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>K. Huggers, D. van Sleeuwen, S. Sodermans, M. Kroeze, R. van Wijk</i>
              </div>
            </div>
            <div class="text">
              <div class="learned-cont">
                <h3>Motivation</h3>
                <img src="~/assets/img/school/icons/motivation.png" alt="">
              </div>
              <div class="label-cont">
                <p>For PSV this project is just the beginning of a bigger project. Our work will serve as inspiration
                  and push PSV in the right direction. PSV will want to take our advice, research and designs and
                  continue from
                  there.
                </p>
                <p>Right after the final presentation, it was time to reflect upon the project, as a project group, but
                  also with the client. By reflecting we can see what could have gone better and what went well so that
                  we can all learn from it.</p>
              </div>
            </div>
            <div class="text">
              <div class="research-tags-cont">
                <div class="research-tag research-active research-field">
                  <p>Field</p>
                  <img src="~/assets/img/school/research_strats/field.png" alt="">
                </div>
              </div>
              <div class="research-text label-cont">
                <p><b>Field research was applied,</b> because by discussing the delivery with PSV, we understood what they
                  would like to see delivered and in what way is most convenient for them. PSV wanted to receive the
                  most important research documents, technical advice, and access to the code in GitHub and design
                  (prototypes) in Figma.
                  I suggested to send a zip file with WeTransfer (since email doesn't allow big files) which PSV agreed
                  to.
                </p>
              </div>
            </div>
            <div class="text">
              <h3>Delivery document</h3>
              <div class="label-cont">
                <p>The document contains:</p>
                <ul class="list">
                  <li>Technology - best practices and advice<ul style="margin-bottom: 0;" class="list">
                      <li>Hybrid Frameworks</li>
                      <li>Flutter</li>
                    </ul>
                  </li>
                  <li class="list-bullet">Advice & Recommendations</li>
                  <li class="list-bullet">Prototypes/Designs</li>
                  <li class="list-bullet">Research references</li>
                </ul>
                <a target="_blank" href="./pdf/semester6/oplevering.pdf"><button
                    class="btnModalClose bntModalClose-bg-color">View delivery document</button></a>
              </div>
            </div>
            <div class="text">
              <h3>Advice</h3>
              <div class="label-cont">
                <p>Our advice to PSV was delivered to them live at the end of the final presentation. The advice consists of what steps PSV should take on the technical and design side of things, as well as how the project should continue from here.</p>
              </div>
            </div>
            <div class="text">
              <h3>Retrospective</h3>
              <div class="label-cont">
                <p>In week 7, we discussed our way of working. We applied the 'Zeester' methode, because it's an easy
                  way to sum up what we are doing well, what we should do and what we aren't doing well.</p>
                <!-- <img src="~/assets/img/school/semester6/retrospective.png" alt=""> -->
              </div>
            </div>
            <a target="_blank" href="./pdf/semester6/retrospective.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View retrospective</button></a>
            <div class="text">
              <h3>Peer feedback</h3>

              <div class="text">
                <p>After the final presentation we reflected upon the project and held a peer feedback session. I filled
                  in a tip and top for every project member, so that they can see in what area there's room for
                  improvement and in what areas they're already strong.</p><p>The other project members gave feedback to me as well.</p>
              </div>
              <div class="text">  
                <!-- <div class="image-grid" style="grid-template-columns: repeat(5, minmax(0, 1fr));">
                  <img src="~/assets/img/school/semester6/peerfeedback2.png" alt="">
                  <img src="~/assets/img/school/semester6/peerfeedback1.png" alt="">
                </div> -->
              </div>
            </div>
            <a target="_blank" href="./pdf/semester6/peerfeedback.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View peer feedback</button></a>

            <div class="paddedTextLine"></div>
            <div class="text">
              <div class="learned-cont">
                <h3>Evaluation</h3>
                <img src="~/assets/img/school/icons/evaluation.png" alt="">
              </div>
              <div class="label-cont">
                <p>The delivery of the project was quite straightforward, it wasn't as much of a hassle compared to my past projects. This is probably, because we had a lot of contact with PSV.
                  I liked doing the retrospective and giving peer feedback to each other, because it only takes a short amount of time to do, but helps improve yourself and the others.
                </p>
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
