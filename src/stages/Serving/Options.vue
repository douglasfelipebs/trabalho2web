<template>
    <div class="col-md-12">
        <div class="row">
            <div id="options">
                <button class="btn btn-success btn-market btn-lg" @click="openStore">
                    <i class="mdi mdi-cart"></i>
                    Mercado
                </button>

                <button class="btn btn-success btn-lg">
                    <i class="mdi mdi-clipboard-account"></i>
                    Contratos
                </button>

                <Store :open="storeOpen" />
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Store from './Store.vue'

    export default {
        components: { Store },

        data () {
            return {
                storeOpen: false
            }
        },

        methods: {
            openStore () {
                this.storeOpen = true
            }
        },

        mounted () {
            this.$root.$on('close::store', () => this.storeOpen = false)
        }
    }
</script>