import {firebaseAuth} from "boot/firebase";
import {LocalStorage, Loading} from "quasar";
import {showErrorMessage} from "src/functions/function-error-message";

export default {

  registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword
    (payload.email, payload.password)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({commit, dispatch}) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => {
        })
        dispatch('tasks/fbReadData', null, {root: true})
      } else {
        dispatch('tasks/clearTasks', null, {root: true})
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.push('/auth').catch(err => {
        })


      }
    })
  }

}
