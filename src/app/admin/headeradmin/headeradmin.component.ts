import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent implements OnInit {

  constructor(private authService: AuthService) { }
 
  ngOnInit(): void {
  }

  logout(){
    this.authService.userLogout();
  }

}
