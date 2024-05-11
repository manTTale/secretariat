import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      // this.router.navigate(['admin']);
      this.navigateToAppropriateDashboard(this.authService.getToken());
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (result) => {
                // this.router.navigate(['admin']);
                this.navigateToAppropriateDashboard(this.authService.getToken());
              },
        (error: Error) => {
          alert(error.message);
        }
      )
      var token = this.authService.determineLoginType();
      console.log("onSubmit: " + token);
    }
  }

  navigateToAppropriateDashboard(token: string | null): void {
    var expectedTokenForAdmin = 'adminabcdefghijklmnopqrstuvwxyz';
    var expectedTokenForSecretary = 'secretaryabcdefghijklmnopqrstuvwxyz';
    var expectedTokenForStudent = 'studentabcdefghijklmnopqrstuvwxyz';
    switch(token) {
      case expectedTokenForAdmin: {
          this.router.navigate(['admin']);
          break;
        }
      case expectedTokenForSecretary: {
          this.router.navigate(['secretary']);
          break;
        }
      case expectedTokenForStudent: {
        this.router.navigate(['student']);
        break;
      }
      default: {
          console.log("Unexpected login");
          break;
        }
    }
  }
}
