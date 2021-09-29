import { Component } from '@angular/core';
import { lib1 } from '@nx-angular9/lib1';

@Component({
  selector: 'nx-angular9-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digital-platform';

  lib2 = lib1
}
