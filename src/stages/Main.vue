<template>
    <div class="col-md-12">
        <div class="row">
            <ChooseRestaurant v-if="stage == 'choose-restaurant'" />
            <Serving v-if="stage == 'serving'" />
        </div>
    </div>
</template>

<script type="text/babel">
    import ChooseRestaurant from './ChooseRestaurant.vue'
    import Serving from './Serving.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: { ChooseRestaurant, Serving },

        computed: {
            ...mapGetters({
                stage: 'getStage'
            })
        }
    }
</script>