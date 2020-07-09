import Vue from 'vue'
import Dropdown from 'bootstrap.native/src/components/dropdown-native'

Vue.directive('dropdown', {
  inserted(el) {
    // eslint-disable-next-line no-new
    new Dropdown(el)
  },
  unbind(el) {
    el.Dropdown.dispose()
  },
})
