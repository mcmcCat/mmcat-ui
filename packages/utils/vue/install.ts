import type { App, AppContext, Plugin } from "vue";
// 通过 Vue 提供的 Plugin 类型和传进来的组件类型 T 的集合进行确定我们的组件类型具有 Plugin 类型方法，如 install 方法
export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app) {
    // 动态设置组件的名称
    const { name } = comp as unknown as { name: string };
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
