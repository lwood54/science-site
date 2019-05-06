import React from "react";
import Layout from "../components/layout";

import cls from "./unitPages.module.scss";

const index = () => {
    return (
        <Layout>
            <h1 className={cls.unitPageTitle}>Mr. Wood's Science Site</h1>
            <h3>Sciency science stuff</h3>
        </Layout>
    );
};

export default index;
