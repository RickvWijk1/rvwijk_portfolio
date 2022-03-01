<template>
    <div class="overview-grid" data-category="group-User_Interaction group-analyse group-advise group-design" 
    :style="{backgroundImage: 'url(' + hoverCard.src + ')' }">
      <div>
        <a class="a-ghostbtn">
          <div id="hover-box" class="hover-box">
            <div class="ghostbutton">
              <p>{{ hoverCard.title }}</p><svg-icon name="external_link" class="svg-external-link" />
            </div>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
   
    props: ['hoverCard']
  }

</script>

<style>

.svg-external-link {
  display: flex;
  justify-content: flex-end;
  width: 19px;
  height: 19px;
  cursor: pointer;
  fill: #fff;
}

  .overview-grid {
    flex: 1;
    max-width: 100%;
    margin: 0;
    min-height: 10rem;
    width: 100%;
    justify-self: center;
    object-fit: contain;
    background-image: contain;
    position: relative;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    /* background-image: url('~@/assets/img/ik/BlackWhiteEindhovenKerkPlein.webp'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .a-ghostbtn {
    position: static;
  }

  .hover-box {
    position: absolute;
    width: 100%;
    min-height: 60px;
    background-color: rgba(0, 0, 0, .4);
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    transition: all ease .3s;
  }

  .ghostbutton {
    width: 100%;
    position: relative;
    float: left;
    display: inline-block;
    padding: 10px 30px;
    color: #fff;
    text-decoration: none;
    border-bottom: none;
    transition: all ease .3s;
    line-height: 1.4;
    font-size: 1em;
  }

  .ghostbutton .svg-external-link {
    position: absolute;
    right: 15px;
    bottom: -100%;
    color: #fff;
    transition: all ease .0s;
    transition: ease-out .3s;
  }

  .overview-grid:hover .hover-box {
    min-height: 100%;
    padding-top: 25%;
    background-color: rgba(0, 0, 0, .2);
  }

  .overview-grid:hover .hover-box .ghostbutton .svg-external-link{
    right: 15px;
    bottom: 50%;
    transform: translateY(50%);
    color: #fff;
  }

  .overview-grid:hover .hover-box .ghostbutton {
    background-color: #2738DE;
  }

  @media (min-width: 640px) {
        .overview-grid {
        max-width: unset;
        min-height: 12rem;
    }
  }

@media (min-width: 768px) {}

@media (min-width: 1024px) {}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}


</style>
