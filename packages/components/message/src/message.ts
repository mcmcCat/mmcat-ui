import { createApp, ref, watch } from 'vue';
import type { App,ComponentPublicInstance } from 'vue'
import Message from './message.vue';

interface CustomComponent extends ComponentPublicInstance {
  setIsShow: (value: boolean) => void;
  timer: any;
  setTop: (newTop: number, newZIndex: number) => void; 
  height: number; 
  consTop: number;
  consZIndex: number;
}

type MessageType = 'success' | 'warning' | 'danger' | 'info';

export interface MessageProps { 
  type: MessageType;
  message: string;
  [key: string]: any; // 添加索引签名以接收任意类型的额外属性,解决createApp第二个参数类型报错
} 

// 这个是主方法，最终用户使用的方法，可以接收用户传过来的参数options
const MessageFn = function (options: MessageProps){
  // createApp( 组件，参数 ) 创建一个Vue实例，在调用 .mount( 指定渲染的位置 )后才会被渲染
  const messageApp = createApp(
    Message,
    options// 传给Message组件的props
  );
  // 调用 渲染、展示组件的方法，传入(Vue实例，延迟时间)
  showMessage(messageApp, options.duration);
};

// 用来响应式记录监听有多少组件实例存在于Dom中
const MessageArr = ref<CustomComponent[]>([]);

const showMessage = function (messageApp: App, duration: number){
  // 创建dom节点Fragment（好处是后面可以直接渲染出组件实际内容,不会套一层div）
  const mountNode = document.createDocumentFragment();
  // .mount()返回挂载目标 DOM 元素的引用，或者说挂载目标组件的引用,其中就有组件defineExpose的东西（当你将一个 Vue实例 挂载到页面的某个元素上时，Vue 会将该元素包装成一个 Vue 组件）
  const vm = messageApp.mount(mountNode) as CustomComponent;
  // 挂载后记录在MessageArr数组中
  MessageArr.value.push(vm);
  // 将这个带有vue实例的dom节点渲染到body中
  document.body.appendChild(mountNode);
  // 计算marginTop ，并设置
  cntTop(vm);
  // 设置完即可显示出来
  vm.setIsShow(true);
  // 监听MessageArr中的组件引用，如果有卸载后被删除的
  // 则要全部重新计算currentIndex和marginTop
  watch(MessageArr, () => {
    cntTop(vm);
  });
  hideMessage(messageApp, vm, duration);
};

const hideMessage = function (messageApp: App, vm: CustomComponent, duration: number) {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
    vm.timer = setTimeout(async () => {
    await vm.setIsShow(false);
    // await 等待消失动画做完才进行卸载
    messageApp.unmount();
    // 卸载的同时，MessageArr中也同步删除
    MessageArr.value = MessageArr.value.filter(item => item !== vm);
    clearTimeout(vm.timer);
    vm.timer = null;
  }, duration ?? 3000); // duration 可能是 NaN , 则返回3000
};

// 计算新的margin-top的方法
const cntTop = function (vm: CustomComponent) {
  const { setTop, height, consTop, consZIndex } = vm;
  // 计算当前组件引用实例的序号
  const currentIndex = MessageArr.value.findIndex(item => item === vm);
  // 计算当前应该设置的marginTop
  const currentTop = height * currentIndex + (currentIndex + 1) * consTop;
  // 计算当前层级，当前序号 + 最低层级
  const currentZIndex = currentIndex + consZIndex ;
  // 计算完即可设置
  setTop(currentTop, currentZIndex);
};

export default MessageFn;
