    <template>
        <v-expansion-panels popout v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple>
              <h3>Bedrijf</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content eager>
              <div class="expansion-cont">
                <div class="text-cont">
                  <nuxt-img class="bbd-logo" src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.</p>
                </div>
                <div class="img-cont">
                  <GraduationGallery />
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple>
              <h3>Opdracht</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-img src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
              <!-- <nuxt-img src="/img/graduation/leeswijzer/handpicked_kantine.jpeg" loading="lazy" /> -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <GraduationGallery />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple>
              <h3>Doel</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-img src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
              <!-- <nuxt-img src="/img/graduation/leeswijzer/handpicked_kantine.jpeg" loading="lazy" /> -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <GraduationGallery />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple>
              <h3>Aanpak & Uitvoering</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-img src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
              <!-- <nuxt-img src="/img/graduation/leeswijzer/handpicked_kantine.jpeg" loading="lazy" /> -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <GraduationGallery />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple>
              <h3>Competentiematrix</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-img src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
              <!-- <nuxt-img src="/img/graduation/leeswijzer/handpicked_kantine.jpeg" loading="lazy" /> -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <GraduationGallery />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple>
              <h3>Reflectie</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-img src="/img/graduation/leeswijzer/logo.png" loading="lazy" />
              <!-- <nuxt-img src="/img/graduation/leeswijzer/handpicked_kantine.jpeg" loading="lazy" /> -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <GraduationGallery />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </template>
    <script>
      export default {
        data: () => ({
          panel: [0,1],
          disabled: false,
          readonly: false,
        }),
      }

    </script>

    <style lang="css" scoped>

      .row {
        margin: 0 -10px;
      }

      .v-expansion-panels {
        align-content: flex-start;
        gap: .5em;
        border-radius: 0;
      }

      .v-expansion-panel {
        
      }

      .v-expansion-panels--popout>.v-expansion-panel--active {
        /* max-height: unset; */
      }


      .v-expansion-panel-header {
        justify-content: space-between;
        padding: 16px 16px;
      }

      .v-expansion-panel-header h3 {
        font-size: 1.2rem;
        text-align: left;
        font-weight: bold;
      }

      .v-expansion-panel-header>*:not(.v-expansion-panel-header__icon) {
        flex: unset;
      }

      .expansion-cont {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 100%;
        padding: 1em 0em 0em;
      }

      .text-cont{}
   


      @media (min-width: 300px) {
      .bbd-logo {
        width: 300px;
      }

      .expansion-cont{
        /* align-items: center; */
      }

      .img-cont{
        max-width: 400px;
      }

      }

      @media (min-width: 640px) {
        .v-expansion-panels {
        max-width: 1000px;
      }
        .text-cont, .img-cont{
        max-width: 600px;
      }

      .expansion-cont{
        align-items: flex-start;
      }

      }

      @media (min-width: 768px) {}

      @media (min-width: 1024px) {
        
        .expansion-cont{
          flex-direction: row;
        }
      }

      @media (min-width: 1280px) {}

      @media (min-width: 1536px) {}

    </style>
