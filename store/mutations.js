import Vue from 'vue';
import getDefaultState from "~/store/state";

export default {

  setUser(state, user) {
    state.user = user
  },
  setSimple(state, msg) {
    state.simple = msg
  },
  setSuccess(state, msg) {
    state.success = msg
  },
  setDanger(state, msg) {
    state.danger = msg
  },
  setSignUpState(state, val) {
    state.signUpState = val
  },
  setVolunteers(state, volunteers) {
    state.volunteers = volunteers
  },
  setItem(state, {item, id, resource}) {

    if (!state[resource]) {
      state[resource] = {}
    }

    Vue.set(state[resource], id, item)
  },

  deleteItem(state, {id, resource}) {

    if (!state[resource]){
      state[resource] = {}
    }

    Vue.delete(state[resource], id)
  },

  pushItem(state, {item, id, resource}) {

    if (!state[resource]){
      state[resource] = {}
    }

    if (!state[resource][id]) {
      state[resource][id] = []
    }

    const data = state[resource][id]
    data.push(item)

    Vue.set(state[resource], id, data)
  },

  popItem(state, {id, resource, iid}) {
    if(!state[resource]){
      state[resource] = {}
    }

    if(!state[resource][id]) {
      state[resource][id] = []
    }

    const data = state[resource][id]
    data.forEach((item, index) => {
        if (item.id === iid) {
            state[resource][id].splice(index, 1)
        }
    })
    Vue.set(state[resource], id, data)
  }
}
