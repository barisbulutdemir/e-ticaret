import React from "react";
import {useNavigate} from "react-router-dom";

const Product = ({product}) => {

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className="w-[300px] p-3 m-2 ml-5 border rounded-md relative bg-gray-100 ">
            <div className="text-2xl font-bold absolute rounded-md top-0 right-0 p-2 bg-black text-white m-1">{product?.price}</div>

            <img className="w-[200px] h-[200px] object-scale-down m-auto" src={product?.image} alt=""/>
            <div className="text-center px-3 mt-3 font-bold">{product?.title}</div>


        </div>
    )
}

export default Product;