import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Swap key with value in object';

  obj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
  };
  obj2 = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
  };

  ngOnInit() {
    const swap1 = Object.keys(this.obj).reduce((key, val) => {
      key[this.obj[val]] = val;
      return key;
    }, {});

    console.log(swap1);

    const swap2 = {};
    Object.keys(this.obj2).forEach((key) => {
      swap2[this.obj2[key]] = key;
    });
    console.log(swap2);
  }
}
