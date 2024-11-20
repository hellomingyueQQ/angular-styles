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
         
       
      </div>
 <!-- Note: ViewEncapsulation.ShadowDom例子:建立某个区域的全局样式，这个方法不太行 -->
  <!-- shadow dom会拦截全局样式，这个肯定的styles.css样式，这个是一定的 -->
      <app-level-one></app-level-one>
      <app-level-three></app-level-three>
  `
})

export class AppComponent {
}