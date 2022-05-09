<template>

  <div class="card-wrapper" v-bind:data_category="data_category">
    <div class="card-header-wrapper">
      <div class="card-number">
        <p>{{ number }}</p>
      </div>
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body-wrapper">
      <p>{{ description }}</p>
    </div>
    <slot name="footer_btn_html"></slot>
    
  </div>

</template>

<script>
  export default {
    props: {
      number: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      data_category: {
        type: String,
        required: true,
      },
      // footer_btn: {
      //   type: String,
      // },
    },
    data(){
       return{
         footer_btn_html: '<i>hi</i>',
       }
     }   
  }

</script>


<style lang="css" scoped>
 @import '~/assets/css/modal.css';
  .card-wrapper {
    display: flex;
    flex-direction: column;
    padding: 1em;
    border-radius: .5em;
    gap: 1em;
    background-color: #4758FB;
  }

  .card-header-wrapper {
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  .card-header-wrapper h3 {
    font-weight: 500;
    line-height: 0.9em;
  }

  .card-number {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    align-self: flex-start;
    justify-self: flex-start;
    background-color: #fff;
  }

  .card-number p {
    color: #000;
  }

.card-footer-wrapper{
  display: flex;
  flex-direction: column;
}
.btnModalClose{
  display: flex;
  gap: .5em;


  justify-content: space-between;
  justify-self: flex-end;
  align-self: flex-end;
  margin: 0;
}
    .svg-external-link {
    display: flex;
    width: 19px;
    height: 19px;
    cursor: pointer;
    fill: #fff;
  }


  @media (min-width: 640px) {
    .card-wrapper {
      max-width: 400px;
    }

    .card-header-wrapper h3 {
    line-height: 1em;
  }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
