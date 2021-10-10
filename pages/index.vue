<template>
    <body>
      <div class="nav">
          <ul class="navLink">
              <li><a href="#"><NuxtLink to="/about">About</NuxtLink></a></li>
          </ul>
      </div>
    </body>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
body{
  background-color: #242424;
}

.navLink{
  display: flex;
text-align: center;
}
.nav ul {
  justify-self: end;
}

.nav ul li {
  margin-right: 3em;
  letter-spacing: 2px;
  text-align: center;
  padding: .75em 0em;
}



.nav ul li:last-child {
  margin-right: 0;
}

.nav ul li a {
  position: relative;
  z-index: 1;
  padding: .75em 1em;
  color: #fff;
}

.nav ul a:hover:after {
  height: 100%;
  transition: all .5s ease;
}

.nav ul li a:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background-color: #4758fc;
  z-index: -1;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

.nav ul li.active-page {
  background-color: #4758fc;
}

@media only screen and (max-width: 600px) {
    .navLink{
        display: flex;
        flex-direction: column;
    }
}
</style>
