<template>
  <section>
    
    <div class="row-grid">
      <NuxtLink class="modal-link" to="/modals/semesterSix/orientation">
        <div class="overview-grid" data_category="grp_advise" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Hi</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="modal-link" to="/modals/semesterSix/orientation">
        <div class="overview-grid" data_category="grp_analyse" :style="{ backgroundImage: `url('icon.png')`}">
          <div>
            <a class="a-ghostbtn">
              <div id="hover-box" class="hover-box">
                <div class="ghostbutton">
                  <p>Hi</p>
                  <svg-icon name="external_link" class="svg-external-link" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </NuxtLink>

    </div>
  </section>
</template>

<style>


  .row-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    max-width: 100%;
    min-height: 160px;
  }

  .overview-grid {
    flex: 1;
    max-width: 100%;
    height: 10em;
    width: 100%;
    justify-self: center;
    object-fit: contain;
    background-image: contain;
    position: relative;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .overview-grid:nth-child(1){
    margin: 0 0 1em 0;
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

  .overview-grid:hover .hover-box .ghostbutton .svg-external-link {
    right: 15px;
    bottom: 50%;
    transform: translateY(50%);
    color: #fff;
  }

  .overview-grid:hover .hover-box .ghostbutton {
    background-color: #2738DE;
  }

  .svg-external-link {
    display: flex;
    justify-content: flex-end;
    width: 19px;
    height: 19px;
    cursor: pointer;
    fill: #fff;
  }

  @media (min-width: 640px) {

    .row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 60rem;
      justify-content: space-between;
      min-height: 192px;
    }

    .overview-grid {
      max-width: unset;
      min-height: 12rem;
    }
  }

  @media (min-width: 768px) {}

  @media (min-width: 1024px) {
    .row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1536px) {}

</style>
