<template lang="html">
  <section>
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

 
      <div class="about-desc-wrapper">
        <h3>My education</h3>
      </div>
      <AboutDropdown name="study" title="Bachelor ICT & Media Design"/>
      <AboutDropdown name="school" title="Fontys University of Applied Sciences"/>
      <div class="about-desc-wrapper">
        <p>The study consists of 8 semesters.
          Each semester takes half a year.</p>
      </div>
      <AboutFilterSemesters />

  

    <section>
      <div class="video-wrapper"><iframe width="560" height="315" style="--aspect-ratio: 3 / 4;"
          src="https://www.youtube-nocookie.com/embed/A0sVMP4Cxes" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe></div>
    </section>
    <UIBorderFullWidth />
    <section>
      <div class="about-desc-wrapper">
        <h3>My approach</h3>
      </div>
      <AboutApproachContainer />
    </section>
    <UIBorderFullWidth />
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
