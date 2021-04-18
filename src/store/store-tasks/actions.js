import {Notify, uid} from "quasar";
import {firebaseDb, firebaseAuth} from "boot/firebase";
import {showErrorMessage} from "src/functions/function-error-message";

export default {
  updateTask({dispatch}, payload) {
    dispatch('fbUpdateTask', payload)
  },
  deleteTask({dispatch}, id) {
    dispatch('fbDeleteTask', id)
  },
  addTask({dispatch}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    dispatch('fbAddTask', payload)
  },
  clearTasks(state) {
    state.tasks = {}
  },
  setSearch({commit}, value) {
    commit('setSearch', value)
  },
  setSort({commit}, value) {
    commit('setSort', value)
  },
  fbReadData({commit}) {
    let userId = firebaseAuth.currentUser.uid
    let userTasks = firebaseDb.ref('tasks/' + userId)

    userTasks.on('child_added', snapshot => {
      let task = snapshot.val()
      let payload = {
        id: snapshot.key,
        task: task
      }
      commit('addTask', payload)
    })
    userTasks.on('child_changed', snapshot => {
      let task = snapshot.val()
      let payload = {
        id: snapshot.key,
        updates: task
      }
      commit('updateTask', payload)
    })
    userTasks.on('child_removed', snapshot => {
      let taskId = snapshot.key
      commit('deleteTask', taskId)
    })

  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let tasksRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
    tasksRef.set(payload.task, error => {
      if (error) {
        showErrorMessage(error.message)
      } else {
        Notify.create('Task Added')
      }
    })
  },
  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let tasksRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
    tasksRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message)
      } else {
        let keys = Object.keys(payload.updates)
        if (!(keys.includes('done') && keys.length == 1)) {
          Notify.create('Task updated')
        }
      }
    })
  },
  fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid
    let tasksRef = firebaseDb.ref('tasks/' + userId + '/' + taskId)
    tasksRef.remove(error => {
      if (error) {
        showErrorMessage(error.message)
      } else {
        Notify.create('Task deleted')
      }
    })
  }

}
