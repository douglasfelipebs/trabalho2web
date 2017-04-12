<template>
    <div id="queue">
        <pre>{{ queue }}</pre>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                queue: 'getQueue'
            })
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/queue';
</style>