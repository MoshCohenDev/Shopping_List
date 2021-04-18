import Vue from "vue";
import {firebaseDb,firebaseAuth} from "boot/firebase";

export default {
  updateTask(state, payload) {
    // console.log('payload (from mutation):', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // console.log('this id:', id)
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    // console.log('this id:', payload)
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
  }

}
