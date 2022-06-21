<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Preparation Week</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text">
              <div class="collab-cont">
                <svg-icon class="svg-collab" name="collab" />
                <i>R. van Wijk, E. Banda, V.I. Petrove, S. Sodermans, V.A. Ivanova</i>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="text">
              <h3>First contact</h3>
             <p>After the teams were announced, I sought contact by making a Teams group and sending the international guest student an invite.</p>
                <img src="~/assets/img/school/semester6/int_project/teams.png" alt="">
            </div>
            <div class="text spacing">
              <h3>Assignment 1</h3>
              <p>The first assignment was about getting to know each other and diving into the metaverse by answering
                the following questions:</p>
                <ul class="list">
                    <li class="list-bullet">Research the question “What is the Metaverse?”.</li>
                    <li class="list-bullet"> Find best practices of brands that are already “into the Metaverse”.</li>
                    <li class="list-bullet">What is your opinion on the Metaverse? Is it a good idea or not? Why? Why not? Do you like it, Does it scare you, does it make you uncomfortable, is it progress?</li>
                  </ul>
                  <p>Each of us answered these questions and we discussed our answers afterwards.</p>
                  <a target="_blank" href="./pdf/semester6/int_assignment1.pdf"><button
                class="btnModalClose bntModalClose-bg-color">View assignment in PDF</button></a>
            </div>
            <div class="text spacing">
              <h3>Assignment 2</h3>
              <p>For the third assignment we all made our own digital Avatar. The avatar needed to be a reflection of yourself or what you'd like your personality to be in a virtual world..
                I created my character with Readyplayer.me. Readyplayer.me seemed like a good option since it looked easy to make your own avatar and had an integration with VRchat. VRchat is a game where you can participate in all kinds of activities as your own avatar in a VR world.</p>
                <img src="~/assets/img/school/semester6/int_project/assignment2_1.png" alt="">
                <p>My character represents me, because I often dress up in a pretty standard looking outfit in real life. The glasses represent the fact that I love memes and like to make jokes online.</p>
                <img src="~/assets/img/school/semester6/int_project/assignment2_2.png" alt="">

                <p>I also tried other tools like MakeHuman and Blender, but MakeHuman was too limited in terms of customization options and Blender was too complicated since I had no experience with Blender.</p>
                <img src="~/assets/img/school/semester6/int_project/makeHuman.png" alt="">
                <img src="~/assets/img/school/semester6/int_project/blender.png" alt="">
              <a target="_blank" href="./pdf/semester6/int_assignment2.pdf"><button
                  class="btnModalClose bntModalClose-bg-color">View assignment in PDF</button></a>
            </div>
            <div class="text spacing">
              <h3>Assignment 3</h3>
              <p>Making a group photo of our avatars and giving it a title and description was the last assignment.</p>
                <img src="~/assets/img/school/semester6/int_project/team.png" alt="">
            </div>
            <div class="paddedTextLine"></div>
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
