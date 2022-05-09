<template lang="html">
  <div class="wrapper">

    <section class="main-wrapper">
      <div class="about-desc-wrapper">
      <div class="page-title">
        <h1>About</h1>
      </div>
        <div class="about-desc-img">
          <div class="about-desc-img circle" role="img" aria-label="Outdoor image of Rick van Wijk"
            title="Outdoor image of Rick van Wijk"></div>
        </div>
        <div class="about-desc-text">
          <svg-icon class="svg-quotes svg-quotes-left" name="quote_left_solid" />
          <div class="paragraph-text">
            <p>I'm an ICT & Media Design student located in
              Eindhoven, The Netherlands.
              I have serious passion for designing and developing UI's.</p><p>My goal is to become a well-experienced front-end
              developer; someone who can bring design sketches to life.</p>
          </div>
          <svg-icon class="svg-quotes svg-quotes-right" name="quote_right_solid" />

        </div>
      </div>
      <UIBorderFullWidth class="border-full-width"/>
      
        
     
      <AboutContDropdown />
      <UIBorderFullWidth class="border-full-width"/>
      
        
      
        
        <AboutApproachContainer />
     
      <!-- <UIBorderFullWidth class="border-full-width"/> -->
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

  @media (max-width: 300px) {

}

@media (min-width: 640px) {
  
}

@media (min-width: 768px) {

}

@media (min-width: 1024px) {
  section{
    gap: 8em;
  }
}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}
section{

}
</style>
