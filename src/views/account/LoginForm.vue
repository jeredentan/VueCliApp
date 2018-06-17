<template>
    <section class="section" >
      <div class="container py-5 my-5">
          <div class="row">
              <div class="col-md-12">        
                  <div class="row">
                      <div class="col-md-5 mx-auto">
                          <div class="card rounded-0">
                          
                              <div class="card-header">
                                  <h3 class="mb-0">Login</h3>
                              </div>
                              <div class="card-body">
                                <form class="form" role="form" autocomplete="off"  @submit.prevent="handleSubmit">
                                      <div class="form-group">
                                          <label for="uname1">Username</label>
                                          <input type="text" class="form-control form-control-lg rounded-0" name="uname1" v-model="credentials.userName" required="">
                                          <div class="invalid-feedback">Oops, you missed this one.</div>
                                      </div>
                                      <div class="form-group">
                                          <label>Password</label>
                                          <input type="password" class="form-control form-control-lg rounded-0"  v-model="credentials.password" required="" autocomplete="new-password">
                                          <div class="invalid-feedback">Enter your password too!</div>
                                      </div>
                                      <button type="submit" class="btn btn-success btn-lg float-right">Login</button>
                                  <!-- <router-link to="/register"><button type="submit" class="btn btn-success btn-lg float-right">Sign Up</button></router-link>      -->
                                  </form>
                      
                                  </div>        
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Credentials } from '../../models/credentials.interface';

import {MdInput, MdTextarea, Container, Row, Column } from 'mdbvue';


@Component({
  components: {
    MdInput,
    MdTextarea,
    Container,
    Row,
    Column,
  },
})
export default class LoginForm extends Vue {
  private isBusy: boolean = false;
  private errors: string = '';
  private credentials = {} as Credentials;
  private created() {
    if (this.$route.query.new) {
      this.credentials.userName = this.$route.query.email;
    }
  }
  private handleSubmit() {
    this.isBusy = true;
    this.$store
      .dispatch('auth/authRequest', this.credentials)
      .then((result) => {
        this.$router.push('/');
      })
      .catch((err) => {
        this.errors = err;
      })
      .then(() => {
        this.isBusy = false;
      });
  }
}
</script>

<style scoped>
</style>