<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
          <h1>FECT Toolkit</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text centered spacing">
              <h3>A web app with tools that offer advice about circular entrepreneurship to small and medium-sized
                enterprises (MKB'ers in Dutch).
              </h3>
              <img class="centered" src="~/assets/img/projects/fect/toolkit.jpg" width="900px" height="100px" alt="">
            </div>
            <div class="paddedText">
              <a class="centered" target="__blank" href="https://fontys.nl/Onderzoek/Expertisecentra-1/Fontys-Expertisecentrum-Circulaire-Transitie/Toolkit-Circulair-Ondernemen.htm"><img src="~/assets/img/projects/fect/fect_logo.png" width="300px" alt=""></a>
              <p>
                The Centre of Expertise Circular Transition was looking for a way to help MKB'ers with their businesses.
                This is the motivation behind creating a toolkit that allows MKB'ers to get fitting advice for their
                businesses. Check <a target="__blank" href="https://fontys.nl/Onderzoek/Expertisecentra-1/Fontys-Expertisecentrum-Circulaire-Transitie/Toolkit-Circulair-Ondernemen.htm" class="txt-link white-link">this link</a> for more information about the tools.
              </p>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="text centered spacing">
              <div class="text">
                <div class="learned-cont">
                  <h3>My contribution</h3>
                  <img src="~/assets/img/school/icons/contribution.png" alt="">
                </div>
                <p>Together with an experienced software developer I developed the web app.</p>
                <div class="label-cont">
                  <ul class="spacing list">
                    <li class="list-bullet">Gave advice on the design; I had been told that the designs were already
                      finished when I just started working on the project. However, a lot of aspects weren't taken into
                      account in the existing designs so I gave
                      advice on how to improve and what else should be added.</li>
                    <div class="text">
                      <div class="image-grid">
                        <img src="~/assets/img/projects/fect/old_design1.png" width="400px" alt="">
                        <img src="~/assets/img/projects/fect/old_design2.png" width="400px" alt="">
                      </div>
                      <i>Old designs</i>
                    </div>
                    <li class="list-bullet">Designed the majority of the web app (using Adobe XD); I used most of the
                      Fontys style guide
                      colours and added elements of green to give a feeling of durability and sustainability.</li>
                    <div class="text">
                      <img src="~/assets/img/projects/fect/new_design.png" width="800px" alt="">
                      <img src="~/assets/img/projects/fect/colour_palet.jpg" width="800px" alt="">
                      <i>New designs</i>
                    </div>
                    <li class="list-bullet">Developed the front-end; I developed everything that's visible on the <a
                        class="txt-link" target="__blank"
                        href="https://fecttoolkit.nl/geld-verdienen-in-de-circulaire-economie/index">'verdienmodellen'</a>
                      tool. Some of my components were reused in other tools of the toolkit.</li>
                  </ul>
                </div>
              </div>
              <div class="text">
                <h3>How It Works</h3>
                <p>One of the requirements for this project was to make it sustainable/easy to continue working on since
                  it was expected that other
                  students would eventually take over the project. This is why I only used plain HTML, CSS & JavaScript
                  for the front-end. The back-end adds PHP to the stack.
                </p>
              </div>
              <div class="text centered spacing">
                <div class="text">
                  <p>The user answers a series of questions about their business.</p>
                  <img src="~/assets/img/projects/fect/co_mobile_questions.png" width="400px" alt="">
                </div>
                <div class="text">
                  <p>After answering the questions, the user gets an advice based on their answers.</p>
                  <div class="image-grid">
                    <img src="~/assets/img/projects/fect/co_mobile_advice1.png" width="600px" alt="">
                    <img src="~/assets/img/projects/fect/co_mobile_advice2.png" width="600px" alt="">
                  </div>
                </div>
              </div>
              <div class="text spacing">
                <h3>Technology Behind The App</h3>
                  <div class="image-grid">
                    <img src="~/assets/img/projects/fect/html_css_js_logo.png" width="400px" alt="">
                    <img src="~/assets/img/projects/fect/php.png" width="180px" alt="">
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/projects"><button class="btnModalClose bntModalClose-bg-color">Close</button>
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
