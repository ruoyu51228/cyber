import { createStore } from 'vuex'
import state from './state'
import action from './action'
import mutation from './mutation'

export default createStore({
  state,
  mutation,
  action
})
