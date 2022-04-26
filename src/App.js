import { React, useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  SharedLayout,
  Home,
  About,
  ProductsSharedLayout,
  Products,
  SingleProduct,
  Error,
  Login,
  Dashboard,
  ProtectedRoute,
} from './pages'

const App = () => {
  const [user, setUser] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductsSharedLayout />}>
            <Route index element={<Products />} />
            <Route path='/products/:productID' element={<SingleProduct />} />
          </Route>
          <Route path='*' element={<Error />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
