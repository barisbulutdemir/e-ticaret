import React, { useState } from 'react'
import SliderComp from "../companents/home/sliderComp";
import Sorting from "../companents/home/Sorting";
import Category from "../companents/home/Category";
import Products from "../companents/home/Products";



const Home = () => {
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('');


    return (
        <div className="">
        <SliderComp />
        <Sorting setSort={ setSort} />
        <div className="flex">
        <Category setCategory = {setCategory} />
        <Products category={category} sort={sort} />
        </div>
        </div>
    )
}


export default Home;