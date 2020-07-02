import types from './types'
// import getters from './getters'
const state = {
  direction: 'forward',
  orderList: [],
  warehousList: [],
  orderInfo: sessionStorage.getItem('SAVE_ORDERINFO') ? JSON.parse(sessionStorage.getItem('SAVE_ORDERINFO')) : '',
  procheckinfo: sessionStorage.getItem('SAVE_PROCHECKINFO') ? JSON.parse(sessionStorage.getItem('SAVE_PROCHECKINFO')) : '',
  warehousInfo: sessionStorage.getItem('SAVE_WAREHOUINFO') ? JSON.parse(sessionStorage.getItem('SAVE_WAREHOUINFO')) : '',
  suplierinfo: sessionStorage.getItem('SET_SUPPLIERINFO') ? JSON.parse(sessionStorage.getItem('SET_SUPPLIERINFO')) : '',
  // delivery: sessionStorage.getItem('SET_SUPPLIERINFO') ? JSON.parse(sessionStorage.getItem('SET_SUPPLIERINFO')) : '',
  checklist: [],
  delivery2: sessionStorage.getItem('SET_DELIVERY2') ? JSON.parse(sessionStorage.getItem('SET_DELIVERY2')) : '',
  singleInfo: sessionStorage.getItem('SET_SINGLEINFO') ? JSON.parse(sessionStorage.getItem('SET_SINGLEINFO')) : '',
  chooseItem: sessionStorage.getItem('SET_CHOOSEITEM') ? JSON.parse(sessionStorage.getItem('SET_CHOOSEITEM')) : '',
  billList: sessionStorage.getItem('SET_BILLLIST') ? JSON.parse(sessionStorage.getItem('SET_BILLLIST')) : '',
  billParams: sessionStorage.getItem('SET_BILLPARANS') ? JSON.parse(sessionStorage.getItem('SET_BILLPARANS')) : '',
  notes: ''
};

const mutations = {
  [types.UPDATE_DIRECTION](state,payload) {
    state.direction = payload.direction
  },
  [types.SAVE_ORDERLIST](state,value) {
    state.orderList = value
  },
  [types.SAVE_WAREHOUSINGLIST](state, list) {
    state.warehousList = list
  },
  [types.SAVE_ORDERINFO](state,info) {
    state.orderInfo = info
    sessionStorage.setItem('SAVE_ORDERINFO', JSON.stringify(info))
  },
  [types.SAVE_PROCHECKINFO](state,info) {
    state.procheckinfo = info
    sessionStorage.setItem('SAVE_PROCHECKINFO', JSON.stringify(info))
  },
  [types.SAVE_WAREHOUINFO](state,info) {
    state.warehousInfo = info
    sessionStorage.setItem('SAVE_WAREHOUINFO', JSON.stringify(info))
  },
  [types.SET_SUPPLIERINFO](state, info) {
    state.suplierinfo = info
    sessionStorage.setItem('SET_SUPPLIERINFO', JSON.stringify(info))
  },
  // [types.SET_DELIVERY](state, info) {
  //   state.delivery = info
  //   sessionStorage.setItem('SET_DELIVERY', JSON.stringify(info))
  // },
  [types.SET_CHECKLIST](state, info) {
    state.checklist = info
  },
  [types.SET_DELIVERY2](state,  info) {
    state.delivery2 = info
    sessionStorage.setItem('SET_DELIVERY2', JSON.stringify(info))
  },
  [types.SET_SINGLEINFO](state,  info) {
    state.singleInfo = info
    sessionStorage.setItem('SET_SINGLEINFO', JSON.stringify(info))
  },
  [types.SET_CHOOSEITEM](state,  info) {
    state.chooseItem = info
    sessionStorage.setItem('SET_CHOOSEITEM', JSON.stringify(info))
  },
  [types.SET_BILLLIST](state,  info) {
    state.billList = info
    sessionStorage.setItem('SET_BILLLIST', JSON.stringify(info))
  },
  [types.SET_BILLPARANS](state,  info) {
    state.billParams = info
    sessionStorage.setItem('SET_BILLPARANS', JSON.stringify(info))
  },
  [types.SETNOTES](state,  info) {
    state.notes = info
    sessionStorage.setItem('SETNOTES', JSON.stringify(info))
  }
};

const getters = {
  [types.GET_ORDERLIST]() {
    return state.orderList
  }
};

export default {
  state,
  mutations,
  getters
}