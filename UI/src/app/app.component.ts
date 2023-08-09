import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  valueOfHowMuchIsScrolled = 100;

  ngOnInit() {
    this.goOnTopOfThePage();
  }

  // Only works if behaviour is smooth
  goOnTopOfThePage() {
    const currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  scrollUp() {
    window.scrollBy({
      top: -this.valueOfHowMuchIsScrolled,
      behavior: 'smooth',
    });
  }

  scrollDown() {
    window.scrollBy({ top: this.valueOfHowMuchIsScrolled, behavior: 'smooth' });
  }
}
