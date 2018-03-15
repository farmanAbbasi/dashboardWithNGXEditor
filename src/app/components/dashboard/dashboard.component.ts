import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private gs: GlobalService) { }

  ngOnInit() {
    this.gs.httpGet('posts').subscribe((data: any) => {
      console.log(data);
    });
  }

}
