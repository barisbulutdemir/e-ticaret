import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailProduct} from "../redux/productSlice";
import Loading from "../companents/loading";
import DetailComp from "../companents/detail/DetailComp";

const DetailProduct = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {productDetail, productDetailStatus} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getDetailProduct(id))
    },[dispatch,id])

    return (
        <div>
            {
                productDetailStatus === "LOADING" ? <Loading /> : <DetailComp productDetail={productDetail}/>
            }
                </div>
    )
}
export default DetailProduct;