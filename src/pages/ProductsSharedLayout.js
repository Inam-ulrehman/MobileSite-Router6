import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsSharedLayout = () => {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export default ProductsSharedLayout
