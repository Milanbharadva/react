import React, { useEffect, useState } from "react"
import ProductList from "./ProductList"
import useApihook from "./Apihook"

const Product = () => {
const users=useApihook()

  return (
    <div>
     <ProductList data={users}/>
    </div>
  )
}

export default Product

