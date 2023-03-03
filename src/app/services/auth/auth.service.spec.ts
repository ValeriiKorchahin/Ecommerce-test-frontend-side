import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {IUserLogin} from "../../models/IUserLogin";

describe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController)
  });

  let user: IUserLogin;
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login a user', () => {
    service.login(user).subscribe();

    const request = controller.match({
      method: 'POST',
      url: 'https://localhost:7291/api/Auth/login' + user
    })

    expect(request[0]?.request?.body).toEqual(user);
    request[0]?.flush({user: user});
  })

  it('should register a user', () => {
    service.register(user).subscribe();

    const request = controller.match({
      method: 'POST',
      url: 'https://localhost:7291/api/Auth/register' + user
    })

    expect(request[0]?.request.body).toEqual(user);
    request[0]?.flush({user: user})
  })
});
