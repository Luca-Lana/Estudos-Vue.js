import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@gmail.com'
    },
    numbers: [1,2,3,4,5],
    carrinho: [],
    products: [
      {
        id: 1,
        name: 'bola',
        price: 100
      },
      {
        id: 2,
        name: 'chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'meião',
        price: 50
      },
      {
        id: 4,
        name: 'blusa',
        price: 70
      },
      {
        id: 5,
        name: 'short',
        price: 60
      },
    ]
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },
    addProduct(state, data) {
      state.carrinho.push(data);
    }
  },
  actions: {
  },
  modules: {
  }
})
