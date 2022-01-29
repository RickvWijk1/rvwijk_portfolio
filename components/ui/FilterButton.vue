<template>
  <section>
    <input type="radio" id="1st" name="semesters" value="1st" checked>
    <input type="radio" id="2nd" name="semesters" value="2nd">
    <input type="radio" id="3rd" name="semesters" value="3rd">
    <ol class="filters">

      <li>
        <label for="1st">1st year</label>
      </li>
      <li>
        <label for="2nd">2nd year</label>
      </li>
      <li>
        <label for="3rd">3rd year</label>
      </li>
    </ol>
  </section>
</template>

<script>
  export default {
    setup() {
        
    },
  }

</script>

<style>
input[type="radio"] {
  display: none;
}

input[type="radio"]:focus {
  outline: none;
}

input[type='radio']:focus {
  outline: none !important;
  box-shadow: none !important;
}

::-moz-focus-inner{
  border: 0;
}

ol {
  list-style: none;
}

.filters-cont{
  display: flex;
  justify-content: center;
}

.filters{
  padding: 0rem 0 0 0;
}

.filters.POC-padding{
  padding: 0rem 0 2rem 0;
}

.filters-learning-goals{
  padding: 1rem 0 2rem 0;
}

@media (min-width: 640px) {
  .filters{
    padding: 2rem 0 0 0;
  }
  
  .filters.POC-padding{
    padding: 2rem 0 2rem 0;
  }
}

.filters,
.filters-learning-goals {
  text-align: center;
}


.filters *,
.filters-learning-goals * {
  display: inline-block;
  
}

.filters label{
  border: 2px solid #2738DE;
}
.filters-learning-goals label{
  border: 2px solid #707070;
}

.filters label,
.filters-learning-goals label {
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 2rem;
  min-width: 50px;
  line-height: normal;
  cursor: pointer;
  transition: all 0.3s;
}

.filters label:hover {
  background-color: #2738DE;
}

.filters-learning-goals label:hover {
  background-color: #707070;
}

/* SEMESTER FILTERS
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
[value="1st"]:checked~.filters [for="1st"],
[value="2nd"]:checked~.filters [for="2nd"],
[value="3rd"]:checked~.filters [for="3rd"]{
  background-color: #2738DE;
}

[value="1st"]:checked~.row .overview-grid:not([data-category~="1st"]),
[value="2nd"]:checked~.row .overview-grid:not([data-category~="2nd"]),
[value="3rd"]:checked~.row .overview-grid:not([data-category~="3rd"])
{
  display: none;
}

</style>
