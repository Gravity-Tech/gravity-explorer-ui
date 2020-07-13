// States
export const state = () => ({
  isAgreeCookies: false,
})

// mutations
export const mutations = {
  IS_AGREE_COOKIES(state) {
    state.isAgreeCookies = true
  },
}

// actions
export const actions = {
  isAgreeCookies({ commit }) {
    commit('IS_AGREE_COOKIES')
  },
}

// Getters
export const getters = {
  isAgreeCookies: (state) => state.isAgreeCookies,
}
