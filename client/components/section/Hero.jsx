import React, { useEffect } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

import Button1 from "../micro/Button1";
import Btn12 from "../micro/btn12";
import Social from "../micro/social";
import { Reveal, RevealR } from "../reveal";

const Hero = () => {
    return (
        <HeroSt>
            <Margin>
                <Text>
                    <Reveal>
                        <Pre>I AM</Pre>
                        <Name>ANDREA MANGIACAVALLO</Name>
                        <Post>
                            Visual Media Content Creator Based in London, Making
                            Photography, Video and Visual Content in the
                            Advanture, Fashion Industry and Everything in
                            Between
                        </Post>
                        <Link href="/contact">
                            <a>
                                <Btn12 text={"GET IN TOUCH"} />
                            </a>
                        </Link>
                    </Reveal>
                    <Social />
                </Text>
                {/* <Block>
                    <img src="https://images.unsplash.com/photo-1533488069324-f9265c15d37f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3297&q=80" />
                </Block> */}
            </Margin>
        </HeroSt>
    );
};

export default Hero;

const HeroSt = styled.section`
    height: 100vh;
    min-height: 700px;

    background-image: linear-gradient(
        hsla(0, 0%, 100%, 1),
        hsla(220, 10%, 40%, 1)
    );

    background-size: cover;

    display: flex;
    justify-content: center;
`;
const Margin = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 20px;

    display: flex;
    align-items: center;
    border: 0px solid black;
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    left: 0;

    height: 100vh;

    img {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        object-fit: cover;

        mix-blend-mode: overlay;
    }
`;

const Text = styled.div`
    position: relative;
    margin: 0 20px;

    display: flex;
    flex-direction: column;

    align-items: start;

    h2,
    p,
    h4 {
        z-index: 1;
    }
`;

const Pre = styled.h4`
    font-size: clamp(8px, 1vw, 24px);
    line-height: clamp(12px, 2vw, 30px);
    letter-spacing: clamp(0px, 0.3vw, 3px);
    margin: 0 0 5px;

    color: hsla(0, 0%, 55%, 1);
`;

const shining = keyframes`
0% {
-webkit-transform: scale(0) rotate(315deg);
opacity: 0;
}
80% {
-webkit-transform: scale(0) rotate(315deg);
opacity: 0.5;
}
81% {
-webkit-transform: scale(4) rotate(315deg);
opacity: 0.9;
}
100% {
-webkit-transform: scale(50) rotate(315deg);
opacity: 0;
}
`;

const Name = styled.h2`
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0px 0px 10px;
    font-size: clamp(25px, 6.5vw, 90px);
    line-height: clamp(30px, 7vw, 100px);

    font-family: Neon Heavy;
    letter-spacing: clamp(1px, 0.3vw, 3px);
    white-space: pre-line;
    color: hsla(345, 80%, 50%, 1);

    :before {
        position: absolute;
        content: "";
        display: inline-block;
        top: -30px;
        left: 0;
        width: 50px;
        height: 100%;
        background-color: hsla(0, 0%, 100%, 0.5);
        animation: ${shining} 7s infinite;
        animation-timing-function: cubic-bezier(0.28, 0, 0, 0.99);
    }
`;
const Post = styled.p`
    max-width: 500px;
    margin: 0 0 10px;
    font-size: clamp(8px, 1.2vw, 24px);
    line-height: clamp(12px, 2.2vw, 30px);
    letter-spacing: clamp(0px, 0.1vw, 2px);

    color: hsla(0, 0%, 25%, 1);
`;
