<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
          <h1>SolidSight</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="text centered">
              <h3>An ecommerce solution for Greenhouse Group and its clients in the form of a web
                app.
              </h3>
              <img class="centered" src="~/assets/img/projects/solid/wireframe.png" width="400px" height="100px" alt="">
            </div>
            <div class="paddedText">
              <p>
                Greenhouse Group has asked me and fellow students to come up with a solution
                that will
                enable Greenhouse and its clients to keep earning money on advertising
                without forcing
                users to share their personal data.
                Greenhouse predicts the business models of
                commerce companies will have to change since users might value their
                privacy/data
                much more in the future.
                A key element of good advertising is showing ads/products that are relevant
                to the user.
                In other words, personalized advertisements.
                SolidSight offers a solution to this problem by showing products to users in
                the shape
                of personalized review videos.
              </p>
              <div class="paddedTextLine-white"></div>
            </div>
            <div class="text centered spacing">
              <div class="text">
                <h3>How It Works</h3>
                <p>One of the requirements for this project was to use a JavaScript framework
                  called Solid.
                  This framework is, in a way, a social platform. Solid has it's own GUI and
                  users have their own account/profile
                  where they can post files like photo's and documents. They can also control
                  what personal data they share with
                  applications (such as the SolidSight webapp) that use the Solid framework.
                </p>
              </div>
              <p>The user chooses to log in (or register) with a Solid account.</p>
              <img src="~/assets/img/projects/solid/landing_page.png" width="500px" alt="">
              <p>Let's assume the user is new to SolidSight. The user will immediately get to
                choose
                what they're interested in and what data they want to share.
              </p>
              <img src="~/assets/img/projects/solid/setup1_page.png" width="500px" alt="">
              <img src="~/assets/img/projects/solid/setup2_page.png" width="500px" alt="">
              <p>Now that the user is set up, the user can search for/gets recommended
                products.
              </p>
              <img src="~/assets/img/projects/solid/home_page.png" width="500px" alt="">
              <img src="~/assets/img/projects/solid/category_page.png" width="500px" alt="">
              <p>The review videos explain what a product can do and why it's a must
                have.</p>
              <img src="~/assets/img/projects/solid/video_page.png" width="500px" alt="">
              <div class="text centered spacing">
                <h3>Technology Behind The App</h3>
                <a target="_blank" href="https://inrupt.com/solid/">
                  <img src="~/assets/img/projects/solid/solid.png" width="200px" alt="">
                  <i>Solid framework</i>
                </a>
                <div class="text">
                  <h3>Sir Tim Berners-Lee's vision of a vibrant web</h3>
                  <p>Solid is a technology for organizing data, applications, and identities on the web. Solid enables
                    richer choices for people, organizations and app developers by building on existing web standards.
                  </p>
                </div>
              </div>
              <div class="text centered full-width">
                <a class="paddedText" target="_blank" href="https://git.fhict.nl/I404350/solidsight">
                  <p>View the repo for more information here</p>
                  <svg-icon class="svg-github" name="github" />
                </a>
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
