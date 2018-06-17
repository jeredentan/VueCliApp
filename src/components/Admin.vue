<template>
  <div class="flexible-content">
 
    <navbar class="flexible-navbar white col-md-12" position="top" name="MDB" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav left>
          <router-link to="/dashboard" @click.native="activeItem = 1"><navbar-item href="" waves-fixed active>Home</navbar-item></router-link>
          <navbar-item href="" waves-fixed>About MDB</navbar-item>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>Free download</navbar-item>
          <navbar-item href="https://mdbootstrap.com/bootstrap-tutorial/" waves-fixed>Free tutorials</navbar-item>
        </navbar-nav>
        <navbar-nav right>
          <navbar-item href="#!" waves-fixed><fa class="text-black" icon="facebook"/></navbar-item>
          <navbar-item href="#!" waves-fixed><fa icon="twitter"/></navbar-item>
          <navbar-item href="https://github.com/mdbootstrap/bootstrap-material-design" waves-fixed class="border border-light rounded mr-1" target="_blank"><fa icon="github" class="mr-2"/>MDB GitHub </navbar-item>
          <navbar-item href="https://mdbootstrap.com/product/vue-bootstrap-pro/" waves-fixed class="border border-light rounded" target="_blank"><fa icon="diamond" class="mr-2"/>Go Pro </navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>

    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed col-md-2">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="@/assets/logostic.png" width="50" height="20"/></a> 
      <list-group class="list-group-flush">
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
        </router-link> -->
      </list-group>
    </div>
  </div>
</template>

<script lang="ts">
import {  ListGroup, ListGroupItem, Footer, waves, Fa,Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse, Container } from 'mdbvue'
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    Container,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    ListGroup,
    ListGroupItem,
    Fa,
    'ftr': Footer,
  },
  mixins: [waves]
})
export default class Home extends Vue {
    activeItem : number = 1;
    beforeMount () {
      if(this.$route.path === '/recherche'){
        this.activeItem = 1
      }else if(this.$route.path == '/fusion'){
        this.activeItem = 2
      }
      
    }
}

// export default {
//   name: 'Admin',
//   components: {
//     Container,
//     Navbar,
//     NavbarItem,
//     NavbarNav,
//     NavbarCollapse,
//     // Btn,
//     ListGroup,
//     ListGroupItem,
//     Fa,
//     // CardBody,
//     'ftr': Footer,
//     // Dashboard,
//     // Profile
//   },
//   data () {
//     return {
//       activeItem: 1
//     }
//   },
//   beforeMount () {
    
//     this.activeItem = this.$route.
//   },
//   mixins: [waves]
//}
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

.sidebar-fixed .list-group .router-link-active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background-color:blue;
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
  /*margin-left: 15px;*/
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>
