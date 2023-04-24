import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCategoryProducts, getProduct} from "../../redux/productSlice";
import Product from "../product";
import Loading from "../loading";
import ReactPaginate from "react-paginate";

const Products = ({category, sort}) => {
    const dispatch = useDispatch();
    const {products, productsStatus } = useSelector(state => state.products)



    // PAGINATION START
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const itemsPerPage = 6
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    // PAGINATION END




    useEffect(() => {
        if(category) {
            dispatch(getCategoryProducts(category))

        }else {
            dispatch(getProduct())

        }



    },[dispatch,category])





    return(

        <div>
            {
                productsStatus === "LOADING" ? <Loading />:
                    // pagination
                    <>
                    <div className="flex flex-wrap">
                        {
                            // sort yani sıralama işlemi yaparken gelenleri a ve b ye eşitledik. a.price dediğimiz de apiden gelen ürünün price deperi.
                            currentItems?.sort((a,b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null )?.map((product, i)=> (
                                <Product key={i} product={product} />
                            ))
                        }
                    </div>
                        <ReactPaginate
                            className="paginate"
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </>
            }
        </div>
    )
}

export default Products;