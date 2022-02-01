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
      },
  }
</script>


<style>
  .section1 {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #4758FB;
    padding: 1em;
    border-radius: .5em;
    gap: 1em;
  }

  .card-header-wrapper {
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  .card-number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: #fff;
  }

  .card-number p {
    color: #000;
  }

</style>
