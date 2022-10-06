    <template>
      <v-row justify="center">
        <v-expansion-panels multiple popout>
          <v-expansion-panel>
            <v-expansion-panel-header color="#eee" ripple="true">
              <h3>Bedrijf</h3>
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
            <v-expansion-panel-header color="#eee" ripple="true">
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
            <v-expansion-panel-header color="#eee" ripple="true">
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
            <v-expansion-panel-header color="#eee" ripple="true">
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
            <v-expansion-panel-header color="#eee" ripple="true">
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
            <v-expansion-panel-header color="#eee" ripple="true">
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
      </v-row>
    </template>
    <script>
      export default {

      }

    </script>

    <style lang="css" scoped>
      .row {
        /* margin: 0 !important; */
      }

      .v-expansion-panel-header {
        justify-content: space-between;
      }

      .v-expansion-panel-header h3 {
        font-weight: bold;
      }

      .v-expansion-panel-header>*:not(.v-expansion-panel-header__icon) {
        flex: unset;
      }

    </style>
