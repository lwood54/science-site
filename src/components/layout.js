import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navigation/Navbar";
import "./layout.module.scss";

const TopLayout = props => {
    return (
        <React.Fragment>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Exo:400,500,700,900,900i"
                    rel="stylesheet"
                />
            </Helmet>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
};

TopLayout.propTypes = {
    children: PropTypes.node,
};

export default TopLayout;
