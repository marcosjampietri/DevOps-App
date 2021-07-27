import { useEffect, useState } from "react";

import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Waypoint } from "react-waypoint";
import { Reveal } from "../reveal";

const SectionTitle = () => {
    return (
        <Reveal>
            <Block>
                <Text>
                    <Pre>WHAT CAN WE WORK TOGETHER WITH</Pre>
                    <Title>
                        I DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES,
                        TELL YOUR STORY AND BUILD UP YOUR IMAGE.
                    </Title>
                    <Definition>
                        I'm committed to providing our customers with
                        exceptional service while offering you the best
                        experience. Check a brief list of services I can provide
                        you.
                    </Definition>
                </Text>
            </Block>
        </Reveal>
    );
};

export default SectionTitle;

const Block = styled(animated.div)`
    display: flex;
    flex-wrap: wrap;

    text-align: center;
`;

const Text = styled.div`
    position: relative;
    width: 100%;
    padding: 0 10px;

    margin: 0 0 54px;
    display: flex;
    flex-direction: column;

    align-items: center;

    h2,
    h3,
    h4 {
        margin-bottom: 0.5em;
    }
`;

const Pre = styled.h4`
    font-size: clamp(8px, 1vw, 24px);
    line-height: clamp(12px, 2vw, 30px);
    letter-spacing: clamp(0px, 0.3vw, 3px);

    color: hsla(350, 80%, 50%, 1);
`;
const Title = styled.h2`
    max-width: 900px;
    margin: 0 0 25px;
    font-size: clamp(25px, 4vw, 60px);
    line-height: clamp(30px, 4.5vw, 80px);
    letter-spacing: clamp(1px, 0.3vw, 3px);

    white-space: pre-line;
    color: white;
`;
const Definition = styled.p`
    max-width: 500px;
    margin: 0 0 10px;
    font-size: clamp(8px, 1.2vw, 24px);
    line-height: clamp(12px, 2.2vw, 30px);
    letter-spacing: clamp(0px, 0.1vw, 2px);

    color: hsla(0, 0%, 65%, 1);
`;
