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
    <app-level-two></app-level-two>
    <app-level-four></app-level-four>
    <br />
    <div>primeng styles are not imported in styles.scss</div>
    <p-button label="Submit" />
     <!-- Note:  其他component的样式会复制到shadow dom中，这样shadow dom中使用其他component，样式不受影响-->
      <!-- Note: 那就是有几个shadow dom， component的样式就复制了n+1份 -->
       <!-- Note: app为emulated，全局样式对于非shadow的元素有直接影响 -->
  `,
})
export class AppComponent { }
