<template>
    <transition name="fade">
        <div id="store" v-if="open">
            <header class="col-md-12">
                <button class="pull-right close" @click="close">
                    <i class="mdi mdi-close"></i>
                </button>

                <h3>Mercado</h3>
                <div class="money">
                    <i class="mdi mdi-square-inc-cash" title="dinheiro"></i>
                    {{ money }}
                </div>
            </header>

            <ul>
                <h3>Alimentos</h3>

                <li class="col-md-2" v-for="product in products">
                    <span>
                        <strong>{{ product.name }}</strong>
                        <small>Você tem {{ totalOfIngredient(product.name) }} em estoque.</small>
                        <span class="price">
                            <i class="mdi mdi-square-inc-cash"></i>
                            {{ product.price }}
                        </span>
                        <button class="btn btn-success" @click="buyIngredient(product)">
                            <i class="mdi mdi-cart"></i>
                        </button>
                    </span>
                </li>
            </ul>

            <ul>
                <h3>Mesas</h3>

                <li class="col-md-2">
                    <span>
                        <strong>Mesa</strong>
                        <small>Você tem {{ totalOfTables }} mesas.</small>
                        <span class="price">
                            <i class="mdi mdi-square-inc-cash"></i>
                            100
                        </span>
                        <button class="btn btn-success" @click="buyTable">
                            <i class="mdi mdi-cart"></i>
                        </button>
                    </span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: ['open'],

        data () {
            return {
                tables: [],
                products: [
                    { name: 'Arroz', price: '20', amount: 1 },
                    { name: 'Feijão', price: '35', amount: 1 },
                    { name: 'Batata', price: '10', amount: 1 },
                    { name: 'Alface', price: '5', amount: 1 },
                ]
            }
        },

        computed: {
            ...mapGetters({
                money: 'getMoney',
                ingredients: 'getIngredients',
                serving: 'getServing'
            }),

            totalOfTables () {
                return this.serving.length
            }
        },

        methods: {
            ...mapActions({
                buyIngredients: 'buyIngredients',
                buyTables: 'buyTable'
            }),

            buyTable () {
                this.buyTables()
            },

            buyIngredient (product) {
                this.buyIngredients(product)
            },

            totalOfIngredient (name) {
                if (this.ingredients.length && this.ingredients.filter(ingredient => ingredient.name == name).length) {
                    return this.ingredients.filter(ingredient => ingredient.name == name)[0].amount
                }

                return 0
            },

            close () {
                this.$root.$emit('close::store')
            }
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/animations';
    @import './src/assets/css/store';
</style>