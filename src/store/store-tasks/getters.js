import {firebaseDb, firebaseAuth} from "boot/firebase";

export default {
  tasksSorted: (state) => {
    let tasksSorted = {},
      keyOrdered = Object.keys(state.tasks)
    // keyOrdered.sort((a, b) => {
    //   let taskAprop = state.tasks[a][state.sort].toLowerCase(),
    //     taskBprop = state.tasks[b][state.sort].toLowerCase()
    //   if (taskAprop > taskBprop) return 1
    //   else if (taskAprop < taskBprop) return -1
    //   else return 0
    // })
    keyOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })
    return tasksSorted
  },

  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted, tasksFiltered = {}
    if (state.search) {
      Object.keys(tasksSorted).forEach(function (key) {
        let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return tasksSorted
  },
  tasksToDo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key]
      if (!task.done) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksDone: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key]
      if (task.done) {
        tasks[key] = task
      }
    })
    return tasks
  }
}
