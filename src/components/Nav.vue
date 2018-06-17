<template>
 <nav>
    <!--Navbar-->
    <navbar position="top" class="navbar-light blue-grey lighten-5" name="Your Logo" href="#">
      <navbar-collapse>
        <navbar-nav>        
          <navbar-item ><a href="javascript:void(0)" v-on:click="logoff" v-show="isAuthenticated">Logoff {{profile.firstName}}</a></navbar-item>
          <navbar-item href="/register" v-show="!isAuthenticated">Email signup</navbar-item>
          <navbar-item href="/login" v-show="!isAuthenticated">Email login</navbar-item>
        </navbar-nav> 
      </navbar-collapse>
        <!-- Collapsible content -->
    </navbar>
    <!--/.Navbar-->
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EventBus } from '.././event-bus';
import { mapGetters } from 'vuex';

import { Navbar, NavbarItem, NavbarNav, NavbarCollapse } from 'mdbvue';

@Component({
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
  },
  computed: mapGetters({
    isAuthenticated: 'auth/isAuthenticated',
    profile: 'user/profile',
  }),
})
export default class Nav extends Vue {
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
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
</style>

