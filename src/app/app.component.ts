import { Component } from '@angular/core';

@Component({
    selector: 'saa-app',
    template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
          <!-- Note: angular把组件定义的template塞到下面的标签中 -->
          <saa-app-nav></saa-app-nav>
          <!-- Note: ViewEncapsulation.ShadowDom例子:可以建立某个区域的全局样式，可以利用到labs-Translations -->
          <app-level-one></app-level-one>
      </div>
  `
})

export class AppComponent {
}