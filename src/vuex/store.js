import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]')
const state = {
  car: car,
  showLoad: 0,
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
  },
  getAllMoney(state){
    let money = 0;
    state.car.forEach(item => {
      money += item.price*item.counts
    })
    return money;
  }
}

const mutations = {
  initCar(state,car){
    state.car = car;
  },
  increment (state,obj) {
    state.car.forEach(item => {
      if( obj.id == item.id) {
        // console.log(obj.id)
        item.counts++
        console.log(item.counts)
      }
    })
    localStorage.setItem('car', JSON.stringify(state.car))
  },
  subtract (state,obj) {
    state.car.forEach(item => {
      if( obj.id == item.id) {
          if(item.counts > 1){
            // console.log(obj.id)
            item.counts--
          }
          console.log(item.counts)
      }
    })
    localStorage.setItem('car', JSON.stringify(state.car))
  },
  addToCar (state,goodsinfo) {  //增加购物车
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
  removeFormCut(state,obj) {
    state.car.forEach((item,i) => {
      if( item.id == obj.id ) {
        state.car.splice(i,1)
        return true;
      }
    })
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  updateGoodsSelected(state,info){
    state.car = info
  },
  updateOneGoodsSelected(state,info1){
    state.car.forEach(item => {
      if(item.id == info1.id) {
        item.active = !item.active
        return true
      }
    })
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  showLoad(state,value){
    state.showLoad = state.showLoad + value > 0 ? this.showLoad + value : 0;
    return state
  },
  hideLoad(state) {
    state.showLoad = 0
    return state
  }
}

const actions = {
  addToCar({commit},params){
    //用setTime模拟一个异步获取数据
    setTimeout( () => {
      let result = 'ok'
      if(result == 'ok') {
        //模拟数据获取成功，commitnuations里的addGoods
        commit('addToCar',params)
      }
    })
  }
}

export default new Vuex.Store({
  state, mutations, actions, getters,
})

