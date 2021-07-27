import { Reveal, PageR, RevealL } from "../reveal";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { animated, useSpring } from "react-spring";
import Image from "next/image";

import styled from "styled-components";
import { vidAction } from "../../store/actions/modActions";
import { below } from "../../styles/breakpoint";

const Video = () => {
    const dispatch = useDispatch();
    //access rootReducer
    const { ModOn } = useSelector((state) => state.mod);

    //dispatch buttons
    const toggleMod = () => {
        dispatch(vidAction());
    };

    useEffect(() => {
        if (ModOn) {
            dispatch(modAction());
        }
    }, [dispatch]);

    return (
        <Block onClick={toggleMod}>
            <PageR>
                <AboutImg>
                    <img className="icon" src="/icons/play.svg" />
                    <div>
                        <Image
                            alt="Picture of the author"
                            width={900}
                            height={500}
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
                            className="pics"
                        />
                    </div>
                </AboutImg>
            </PageR>
        </Block>
    );
};

export default Video;

const Block = styled.div`
    flex: 1 1 480px;
    height: 50vh;

    background-color: grey;
    cursor: pointer;

    :before {
        content: "";
        display: block;
        position: absolute;
        bottom: calc(100px + -20vh);
        right: 0px;
        width: 200px;
        height: 400px;
        background-color: hsla(340, 95%, 45%, 1);
    }
`;

const AboutImg = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    transform: scale(1.2) translateY(0);

    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    transition: 0.8s;

    :hover {
        transition: 0.2s;
        .icon {
            transition: 0.2s;
            filter: brightness(150%);
        }
    }

    .icon {
        position: absolute;
        width: 120px;
        height: 120px;

        z-index: 2;
    }

    div {
        box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
        width: 100%;
        height: 100%;
        .pics {
            position: absolute;

            object-position: 50% 30%;
        }
    }
`;
