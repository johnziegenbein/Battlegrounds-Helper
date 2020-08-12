import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tavernTierControl = new FormControl(3, [Validators.min(1), Validators.max(6)])
  modeControl = new FormControl('roll')
  mode: string = "roll";
  rollControl = new FormControl(1, Validators.min(1))
}
