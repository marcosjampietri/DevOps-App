import styled from "styled-components";

import { RevealR } from "../reveal";
import { below } from "../../styles/breakpoint";

const Social = () => {
    const social = [
        {
            name: "@andrea_mangiacavallo",
            icon: "facebook.svg",
            url: "https://github.com/marcosjampietri/",
        },
        {
            name: "@andrea_mangiacavallo",
            icon: "youtube.svg",
            url: "https://github.com/marcosjampietri/",
        },
        {
            name: "@andrea_mangiacavallo",
            icon: "instagram.svg",
            url: "https://github.com/marcosjampietri/",
        },
        {
            name: "@andrea_mangiacavallo",
            icon: "twitter.svg",
            url: "https://github.com/marcosjampietri/",
        },
    ];

    return (
        <Block>
            <RevealR>
                <Title>
                    <h3>SOCIAL MEDIA</h3>
                </Title>
                {social.map((item, index) => (
                    <Tab
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        key={index}>
                        <h6>{item.name}</h6>
                        <img
                            src={`/icons/${item.icon}`}
                            alt="icon"
                            height="30px"
                            width="30px"
                        />
                    </Tab>
                ))}
            </RevealR>
        </Block>
    );
};

export default Social;

const Block = styled.div`
    display: block;
    position: fixed;
    width: 250px;
    top: 20vh;
    right: -100px;

    ${below.med`
        display: none;

    `}
`;
const Title = styled.div`
    position: absolute;
    top: 150px;
    left: 0px;
    transform: rotate(90deg);
    width: 200px;
    text-align: center;
    padding-bottom: 10px;

    border-bottom: 1px solid grey;
`;

const Tab = styled.a`
    width: 50px;
    height: 50px;
    margin: 40px 0px;

    transform: translate(-100%, 0px);
    transform-origin: top right;
    opacity: 0.4;
    overflow: hidden;

    background-image: linear-gradient(
        to right,
        hsla(220, 10%, 100%, 0.02),
        hsla(220, 10%, 100%, 0.85)
    );
    transition: 1s;
    transition-timing-function: cubic-bezier(0.98, 0.42, 0, 0.99);

    border-radius: 5px;

    position: relative;
    top: 0;
    right: -50px;
    display: flex;
    align-items: center;



    img {
        position: absolute;
        top: 10px;
        right: 5px;
        width: 40px;

        transform: rotate(90deg);
        filter: grayscale(100%);
        transition: 1s;

    }
    h6 {
        position: absolute;
        right: 50px;
    }
    &:hover {
        transition: 1s;
        transition-timing-function: cubic-bezier(0.98, 0, 0, 0.99);

        width: 100%;
        opacity: 1;
        img {
            transition: 0.2s;
            transform: rotate(0deg);
            filter: grayscale(0%);

        }
    }

    z-index: 10;
`;
