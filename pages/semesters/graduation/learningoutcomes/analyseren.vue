<template>
  <div class="main-wrapper">

    <nav>
      <v-app-bar class="nav-app-bar" color="#fff">
        <v-icon @click.stop="drawer = !drawer">mdi-chevron-right</v-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app light temporary class="sidepanel">
        <v-list nav dense>
        <v-list-item-group>
          <NuxtLink class="pagination-next" :to="{ path: '/semesters/graduation/learningoutcomes/analyseren', hash:'#projectplan'}">
            <v-list-item>
              <v-list-item-title>Projectplan</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <NuxtLink class="pagination-next" to="/semesters/graduation/learningoutcomes/analyseren#trend-analyse">
            <v-list-item>
              <v-list-item-title>Trend-analyse</v-list-item-title>
            </v-list-item>
          </NuxtLink>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <div class="page-wrapper">
      <div class="content-cont">
        <h3>Analyseren</h3>
        <a id="projectplan">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus enim hic dicta ad reiciendis itaque doloremque. Dolore, natus in libero ipsam est pariatur qui a ullam fuga odio necessitatibus obcaecati dolores ducimus quibusdam aliquid animi inventore eius deserunt sint incidunt unde atque aspernatur. Alias distinctio nisi qui excepturi minus tempora hic facilis? Possimus ex voluptas reprehenderit esse deleniti ipsam laboriosam doloribus nostrum iure. Nostrum quas voluptatem, atque dignissimos, natus eum aperiam laboriosam numquam laudantium dolorum, doloribus labore libero recusandae culpa! Expedita quae unde id tempore voluptate in ratione saepe officiis similique dolorem eius, odio temporibus quos? Rem, illo iste! Excepturi eveniet mollitia odit, minima molestias voluptatum cumque ab officia exercitationem beatae ipsa, sunt, accusantium tenetur vero eligendi magni nostrum itaque velit aperiam tempora. Veritatis doloremque voluptatibus tempora, cumque beatae doloribus molestiae sint minima. Aperiam nisi aut voluptatibus eveniet. Neque, sit dignissimos! Natus nobis quaerat soluta! Omnis quia quam vero labore illo voluptates deserunt nemo ipsa voluptatum soluta quibusdam ea minima distinctio ut commodi, numquam tenetur, dolore itaque modi, voluptatibus dolor et id necessitatibus deleniti? Fugit cum quae quas praesentium neque. Aliquam placeat corporis dolorum asperiores illum in quidem possimus at sunt assumenda eos cum incidunt neque, voluptatum nesciunt voluptates consectetur, vero cupiditate! Minima error nobis necessitatibus eaque, vitae provident maxime minus dolore, cumque, saepe animi itaque eum dolor voluptate sint ipsa sed at nesciunt! Esse voluptates aut sequi magni temporibus quasi totam neque! Mollitia tenetur earum sit aspernatur. Iure sunt repellat quasi cumque fuga maxime ratione nobis modi, maiores odit. Voluptatem natus, totam incidunt ea temporibus autem laborum placeat culpa! Quasi, quibusdam! Doloremque quasi commodi qui at corrupti modi adipisci quo atque, dicta ipsa beatae ea eaque tempora, sit expedita necessitatibus delectus quam ab! Eaque optio, maiores error delectus perspiciatis fuga temporibus earum non nostrum consectetur perferendis nihil, quod fugit reprehenderit ducimus porro obcaecati ullam ratione, illum similique. Aliquid eum, quo error eveniet aliquam deleniti ad fuga? Praesentium corporis tempora unde eveniet omnis ea facere laborum optio atque illo. Excepturi quo quidem pariatur cupiditate beatae dolore debitis omnis ipsam aspernatur eaque, quisquam similique eveniet consequatur animi voluptas magni corporis asperiores laboriosam laudantium aliquid? Mollitia aperiam cumque quibusdam architecto est inventore asperiores aliquam, ullam natus quod impedit eaque aut veniam vel cupiditate dolore nulla molestiae repudiandae maiores aspernatur magni perferendis placeat? Obcaecati, exercitationem alias. Ipsum tenetur voluptas laboriosam, porro repellat dignissimos aspernatur sunt ducimus temporibus esse libero quas asperiores, et fugiat dolor illum quibusdam in excepturi vero culpa, repudiandae rem est! Quaerat iusto earum omnis dolorum. Qui, sit molestiae. Molestiae eligendi ratione perferendis suscipit ipsa dolor excepturi deserunt eveniet! Dolorem odio rem adipisci cum voluptas veniam, assumenda, deserunt repellat a laborum hic. Voluptate hic ducimus dolores sapiente sed. Architecto aperiam porro praesentium, aut tempora repudiandae neque tempore inventore, velit officiis non amet nihil asperiores assumenda earum optio eligendi iure deserunt esse recusandae dolores eos! Saepe praesentium amet fuga quam itaque beatae odit tenetur dolorum, nemo at recusandae eum ipsam animi possimus voluptatibus, natus modi, magnam laborum consequatur. Vero iure, id odio perferendis necessitatibus excepturi doloremque. Odit praesentium at omnis. Facere ipsa omnis perspiciatis debitis quisquam velit maiores accusamus vitae, et in numquam rerum sapiente sunt veniam, labore ad consequatur aliquam temporibus molestias. Nostrum est dolore quam quisquam ullam, nisi rem! Ratione quae facere odio. Rem ipsum placeat nesciunt quo provident unde optio nemo, ipsa dolorum neque enim harum labore maiores consequuntur velit repudiandae suscipit fugit beatae reiciendis qui maxime. Provident delectus eum reprehenderit odit vitae sed tempore modi exercitationem consequatur corporis eligendi voluptas totam quisquam, quos excepturi! Optio facilis deleniti nihil ducimus veritatis totam! Fugit nisi architecto asperiores ut? Officiis quam nobis saepe exercitationem, molestias nam eligendi quos quis odit temporibus ipsa consectetur eius soluta. Vel fuga animi ad esse? Ad rem eius explicabo asperiores atque nisi, labore quo quia assumenda pariatur beatae quis sequi neque quibusdam, perspiciatis earum repellat? Debitis quidem excepturi impedit odio magni fuga sit laborum eveniet blanditiis assumenda doloribus pariatur corporis obcaecati laboriosam, ipsa, deserunt quibusdam. Nulla, porro dignissimos ea sint quam sapiente iure repudiandae, voluptatem ipsum enim, quidem magnam perferendis laboriosam? Delectus animi dolorem nihil tempore ipsam et non odit, vel iusto aspernatur illo modi sit debitis rerum possimus amet fugiat dolor voluptas officia aliquid. Eos quisquam possimus provident perferendis esse eveniet cum quod necessitatibus recusandae hic perspiciatis expedita reprehenderit dolor iure aperiam consequatur, nam, earum qui exercitationem officiis rem quasi id. Unde animi dolores eveniet quod nesciunt nisi provident tenetur qui voluptatibus dolor. Sit, tempora? Corporis quae, debitis, natus eligendi reprehenderit obcaecati laudantium expedita doloremque enim provident odit, quos sint magni adipisci dolor alias quas atque minus. Velit labore, ipsam, dignissimos eligendi, quasi numquam consectetur vel repellat porro impedit quas dicta accusamus autem esse vero. Impedit autem quos repellat, commodi illo ullam! Fugiat maxime ratione ipsam officiis optio voluptate adipisci atque quaerat. Quae dolore soluta praesentium excepturi ut voluptate nobis, aut sed quod iste eius, impedit voluptas, obcaecati laborum! Quod odio at eum! Perferendis, nostrum sed. Eos minima, dignissimos sed debitis nam, aspernatur commodi placeat qui nulla iure laborum quibusdam, explicabo repudiandae eius fuga ipsum! Optio doloremque, enim illo natus nobis distinctio voluptatum maiores ipsam nam, ipsum ad quia? Autem, fugiat beatae. Et nostrum quo quae sed explicabo eius dolore architecto itaque sequi blanditiis quibusdam non laboriosam voluptas, modi enim officiis, vel ducimus accusantium reiciendis aspernatur quisquam exercitationem omnis minima nulla! Nemo sunt officia explicabo sapiente optio distinctio recusandae dolorum perspiciatis molestias accusantium molestiae est provident corrupti nisi, exercitationem reiciendis cupiditate culpa sed libero ab dolorem, ipsum eum perferendis! Nisi at optio, blanditiis corporis adipisci dolorem repudiandae porro, aliquid mollitia, necessitatibus veritatis. Exercitationem fugiat qui totam rem repudiandae mollitia maxime laborum voluptates ipsam, quidem sint ad dicta laudantium repellendus debitis. Nulla deserunt hic rem beatae, excepturi ipsa totam nihil possimus illo impedit autem dignissimos ducimus magnam sint, commodi animi suscipit, temporibus architecto eum quaerat a ullam aut! Assumenda perspiciatis debitis enim cupiditate. Et consectetur consequatur vero, officia vitae excepturi qui reiciendis magni laborum similique tempore quod modi illum accusamus cumque animi quidem hic tempora quos, nobis quo possimus quaerat quis expedita? Sunt excepturi magni voluptates autem, necessitatibus laudantium eos laboriosam repellat. Quo officia nobis rem, enim deleniti unde ad accusantium facilis earum praesentium. Obcaecati, accusantium porro impedit nihil sunt esse ex at illo voluptas, cum atque saepe aliquam nemo dicta doloribus error dolorem alias voluptates debitis aliquid fuga. Iusto, sit autem? Culpa delectus obcaecati repellendus, dignissimos et eius, magnam incidunt ipsum illum veniam placeat, dolores recusandae. Voluptatum, ipsa praesentium. Voluptas id corrupti quidem. Debitis molestiae omnis sed aperiam exercitationem ullam deleniti asperiores! Inventore beatae aspernatur aut praesentium est tempora deserunt deleniti illum debitis enim veniam maiores nisi neque ratione cum, possimus at quisquam vel corporis! Nulla porro corrupti voluptatem quo impedit vitae quibusdam quod, voluptatum alias doloremque praesentium perspiciatis reiciendis consequatur cum? Provident beatae, voluptatibus sunt voluptate illum tempore vero nobis veritatis placeat quod nam dolores est nostrum a ipsum nihil. Reprehenderit cum fugit doloribus soluta a delectus quidem est, quas esse at qui optio. Nesciunt accusamus similique soluta porro vero odit illo labore! Velit iure, perferendis numquam quis cum cumque exercitationem eligendi omnis inventore cupiditate et quidem atque laborum laboriosam molestiae eveniet ut ipsa. Mollitia culpa, sed facere ratione ipsam enim, error dolore quod iure nesciunt inventore placeat vel earum eos tempore ex excepturi fugit? Quas quibusdam repudiandae error recusandae ex, praesentium dolor dolorem! Soluta commodi quos cum quas sint corrupti vitae, facilis optio fugiat, placeat eum error maiores natus cupiditate non amet labore voluptatibus vel repudiandae quo asperiores illo beatae est sunt. Ducimus eaque expedita dolor facere sed, sint explicabo quam, aperiam neque veritatis exercitationem quo in molestiae unde suscipit laudantium! Velit id voluptatum possimus. Atque nobis laudantium ad est at repellat quia deleniti! Hic eos odit nobis adipisci? Cumque quae odio iusto aut, voluptatum dolorum est accusantium laboriosam sapiente possimus, laudantium blanditiis? Deserunt obcaecati recusandae omnis ipsa ad dicta corporis, facilis inventore assumenda sapiente quisquam esse sequi nostrum nihil cumque nam. Autem eos distinctio explicabo ex officiis saepe similique temporibus ratione sapiente exercitationem! Dignissimos!</p>
          <h4>Projectplan</h4>
        </a>
      </div>

      <div class="pagination">
        <NuxtLink class="pagination-next" to="/semesters/graduation/learningoutcomes/leervermogen">
          <v-btn class="prev-chevron-left" icon elevation="6" dark>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <p>Vorige</p>
        </NuxtLink>
          <NuxtLink class="pagination-next" to="/semesters/graduation/learningoutcomes/leervermogen">
            <p>Volgende</p>
            <v-btn class="prev-chevron-right" icon elevation="6" dark>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </NuxtLink>
      </div>
      <!-- <v-pagination v-model="page" :length="2" light color="#166ECC"></v-pagination> -->
    </div>

  </div>
  <!-- <v-app-bar class="" dense min-height="100vh" width="100px">
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
    </v-app-bar> -->

</template>

<script>
  export default {
    layout: 'BottomNav',
    data: () => ({
      drawer: false,
      group: null,
      page: 1,
    }),

    watch: {
      group() {
        this.drawer = false
      },
    },
  }

</script>

<style lang="css" scoped>
  .main-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }

  .nav-app-bar {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 100% !important;
  }

  .sidepanel {
    position: absolute;
    width: 200px !important;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important;
    color: #fff;
  }

  .page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: #000;
    padding: 2em 1em;
  }

  .content-cont {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  .pagination {
    display: flex;
    justify-content: space-between;
  }

  .pagination p {
    font-size: .8rem;
  }

  .pagination-prev, .pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }

  .pagination-prev {

  }
  .pagination-next {

  }

  .prev-chevron-left,
  .prev-chevron-right {
    background-color: #166ECC;
  }

</style>
