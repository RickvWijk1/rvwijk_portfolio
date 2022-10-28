<template>
  <div class="grid-wrapper">
      <GraduationCard></GraduationCard>
      <GraduationCard></GraduationCard>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.grid-wrapper{
    display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
    gap: 1em;
}
</style>