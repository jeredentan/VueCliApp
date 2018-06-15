import axios from 'axios';
import { Credentials } from '@/models/credentials.interface';
import { BaseService } from './base.service';
import { Observable, from } from 'rxjs';

class AuthService extends BaseService {
  private static instance: AuthService;

  private constructor() {
    super();
  }

  public static get Instance() {
    // Do you need arguments? Make it a regular method instead.
    return this.instance || (this.instance = new this());
  }

  public login(credentials: Credentials): Observable<any> {
    // console.log('Calling auth service login ...');
    return from(
      // axios.post(`${this.api}/auth/login`, credentials)
      // .map((res) => res.auth.token)
      // .catch((error: any) => this.handleError(error.response));
      myPromise(credentials),
    );
  }
}

const myPromise = (credentials: Credentials) => {
  return new Promise((resolve, reject) => {
    if (credentials.password === 'password') {
      reject('Rejected!');
    }
    resolve('Resolved!');
  });
};

// export a singleton instance in the global namespace
export const authService = AuthService.Instance;
