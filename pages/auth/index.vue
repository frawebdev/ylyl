<template>
    <div>
        <Signup @handleClick="Signup" :error="error" v-if="!authSwitch"/>
        <Login @handleClick="Login" :error="error" v-if="authSwitch"/>
        <button @click="authSwitch = true" v-if="!authSwitch">Login</button>
        <button @click="authSwitch = false" v-if="authSwitch">Signup</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: null,
            authSwitch: false
        }
    },
    methods: {
        Signup(displayName, email, password) {
            this.$fire.auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    res.user.updateProfile({
                        displayName: displayName
                    })
                    this.$router.push('/')
                })
                .catch(err => this.error = err.message)
        },
        Login(email, password) {
            this.$fire.auth.signInWithEmailAndPassword(email, password)
                .then(res => this.$router.push('/'))
                .catch(err => this.error = err.message)
        }
    }
}
</script>