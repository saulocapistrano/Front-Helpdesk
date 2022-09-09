import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlthService } from 'src/app/services/alth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AlthService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigate(['tecncico'])
  }
  logout(){
    this.router.navigate(['login'])
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout', {timeOut: 7000})
  }
}
