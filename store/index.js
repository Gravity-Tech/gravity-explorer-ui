import Cookies from 'js-cookie'
import cookieFromRequest from '~/utils/cookie-from-request.js'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const isAgreeCookies = cookieFromRequest(req, 'IS_AGREE_COOKIES')
    if (isAgreeCookies) {
      commit('app/IS_AGREE_COOKIES')
    }
  },

  nuxtClientInit({ commit }) {
    const isAgreeCookies = Cookies.get('IS_AGREE_COOKIES')
    if (isAgreeCookies) {
      commit('app/IS_AGREE_COOKIES')
    }
  },
}
