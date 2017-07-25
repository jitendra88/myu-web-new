import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {AuthUser} from "../model/auth.model";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user.model";
import {UserTypeConstant,ApiURL} from '../utils/constants'


@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) {  }

  userLogin(user:AuthUser):Observable<User>{
    return this.httpService.post(ApiURL.loginURL,user).map(
      data => {
        return data;
      }
    );



  }

}
