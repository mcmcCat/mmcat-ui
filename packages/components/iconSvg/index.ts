import { withInstall } from '@mmcat-ui/utils'
import EditIcon from './Edit/Edit.vue'
import UserIcon from './User/User.vue'
import SearchIcon from './Search/Search.vue'
import ErrorIcon from './Error/Error.vue'
import WarningIcon from './Warning/Warning.vue'
import SuccessIcon from './Success/Success.vue'
// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const Edit = withInstall(EditIcon)
const User = withInstall(UserIcon)
const Search = withInstall(SearchIcon)
const Error = withInstall(ErrorIcon)
const Warning = withInstall(WarningIcon)
const Success = withInstall(SuccessIcon)


export {
  Edit,
  User,
  Search,
  Error,
  Warning,
  Success,
}

