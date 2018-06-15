import axios from 'axios';
import { BaseService } from './base.service';
import { Observable, from } from 'rxjs';

class ProfileService extends BaseService {
  private static instance: ProfileService;

  private constructor() {
    super();
  }

  public static get Instance() {
    // Do you need arguments? Make it a regular method instead.
    return this.instance || (this.instance = new this());
  }

  public get(): Observable<any> {
    // return Observable.(axios.get(`${this.api}/profile/me`))
    //   .map((res: any) => res.data)
    //   .catch((error: any) => this.handleError(error.response));
    return from(GetProfilePromise());
  }
}

const GetProfilePromise = () => {
  return new Promise((resolve, reject) => {
    resolve('Resolved!');
  });
};

// export a singleton instance in the global namespace
export const profileService = ProfileService.Instance;
