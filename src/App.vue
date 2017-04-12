<template>
    <div id="game">
        <div class="main" :class="{ 'blur': gameMenuOpen }">
            <StatusBar />
            <Stages />
        </div>
        <GameMenu />
    </div>
</template>

<script type="text/babel">
    import StatusBar from './structure/StatusBar.vue'
    import Stages from './stages/Main.vue'
    import GameMenu from './structure/GameMenu.vue'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: { StatusBar, Stages, GameMenu },

        computed: {
            ...mapGetters({
                gameMenuOpen: 'getMenuOpen'
            })
        },

        methods: {
            ...mapActions({
                changeMenu: 'setMenuOpen'
            })
        },

        mounted () {
            this.changeMenu(true)
        }
    }
</script>