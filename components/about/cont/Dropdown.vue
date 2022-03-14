<template>
  <section>
      <div @click="toggleStudyDropdown = !toggleStudyDropdown">
          <AboutDropdownStudy class="dropdown-study" name="study" title="Bachelor ICT & Media Design" />
      </div>      
      <AboutFilterSemesters v-show="toggleStudyDropdown" />
      <div @click="toggleSchoolDropdown = !toggleSchoolDropdown">
        <AboutDropdownSchool name="school" title="Fontys University of Applied Sciences"/>
      </div>
<AboutSchoolContent v-show="toggleSchoolDropdown"/>
  </section>
</template>

<script>
export default {
    data () {
      return {
        toggleStudyDropdown: false,
        toggleSchoolDropdown: false,
      }
    },
    props: {

      },
      methods:{

      },
  }
</script>

<style>
.dropdown-study svg-icon{
  transform: rotate(180deg);
}

</style>