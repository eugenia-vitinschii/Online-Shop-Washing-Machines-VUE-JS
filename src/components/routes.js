import HomePage from './MainPages/HomePage.vue';
import FavoritePage from './MainPages/FavoritePage.vue';
import InfoPage from './MainPages/InfoPage.vue';
import ItemsPage from './MainPages/ItemsPage.vue';
import ProductPage from './ProductComponents/ProductPage.vue';
import ShoppingCard from './MainPages/ShoppingCard.vue';
 
import AdminPanel from './AdminComponents/AdminPanel.vue';
import UpdateProduct from './AdminComponents/UpdateProduct.vue';
import { createRouter, createWebHistory } from 'vue-router';



const routes = [
   {
      name: "HomePage",
      component: HomePage,
      path: '/'
   },
   {
      name: "FavoritePage",
      component: FavoritePage,
      path: '/favorite'
   },
   {
      name: "InfoPage",
      component: InfoPage,
      path: '/info'
   },
   {
      name: "ItemsPage",
      component: ItemsPage,
      path: '/items'
   },
   {
      name: "ProductPage",
      component: ProductPage,
      path: '/product/:id',
      props: true 
   },
   {
      name: "ShoppingCard",
      component: ShoppingCard,
      path: '/shopping-card'
   },
 
   {
      name: "AdminPanel",
      component: AdminPanel,
      path: '/admin-panel',
      props: true 
   },
   {
      name: "UpdateProduct",
      component: UpdateProduct,
      path: '/update/:id',
      props: true 
   },
]




const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router