import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import { Route, Routes } from 'react-router-dom'
import './assets/css/stylelibs.min.css'
import Shop from './pages/Shop'
import ShoppingCart from './pages/ShoppingCart'
import ProductPage from './pages/Product'
import Auth from './pages/Auth'
import {ABOUT_PATH, ACCOUNT_ADDRESS_PATH, ACCOUNT_ORDERS_PATH, ACCOUNT_ORDER_PATH, ACCOUNT_PATH, ACCOUNT_WISHLIST_PATH, AppProvier, AUTH, BLOG_PATH, BLOG_POST_PATH, CHECKOUT_PATH, COMING_SOON_PATH, CONTACT_PATH, FAQ_PATH, HOME_PATH, ORDER_COMPLETED_PATH, PERSONAL_INFO_PATH, PRODUCT, SHOPPING_CART, SHOP_PATH, STORE_LOCATOR_PATH} from './core'
import store from './stores'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Checkout from './pages/Checkout'
import ComingSoon from './pages/ComingSoon'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import OrderComplete from './pages/OrderCompleted'
import StoreLocation from './pages/StoreLocation'
import AccountAddress from './pages/Account/Address'
import Order from './pages/Account/Order'
import Wishlist from './pages/Account/wishlist'
import Orders from './pages/Account/Orders'
import PersonalInfo from './pages/Account/PersonalInfo'
import AccountLayout from './layouts/AccountLayout'
import Account from './pages/Account'
import "antd/dist/antd.css";
import vi from './locals/vi.json'
import en from './locals/en.json'
import fr from './locals/fr.json'
import './assets/css/custom.scss'


function App() {
  return (
    
    <AppProvier store={store} translate={{en, vi, fr}} local="en">
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path={ HOME_PATH } element={<Home />}/>
          <Route path={ SHOP_PATH } element={<Shop />}/>
          <Route path={ SHOPPING_CART} element={<ShoppingCart />}/>
          <Route path={ PRODUCT} element={<ProductPage />}/>
          <Route path={ AUTH} element={<Auth />}/>
          <Route path={ ABOUT_PATH} element={<About />}/>
          <Route path={ BLOG_PATH} element={<Blog />}/>
          <Route path={ BLOG_POST_PATH} element={<BlogPost />}/>
          <Route path={ CHECKOUT_PATH } element={<Checkout />}/>
          <Route path={ COMING_SOON_PATH } element={<ComingSoon />}/>
          <Route path={ CONTACT_PATH } element={<Contact />}/>
          <Route path={ FAQ_PATH } element={<Faq />}/>
          <Route path={ ORDER_COMPLETED_PATH } element={<OrderComplete />}/>
          <Route path={ STORE_LOCATOR_PATH } element={<StoreLocation />}/>
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route element = {<AccountLayout />}>
          <Route path={ACCOUNT_PATH} element={<Account />}>
            <Route index element={<Order />}/>
            <Route path={ ACCOUNT_ORDERS_PATH } element={<Orders />}/>
            <Route path={ ACCOUNT_WISHLIST_PATH } element={<Wishlist />}/>
            <Route path={PERSONAL_INFO_PATH} element={<PersonalInfo />}/>
            <Route path={ ACCOUNT_ADDRESS_PATH } element={<AccountAddress />}/>
          </Route>
          {/* <Route path={ ACCOUNT_ORDER_PATH } element={<Order />}/> */}
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </AppProvier>
  )
}
export default App
