<template lang="html">
  <section>
    <div class="title-wrapper">
      <div class="page-title">
        <h1>About</h1>
      </div>
    </div>
    <div class="about-desc-wrapper">
        <h3>Who's this guy?</h3>
        <div class="about-desc-img">
          <div class="about-desc-img circle" role="img" aria-label="Outdoor image of Rick van Wijk"
            title="Outdoor image of Rick van Wijk"></div>
        </div>
        <p>I'm an ICT & Media Design student in
          Eindhoven, The Netherlands.
          I have serious passion for designing UI's, and creating intuitive,
          dynamic user experiences.</p>
    </div>
    <UIBorderFullWidth />
    <section>
      <UIFilterButton />
      <AboutCard :number="1" title="Introduction"
        description="Learned about the different kinds of fields in ICT. My first time programming. I chose to continue with ICT & Media Design." />
      <AboutCard :number="2" title="Branding" data-category="1st"
        description="Learned to build a brand for an upcoming artist from the Tilburg Rock Academy. Designed & developed media products." />
      <AboutCard :number="3" title="Specialisation" data-category="1st"
        description="Learned the iOS dev fundamentals and human centered design. From this semester onwards I started designing and developing with a mobile-first approach" />
    </section>
    <div class="video-wrapper"><iframe width="560" height="315" style="--aspect-ratio: 3 / 4;"
        src="https://www.youtube-nocookie.com/embed/A0sVMP4Cxes" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe></div>
    <UIBorderFullWidth />
    <div class="about-icon-wrapper">
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="speedometer" />
        </div>
        <h3>Fast</h3>
        <p>Fast load times and lag free
          interaction, my highest priority.</p>
      </div>
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="responsive" />
        </div>
        <h3>Accessibility</h3>
        <p>My apps are usable for anyone, on
          any device, big or small.</p>
      </div>
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="lightbulb" />
        </div>
        <h3>Intuitive</h3>
        <p>Strong preference for
          easy to use, intuitive UX/UI.</p>
      </div>
      <div class="about-icon-cont">
        <div class="about-icon">
          <svg-icon class="about-icon-svg" name="rocket" />
        </div>
        <h3>Dynamic</h3>
        <p>Apps don't have to be static, I love
          making screens come to life.</p>
      </div>
    </div>

  </section>

</template>
<script>
  export default {
    // head: {
    //     title: 'My title',
    //     meta: [
    //         {
    //             hid: 'description',
    //             name: 'description',
    //             content: this.article.description,
    //         },
    //         {
    //             hid: 'og:title',
    //             name: 'og:title',
    //             content: this.article.title,
    //         },
    //         {
    //             hid: 'og:image',
    //             property: 'og:image',
    //             content: `/${this.article.image}`,
    //         },
    //         {
    //             hid: 'og:description',
    //             property: 'og:description',
    //             content: this.article.description,
    //         },
    //         {
    //             hid: 'og:url',
    //             property: 'og:url',
    //             content: `https://langvad.dev/blog/${this.article.slug}`,
    //         },
    //     ],
    // },
  }

</script>
<style lang="css" scoped>
  @import '~/assets/css/aboutContent.css';

</style>
