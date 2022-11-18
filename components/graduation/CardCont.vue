<template>
  <div class="grid-wrapper">
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Analyseren</h2>
        </div>
        <div class="card-description">
          <p>Door te luisteren en communiceren zijn in de analysefase de
            probleemstelling, doelen en scope van de opdracht behandeld.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/learningoutcomes/analyseren">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Adviseren</h2>
        </div>
        <div class="card-description">
          <p>Er is een projectplan bedacht waarin een doel, scope, en aanpak voorgesteld en vastgesteld zijn en het
            bedrijf akkoord mee is gegaan. Er is een adviesrapport opgeleverd.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/leeruitkomsten/adviseren">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Ontwerpen</h2>
        </div>
        <div class="card-description">
          <p>Er is een software architectuur ontworpen met daarnaast low/mid-fidelity prototypes voor een platform
            waarop design principles toegepast zijn. Het design is getest met de gebruikers.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/leeruitkomsten/ontwerpen">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Realiseren</h2>
        </div>
        <div class="card-description">
          <p>Er zijn POC's gemaakt met als eindproduct een werkend prototype dat voldoet aan de kwaliteitseisen van het
            bedrijf en dat getest is met de doelgroep.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/leeruitkomsten/realiseren">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Beheren</h2>
        </div>
        <div class="card-description">
          <p>Gedurende het project is nagedacht over hoe het eindproduct beheert kan worden.
            Bestaande guidelines en bedrijfstools zijn ingezet om het eindproduct overzichtelijk en beheerbaar te maken.
          </p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/leeruitkomsten/beheren">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Oordeelsvorming</h2>
        </div>
        <div class="card-description">
          <p>Gedurende de fases van het project is nagedacht over waarom bepaald onderzoek nodig is en
            waarom bepaalde onderzoekstrategieen en methodes ingezet moeten worden.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/leeruitkomsten/oordeelsvorming">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Communicatie</h2>
        </div>
        <div class="card-description">
          <p>Door te samen te werken met de doelgroep is
            de communicatie naar behoren verlopen. Ook het creëren van
            een portfolio heeft een bijdrage
            geleverd doordat het een duidelijk te volgen verhaal bevat.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/leeruitkomsten/communicatie">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------------- -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <h2>Leervermogen</h2>
        </div>
        <div class="card-description">
          <p>De opgedane kennis en het leervermogen is aangetoond door middel
            van de zelfreflectie in de leeswijzer. Om de 2-3 weken heb ik gereflecteerd op mijn aanpak en wat ik in de
            toekomst wil bereiken.</p>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <NuxtLink to="/semesters/graduation/learningoutcomes/leervermogen">
          <div class="card-btn">
            <button>Bekijk</button>
            <svg-icon class="arrow-svg" name="arrow" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="css" scoped>
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1em;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    width: 100%;
    height: 350px;
    padding: 1.5em 1em;
    background: linear-gradient(154.88deg, #166ECC 0%, #95C8FF 100%);
    letter-spacing: 0.05em;
    /* background-attachment: fixed; */
  }

  .card:hover {
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

  .card-footer{
    display: flex;
    width: 100%;
  }
  .card-footer a{
    width: 7em;

  }

  .card-btn {
    display: flex;
    justify-content: space-around;
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

  .card-btn button {
    font-weight: bolder;
  }

  .arrow-svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 23px;
  }

  @media (min-width: 300px) {
    .grid-wrapper{
      place-content: end end;
      place-items:  center;
    }
    .card {
      height: 370px;
      width: 300px;
    }
  }

  @media (min-width: 640px) {
    .grid-wrapper {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .grid-wrapper .card:nth-child(odd){
      place-self: end;
    }
    .grid-wrapper .card:nth-child(even){
      place-self: start;
    }

    .card {
      height: 370px;
      max-width: 300px;
    }
  }

  @media (min-width: 768px) {
    .grid-wrapper {
      place-content: end space-between;
    }
    .card {
    }
  }

  @media (min-width: 1024px) {
    .grid-wrapper {
      gap: 3em;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .grid-wrapper .card:nth-child(even), .grid-wrapper .card:nth-child(odd) {
      place-self: unset;
    }

    .grid-wrapper .card:nth-child(3n + 1){
      place-self: end;
    }
    .grid-wrapper .card:nth-child(3n + 3){
      place-self: start;
    }
  }

  @media (min-width: 1280px) {

    .card {
      height: 370px;
      max-width: 300px;
    }
  }

  @media (min-width: 1536px) {
    .grid-wrapper {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 4rem 6rem;
    }
    .grid-wrapper .card:nth-child(4n + 1){
      place-self: end;
    }

    .grid-wrapper .card:nth-child(6){
      place-self: center;
    }
    .grid-wrapper .card:nth-child(7){
      place-self: start;
    }

    .grid-wrapper .card:nth-child(4n + 4){
      place-self: start;
    }
  }

</style>
