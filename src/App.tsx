import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Category } from './pages/Category'
import { Layout } from './components/Layout'
import { ListProduct } from './pages/ListProduct'
import { AdminLayout } from './components/AdminLayout'
import { AddProduct } from './pages/AddProduct'
import { UpdateProduct } from './pages/UpdateProduct'
import { AdminCategory } from './pages/AdminCategory'
import { AddCategory } from './pages/AddCategory'
import { UpdateCategory } from './pages/EditCategory'
import ProductDetails from './pages/ProductDetail'
import { SearchPage } from './pages/SearchPage'
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Cart } from './pages/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Category />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/categories/:name' element={<Category />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />

        </Route>
        <Route element={<AdminLayout />}>
          <Route path='/admin/products/list' element={<ListProduct />} />
          <Route path='/admin/products/add' element={<AddProduct />} />
          <Route path='/admin/products/edit/:id' element={<UpdateProduct />} />
          <Route path='/admin/categories/list' element={<AdminCategory />} />
          <Route path='/admin/categories/add' element={<AddCategory />} />
          <Route path='/admin/categories/edit/:id' element={<UpdateCategory />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
