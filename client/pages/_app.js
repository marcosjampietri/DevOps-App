import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../store/store";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Transition, animated, config, useSpring } from "react-spring";
import styled, { css } from "styled-components";

import "../styles/global.css";
import { GlobalStyle } from "../styles/globalSC";
import { navAction } from "../store/actions/navActions";

import NavBar from "../components/section/NavBar";
import Blur from "../components/micro/blur";
import Top from "../components/micro/top";
import Menu from "../components/micro/menu";
import Modal from "../components/modal/Modal";

function AppChild({ Component, pageProps }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const items = [
        {
            id: router.route,
            Component,
            pageProps,
        },
    ];

    const { NavOn } = useSelector((state) => state.nav);
    const { ModOn, ModComponent } = useSelector((state) => state.mod);

    useEffect(() => {
        if (NavOn) {
            dispatch(navAction());
        }
    }, [router.route]);



    return (
        <>
        <GlobalStyle NavOn={NavOn || ModOn ? true : false}/>
        <NextChild >
            <NavBar />
            <Menu />
            <Modal>{ModComponent}</Modal>
            <Blur />
            <Top />

            <StyledDiv>
                <Transition
                    items={items}
                    keys={(item) => item.id}
                    config={config.slow}
                    from={{
                        opacity: 1,
                        transform: "translate3d(80vw,0,0)  rotateY(60deg) ",
                        transformOrigin: "top right",
                    }}
                    initial={{ opacity: 0 }}
                    enter={{
                        opacity: 1,
                        transform: "translate3d(0vw,0,0) rotateY(0deg)   ",
                        transformOrigin: "top right",
                    }}
                    leave={{
                        opacity: 0,
                        position: "absolute",
                        transform: "translate3d(0vw,0,0) rotateY(0deg)  ",
                        transformOrigin: "top right",
                    }}>
                    {(
                        styles,
                        {
                            pageProps: animatedPageProps,
                            Component: AnimatedComponent,
                        },
                        key
                    ) => (
                        <animated.div
                            key={key}
                            style={{
                                ...styles,
                                width: "100%",
                                height: "100%",
                            }}>
                            <AnimatedComponent {...animatedPageProps} />
                        </animated.div>
                    )}
                </Transition>
            </StyledDiv>
        </NextChild>
        </>
    );
}

const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <AppChild Component={Component} pageProps={pageProps} />
        </Provider>
    );
};

export default App;

const NextChild = styled.div`
    width: 100vw;
    height: 100%;
`;

const StyledDiv = styled.div`
    perspective: 40em;
    perspective-origin: top;
    width: 100vw;
    height: 100%;
    overflow: hidden;
`;
