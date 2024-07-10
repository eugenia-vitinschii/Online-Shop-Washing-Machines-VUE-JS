// Main pages
import HomePage from './MainPages/HomePage.vue';

// Page for all products
import ItemsPage from './MainPages/ItemsPage.vue';

// Page for product by id
import ProductPage from './ProductComponents/ProductPage.vue';
import ShoppingCard from './MainPages/ShoppingCard.vue';
import FavoritePage from './MainPages/FavoritePage.vue';
import InfoPage from './MainPages/InfoPage.vue';

// Admin Pages

// Login page
import  AdminLogin from './Admin/AdminPages/AdminLogin.vue';

import AdminPanel from './Admin/AdminPages/AdminPanel.vue';
import AddProduct from './Admin/AdminPages/AddProduct.vue';
import EditProduct from './Admin/AdminPages/EditProduct.vue';
import UpdateProduct from './Admin/AdminPages/UpdateProduct.vue';

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
      name: "AdminLogin",
      component:  AdminLogin,
      path: '/admin-login',
      props: true 
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
   {
      name: "AddProduct",
      component: AddProduct,
      path: '/add-product',
      props: true 
   },
   {
      name: "EditProduct",
      component: EditProduct,
      path: '/edit-product',
      props: true 
   },
]




const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router