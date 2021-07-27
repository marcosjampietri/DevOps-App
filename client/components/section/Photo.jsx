import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { below } from "../../styles/breakpoint";
import { Reveal } from "../reveal";
import { picAction } from "../../store/actions/modActions";

const Photo = () => {
    const sections = [
        {
            klass: "",
            title: "PHOTO WORKS",
            text: "Lorem ipsum dolo r sit amet Lorem ipsum dolor sit ametLorem ipsum ipsum dolor sit amet Lorem ipsum dolorsitamet Lorem ipsum dolor sit amet",
            path: "https://images.unsplash.com/photo-1535467728855-93fe6218a7b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80",
        },
        {
            klass: "inverted",
            title: "VIDEO",
            text: "Lorem ipsum dolo r sit amet Lorem ipsum dolor sit ametLorem ipsum ipsum dolor sit amet Lorem ipsum dolorsitamet Lorem ipsum dolor sit amet",
            path: "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1869&q=80",
        },
        {
            klass: "",
            title: "WEB DESIGN",
            text: "Lorem ipsum dolo r sit amet Lorem ipsum dolor sit ametLorem ipsum ipsum dolor sit amet Lorem ipsum dolorsitamet Lorem ipsum dolor sit amet",
            path: "https://images.unsplash.com/photo-1546146477-15a587cd3fcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2160&q=80",
        },
        {
            klass: "inverted",
            title: "BRANDING",
            text: "Lorem ipsum dolo r sit amet Lorem ipsum dolor sit ametLorem ipsum ipsum dolor sit amet Lorem ipsum dolorsitamet Lorem ipsum dolor sit amet",
            path: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80",
        },
    ];

    const dispatch = useDispatch();
    //access rootReducer
    const { ModOn } = useSelector((state) => state.mod);

    //dispatch buttons
    const toggleMod = () => {
        dispatch(picAction());
    };

    useEffect(() => {
        if (ModOn) {
            dispatch(modAction());
        }
    }, [dispatch]);

    return (
        <PhotoSt>
            <Margin>
                {sections.map((item, index) => (
                    <div key={index}>
                        <Reveal>
                            <Item className={item.klass}>
                                <BoxT style={{ zIndex: "1" }}>
                                    <h1>{item.title}</h1>
                                    <h4>{item.text}</h4>
                                </BoxT>
                                <BoxI onClick={toggleMod}>
                                    <ServImg src={item.path} />
                                </BoxI>
                            </Item>
                        </Reveal>
                    </div>
                ))}
            </Margin>
        </PhotoSt>
    );
};

export default Photo;

const PhotoSt = styled.div`
    padding: 10vh 0;

    background-color: hsla(220, 10%, 80%, 1);

    display: flex;
    justify-content: center;
`;
const Margin = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 50px 0px;

    .inverted {
        flex-direction: row-reverse;
    }
`;
const Title = styled.div`
    width: 300px;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    outline: 2px solid hsla(0, 0%, 0%, 0.1);
    outline-offset: -40px;

    padding: calc(25px + 2.5vw) 0px;
`;
const BoxT = styled.div`
    flex: 1 1 481px;
    margin: 30px 0;

    h1,
    h4 {
        margin: 0px auto;
        line-height: 1.5em;
        // max-width: 450px;
        padding: 0px 20px 20px;

        backdrop-filter: blur(20px);
        background-color: hsla(220, 10%, 80%, 0.5);

        ${below.med`

           text-align: justify;


         `}
    }

    h1 {
        border-radius: 10px 10px 0 0;
        color: hsla(340, 95%, 45%, 1);
    }

    h4 {
        border-radius: 0px 0px 10px 10px;
        color: hsla(220, 0%, 35%, 1);
    }
`;
const BoxI = styled.div`
    flex: 1 1 480px;
    position: relative;

    cursor: pointer;

    :before{
        content: "";
        display: block;
        position: absolute;
        bottom: calc(-50px + -10vh);
        right: 0px;
        width: 200px;
        height: 550px;
        background-color: hsla(340, 95%, 45%, 1);

        :
    }
`;

const ServImg = styled.img`
    width: 130%;
    height: 400px;
    transform: translateX(-11.5%);

    object-fit: cover;
    object-position: 50% 20%;

    box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
`;
