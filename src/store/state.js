export default {
    menuOpen: false,
    stage: localStorage.getItem('stage') || 'choose-restaurant',
    score: localStorage.getItem('score') || 0,
    money: localStorage.getItem('money') || 2000,
    restaurant: localStorage.getItem('restaurant') || JSON.stringify({ kitchen: {} }),
    restaurantOpen: false,

    queue: localStorage.getItem('queue') || JSON.stringify([]),
    serving: localStorage.getItem('serving') || JSON.stringify([]),
    kitchen: localStorage.getItem('kitchen') || JSON.stringify([]),
    cart: localStorage.getItem('cart') || JSON.stringify([]),
    ingredients: localStorage.getItem('ingredients') || JSON.stringify([])
}