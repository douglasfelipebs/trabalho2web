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
        localStorage.setItem('restaurant', JSON.stringify(data))
        state.restaurant = JSON.stringify(data)
    },

    setRestaurantOpen (state, data) {
        state.restaurantOpen = data
    },

    setQueue (state, data) {
        localStorage.setItem('queue', JSON.stringify(data))
        state.queue = JSON.stringify(data)
    },

    setServing (state, data) {
        localStorage.setItem('serving', JSON.stringify(data))
        state.serving = JSON.stringify(data)
    },

    setCart (state, data) {
        localStorage.setItem('cart', JSON.stringify(data))
        state.cart = JSON.stringify(data)
    },

    setIngredients (state, data) {
        localStorage.setItem('ingredients', JSON.stringify(data))
        state.ingredients = JSON.stringify(data)
    },
}