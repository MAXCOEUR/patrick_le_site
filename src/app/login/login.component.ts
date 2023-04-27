import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(data: any) {
    const userName = data.userName;
    const password = data.password;

    console.log("Login page: " + userName);
    console.log("Login page: " + password);

    this.authService.login(userName, password)
      .subscribe(isLoggedIn => {
        console.log("Is Login Success: " + isLoggedIn);

        if (isLoggedIn) {
          this.router.navigate(['/expenses']);
        }
      });
  }
}
