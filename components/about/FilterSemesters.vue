<template>
  <section>
    <div class="about-desc-wrapper">
      <p>The bachelor consists of 8 semesters.
        Each semester takes half a year.</p>
    </div>
    <input type="radio" id="first" name="semesters" value="first" checked>
    <input type="radio" id="second" name="semesters" value="second">
    <input type="radio" id="third" name="semesters" value="third">
    <input type="radio" id="fourth" name="semesters" value="fourth">
    <ol class="filters">

      <li>
        <label for="first">1st year</label>
      </li>
      <li>
        <label for="second">2nd year</label>
      </li>
      <li>
        <label for="third">3rd year</label>
      </li>
      <li>
        <label for="fourth">4th year</label>
      </li>
    </ol>

    <section class="semester-cards">
      <AboutCard :number="1" title="Introduction 📜" data_category="first"
        description="Learned about the different kinds of fields in ICT. My first time programming. I chose to continue with ICT & Media Design.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/portfolio/Semester1/"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Projects</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
              <!-- <img src="~/assets/img/school/semester6/psv_background.png" width="100px" alt=""> -->
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="2" title="Branding 🎤" data_category="first"
        description="Learned to build a brand for an upcoming artist from the Tilburg Rock Academy. Designed & developed media products.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/portfolio/Semester2/"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Projects</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="3" title="iOS Developing 🍎" data_category="second"
        description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/projects/mft"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Project</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="4" title="Human Driven Innovation 🧠" data_category="second"
        description="Learned how to design fitting digital products for humans specifically and learned to develop decentralized apps with the Solid framework.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/portfolio/Semester4/"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Projects</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="5" title="Internship 👨‍💻" data_category="third"
        description="Learned how to work in a professional IT environment. I completed an internship assignment at the Interaction Design Lectoraat.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/portfolio/stage/stage.html"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Projects</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="6" title="Society Driven Innovation ⚽" data_category="third"
        description="Created a mobile solution for football club PSV Eindhoven's media platforms. I developed POC's with Flutter to proof the solution was the right one.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/semesterSix"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Projects</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="7" title="Smart Mobile Minor 📱" data_category="fourth"
        description="Explored the possibilities of AR and its future uses. In addition, I worked on some small projects that improved my Flutter, Android & iOS development knowledge.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/portfolio/minor/minor.html"><button
                class="btnModalClose bntModalClose-bg-color">
                <p>View Projects</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
      <AboutCard :number="8" title="Graduation Internship 🎓" data_category="fourth"
        description="Came up with a fitting solution to reuse & manage components for the e-commerce company Bluebird Day.">
        <template v-slot:footer_btn_html>
          <div class="card-footer-wrapper">
            <a target="__blank" href="https://rickvwijk1.github.io/rvwijk_portfolio/semesters/graduation/home"><button class="btnModalClose bntModalClose-bg-color">
                <p>View Assignment</p>
                <svg-icon class="svg-external-link" name="external_link" />
              </button></a>
          </div>
        </template>
      </AboutCard>
    </section>
    <div class="video-section">
      <div class="about-desc-wrapper">
        <p>View what activities me and my fellow students undertake during the bachelor 👇</p>
      </div>
      <div class="video-wrapper"><iframe width="560" height="315" style="--aspect-ratio: 3 / 4;"
          src="https://www.youtube-nocookie.com/embed/A0sVMP4Cxes" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe></div>
    </div>
  </section>
</template>

<script>
  export default {
    setup() {

    },
  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/buttonFilter';
  @import '~/assets/css/video';


  section {
    height: unset;
  }

  .filters {
    text-align: left;
  }

  @media (min-width: 640px) {}

  @media (min-width: 768px) {
    .semester-cards {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {

    .semester-cards {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {
    .semester-cards {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1536px) {}

</style>
