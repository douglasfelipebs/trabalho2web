<template>
    <div class="col-md-12">
        <div class="row" id="statusbar">
            <div class="col-md-4 money">
                <i class="mdi mdi-square-inc-cash" title="dinheiro"></i>
                {{ money }}
            </div>
            <div class="col-md-4 score">
                <i class="mdi mdi-trophy" title="pontuação"></i>
                {{ score }}
            </div>
            <div class="col-md-4 stars">
                <i class="mdi mdi-star-outline"></i>
                <i class="mdi mdi-star-outline"></i>
                <i class="mdi mdi-star-outline"></i>
                <i class="mdi mdi-star-outline"></i>
                <i class="mdi mdi-star-outline"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                score: 'getScore',
                money: 'getMoney'
            })
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/statusbar';
</style>