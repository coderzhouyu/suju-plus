import type { App, Plugin, Directive } from "vue"

type SFCWithInstall<T> = T & Plugin

// 用来给组件添加install方法 方便全局注册
export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    // 注册组件
    const name = (component as any).name
    app.component(name, component as SFCWithInstall<T>)
  }
  return component as SFCWithInstall<T>
}

// 给指令添加install方法 方便全局注册
export const withInstallDirective = <T extends Directive>(directive: Directive) => {
  ;(directive as SFCWithInstall<T>).install = (app: App) => {
    // 注册指令
    const name = (directive as any).name
    app.directive(name, directive as SFCWithInstall<T>)
  }
  return directive as SFCWithInstall<T>
}
