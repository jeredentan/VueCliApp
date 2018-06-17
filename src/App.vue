<template>
  <div class="flexible-content">
    <header>
    <!--Navbar-->
    <navbar class="flexible-navbar navbar-light blue-grey lighten-5" position="top" name="Ma superbe application LOL" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav right>
         <navbar-item ><a href="javascript:void(0)" v-on:click="logoff" v-show="isAuthenticated">Logoff {{profile.firstName}}</a></navbar-item>
          <navbar-item href="/register" v-show="!isAuthenticated"><fa icon="pie-chart" class="mr-3"/>Inscription</navbar-item>
          <navbar-item href="/login" v-show="!isAuthenticated">Connexion</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="./assets/logostic.png"/></a>
      <list-group class="list-group-flush">
         <router-link to="/dashboard" @click.native="activeItem = 0">
          <list-group-item :action="true" :class="activeItem === 0 && 'active'"><fa icon="pie-chart" class="mr-3"/>Dashboard</list-group-item>
        </router-link>
        <router-link to="/recherche" @click.native="activeItem = 1">
          <list-group-item :action="true" :class="activeItem === 1 && 'active'"><fa icon="pie-chart" class="mr-3"/>Recherche</list-group-item>
        </router-link>
        <router-link to="/fusion" @click.native="activeItem = 2">
          <list-group-item :action="true" :class="activeItem === 2 && 'active'"><fa icon="user" class="mr-3"/>Fusion</list-group-item>
        </router-link>
        <!-- <router-link to="/tables"  @click.native="activeItem = 3">
          <list-group-item :action="true" :class="activeItem === 3 && 'active'"><fa icon="table" class="mr-3"/>Tables</list-group-item>
        </router-link>
        <router-link to="/maps" @click.native="activeItem = 4">
          <list-group-item :action="true" :class="activeItem === 4 && 'active'"><fa icon="map" class="mr-3"/>Maps</list-group-item>
        </router-link>
        <router-link to="/404" @click.native="activeItem = 5">
          <list-group-item :action="true" :class="activeItem === 5 && 'active'"><fa icon="exclamation" class="mr-3"/>404</list-group-item>
        </router-link> -->
      </list-group>
    </div>
    </header>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
   
    </main>
  </div>
</template>

<script lang="ts">
import { Container, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, Fa, ListGroup, ListGroupItem, CardBody, Footer, waves } from 'mdbvue'
import { Component, Vue } from 'vue-property-decorator';
import { EventBus } from './event-bus';
import { mapGetters } from 'vuex';

@Component({
  components: {
    Container,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    ListGroup,
    ListGroupItem,
    Fa,
    CardBody,
    // 'ftr': Footer,
  },
  computed: mapGetters({
    isAuthenticated: 'auth/isAuthenticated',
    profile: 'user/profile',
  }),
  mixins: [waves],
})
export default class App extends Vue {
    activeItem: number = 0

 private logoff() {
    this.$store.dispatch('auth/authLogout').then(() => {
      this.$router.push('/');
    });
  }
  private created() {
    EventBus.$on('logged-in', (payLoad: any) => {
      // this doesn't currently do anything in this demo but does get fired on successful login.
      // leaving it here to show how to allow communication between unrelated components - ie. Store -> Component
      // console.log('logged-in message received...');
    });
  }
  private destroyed() {
    EventBus.$off('logged-in');
  }


    beforeMount () {
      switch(this.$route.path) {
        case '/dashboard':{
          this.activeItem = 0
          break;
        }
        case '/recherche':{
          this.activeItem = 1
          break;
        }
        case '/fusion':{
          this.activeItem = 2
          break;
        }
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
<style>
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>
