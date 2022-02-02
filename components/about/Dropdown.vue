<template>
  <div class="dropdown-wrapper">
      <svg-icon class="svg-study" v-bind:name="name" />
      <p>{{ title }}</p>
      <svg-icon v-bind:v-on:click="activeToggle" class="svg-chevron chevron-dropdown" name="chevron" />
  </div>
</template>

<script>
export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      click: {
        type: String,
        required: true,
      },
      },
  }
</script>

<style>
.dropdown-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0 0 .5rem 0;
    border-bottom: 2px solid #4758fc;
}

.svg-study {
  display: flex;
  align-self: center;
  width: 34px;
  height: 34px;
  fill: #fff;
}
.svg-chevron.chevron-dropdown {
  display: flex;
  align-self: center;
  width: 8px;
  height: 13px;
  transform: rotate(270deg);
  cursor: pointer;
  fill: #4758fc;
}

.dropdown-wrapper p{}
</style>