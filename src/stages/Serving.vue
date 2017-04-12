<template>
    <div id="serving">
        <div class="col-md-12">
            <div class="row">
                <Status />
            </div>
        </div>

        <div class="col-md-10">
            <div class="row">
                <Tables />
            </div>
        </div>
        <div class="col-md-2">
            <div class="row">
                <Queue />
            </div>
        </div>

        <Options />
        <Kitchen />
    </div>
</template>

<script type="text/babel">
    import Options from './Serving/Options.vue'
    import Tables from './Serving/Tables.vue'
    import Queue from './Serving/Queue.vue'
    import Kitchen from './Serving/Kitchen.vue'
    import Status from './Serving/Status.vue'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: { Options, Tables, Queue, Kitchen, Status },

        computed: {
            ...mapGetters({
                score: 'getScore',
                queue: 'getQueue',
                serving: 'getServing',
                ingredients: 'getIngredients',
            }),

            interval () {
                const interval = 10000 - ((this.score + 1) * 0.50)

                if (interval > 10000) {
                    return interval
                }

                return 10000
            }
        },

        methods: {
            ...mapActions({
                addScore: 'addScore',
                addCustomer: 'addCustomerToQueue',
                checkEmptyTable: 'checkForEmptyTable',
            }),

            add () {
                this.addCustomer()
            }
        },

        mounted () {
            setInterval(() => {
                this.addCustomer()
            }, this.interval)
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/serving';
</style>
