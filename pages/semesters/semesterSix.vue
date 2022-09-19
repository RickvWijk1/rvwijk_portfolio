<template>

  <div class="wrapper">
      <div class="resources-cont">
        <div class="tl-row">
          <h1>RESOURCES</h1>
        </div>
        <div class="src-buttons">
          <ul>
            <NuxtLink to="/modals/semesterSix/portfolio-abstract">
              <li class="btnModalClose bg-color-abstract">Reading Guide</li>
            </NuxtLink>
            <NuxtLink to="/modals/semesterSix/learning-outcomes">
              <li class="btnModalClose bg-color-goals">Learning Outcomes</li>
            </NuxtLink>
          </ul>
        </div>
      </div>
      <div class="resources-cont">
        <div class="tl-row">
            <h1>PSV - GROUP PROJECT</h1>
          </div>
        <SemestersixGroupProjectProduct />
      </div>
      <div class="resources-cont">
        <div class="tl-row">
            <h1>METAVERSE - INTERNATIONAL PROJECT</h1>
          </div>
        <SemestersixInterProjectProduct />
      </div>
      <div class="resources-cont">
        <div class="tl-row">
            <h1>F1 WIDGET - INDIVIDUAL PROJECT</h1>
          </div>
        <SemestersixIndProjectProduct />
      </div>
  </div>
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
  .resources-cont {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;
    justify-content: center;
    align-items: center;
      padding-bottom: 4em;
  }

  .tl-row {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-weight: 400;
    text-align: center;
    color: #5e6eff;
  }

  .tl-row h1 {
    letter-spacing: 5px;
    line-height: 40px;
    font-size: 2rem;
  }

  .src-buttons ul {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .src-buttons ul li {
    padding: .75em 1em;
    border-radius: 0.3rem;
    cursor: pointer;
    max-width: 100%;
  }

  .src-buttons ul .labels {
    margin-right: 0;
  }

  .bg-color-abstract {
    background-color: #525fe4
  }
  .bg-color-goals {
    background-color: #7d87eb
  }

  @media (max-width: 300px) {
    .src-buttons ul {
      flex-direction: column;
    }
}

@media (min-width: 640px){
.wrapper {
    padding: 4em 4em;
    margin-top: unset;
}
}


</style>
