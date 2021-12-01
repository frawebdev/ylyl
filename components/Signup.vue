<template>
    <div>
        <h1>Signup</h1>
        <input type="text" name="name" v-model="displayName">
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
            displayName: null,
            email: null,
            password: null
        }
    },
    methods: {
        emitClick() {
            this.$emit('handleClick',this.displayName, this.email, this.password)
        }
    }
}
</script>
