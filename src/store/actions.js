export default {
    setMenuOpen (context, request) {
        context.commit('setMenuOpen', request)
    },

    discountFromMoney (context, request) {
        let money = context.state.money - request
        context.commit('setMoney', money)
    },

    chooseRestaurant (context, request) {
        context.commit('setRestaurant', request)
    },

    setStage (context, request) {
        context.commit('setStage', request)
    },

    newGame (context) {
        context.commit('setMoney', '2000')
        context.commit('setSCore', '0')
        context.commit('setRestaurant', {})
        context.commit('setStage', 'choose-restaurant')
    }
}