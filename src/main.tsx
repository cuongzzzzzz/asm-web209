import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FetchContext } from './contexts/ProductContext.tsx'
import { SearchProvider } from './contexts/SearchContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />

      <FetchContext>
        <AuthProvider>
          <CartProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </CartProvider>
        </AuthProvider>

      </FetchContext>
    </BrowserRouter>
  </React.StrictMode>,
)
