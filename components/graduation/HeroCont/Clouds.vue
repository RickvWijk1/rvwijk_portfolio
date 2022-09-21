<template>
    <div class="clouds-cont">
      <div class="cloud cloud-1"><img src="~@/assets/img/school/graduation/cloud.webp" width="200" height="50"></div>
      <div class="cloud cloud-2"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
      <div class="cloud cloud-3"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
      <div class="cloud cloud-4"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
      <div class="cloud cloud-5"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="css" scoped>

.clouds-cont {
    position: relative;
    height: 20vh;
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
    animation: cloud-1 3s infinite;
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

@media (min-width: 640px) {}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}

</style>