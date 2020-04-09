import * as types from '../mutation-type'

export const appState = {
  headerMenuActive: '1'
}

const mutations = {
  [types.appTypes.ChangeHeaderMenuActive](state, newState){
    state.headerMenuActive = newState
  }
}

const state = Object.assign({}, appState);

const actions = {}

export default {
  state,
  actions,
  mutations
}
