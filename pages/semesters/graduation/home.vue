<template>
  <div class="grad-wrapper">
    
    <GraduationHero />
  </div>
</template>

<script>
  export default {
    layout: "noNav",
  }
</script>

<style lang="css">
  body {
    background-color: #166ECC;
    color: #fff;
  }

  .grad-wrapper {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-self: center;
    max-width: 1536px;
    width: 100%;
    height: 100%;
    padding: 2em 2em 0;
    gap: 2em;
  }

  @media (max-width: 300px) {}

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
