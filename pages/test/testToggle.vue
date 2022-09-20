<template lang="html">
   <toggle-button :value="false"
               color="#82C7EB"
               :sync="true"
               :labels="true"/>
  </template>
  <script>


    export default {
      layout: 'noNav',
    }
  
  </script>
  <style lang="css" scoped>
  
  .wrapper{
    /* gap: 4rem; */
  }
  
  @media (min-width: 640px){
  .wrapper {
      padding: 4em 4em;
      margin-top: unset;
  }
  }
  
  
  </style>
  