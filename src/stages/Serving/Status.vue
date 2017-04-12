<template>
    <div id="status">
        <span class="isOpen">
            <button class="btn pull-right" :class="openStatus.button_class" @click="toggleRestaurant">
                {{ openStatus.button }}
            </button>

            <p>{{ openStatus.label }}</p>
        </span>
    </div>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                restaurantIsOpen: 'getRestaurantOpen'
            }),

            openStatus () {
                if (! this.restaurantIsOpen) {
                    return {
                        label: 'Estamos fechados, volte mais tarde.',
                        button: 'Retomar Expediente',
                        button_class: 'btn-success'
                    }
                }

                return {
                    label: 'Estamos abertos, seja bem vindo!',
                    button: 'Encerrar Expediente',
                    button_class: 'btn-danger'
                }
            }
        },

        methods: {
            ...mapActions({
                setRestaurantOpen: 'setRestaurantOpen'
            }),

            toggleRestaurant () {
                this.setRestaurantOpen(! this.restaurantIsOpen)
            }
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/status';
</style>