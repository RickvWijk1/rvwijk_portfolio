<template lang="html"><div class="wrapper">
  
    <section>
      <div class="about-desc-wrapper">
        <h3>Who's this guy?</h3>
        <div class="about-desc-img">
          <div class="about-desc-img circle" role="img" aria-label="Outdoor image of Rick van Wijk"
            title="Outdoor image of Rick van Wijk"></div>
        </div>
        <p>I'm an ICT & Media Design student in
          Eindhoven, The Netherlands.
          I have serious passion for designing and developing UI's. My goal is to become a well-experienced front-end developer.</p>
      </div>
      <UIBorderFullWidth />
        <div class="about-desc-wrapper">
          <h3>My education</h3>
        </div>
        <AboutContDropdown />
      <UIBorderFullWidth />
      <section>
        <div class="about-desc-wrapper">
          <h3>My approach</h3>
        </div>
        <AboutApproachContainer />
      </section>
      <UIBorderFullWidth />
    </section>
  
</div>
</template>
<script>
  export default {
    data: () => ({
   
  }),
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
