import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]')
const state = {
  count: 2,
  car: car,
}

const getters = {
  getAllCount (state) {
    var allcount = 0;
    state.car.forEach(item => {
      allcount += item.counts
    })
    return allcount
  },
  getgoodscount (state) {
    var goodscount = {}
    state.car.forEach(item => {
      goodscount[item.id] = item.counts
    })
    return goodscount
  }
}

const mutations = {
  increment (state) {
    state.car[1].counts++
  },
  subtract (state) {
    state.count--
  },
  addToCar (state,goodsinfo) {
    var flag = false
    state.car.some(item => {
      if(item.id == goodsinfo.id) {
        item.counts += parseInt(goodsinfo.counts)
        flag = true
        return true
      }
    })
    if (!flag) {
      state.car.push(goodsinfo)
    }
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  // updataGoodsinfo (state,goodsinfo) {
  //   state.car.some(item => {
  //     if (item.id == goodsinfo.id) {
  //       item.count
  //     }
  //   })
  // }
}

const actions = {

}

export default new Vuex.Store({
  state, mutations, actions, getters,
})

