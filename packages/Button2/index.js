// 导入组件，组件必须声明 name
import HXButton2 from './src'

// 为组件提供 install 安装方法，供按需引入
HXButton2.install = function (Vue) {
  Vue.component(HXButton2.name, HXButton2)
}

// 导出组件
export default HXButton2
