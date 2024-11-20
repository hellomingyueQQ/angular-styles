import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-level-one',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  // Note:如果使用emulated，会被编译到全局样式中，且有scoping attributes
  // shadowDom会起作用，样式会出现在shadow 中，不带有scoping attributes,但是:root{这种方式，导致很多变量不起作用}
  // 但是有一点shadowDom中的元素，不会有scoping attributes，所以如果全局样式写的不够研究，会影响到shadow dom中的元素

  imports: [ButtonModule],
  templateUrl: './level-one.component.html',
  styleUrl: './level-one.component.scss'
})
export class LevelOneComponent {

}
