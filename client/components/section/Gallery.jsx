import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { RevealR, PageR, PageU } from "../reveal";
import { below } from "../../styles/breakpoint";

const Gallery = () => {
    const photos = [
        {
            name: "INFLUENCERS",
            path: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80",
        },
        {
            name: "BUSINESS",
            path: "https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1869&q=80",
        },
        {
            name: "EVENTS",
            path: "https://images.unsplash.com/photo-1546146477-15a587cd3fcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2160&q=80",
        },
        {
            name: "ESPECIAL",
            path: "https://images.unsplash.com/photo-1542466500-dccb2789cbbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80",
        },
        {
            name: "EDUCATIONAL",
            path: "https://images.unsplash.com/photo-1543563274-c4ef3b83a621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        },
        {
            name: "BUSINESS",
            path: "https://images.unsplash.com/photo-1542396601-dca920ea2807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1848&q=80",
        },
        {
            name: "BUSINESS",
            path: "https://images.unsplash.com/photo-1542396601-dca920ea2807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1848&q=80",
        },
    ];

    return (
        <GallerySt>
            <Margin>
                <RevealR>
                    <Text>
                        <Pre>PORTFOLIO</Pre>
                        <Title>THIS IS JUST A SMALL SAMPLE OF MY WORK</Title>
                        <Post>check out a few things i've done recently</Post>
                    </Text>
                </RevealR>
                <PageU>
                    <Grid>
                        <Link href="/services">
                            <a>
                                <Items>
                                    {photos.map((item, index) => (
                                        <ServImg
                                            key={index}
                                            className={item.name}
                                            src={item.path}
                                        />
                                    ))}
                                </Items>
                            </a>
                        </Link>
                    </Grid>
                </PageU>
            </Margin>
        </GallerySt>
    );
};

export default Gallery;

const GallerySt = styled.div`
    background-color: hsla(220, 10%, 85%, 1);
    width: 100vw;
`;

const Margin = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1200px;
`;

const Text = styled.div`
    padding: 5vh 0 8vh;
    text-align: center;

    h2,
    p,
    h4 {
        margin-bottom: 0.5em;
        z-index: 1;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Pre = styled.h4`
    font-size: clamp(8px, 1vw, 24px);
    line-height: clamp(12px, 2vw, 30px);
    letter-spacing: clamp(0px, 0.3vw, 3px);

    color: hsla(0, 0%, 55%, 1);
`;
const Title = styled.h2`
    max-width: 500px;
    margin: 0 0 25px;
    font-size: clamp(20px, 3vw, 50px);
    line-height: clamp(25px, 4vw, 60px);
    letter-spacing: clamp(1px, 0.3vw, 3px);

    white-space: pre-line;
    color: hsla(350, 80%, 50%, 1);
`;
const Post = styled.p`
    max-width: 500px;
    margin: 0 0 10px;
    font-size: clamp(8px, 1.2vw, 24px);
    line-height: clamp(12px, 2.2vw, 30px);
    letter-spacing: clamp(0px, 0.1vw, 2px);

    color: hsla(0, 0%, 65%, 1);
`;
const Grid = styled.div`
    height: 100%;
    padding: 0px 0px 15vh 0px;
`;

const Items = styled.div`
    padding: 10px;

    img:nth-of-type(1) {
        grid-row: span 2;
    }
    img:nth-of-type(4) {
        grid-column: span 2;
        grid-row: span 2;
    }
    img:nth-of-type(3) {
        grid-column: span 2;
    }
    img:nth-of-type(8) {
        grid-row: span 3;
    }

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: 230px;
    grid-auto-rows: 230px;
    grid-auto-flow: dense;
    grid-row: span 1;
    grid-column: span 1;
    gap: 10px;

    ${below.med`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 150px;
        grid-auto-rows: 150px;
    `}
`;

const ServImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;

    box-shadow: 5px 7px 5px hsla(0, 0%, 0%, 0.4);
`;
