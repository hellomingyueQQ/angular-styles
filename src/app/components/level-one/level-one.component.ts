import { Component, ViewEncapsulation } from '@angular/core';
import { LevelTwoComponent } from '../level-two/level-two.component';

@Component({
  selector: 'app-level-one',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [LevelTwoComponent],
  templateUrl: './level-one.component.html',
  styleUrl: './level-one.component.scss'
})
export class LevelOneComponent {

}
