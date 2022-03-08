<template>
  <div class="modal" v-show="value">
    <div class="modal-content">
      <div class="modal-header">
        <a class="close-modal modal-close">×</a>
        <div class="modal-title">
          <h1>Sprint 0 - Orientation</h1>
        </div>
      </div>
      <div class="modalbody-container">
        <div class="col-lg-8 mx-auto">
          <p>Hi</p>
        </div>
      </div>
      <div class="modal-footer">
        <button @click.prevent="close" class="close-modal btnModalClose">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        required: true,
      },
    },

    methods: {
      close() {
        this.$emit("input", !this.value);
      }
    },

  }

</script>

<style>
  /* .modal-content {
    margin: unset;
    width: unset;
    max-width: 60rem;
  }

  .modal-body {
    background-color: unset;
  }

  .modalbody-container img {
    align-self: flex-start;
  } */


  .modal {

    
    background-color: rgb(0, 0, 0, 0.7);
  }






 

</style>
