import Vue from 'vue';
import Router from 'vue-router';
import firebase from './plugins/firebase.js';

import Register from './components/Register';
import Home from './components/Home.vue';
import Signin from './components/Signin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user);
            next();
          } else {
            next('/Signin');
          }
        });
      },
    },
    {
      path: '/',
      component: Register,
    },
    {
      path: '/Signin',
      component:Signin,
    }
  ],
});
