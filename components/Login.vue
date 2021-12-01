<template>
    <div>
        <h1>Login</h1>
        <input type="text" name="email" v-model="email">
        <input type="password" name="password" v-model="password">
        <button @click="emitClick">Start game</button>
        <div v-if="error">{{ error }}</div>
    </div>
</template>

<script>
export default {
    props: [
        'error'
    ],
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        emitClick() {
            this.$emit('handleClick', this.email, this.password)
        }
    }
}
</script>