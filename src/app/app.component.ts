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
  `
})

export class AppComponent {
}