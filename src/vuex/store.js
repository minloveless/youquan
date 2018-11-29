import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
  count: 2,
}

const getters = {

}

const mutations = {
  increment (state) {
    state.count++
  }
}

const actions = {

}

export default new Vuex.Store({
  state, mutations, actions, getters,
})

