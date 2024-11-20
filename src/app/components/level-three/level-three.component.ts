import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-level-three',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './level-three.component.html',
  styleUrl: './level-three.component.scss'
})
export class LevelThreeComponent {

}
