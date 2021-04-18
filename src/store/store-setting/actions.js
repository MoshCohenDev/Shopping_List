import {LocalStorage} from "quasar";

export default {
  setShow12HourTimeFormat({commit, dispatch}, value) {
    commit('setShow12HourTimeFormat', value)
    dispatch('saveSettings')
  },
  setShowTaskInOneList({commit, dispatch}, value) {
    commit('setShowTaskInOneList', value)
    dispatch('saveSettings')
  },
  saveSettings({state}) {
    LocalStorage.set('settings', state.settings)
  },
  getSettings({commit}) {
    let settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('setSettings', settings)
    }
  }

}
