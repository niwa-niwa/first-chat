import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDEJx9KV9MG5C3ikuEBWEFgraM6IIXCHc8",
  authDomain: "first-chat-b0e70.firebaseapp.com",
  databaseURL: "https://first-chat-b0e70-default-rtdb.firebaseio.com",
  projectId: "first-chat-b0e70",
  storageBucket: "first-chat-b0e70.appspot.com",
  messagingSenderId: "667554443719",
  appId: "1:667554443719:web:d6e63ea7342ac002b429e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
