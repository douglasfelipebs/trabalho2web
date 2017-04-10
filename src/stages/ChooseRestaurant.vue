<template>
    <div class="choose-restaurant">
        <div class="col-md-8 col-md-offset-2">
            <div class="row">
                <header>
                    <h3>Escolha seu restaurante</h3>
                    <p>Você só poderá escolher uma vez o restaurante, pense bem na hora de comprar.</p>
                </header>

                <div class="col-md-4" v-for="restaurant in restaurants">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{ restaurant.name }}</h3>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group">
                                <li class="list-group-item"><b>Capacidade Máxima:</b> {{ restaurant.size }} mesas</li>
                                <li class="list-group-item"><b>Capacidade Cozinha:</b> {{ restaurant.kitchen }} pratos</li>
                                <li class="list-group-item"><b>Localização:</b> {{ restaurant.location }}</li>
                            </ul>
                        </div>
                        <div class="panel-footer text-center">
                            <a href="" class="btn btn-success" @click.prevent="buy(restaurant)">
                                <i class="mdi mdi-cart"></i>
                                Comprar ({{ restaurant.price }}<i class="mdi mdi-square-inc-cash"></i>)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data () {
            return {
                restaurants: [
                    { name: 'Restaurant 1', size: 30, kitchen: 10, location: 'Interior', price: 1300 },
                    { name: 'Restaurant 2', size: 20, kitchen: 20, location: 'Centro', price: 1100 },
                    { name: 'Restaurant 3', size: 25, kitchen: 5, location: 'Centro', price: 900 },
                ]
            }
        },

        computed: {
            ...mapGetters({
                money: 'getMoney'
            })
        },

        methods: {
            ...mapActions ({
                pay: 'discountFromMoney',
                chooseRestaurant: 'chooseRestaurant',
                changeStage: 'setStage'
            }),

            buy (restaurant) {
                if (this.money >= restaurant.price) {
                    this.chooseRestaurant(restaurant)
                    this.pay(restaurant.price)
                    this.changeStage('serving')
                } else {
                    alert(`Você não tem dinheiro suficiente.`)
                }
            }
        }
    }
</script>

<style lang="scss">
    .choose-restaurant {
        margin-top: 40px;

        header {
            text-align: center;
            margin-bottom: 40px;

            p {
                color: #34495e;
            }
        }

        .mdi-square-inc-cash {
            margin-left: 5px;
            font-size: 14px;
            line-height: 0;
            vertical-align: middle;
        }
    }
</style>