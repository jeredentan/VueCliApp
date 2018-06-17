
<<template>
  <!-- <section class="section">    
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please enter your information</p>
          <div class="box">     
   
            <form @submit.prevent="handleSubmit">
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" placeholder="First name" v-model="user.firstName" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" placeholder="Last name" v-model="user.lastName">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Email" v-model="user.email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Password" v-model="user.password">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" placeholder="Location" v-model="user.location">
                </div>
              </div>  
            
              <button class="button is-block is-info is-large is-fullwidth" type="submit">Submit</button>
              <div class="errors-container" v-if="errors">
                 {{errors}}
              </div>
            </form>
          </div>
          <p class="has-text-grey">
             <router-link to="/login">Login</router-link>
          </p>        
        </div>
      </div>   
  </section> -->

  <section class="section" >
      <div class="container py-5 my-5">
          <div class="row">
              <div class="col-md-12">        
                  <div class="row">
                      <div class="col-md-5 mx-auto">
                          <div class="card rounded-0">
                          
                              <div class="card-header">
                                  <h3 class="mb-0">Register</h3>
                              </div>
                              <div class="card-body">
                                <form class="form" role="form" autocomplete="off"  @submit.prevent="handleSubmit">
                                      <div class="form-group">
                                          <label for="uname1">First name</label>
                                          <input type="text" class="form-control form-control-lg rounded-0" name="uname1" v-model="user.firstName" required="">
                                          <div class="invalid-feedback">Oops, you missed this one.</div>
                                      </div>
                                      <div class="form-group">
                                          <label>Last name</label>
                                          <input type="text" class="form-control form-control-lg rounded-0"  v-model="user.lastName" required="" >
                                          <div class="invalid-feedback">Oops, you missed this one.</div>
                                      </div>
                                      <div class="form-group">
                                          <label>Email</label>
                                          <input type="email" class="form-control form-control-lg rounded-0"  v-model="user.Email" required="" >
                                          <div class="invalid-feedback">Oops, you missed this one.</div>
                                      </div>
                                      <div class="form-group">
                                          <label>Password</label>
                                          <input type="password" class="form-control form-control-lg rounded-0"  v-model="user.password" required="" autocomplete="new-password">
                                          <div class="invalid-feedback">Enter your password too!</div>
                                      </div>
                                      <button type="submit" class="btn btn-success btn-lg float-right">Sign in</button>
                                  <!-- <router-link to="/register"><button type="submit" class="btn btn-success btn-lg float-right">Sign Up</button></router-link>      -->
                                  </form>
                                  <div class="errors-container" v-if="errors">
                                          {{errors}}
                                  </div>
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
import { UserRegistration } from '../../models/user.registration.interface';
import { accountService } from '../../services/account.service';
@Component({
  components: {
  },
})
export default class RegistrationForm extends Vue {
  private isBusy: boolean = false;
  private errors: string = '';
  private user = {} as UserRegistration;
  private handleSubmit() {
    this.isBusy = true;
    accountService
      .register(this.user)
      .finally(() => (this.isBusy = false))
      .subscribe((result: any) => {
        this.$router.push({
          name: 'loginForm',
          query: {
            new: 'true',
            firstName: this.user.firstName,
            email: this.user.email,
          },
        });
      }, (errors: any) => (this.errors = errors));
  }
}
</script>

<style lang="scss" scoped>
</style> 
