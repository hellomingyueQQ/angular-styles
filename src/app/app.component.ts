import { Component } from '@angular/core';

@Component({
    selector: 'saa-app',
    template: `
    <div>
      <!-- Note: angular把组件定义的template塞到下面的标签中 -->
      <saa-app-nav></saa-app-nav>
    </div>

    <!-- Note: 组件的样式（定义在 styleUrls 或 styles 中）会被封装在 Shadow DOM 中，不会影响其他组件或全局样式。
全局样式（例如在 styles.css 或 angular.json 中定义的样式）仍然会应用到使用 ViewEncapsulation.ShadowDom
的组件中的元素 -->
    <app-level-one></app-level-one>
    <app-level-three></app-level-three>
    <br />
    <div>primeng styles are not imported in styles.scss</div>
    <p-button label="Submit" />
  `,
})
export class AppComponent { }
