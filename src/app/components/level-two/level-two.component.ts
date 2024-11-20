import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-level-two',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './level-two.component.html',
  styleUrl: './level-two.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LevelTwoComponent {

}
