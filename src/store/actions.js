import Helper from '../helper'

export default {
    setMenuOpen (context, request) {
        context.commit('setMenuOpen', request)
        context.commit('setRestaurantOpen', false)
    },

    addScore (context, request) {
        const score = parseInt(context.state.score) + parseInt(request)
        context.commit('setScore', score)
    },

    discountFromMoney (context, request) {
        let money = context.state.money - request
        context.commit('setMoney', money)
    },

    addTable (context) {
        const table = {
            id: Helper.uniqueID(),
            occuped: false
        }

        const serving = JSON.parse(context.state.serving)
        serving.push(table)
        context.commit('setServing', serving)
    },

    buyTable (context) {
        const money      = context.state.money
        const tables     = JSON.parse(context.state.serving)
        const restaurant = JSON.parse(context.state.restaurant)

        if (tables.length < restaurant.serving_size) {
            if (money >= 100) {
                context.dispatch('discountFromMoney', 100)
                context.dispatch('addTable')
                context.dispatch('checkForEmptyTable')
            } else {
                alert('Você não tem dinheiro suficiente')
            }
        } else {
            alert('Você não pode mais adquirir mesas')
        }
    },

    setRestaurantOpen (context, request) {
        context.commit('setRestaurantOpen', request)

        if (! request) {
            context.commit('setQueue', [])
        }
    },

    buyIngredients (context, request) {
        const money = context.state.money

        if (money >= request.price) {
            const ingredients = JSON.parse(context.state.ingredients)

            const index = ingredients.indexOf(ingredients.filter(ingredient => ingredient.name == request.name)[0])

            if (index != - 1) {
                ingredients[index].amount += request.amount
            } else {
                ingredients.push(request)
            }

            context.dispatch('discountFromMoney', request.price)

            context.commit('setIngredients', ingredients)
        } else {
            alert('Você não tem dinheiro suficiente')
        }
    },

    chooseRestaurant (context, request) {
        context.commit('setRestaurant', request)

        // Add initial tables.
        context.dispatch('addTable')
        context.dispatch('addTable')
        context.dispatch('addTable')
    },

    setStage (context, request) {
        context.commit('setStage', request)
    },

    addCustomerToQueue (context) {
        if (context.state.restaurantOpen) {
            const queue = JSON.parse(context.state.queue)

            if (queue.length < 10) {
                queue.push({ name: Helper.randomName() })
                context.commit('setQueue', queue)
            }

            context.dispatch('checkForEmptyTable')
        }
    },

    checkForEmptyTable (context) {
        const queue   = JSON.parse(context.state.queue)
        const serving = JSON.parse(context.state.serving)

        if (serving.filter(table => ! table.occuped).length) {
            const customer = queue[0]
            queue.splice(0, 1)
            const index            = serving.indexOf(serving.filter(table => ! table.occuped)[0])
            serving[index].occuped = customer
        }

        context.commit('setQueue', queue)
        context.commit('setServing', serving)
    },

    newGame (context) {
        context.commit('setMoney', '2000')
        context.commit('setScore', '0')
        context.commit('setRestaurant', {})
        context.commit('setStage', 'choose-restaurant')
        context.commit('setQueue', [])
        context.commit('setServing', [])
        context.commit('setIngredients', [])
    }
}