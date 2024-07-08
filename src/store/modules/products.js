export default {
   state: {
      products: [],
      card:[]
   }, 
   mutations: {
      updateProducts: (state, products) => {
         state.products = products
      },
      addToCard:(state, card) => {
         state.card = card
   },
},
   actions: {
      async getProductsApi(ctx) {
         const res = await fetch('http://localhost:3000/products')
         const products = await res.json()
         ctx.commit('updateProducts', products)
      },
      async addToCard(ctx) {
         const res = await fetch('http://localhost:3000/card')
         const card = await res.json()
         ctx.commit('updateProducts', card)
      }
   },
   getters: {
      getProducts(state) {
         return state.products
      },
      getCard(state){
         return state.card
      }
   },
}