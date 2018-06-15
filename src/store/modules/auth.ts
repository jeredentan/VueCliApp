import { Credentials } from '../../models/credentials.interface';
import { authService } from '../../services/auth.service';
import { EventBus } from '../../event-bus';
import { IauthState } from '../../models/auth.interface';

const state = {
  token: localStorage.getItem('auth-token') || '',
  status: '',
};

const getters = {
  isAuthenticated: (authState: IauthState) => !!authState.token,
  authStatus: (authState: IauthState) => authState.status,
  authToken: (authState: IauthState) => authState.token,
};

const actions = {
  authRequest: (
    { commit, dispatch }: { commit: any; dispatch: any },
    credentials: Credentials,
  ) => {
    return new Promise((resolve, reject) => {
      commit('authRequest');
      authService.login(credentials).subscribe(
        (result: any) => {
          localStorage.setItem('auth-token', result); // stash the auth token in localStorage
          commit('authSuccess', result);
          EventBus.$emit('logged-in', null);
          dispatch('user/userRequest', null, { root: true });
          resolve(result);
        },
        (errors: any) => {
          commit('authError', errors);
          localStorage.removeItem('auth-token');
          reject(errors);
        },
      );
    });
  },
  // facebookAuthRequest: (
  //   { commit, dispatch }: { commit: any; dispatch: any },
  //   accessToken: string
  // ) => {
  //   return new Promise((resolve, reject) => {
  //     commit('authRequest');
  //     authService.facebookLogin(accessToken).subscribe(
  //       (result: any) => {
  //         localStorage.setItem('auth-token', result); // stash the auth token in localStorage
  //         commit('authSuccess', result);
  //         EventBus.$emit('logged-in', null);
  //         dispatch('user/userRequest', null, { root: true });
  //         resolve(result);
  //       },
  //       (errors: any) => {
  //         commit('authError', errors);
  //         localStorage.removeItem('auth-token');
  //         reject(errors);
  //       }
  //     );
  //   });
  // },
  authLogout: ({ commit, dispatch }: { commit: any; dispatch: any }) => {
    return new Promise((resolve, reject) => {
      commit('authLogout');
      localStorage.removeItem('auth-token');
      resolve();
    });
  },
};

const mutations = {
  authRequest: (authState: IauthState) => {
    authState.status = 'attempting authentication request';
  },
  authSuccess: (authState: IauthState, authToken: string) => {
    authState.status = 'authentication succeeded';
    authState.token = authToken;
  },
  authError: (authState: IauthState) => {
    authState.status = 'error';
  },
  authLogout: (authState: IauthState) => {
    authState.token = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
