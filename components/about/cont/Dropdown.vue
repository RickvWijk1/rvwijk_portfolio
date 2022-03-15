<template>
  <section>
    <div class="dropdown-wrapper">
      <svg-icon class="svg-study" name="study" />
      <p>Bachelor ICT & Media Design</p>
      <svg-icon class="svg-chevron chevron-dropdown chevron-study" name="chevron" />
    </div>
    <AboutFilterSemesters class="about-filter-semesters" />
    <div class="dropdown-wrapper">
      <svg-icon class="svg-study" name="school" />
      <p>Fontys University of Applied Sciences</p>
      <svg-icon class="svg-chevron chevron-dropdown chevron-school" name="chevron" />
    </div>
    <AboutSchoolContent class="about-filter-school" />
  </section>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {

    },
    mounted() {
      let rotateChevronStudy = document.querySelectorAll('.chevron-study');
      let studyContent = document.querySelector('.about-filter-semesters');
      let rotateChevronSchool = document.querySelectorAll('.chevron-school');
      let schoolContent = document.querySelector('.about-filter-school');


      rotateChevronStudy.forEach(chevron => {
        chevron.addEventListener('click', () => {
          chevron.classList.toggle('study-toggle');
          studyContent.classList.toggle('semesters-toggle');
        });
      });
      rotateChevronSchool.forEach(chevron => {
        chevron.addEventListener('click', () => {
          chevron.classList.toggle('school-toggle');
          schoolContent.classList.toggle('school-content-toggle');
        });
      });


    }
  }

</script>

<style>
  .dropdown-wrapper {
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
    width: 12px;
    height: 20px;
    transform: rotate(180deg);
    cursor: pointer;
    fill: #4758fc;
    transform-origin: center;
  }

  .svg-chevron.chevron-dropdown {}


  .chevron-study.study-toggle,
  .chevron-school.school-toggle {
    transform: rotate(270deg);
  }



  .about-filter-semesters {
    display: none;
  }

  .about-filter-semesters.semesters-toggle {
    display: flex;
  }

  .about-filter-school {
    display: none;
  }

  .about-filter-school.school-content-toggle {
    display: flex;
  }

  /* .dropdown-study svg-icon{
  transform: rotate(180deg);
} */

</style>
