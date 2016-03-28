import {Component} from 'angular2/core';

import {AfterContentParentComponent} from './after-content.component';
import {DoCheckParentComponent} from './do-check.component';
import {OnChangesParentComponent} from './on-changes.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    AfterContentParentComponent,
    DoCheckParentComponent,
    OnChangesParentComponent
  ]
})
export class AppComponent {
}
