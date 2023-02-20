import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy{

  registerForm: FormGroup;
  subscription: Subscription;

  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  OnSubmit() {
    this.registerForm.disable();
    this.subscription = this.authService.register(this.registerForm.value).subscribe({
      next: () => {this.router.navigate(['/login'])},
      error: (err) => {alert(err); this.registerForm.enable()}
    })
  }

}
