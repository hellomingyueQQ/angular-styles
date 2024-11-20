import { Component, ViewEncapsulation } from '@angular/core';
import { LevelFourComponent } from "../level-four/level-four.component";

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-level-three',
  standalone: true,
  imports: [LevelFourComponent],
  templateUrl: './level-three.component.html',
  styleUrl: './level-three.component.scss'
})
export class LevelThreeComponent {

}
