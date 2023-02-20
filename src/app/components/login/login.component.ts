import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  subscription: Subscription;


  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    })
  }

  ngOnDestroy() {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  OnSubmit() {
    this.loginForm.disable();
    this.subscription = this.authService.login(this.loginForm.value).subscribe({
      next: () => {this.router.navigate(['/products'])},
      error: (err) => {alert(err); this.loginForm.enable()}
    })
  }

}

