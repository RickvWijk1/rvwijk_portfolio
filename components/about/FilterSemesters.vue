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
      <AboutCard :number="1" title="Introduction" data_category="first"
            description="Learned about the different kinds of fields in ICT. My first time programming. I chose to continue with ICT & Media Design." />
          <AboutCard :number="2" title="Branding" data_category="first"
            description="Learned to build a brand for an upcoming artist from the Tilburg Rock Academy. Designed & developed media products." />
          <AboutCard :number="3" title="iOS Developing" data_category="second"
            description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
          <AboutCard :number="4" title="iOS Developing" data_category="second"
            description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
          <AboutCard :number="5" title="iOS Developing" data_category="third"
            description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
          <AboutCard :number="6" title="iOS Developing" data_category="third"
            description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
          <AboutCard :number="7" title="iOS Developing" data_category="fourth"
            description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
          <AboutCard :number="8" title="iOS Developing" data_category="fourth"
            description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
    </section>
    <section>
        <div class="video-wrapper"><iframe width="560" height="315" style="--aspect-ratio: 3 / 4;"
            src="https://www.youtube-nocookie.com/embed/A0sVMP4Cxes" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></div>
      </section>
  </section>
</template>

<script>
  export default {
    setup() {
        
    },
  }

</script>

<style scoped>
  @import '~/assets/css/buttonFilter';

.video-wrapper{
  position: relative;
  height: 0;
  padding-top: calc(var(--aspect-ratio, .5625) * 100%); 
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
