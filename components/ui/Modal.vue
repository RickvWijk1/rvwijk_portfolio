<template>
  <div class="text-center"><v-app style="
    background: #242424; width: 100%;">
      
        <v-dialog
          v-model="dialog"
          width="500"
        >
        <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->
          <template v-slot:activator="{ on, attrs }">
            
            <div v-bind="attrs"
              v-on="on" class="overview-grid"
                        data-category="group-User_Interaction group-analyse group-advise group-design">
                        <div class="a-ghostbtn">
                            <a href="#row1-modal1" class="a-ghostbtn">
                                <div id="hover-box" class="hover-box" style="background-color:rgba(0, 0, 0, .4);">
                                    <div class="ghostbutton">
                                        <p class="ghostbutton-p">Sprint 0 - Orientation</p><span
                                            class="fa fa-external-link-alt"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
          </template>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      
  </v-app></div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style scoped>
v-app{
    background-color: #242424;
}
.overview-grid {
  flex: 1;
  min-height: 7em;
  object-fit: contain;
  background-image: contain;
  /* min-width: 30%; */
  max-width: 13em;
  position: relative;

  text-align: center;
  margin-right: 4%;
  margin-bottom: 2em;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.a-ghostbtn {
  position: static;
}

.hover-box {
  position: absolute;
  width: 100%;
  min-height: 60px;
  background-color: rgba(0, 0, 0, .8);
  bottom: 0;
  left: 0;
  padding: 10px 20px;
  -webkit-transition: -webkit-transform .3s ease;
  -moz-transition: -moz-transform .3s ease;
  -ms-transition: -ms-transform .3s ease;
  -o-transition: -o-transform .3s ease;
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

.ghostbutton .fa {
  position: absolute;
  right: 15px;
  bottom: -100%;
  color: #fff;
  -webkit-transition: -webkit-transform .5s ease;
  -moz-transition: -moz-transform .5s ease;
  -ms-transition: -ms-transform .5s ease;
  -o-transition: -o-transform .5s ease;
  transition: all ease .0s;
  transition: ease-out .3s;
}

.overview-grid:hover .hover-box {
  min-height: 100%;
  padding-top: 25%;
  background-color: rgba(0, 0, 0, .2);
}

.overview-grid:hover .hover-box .ghostbutton .fa {
  right: 15px;
  bottom: 50%;
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  color: #fff;
}

.overview-grid:hover .hover-box .ghostbutton {
  background-color: #2738DE;
}
</style>