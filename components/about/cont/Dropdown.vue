<template>
  <section class="main-wrapper">
    <h3 class="subtitle">My education</h3>
    <div class="section-dropdown">
      <div class="study-dropdown-wrapper">
        <div class="dropdown-wrapper">
          <svg-icon class="svg-study" name="study" />
          <p>Bachelor ICT & Media Design</p>
          <svg-icon class="svg-chevron chevron-dropdown chevron-study" name="chevron" />
        </div>
        <AboutFilterSemesters class="about-filter-semesters" />
      </div>
      <UIBorderFullHeight class="dropdown-border" />
      <div class="school-dropdown-wrapper">
        <div class="dropdown-wrapper">
          <svg-icon class="svg-study" name="school" />
          <p>Fontys University of Applied Sciences</p>
          <svg-icon class="svg-chevron chevron-dropdown chevron-school" name="chevron" />
        </div>
        <AboutSchoolContent class="about-filter-school" />
      </div>
    </div>
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

      let borderFullHeight = document.querySelector('.dropdown-border');


      rotateChevronStudy.forEach(chevron => {
        chevron.addEventListener('click', () => {
          chevron.classList.toggle('study-toggle');
          studyContent.classList.toggle('semesters-toggle');
          borderFullHeight.classList.toggle('border-toggle');
        });
      });
      rotateChevronSchool.forEach(chevron => {
        chevron.addEventListener('click', () => {
          chevron.classList.toggle('school-toggle');
          schoolContent.classList.toggle('school-content-toggle');
          borderFullHeight.classList.toggle('border-toggle');
        });
      });


    }
  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/aboutContent.css';

  .main-wrapper {
    position: relative;
    flex: 1;
    gap: 2rem;
  }

  .section-dropdown {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .dropdown-border {
    display: none;
  }

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



  .about-filter-semesters,
  .about-filter-school {
    display: none;
  }

  .about-filter-semesters.semesters-toggle,
  .about-filter-school.school-content-toggle {
    display: flex;
  }





  @media (min-width: 640px) {}

  .study-dropdown-wrapper,
  .school-dropdown-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {

    .section-dropdown {
      flex-direction: row;
      justify-content: space-between;
    }

    .dropdown-border {
      display: flex;
    }

    .dropdown-border.border-toggle {
      display: flex;
    }

    .study-dropdown-wrapper {
      flex: 1;
      gap: 2em;
    }

    .school-dropdown-wrapper {
      flex: 1;
      align-items: flex-end;
      gap: 2rem;
    }

    .dropdown-wrapper {}

    .about-filter-semesters,
    .about-filter-school {
      display: flex;
      padding: 0em 1em;
    }

    .about-filter-semesters.semesters-toggle,
    .about-filter-school.school-content-toggle {
      display: none;
    }



    .svg-chevron.chevron-dropdown {
      transform: rotate(270deg);
    }

    .chevron-study.study-toggle,
    .chevron-school.school-toggle {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
