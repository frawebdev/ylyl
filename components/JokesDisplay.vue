<template>
    <div>
        <div v-if="joke">
        <p>{{ joke }}</p>
        </div>
        <button @click="nextJoke">Next</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            joke: null
        }
    },
    methods: {
        async nextJoke() {
            await this.$store.dispatch('getJoke')
            this.joke = await this.$store.state.joke
        }
    }
}
</script>