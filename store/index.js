import axios from 'axios'

export const state = () => ({
    joke: null
})

export const mutations = {
    getJoke(state, data) {
        console.log(data)
        state.joke = data
    }
}

export const actions = {
    async getJoke({ commit }) {
        axios.get('http://localhost:3000/api')
            .then(res => {
                commit('getJoke', res.data[0])
            })
    },

    /* async onAuthStateChangedAction(state, { authUser, claims }) {
        if(!authUser) {
            state.commit('SET_USER')
        }
        else {
            
        }
    } */
}