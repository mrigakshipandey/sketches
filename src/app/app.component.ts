import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sketches';
  count = Array.from({length: 50}, (_, i) => i + 1);
  imageURLPrefix = '/assets/images/sketch ('
  imageURLSufix = ').jpg'
}
