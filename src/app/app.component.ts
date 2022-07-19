import { Component } from '@angular/core';
import arrayWords from "../utils/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generation';
  word = '';
  limit = 10;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.word = arrayWords.slice(0, this.limit).join(' ');
  }
}
