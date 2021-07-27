import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { animated, useSpring, useTrail, config } from "react-spring";
import styled from "styled-components";
import { navAction } from "../../store/actions/navActions";

import { below } from "../../styles/breakpoint";

const Menu = () => {
    const dispatch = useDispatch();

    //access rootReducer
    const { NavOn } = useSelector((state) => state.nav);

    //Spring

    const menuIt = [
        {
            name: "HOME",
            color: "hsla(240, 10%, 40%, 0.8)",
            path: "/",
        },
        {
            name: "SERVICES",
            color: "hsla(240, 10%, 30%, 0.8)",
            path: "/services",
        },
        {
            name: "CONTACT",
            color: "hsla(240, 10%, 20%, 0.8)",
            path: "/contact",
        },
        {
            name: "ABOUT",
            color: "hsla(240, 10%, 10%, 0.8)",
            path: "/about",
        },
    ];

    const textSwipe = useSpring({
        config: config.slow,
        delay: 800,
        transform: NavOn ? "translate3d(0vw,0,0)" : "translate3d(100vw,0,0)",
        position: "absolute",
    });

    const trail = useTrail(menuIt.length, {
        config: config.slow,
        from: { opacity: 0, x: 0 },
        to: { opacity: NavOn ? 1 : 0, x: NavOn ? 0 : -100 },
    });
    //component
    return (
        <Block>
            {trail.map(({ x, ...otherProps }, i) => (
                <MenuItem
                    key={i}
                    style={{
                        ...otherProps,
                        background: `${menuIt[i].color}`,
                        transform: x.to((x) => `translate3d(0, ${x}vh, 0)`),
                    }}>
                    <Link href={menuIt[i].path}>
                        <animated.a style={textSwipe}>
                            {menuIt[i].name}
                        </animated.a>
                    </Link>
                </MenuItem>
            ))}
        </Block>
    );
};

export default Menu;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    position: fixed;
    top: 0px;

    z-index: 8;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;

    ${below.med`
    grid-template-columns: 1fr;
    grid-template-rows: 120px repeat(4, 1fr );
    div:nth-of-type(1) {
    grid-row: span 2;
    a {
    padding-top: 120px;
    }
    }

     `};

    pointer-events: none;
`;
const MenuItem = styled(animated.div)`
    height: 100%;

    display: flex;

    font-size: clamp(1rem, 2.5vw, 2rem);
    font-weight: 900;
    pointer-events: all;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: white;
        cursor: pointer;

        font-size: 30px;

        :hover {
            background: hsla(345, 80%, 50%, 1);
            text-shadow: 0px 0px 10px white;
        }
    }
`;
