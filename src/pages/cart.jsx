import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";

const Cart = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

    console.log(itemCount);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts, dispatch]);

    return (
        <div>
            {carts?.length > 0 ? (
                <div>
                    {carts?.map((cart, i) => (
                        <Cart key={i} cart={cart} />
                    ))}
                </div>
            ) : (
                <div> Kart boş</div>
            )}
        </div>
    );
};

export default Cart;
