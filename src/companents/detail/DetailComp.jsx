import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartSlice";

const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch();

    const [quantity,setQuantity] = useState(0);

    const decrement = () => {
        if (quantity > 0 ) {
            setQuantity(quantity -1)
        }
    }
    const increment = () => {
        if (quantity < productDetail?.rating?.count) setQuantity(quantity +1)

    }

    const addBasket = () => {
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price : productDetail?.price, quantity: quantity}))

    }

    return (

        <div className="flex gap-10 my-10" >
            <img className="w-1/3 object-scale-down" src={productDetail?.image} alt="" />
            <div>
                <div className="text-4xl font-bold">{productDetail?.title}</div>
                <div className="my-10">{productDetail?.description}</div>
                <div className="text-gray-500 inline-block border p-3 rounded bg-gray-200">
                    <div className="">Rating: {productDetail?.rating?.rate}</div><hr className="bg-black"/>
                    <div>Count: {productDetail?.rating?.count}</div>
                </div>
                <div className="text-4xl font-bold my-2  ">{productDetail?.price} <span className="text-sm">TL</span></div>
                <div className="flex items-center  gap-5 my-5  text-2xl  ">
                    <div onClick={decrement} className="cursor-pointer">-</div>
                    <input className="w-11 text-center" type="text" value={quantity}/>
                    <div onClick={increment} className="cursor-pointer">+</div>
                </div>
                <div onClick={addBasket} className=" border rounded inline-block py-4 px-10 bg-gray-300 border-black shadow-2xl cursor-pointer"> Sepete Ekle</div>

            </div>
        </div>
    )
}


export default DetailComp;