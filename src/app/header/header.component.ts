import { Router } from '@angular/router';
import { AuthService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  doLogout(){
    this.authService.doLogout();
    this.router.navigate(['login']);
  }
}
