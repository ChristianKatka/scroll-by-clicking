import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent {
  @ViewChild('sidenavContent', { static: false }) sidenavContent: ElementRef =
    {} as ElementRef;

  constructor() {}

  scrollUp() {
    this.sidenavContent.nativeElement.scrollTop -= 50; // Adjust the scroll amount as needed
  }

  scrollDown() {
    this.sidenavContent.nativeElement.scrollTop += 50; // Adjust the scroll amount as needed
  }
}
