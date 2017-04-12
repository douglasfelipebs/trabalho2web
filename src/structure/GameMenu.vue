<template>
    <transition name="fade">
        <div id="game-menu" v-if="gameMenuOpen">
            <ul>
                <header>
                    <h3>Menu</h3>
                    <p>O que deseja fazer?</p>
                </header>

                <li><a href="#" @click.prevent="continueGame">Continuar</a></li>
                <li><a href="#" @click.prevent="newGame">Novo Jogo</a></li>
                <li><a href="#" @click.prevent="bestScore">Recorde</a></li>
                <li><a href="#">Sair</a></li>
            </ul>
        </div>
    </transition>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                gameMenuOpen: 'getMenuOpen'
            })
        },

        methods: {
            ...mapActions({
                reset: 'newGame',
                changeMenu: 'setMenuOpen'
            }),

            continueGame () {
                this.changeMenu(false);
            },

            newGame () {
                this.reset()

                const storage = ['stage', 'score', 'money', 'restaurant'];

                storage.map(field => {
                    localStorage.removeItem(field)
                })

                this.changeMenu(false);
            },

            bestScore () {}
        }
    }
</script>

<style lang="scss">
    @import './src/assets/css/animations';
    @import './src/assets/css/gamemenu';
</style>