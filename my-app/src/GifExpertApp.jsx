import React, { useState } from "react"
import { GifGrid } from "./components/GifGrid"
import { AddCategory } from "./components/AddCategory"

export const GifExpert = () => {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  const onAddcategory = (category) => {
    setCategories((list) => [...list, category])
  }
  return (
    <>
      <h1>Challenge 5: GifExpert</h1>
      <AddCategory onAddCategory={onAddcategory} setCategory={setCategory} />

      {categories.map((category, key) => 
      {
        return <GifGrid category={category} key={key} />
      }
      
      )
      
      }
    </>
  )
}
