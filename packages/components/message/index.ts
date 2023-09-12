import { withInstallFunction } from '@mmcat-ui/utils/vue/install'

import MessageFn from './src/message'
// 通过 withInstall 方法给 Icon 添加了一个 install 方法


const McMessage = withInstallFunction(MessageFn, '$message');

export default McMessage
