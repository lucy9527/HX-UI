// 导入组件，组件必须声明 name
import HXButton from './src'

// 为组件提供 install 安装方法，供按需引入
HXButton.install = function (Vue) {
  Vue.component(HXButton.name, HXButton)
}

// 导出组件
export default HXButton
