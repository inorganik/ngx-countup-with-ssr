import { Component } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pickANumber = 7890;
  endVal = 100;
  opts: CountUpOptions;

  doThisOnComplete() {
    console.log('complete!');
  }

  applyEndVal() {
    // this.endVal = null;
    // setTimeout(() => this.endVal = Number(this.pickANumber));
    this.endVal = Number(this.pickANumber);
  }

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5
    };
  }

  unsetOptions() {
    this.opts = null;
  }
}
