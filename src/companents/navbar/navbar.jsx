import React from 'react'
import NavbarRight from "./navbarItem/navbarRight";
import NavbarLeft from "./navbarItem/navbarLeft";

const Navbar = () => {
    return(
        <div className="flex justify-between items-center my-3">
            <NavbarLeft />

            <NavbarRight/>
        </div>
    )
}

export default Navbar;