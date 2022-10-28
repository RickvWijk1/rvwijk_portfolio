<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">
        <h2>Analysis</h2>
      </div>
      <div class="card-description">
        <p>A clear problem/challenge description with a defined scope</p>
      </div>
    </div>
    <div class="card-body"></div>
    <div class="card-footer">
      <NuxtLink to="/semesters/graduation/leeruitkomsten/analysis">
        <div class="card-btn">
          <button>Bekijk</button>
          <svg-icon class="arrow-svg" name="arrow" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 350px;
    padding: 1.5em 1em;
    background: linear-gradient(154.88deg, #166ECC 0%, #95C8FF 100%);
    letter-spacing: 0.05em;
    /* background-attachment: fixed; */
  }

  .card:hover{
    background: linear-gradient(154.88deg, #166ECC 0%, #95C8FF 100%);
  }



  .card-header {
    display: flex;
    flex-direction: column;
    gap: .5em;
  }

  .card-title {
    display: flex;
    font-weight: bold;
    flex-direction: column;
  }

  .card-title h2 {
    font-size: 1.7rem;
  }

  .card-btn {
    display: flex;
    justify-content: space-around;
    width: 7em;
    padding: .5em .75em;
    color: #000;
    background-image: linear-gradient(100.11deg, #FFFFFF 4.07%, #93C7FF 91.25%);

  }

  .card-btn:hover {
    background-image: linear-gradient(100.11deg, #FFFFFF 4.07%, #59a7fa 91.25%);
}

.card-btn:focus {
    outline: none;
}

  .card-btn button{
    font-weight: bolder;
  }

  .arrow-svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 23px;
  }

</style>
