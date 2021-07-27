import styled from "styled-components";

import SectionTitle from "../micro/aboutTitle";
import Video from "../micro/aboutVideo";

const About = () => {
    return (
        <Section>
            <Margin>
                <Wrapp>
                    <SectionTitle />
                    <Video />
                </Wrapp>
            </Margin>
        </Section>
    );
};

export default About;

const Section = styled.section`
    padding: 10vh 0;
    background-color: white;
`;

const Margin = styled.div`
    margin: 20px auto;
    width: 100%;
    max-width: 1200px;
`;

const Wrapp = styled.div`
    position: relative;
    padding: calc(25px + 2.5vw) 0px;

    outline: 2px solid hsla(0, 0%, 0%, 0.1);
    outline-offset: -40px;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
