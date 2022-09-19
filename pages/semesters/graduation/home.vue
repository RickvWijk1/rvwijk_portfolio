<template>
  <div class="hero">
    <p></p>
    <!-- <v-timeline>
      <v-timeline-item v-for="n in 4" :key="n" large>
        <template v-slot:icon>
          <v-avatar>
            <img src="https://i.pravatar.cc/64">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Lorem ipsum
          </v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
            euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline> -->
    <div class="clouds-cont">
      <div class="cloud cloud-1"><img src="~@/assets/img/school/graduation/cloud.webp" width="200" height="50"></div>
      <div class="cloud cloud-2"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
      <div class="cloud cloud-3"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
      <div class="cloud cloud-4"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
      <div class="cloud cloud-5"> <img src="~@/assets/img/school/graduation/cloud.webp" width="100" height="20"></div>
    </div>
  </div>

</template>


<script>
  export default {
    layout: 'noNav',
  }

</script>

<style lang="css">
  body {
    background-color: #166ECC;
    color: #fff;
  }

  .hero {
    padding: 0;
    /* background: linear-gradient(to bottom right, #06b6d4 ,#1D4ED8); */
    height: 100%;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
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

  @media (min-width: 640px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {}

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
