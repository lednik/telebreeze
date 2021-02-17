import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";

import menu from './modules/menu';

export const store = new Vuex.Store({
  state: {
  },
  plugins: [createPersistedState({
		paths: ['menu']
	})],
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
  },
});
