import { useEffect, useState } from "react";

import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Waypoint } from "react-waypoint";

import CardRow from "../micro/flipCard";
import SectionTitle from "../micro/flipTitle";

import { emerge } from "../../styles/colors";

const FlipCards = () => {
    return (
        <Section>
            <Margin>
                <SectionTitle />
                <CardRow />
            </Margin>
        </Section>
    );
};

export default FlipCards;

const Section = styled.section`
    padding: 10vh 0;
    background-color: black;
`;

const Margin = styled.div`
    margin: 20px auto;
    width: 100%;
    max-width: 1200px;
`;
