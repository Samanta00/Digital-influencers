import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-dashboardtemplate',
  templateUrl: './dashboardtemplate.component.html',
  styleUrls: ['./dashboardtemplate.component.css']
})
export class DashboardtemplateComponent {
  isEllenUser: boolean = false;

  constructor(private authService: ServicesService) {
    this.checkUser();
  }

  checkUser() {
    const email = this.authService.getEmail();
    this.isEllenUser = email === 'ellen.samanta@outlook.com';
  }

}
