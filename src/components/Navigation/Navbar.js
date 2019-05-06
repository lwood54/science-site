import React from "react";
import { Link } from "gatsby";

import cls from "./Navbar.module.scss";

const Navbar = props => {
    return (
        <div>
            <Link to="/" className={cls.navLink}>
                Home
            </Link>
            <Link to="/units/unit1_1" className={cls.navLink}>
                Unit 1.1
            </Link>
        </div>
    );
};

export default Navbar;
