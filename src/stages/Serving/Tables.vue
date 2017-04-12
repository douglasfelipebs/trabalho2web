<template>
    <div id="table">
        <div class="table" v-for="table in tables">
            <span class="customer" v-if="table.occuped">
                {{ table.occuped.name }}
            </span>

            <span class="empty" v-else>Livre</span>
        </div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                tables: 'getServing'
            })
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/table'
</style>