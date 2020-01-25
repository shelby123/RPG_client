import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rpg 2';

  constructor() {}

  ngOnInit() {
    // this.listService.getListById(1).subscribe(res => console.log(res));
    // this.listService.getListById(123).subscribe(res => {
    //   console.log(res);
    // });
  }
}
