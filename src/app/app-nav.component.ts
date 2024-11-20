import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    // encapsulation: ViewEncapsulation.None, // Note:  None 编译后的html和style均没有scoping attributes，style相当于全局样式，对其他组件有影响
    // 有一个用处，可以None用在root component里面，里面的样式也相当于放在了全局样式里面，
    // 拓展一下，回看labsTranslation，不用专门建立folder，全部放在labsTranslation的component里面好像也可以。
    encapsulation: ViewEncapsulation.ShadowDom,// Note: 完全是shadow dom，header里面不会出现style，且shadowdom会出现没有scoping attribute的html和css
    selector: 'saa-app-nav',
    template: `
        <div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Prerequisites</a>
                </li>
                <li>
                    <a href="#">Modules</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
    `,
    // Note: 如果删除styles，那么选然出现的html不带有scoping attributes
    styles: [`

        div {
            background: #2A9FBC;
            border-radius: 0.5em;
            margin: 1.5em 0;
            padding: 1em 1.2em;
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        a {
            color: #fff;
            padding: 0 1em;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

    `]
})

export class AppNavComponent {
}