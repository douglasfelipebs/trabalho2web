export default {
    setMenuOpen (state, data) {
        state.menuOpen = data
    },

    setStage (state, data) {
        localStorage.setItem('stage', data)
        state.stage = data
    },

    setScore (state, data) {
        localStorage.setItem('score', data)
        state.score = data
    },

    setMoney (state, data) {
        localStorage.setItem('money', data)
        state.money = data
    },

    setRestaurant (state, data) {
        localStorage.setItem('restaurant', data)
        state.restaurant = data
    }
}