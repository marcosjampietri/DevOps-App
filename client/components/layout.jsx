import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { loadAction } from "../store/actions/loadActions";
import Footer from "../components/section/Footer";

const Layout = ({ children }) => {
    //Spring
    const dispatch = useDispatch();

    const { isLoading } = useSelector((state) => state.load);

    useEffect(() => {
        if (isLoading) {
            dispatch(loadAction());
        }
    }, [isLoading]);

    return (
        <>
            <Head>
                <title>ANDREA MANGIACAVALLO'S PORTFOLIO</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
