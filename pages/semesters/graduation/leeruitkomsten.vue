<template>
  <div class="content-wrapper">
    <GraduationCardCont />
  </div>

</template>


<script>
  export default {
    layout: 'BottomNav',
  }

</script>

<style lang="css" scoped>
  @import '~/assets/css/graduation.css';

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em;
    background-color: #fff;
  }

  .clouds-cont {
    position: relative;
    height: 30vh;
  }

  .cloud {
    user-select: none;
    width: 100px;
    height: 100px;
    position: absolute;
    animation-direction: alternate;
  }

  .cloud-1 {
    z-index: 10;
    top: 27%;
    left: 42%;
    animation: cloud-1 6s infinite;
  }

  @keyframes cloud-1 {
    0% {
      left: 43%;
      top: 27%;
    }

    50% {
      left: 41.5%;
      top: 27%;
    }

    100% {
      top: 27%;
      left: 43%;
    }
  }

  .cloud-2 {
    top: 0;
    left: 0;
    animation: cloud-2 90s infinite;
  }

  @keyframes cloud-2 {
    0% {
      left: -7%;
      top: 55%;
    }

    100% {
      left: 107%;
      top: 50%;
    }
  }

  .cloud-3 {
    top: -22%;
    left: -40%;
    animation: cloud-3 70s infinite;
  }

  @keyframes cloud-3 {
    100% {
      left: -7%;
      top: 22%;
    }

    0% {
      left: 107%;
      top: 20%;

    }
  }

  .cloud-4 {
    top: 10%;
    left: -40%;
    animation: cloud-4 400s infinite;
  }

  @keyframes cloud-4 {
    100% {
      left: -200%;
      top: 10%;
    }

    0% {
      left: 107%;
      top: 15%;
    }
  }

  .cloud-5 {
    top: 62%;
    left: -400%;
    animation: cloud-5 300s infinite;
  }

  @keyframes cloud-5 {
    100% {
      left: -500%;
      top: 62%;
    }

    0% {
      left: 107%;
      top: 62%;
    }
  }

  @media (max-width: 300px) {}

  @media (min-width: 640px) {

    .about-filter-school {
      align-items: center;
    }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
