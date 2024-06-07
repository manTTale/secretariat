import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-secretary-header',
  templateUrl: './secretary-header.component.html',
  styleUrls: ['./secretary-header.component.css']
})
export class SecretaryHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
