import axios from 'axios'

export const state = () => ({
    joke: null,
    user: null
})

export const mutations = {
    getJoke(state, data) {
        console.log(data)
        state.joke = data
    },

    SET_USER(state, user) {
        state.user = user
    }
}

export const actions = {
    async getJoke({ commit }) {
        axios.get('http://localhost:3000/api')
            .then(res => {
                commit('getJoke', res.data[0])
            })
    },

    async onAuthStateChangedAction(state, { authUser, claims }) {
        if(!authUser) {
            state.commit('SET_USER', null)
            this.$router.push('/auth')
        }
        else {
            const { uid, email } = authUser
            state.commit('SET_USER', {
                uid,
                email
            })
        }
    }
}