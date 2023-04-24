import React, {useEffect} from 'react'
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal} from "../../../redux/cartSlice";
import {useNavigate} from "react-router-dom";

const NavbarRight = () => {

    const navigate = useNavigate();

    const dispatch  = useDispatch();
    const {carts} = useSelector(state => state.carts);

    console.log(carts);


    useEffect(() => {
        return () => {
            dispatch(getCartTotal())
        };
    }, [dispatch]);


    return(
        <div className="flex items-center gap-8">
            <div className="flex items-center border p-3 rounded-full bg-gray-200">
                <input type="text" placeholder='Seach...' className="bg-gray-200 outline-none"/>
                <BiSearch size={25}/>
            </div>

            <AiOutlineHeart size={25}/>
            <div onClick={() => navigate(`cart`)} className="cursor-pointer relative">
            <div  className="cursor-pointer absolute -top-3 -right-3 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">{carts?.length}</div>
                <SlBasket size={25} />
            </div>

        </div>
    )
}

export default NavbarRight;