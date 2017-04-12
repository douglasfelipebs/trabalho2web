export default {
    getMenuOpen ({ menuOpen }) {
        return menuOpen
    },

    getStage ({ stage }) {
        return stage
    },

    getScore ({ score }) {
        return score
    },

    getMoney ({ money }) {
        return money
    },

    getRestaurant ({ restaurant }) {
        return JSON.parse(restaurant)
    },

    getRestaurantOpen ({ restaurantOpen }) {
        return restaurantOpen
    },

    getQueue ({ queue }) {
        return JSON.parse(queue)
    },

    getServing ({ serving }) {
        return JSON.parse(serving)
    },

    getCart ({ cart }) {
        return JSON.parse(cart)
    },

    getIngredients ({ ingredients }) {
        return JSON.parse(ingredients)
    }
}