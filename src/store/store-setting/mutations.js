export default {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  },
  setShowTaskInOneList(state, value) {
    state.settings.showTaskInOneList = value
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings)
  }
}
